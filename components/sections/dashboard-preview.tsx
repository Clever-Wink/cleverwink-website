"use client";
import Image from "next/image";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";

export default function DashboardPreview() {
  return (
    <section>
      <ContainerScroll
        titleComponent={
          <>
            <p className="mb-3 text-sm font-medium uppercase tracking-[0.05em] text-arc">Your command center</p>
            <h2 className="pb-6 text-3xl font-light tracking-tight md:text-5xl">
              Every lead, follow-up and deal<br />in one clear view
            </h2>
          </>
        }
      >
        <Image
          src="https://assets.aceternity.com/components/hero-section-with-mesh-gradient.webp"
          alt="CLEVER WINK CRM dashboard"
          width={1400}
          height={720}
          className="h-full w-full rounded-2xl object-cover object-left-top"
          draggable={false}
        />
      </ContainerScroll>
    </section>
  );
}