import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

const text = (v: unknown, max: number) => String(v ?? "").trim().slice(0, max);
// Single-line fields: strip line breaks so nobody can inject extra email headers.
const line = (v: unknown, max: number) => text(v, max).replace(/[\r\n]+/g, " ");

export async function POST(req: Request) {
  let data: Record<string, unknown>;
  try {
    data = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  // Honeypot: real visitors never fill this hidden field, bots do.
  if (text(data.website, 100)) return NextResponse.json({ ok: true });

  const name = line(data.name, 100);
  const email = line(data.email, 200);
  const company = line(data.company, 150);
  const whatsapp = line(data.whatsapp, 30);
  const service = line(data.service, 80);
  const message = text(data.message, 3000);

  if (!name || !message || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ error: "Please add your name, a valid email and a message." }, { status: 400 });
  }
  if (whatsapp && !/^[+0-9 ()-]{7,20}$/.test(whatsapp)) {
    return NextResponse.json({ error: "Please enter a valid WhatsApp number, or leave it empty." }, { status: 400 });
  }

  const { error } = await resend.emails.send({
    from: process.env.CONTACT_FROM ?? "CLEVER WINK <onboarding@resend.dev>",
    to: [process.env.CONTACT_TO ?? "info@cleverwink.ae"],
    replyTo: email, // hitting Reply in your inbox answers the visitor
    subject: `New enquiry: ${service || "General"} from ${name}`,
    text: [
      `Name: ${name}`,
      `Email: ${email}`,
      `WhatsApp: ${whatsapp || "-"}`,
      `Company: ${company || "-"}`,
      `Service: ${service || "-"}`,
      "",
      message,
    ].join("\n"),
  });

  if (error) {
    console.error("Contact form email failed:", error);
    return NextResponse.json({ error: "We couldn't send your message. Please email info@cleverwink.ae." }, { status: 502 });
  }
  return NextResponse.json({ ok: true });
}