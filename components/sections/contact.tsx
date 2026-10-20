// "use client";
// import { useState } from "react";

// const field = "w-full rounded-lg border border-fog bg-ink px-4 py-3 text-sm text-white outline-none transition focus:border-signal";

// export default function Contact() {
//   const [sent, setSent] = useState(false);

//   function onSubmit(e: React.FormEvent<HTMLFormElement>) {
//     e.preventDefault();
//     // TODO: send FormData to an API route, Formspree or Resend.
//     setSent(true);
//   }

//   return (
//     <section id="contact" className="border-t border-white/10 bg-ink px-6 py-28">
//       <div className="mx-auto grid max-w-[1200px] gap-16 md:grid-cols-2">
//         <div>
//           <p className="mb-3 text-sm font-medium uppercase tracking-[0.05em] text-arc">Contact</p>
//           <h2 className="text-4xl font-light tracking-tight md:text-5xl">Let&apos;s automate your next hour of busywork</h2>
//           <p className="mt-6 max-w-md text-mist">Tell us how your sales process runs today. We&apos;ll show you what can be automated.</p>
//           <a href="mailto:hello@cleverwink.com" className="mt-8 inline-block font-mono text-sm text-white underline underline-offset-4">hello@cleverwink.com</a>
//         </div>
//         {sent ? (
//           <div className="flex items-center rounded-lg border border-fog/50 p-8 text-lg">Thanks! We&apos;ll get back to you shortly.</div>
//         ) : (
//           <form onSubmit={onSubmit} className="space-y-4">
//             <div className="grid gap-4 sm:grid-cols-2">
//               <input required name="name" placeholder="Your name" aria-label="Your name" className={field} />
//               <input required type="email" name="email" placeholder="Work email" aria-label="Work email" className={field} />
//             </div>
//             <input name="company" placeholder="Company" aria-label="Company" className={field} />
//             <select name="service" aria-label="Service" defaultValue="" className={field}>
//               <option value="" disabled>What do you need?</option>
//               <option>Lead capture & routing</option>
//               <option>Follow-up sequences</option>
//               <option>Pipeline automation</option>
//               <option>CRM setup & migration</option>
//               <option>Tool integrations</option>
//               <option>Reports & dashboards</option>
//             </select>
//             <textarea required name="message" rows={5} placeholder="Tell us about your process" aria-label="Message" className={field} />
//             <button type="submit" className="rounded-lg bg-signal px-4 py-3 text-sm md:text-m font-normal md:font-medium transition hover:-translate-y-0.5 text-ink">Book a Demo</button>
//           </form>
//         )}
//       </div>
//     </section>
//   );
// }


"use client";
import { useState } from "react";
import { services } from "@/lib/services";

const CONTACT_EMAIL = "info@cleverwink.ae";
const field =
  "w-full rounded-lg border border-fog bg-ink px-4 py-3 text-sm text-white outline-none transition placeholder:text-mist focus:border-signal";

type Status = "idle" | "sending" | "sent" | "error";

export default function Contact({ defaultService = "" }: { defaultService?: string }) {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    setStatus("sending");
    setError("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(Object.fromEntries(new FormData(form))),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(data.error || "Something went wrong.");
      setStatus("sent");
    } catch (err) {
      setError(err instanceof Error ? err.message : `Something went wrong. Please email ${CONTACT_EMAIL}.`);
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="border-t border-white/10 bg-ink px-6 py-20 md:py-28">
      <div className="mx-auto grid max-w-[1200px] gap-12 md:grid-cols-2 md:gap-16">
        <div>
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.05em] text-arc">Contact</p>
          <h2 className="text-4xl font-light tracking-tight md:text-5xl">Let&apos;s talk about what your business needs</h2>
          <p className="mt-6 max-w-md text-mist">Tell us what you are working on. We&apos;ll reply by email and show you what we can build or automate.</p>
          <a href={`mailto:${CONTACT_EMAIL}`} className="mt-8 inline-block font-mono text-sm text-white underline underline-offset-4">
            {CONTACT_EMAIL}
          </a>
        </div>

        {status === "sent" ? (
          <div role="status" className="flex flex-col items-start justify-center gap-4 rounded-lg border border-fog/50 p-8">
            <p className="text-xl font-light">Thank you! We&apos;ve received your message.</p>
            <p className="text-mist">We&apos;ll reply to your email shortly.</p>
            <button type="button" onClick={() => setStatus("idle")} className="text-sm font-medium text-arc underline underline-offset-4">
              Send another message
            </button>
          </div>
        ) : (
          <form onSubmit={onSubmit} className="space-y-4">
            <div className="grid gap-4 sm:grid-cols-2">
              <input required name="name" autoComplete="name" placeholder="Your name" aria-label="Your name" className={field} />
              <input required type="email" name="email" autoComplete="email" placeholder="Email" aria-label="Email" className={field} />
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <input name="whatsapp" type="tel" inputMode="tel" autoComplete="tel" pattern="[+0-9 ()\-]{7,20}" title="Digits, spaces, + and brackets only" placeholder="WhatsApp number (optional)" aria-label="WhatsApp number, optional" className={field} />
              <input name="company" autoComplete="organization" placeholder="Company (optional)" aria-label="Company, optional" className={field} />
            </div>
            <select required name="service" aria-label="Service" defaultValue={defaultService} className={field}>
              <option value="" disabled>What do you need?</option>
              {services.map((s) => (
                <option key={s.slug} value={s.title}>{s.title}</option>
              ))}
              <option value="Not sure yet">Not sure yet</option>
            </select>
            <textarea required minLength={10} name="message" rows={5} placeholder="Tell us about your project" aria-label="Message" className={field} />

            {/* Honeypot for spam bots: hidden from people */}
            <input type="text" name="website" tabIndex={-1} autoComplete="off" aria-hidden="true" className="absolute -left-[9999px] h-0 w-0 opacity-0" />

            {status === "error" && <p role="alert" className="text-sm text-red-400">{error}</p>}

            <button
              type="submit"
              disabled={status === "sending"}
              className="rounded-lg bg-signal px-6 py-3.5 text-sm font-medium text-ink transition hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:translate-y-0"
            >
              {status === "sending" ? "Sending…" : "Send message"}
            </button>
            <p className="text-xs text-mist">We only use your details to reply to your enquiry.</p>
          </form>
        )}
      </div>
    </section>
  );
}