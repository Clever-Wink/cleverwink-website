"use client";
import { useEffect, useState } from "react";

// Paths of your files inside public/. Spelling and capital letters must match exactly.
const VIDEO = { wide: "/hero/Vedio_Web.mp4", tall: "/hero/Vedio_Mobile.mp4" };
const POSTER = { wide: "/hero/Vedio_Web.jpg", tall: "/hero/Vedio_Mobile.jpg" };

export default function HeroVideo() {
  const [which, setWhich] = useState<"wide" | "tall" | null>(null);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const nav = navigator as Navigator & { connection?: { saveData?: boolean } };
    if (reduce || nav.connection?.saveData) return; // poster image only
    const landscape = window.matchMedia("(orientation: landscape)");
    const update = () => setWhich(landscape.matches ? "wide" : "tall");
    update();
    landscape.addEventListener("change", update); // handles rotating a phone or tablet
    return () => landscape.removeEventListener("change", update);
  }, []);

  return (
    <div aria-hidden className="absolute inset-0">
      <picture>
        <source media="(orientation: portrait)" srcSet={POSTER.tall} />
        <img src={POSTER.wide} alt="" className="absolute inset-0 h-full w-full object-cover" />
      </picture>
      {which && (
        <video
          key={which}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          poster={POSTER[which]}
          className="absolute inset-0 h-full w-full object-cover"
        >
          <source src={VIDEO[which]} type="video/mp4" />
        </video>
      )}
    </div>
  );
}