// "use client";
// import { useEffect, useState } from "react";

// // Paths of your files inside public/. Spelling and capital letters must match exactly.
// const VIDEO = { wide: "/hero/Vedio_Web.mp4", tall: "/hero/Vedio_Mobile.mp4" };
// const POSTER = { wide: "/hero/Vedio_Web.jpg", tall: "/hero/Vedio_Mobile.jpg" };

// export default function HeroVideo() {
//   const [which, setWhich] = useState<"wide" | "tall" | null>(null);

//   useEffect(() => {
//     const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
//     const nav = navigator as Navigator & { connection?: { saveData?: boolean } };
//     if (reduce || nav.connection?.saveData) return; // poster image only
//     const landscape = window.matchMedia("(orientation: landscape)");
//     const update = () => setWhich(landscape.matches ? "wide" : "tall");
//     update();
//     landscape.addEventListener("change", update); // handles rotating a phone or tablet
//     return () => landscape.removeEventListener("change", update);
//   }, []);

//   return (
//     <div aria-hidden className="absolute inset-0">
//       <picture>
//         <source media="(orientation: portrait)" srcSet={POSTER.tall} />
//         <img src={POSTER.wide} alt="" className="absolute inset-0 h-full w-full object-cover" />
//       </picture>
//       {which && (
//         <video
//           key={which}
//           autoPlay
//           muted
//           loop
//           playsInline
//           preload="auto"
//           poster={POSTER[which]}
//           className="absolute inset-0 h-full w-full object-cover"
//         >
//           <source src={VIDEO[which]} type="video/mp4" />
//         </video>
//       )}
//     </div>
//   );
// }


"use client";
import { useEffect, useRef, useState } from "react";

// Paths of your files inside public/. Spelling and capital letters must match exactly.
const VIDEO = { wide: "/hero/Video_Web.mp4", tall: "/hero/Video_Mobile.mp4" };
const POSTER = { wide: "/hero/Video_Web.jpg", tall: "/hero/Video_Mobile.png" };

// Invisible until its first frame is ready, then fades in over the image
function Clip({ src }: { src: string }) {
  const [ready, setReady] = useState(false);
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    // covers a video that was already cached before React hydrated
    if (ref.current && ref.current.readyState >= 2) setReady(true);
  }, []);

  return (
    <video
      ref={ref}
      autoPlay
      muted
      loop
      playsInline
      preload="auto"
      onLoadedData={() => setReady(true)}
      className={`absolute inset-0 h-full w-full object-cover object-center transition-opacity duration-700 ${
        ready ? "opacity-100" : "opacity-0"
      }`}
    >
      <source src={src} type="video/mp4" />
    </video>
  );
}

export default function HeroVideo() {
  const [which, setWhich] = useState<"wide" | "tall" | null>(null);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const nav = navigator as Navigator & { connection?: { saveData?: boolean } };
    if (reduce || nav.connection?.saveData) return; // image only
    const landscape = window.matchMedia("(orientation: landscape)");
    const update = () => setWhich(landscape.matches ? "wide" : "tall");
    update();
    landscape.addEventListener("change", update); // handles rotating a phone or tablet
    return () => landscape.removeEventListener("change", update);
  }, []);

  return (
    <div aria-hidden className="absolute inset-0 bg-ink">
      <picture>
        <source media="(orientation: portrait)" srcSet={POSTER.tall} />
        <img src={POSTER.wide} alt="" className="absolute inset-0 h-full w-full object-cover object-center" />
      </picture>
      {which && <Clip key={which} src={VIDEO[which]} />}
    </div>
  );
}