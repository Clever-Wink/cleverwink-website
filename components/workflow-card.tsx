"use client";
import { useEffect, useState } from "react";
import { useReducedMotion } from "motion/react";
import { Inbox, Workflow, MessageSquare, BarChart3 } from "lucide-react";

const steps = [
  { icon: Inbox, title: "Lead captured", note: "Form, ad or inbox" },
  { icon: Workflow, title: "Routed to the right rep", note: "Assigned automatically" },
  { icon: MessageSquare, title: "Follow-up sent", note: "Email and WhatsApp" },
  { icon: BarChart3, title: "Pipeline updated", note: "Deal moves to proposal" },
];

export default function WorkflowCard() {
  const [active, setActive] = useState(0);
  const reduce = useReducedMotion();

  useEffect(() => {
    if (reduce) {
      setActive(steps.length - 1);
      return;
    }
    const t = setInterval(() => setActive((a) => (a + 1) % steps.length), 1600);
    return () => clearInterval(t);
  }, [reduce]);

  return (
    <div className="relative">
      <div className="pointer-events-none absolute -inset-10 -z-10 bg-[radial-gradient(ellipse_at_center,rgba(255,242,0,0.10),transparent_65%)]" />
      <div className="rounded-lg border border-fog/50 bg-ink p-6 md:p-8">
        <div className="mb-8 flex items-center justify-between text-xs uppercase tracking-[0.08em] text-mist">
          <span className="font-mono">Sample workflow</span>
          <span className="flex items-center gap-2 font-mono"><span className="size-2 rounded-full bg-signal" /> Running</span>
        </div>
        <div className="relative">
          <div className="absolute bottom-6 left-5 top-6 w-px -translate-x-1/2 bg-fog/40">
            <div className="w-full bg-signal transition-[height] duration-700" style={{ height: `${(active / (steps.length - 1)) * 100}%` }} />
          </div>
          <ol className="space-y-6">
            {steps.map((s, i) => {
              const on = i <= active;
              return (
                <li key={s.title} className="relative flex h-12 items-center gap-4">
                  <span className={`z-10 grid size-10 shrink-0 place-items-center rounded-full border transition-all duration-500 ${on ? "border-signal bg-signal text-ink" : "border-fog/60 bg-ink text-mist"} ${i === active && !reduce ? "ring-4 ring-signal/30" : ""}`}>
                    <s.icon className="size-5" strokeWidth={1.5} />
                  </span>
                  <div>
                    <p className={`text-base transition-colors duration-500 ${on ? "text-white" : "text-mist"}`}>{s.title}</p>
                    <p className="text-sm text-mist">{s.note}</p>
                  </div>
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </div>
  );
}