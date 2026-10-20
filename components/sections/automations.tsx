"use client";
import type { ReactNode } from "react";
import { StickyScroll } from "@/components/ui/sticky-scroll-reveal";
import Reveal from "@/components/reveal";

// Example scenarios with sample messages, not real client work.
const panel = "flex h-full w-full flex-col justify-center gap-3 bg-ink p-6 text-sm text-white";
const label = "font-mono text-[11px] uppercase tracking-[0.08em] text-fog";

// Auto = message sent by the automation (yellow, right). Otherwise it's the customer (outlined, left).
const Msg = ({ children, auto }: { children: ReactNode; auto?: boolean }) => (
  <div className={`max-w-[85%] rounded-lg px-3 py-2 ${auto ? "ml-auto bg-signal text-ink" : "border border-fog/50"}`}>
    {children}
  </div>
);
const Tag = ({ children }: { children: ReactNode }) => (
  <span className="self-start rounded-md border border-signal px-2 py-1 font-mono text-[11px] uppercase tracking-[0.08em] text-arc">
    {children}
  </span>
);

const content = [
  {
    title: "Gym automation",
    description:
      "Welcome new members, send class and payment reminders, and message people who haven't visited in two weeks. Renewals go out automatically, so your front desk isn't chasing payments.",
    content: (
      <div className={panel}>
        <p className={label}>Membership renewal · WhatsApp</p>
        <Msg auto>Hi Sam, your membership ends on Friday. Renew in one tap?</Msg>
        <Msg>Yes, renew</Msg>
        <Tag>Renewed · payment link sent</Tag>
      </div>
    ),
  },
  {
    title: "Salon automation",
    description:
      "Confirm bookings, remind clients the day before and fill cancelled slots from a waiting list. After each visit, ask for a review and invite them to rebook.",
    content: (
      <div className={panel}>
        <p className={label}>Appointment reminder · WhatsApp</p>
        <Msg auto>Your haircut is tomorrow at 4:00 PM. Reply 1 to confirm or 2 to reschedule.</Msg>
        <Msg>1</Msg>
        <Tag>Confirmed · slot held</Tag>
      </div>
    ),
  },
  {
    title: "Real estate automation",
    description:
      "Enquiries from portals, ads and WhatsApp are captured and assigned to an agent instantly. Viewings are booked, reminders go out, and every lead is followed up until they reply.",
    content: (
      <div className={panel}>
        <p className={label}>New enquiry · assigned to agent</p>
        <Msg>Hi, is the 2-bedroom apartment still available?</Msg>
        <Msg auto>Yes! Pick a viewing time: Sat 11:00 or Sun 3:00.</Msg>
        <Tag>Viewing booked · reminder queued</Tag>
      </div>
    ),
  },
  {
    title: "Clinic automation",
    description:
      "Send appointment reminders, collect confirmations and share simple pre-visit instructions. Follow-ups go out after the visit, and your staff see everything in one place.",
    content: (
      <div className={panel}>
        <p className={label}>Appointment reminder · SMS</p>
        <Msg auto>Reminder: your check-up is tomorrow at 10:00 AM. Reply 1 to confirm.</Msg>
        <Msg>1</Msg>
        <Tag>Confirmed · follow-up scheduled</Tag>
      </div>
    ),
  },
];

export default function Automations() {
  return (
    <section id="how-it-works" className="bg-ink px-6 py-20 md:py-28">
      <Reveal className="mx-auto max-w-[1200px] text-center">
        <p className="mb-3 text-sm font-medium uppercase tracking-[0.05em] text-arc">Automation examples</p>
        <h2 className="text-3xl font-light tracking-tight md:text-5xl">Built for businesses like yours</h2>
      </Reveal>

      <div className="mt-12 hidden lg:block">
        <StickyScroll content={content} contentClassName="h-80 w-[26rem]" />
      </div>

      <div className="mx-auto mt-12 max-w-xl space-y-10 lg:hidden">
        {content.map((c) => (
          <Reveal key={c.title}>
            <h3 className="text-2xl font-light">{c.title}</h3>
            <p className="mt-2 text-mist">{c.description}</p>
            <div className="mt-4 h-64 overflow-hidden rounded-lg border border-fog/50">{c.content}</div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}