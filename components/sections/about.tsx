"use client";
import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import { Inbox, Workflow, MessageSquare, BarChart3 } from "lucide-react";
import { Tooltip } from "@/components/ui/tooltip-card";

const term = "cursor-pointer font-medium text-white underline-offset-4";

// Sample workflow shown in the card.
const steps = [
  { icon: Inbox, title: "Discovery", note: "We learn about your business, goals and customers." },
  { icon: Workflow, title: "Planning", note: "We agree the scope and the plan." },
  { icon: MessageSquare, title: "Design & build", note: "We design and build it, and test it properly." },
  { icon: BarChart3, title: "Launch & support", note: "We go live and help your team get started." },
];

function WorkflowCard() {
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
        <div className="mb-8 flex items-center justify-between">
          <span className="font-mono text-[11px] uppercase tracking-[0.08em] text-fog">How we work</span>
          <span className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.08em] text-fog">
            <span className="size-2 rounded-full bg-signal" /> Running
          </span>
        </div>
        <div className="relative">
          <div className="absolute bottom-6 left-5 top-6 w-px -translate-x-1/2 bg-fog/40">
            <div
              className="w-full bg-signal transition-[height] duration-700"
              style={{ height: `${(active / (steps.length - 1)) * 100}%` }}
            />
          </div>
          <ol className="space-y-6">
            {steps.map((s, i) => {
              const on = i <= active;
              return (
                <li key={s.title} className="relative flex h-12 items-center gap-4">
                  <span
                    className={`z-10 grid size-10 shrink-0 place-items-center rounded-full border transition-all duration-500 ${
                      on ? "border-signal bg-signal text-ink" : "border-fog/60 bg-ink text-mist"
                    } ${i === active && !reduce ? "ring-4 ring-signal/30" : ""}`}
                  >
                    <s.icon className="size-5" strokeWidth={1.5} />
                  </span>
                  <div className="flex-1">
                    <p className={`text-base transition-colors duration-500 ${on ? "text-white" : "text-mist"}`}>{s.title}</p>
                    <p className="text-sm text-fog">{s.note}</p>
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

export default function About() {
  return (
    <section id="about" className="relative overflow-hidden bg-ink px-6 py-20 md:py-32">
      <div className="mx-auto grid max-w-[1200px] items-center gap-12 md:gap-30 md:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
        >
<p className="mb-3 text-sm font-medium uppercase tracking-[0.05em] text-arc">About us</p>
<h2 className="text-4xl font-light tracking-tight md:text-5xl">One team for your technology, marketing and brand</h2>
<div className="mt-8 max-w-lg space-y-5 text-mist">
  <div>
    CLEVER WINK is a UAE-based company that helps growing businesses run and grow online. We build the systems you work in, such as{" "}
    <Tooltip containerClassName="text-mist" content="Integrated business management software that connects core company processes into a single shared database and platform">
      <span className={term}>ERP</span>
    </Tooltip>{" "},{" "}
    <Tooltip containerClassName="text-mist" content="Customer relationship management software that keeps every lead and customer in one place.">
      <span className={term}>CRM</span>
    </Tooltip>{" "}
    and{" "}
    <Tooltip containerClassName="text-mist" content="Human resource management system for employee records, attendance and leave.">
      <span className={term}>HRMS</span>
    </Tooltip>
    , plus websites and custom software.
  </div>
  <div>
    We bring in customers through{" "}
    <Tooltip containerClassName="text-mist" content="Search, social media and online ads that bring customers to your business.">
      <span className={term}>digital marketing</span>
    </Tooltip>
    , and we shape how your brand looks with graphic design, photography and video.
  </div>
  <p className="text-white">Tell us what you need. We take it from idea to launch.</p>
</div>
          <a href="#contact" className="mt-8 inline-block rounded-lg bg-signal px-4 py-3.5 text-sm font-medium text-ink transition hover:-translate-y-0.5">
            Book a Demo
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, delay: 0.15 }}
        >
          <WorkflowCard />
        </motion.div>
      </div>
    </section>
  );
}