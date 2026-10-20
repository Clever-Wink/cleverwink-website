import Image from "next/image";
import { FaLinkedinIn } from "react-icons/fa";
import Reveal from "@/components/reveal";

// Demo people and photos. Replace with your real team.
// For your own photos: put them in public/team/ and use src: "/team/name.jpg".
const img = (id: string) => `https://images.unsplash.com/${id}?q=80&w=900&auto=format&fit=crop`;
const team = [
  { name: "Manu Mohanan", role: "Founder & Graphic Designer", linkedin: "https://www.linkedin.com/in/username", src:("/Manu_Image.jpeg") },
  { name: "Aparna Unni", role: "Web Designer", linkedin: "https://www.linkedin.com/in/username", src:("/Aparna.jpeg") },
  // { name: "Emily Watson", role: "Customer Success Lead", linkedin: "https://www.linkedin.com/in/username", src: img("photo-1623582854588-d60de57fa33f") },
  // { name: "James Kim", role: "Data & Reporting Specialist", linkedin: "https://www.linkedin.com/in/username", src: img("photo-1636041293178-808a6762ab39") },
];

export default function Team() {
  return (
    <section id="team" className="bg-ink px-6 py-20 md:py-28">
      <div className="mx-auto max-w-[1200px]">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.05em] text-arc">Our team</p>
          <h2 className="text-3xl font-light tracking-tight md:text-5xl">The people behind the wink</h2>
        </Reveal>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {team.map((m, i) => (
            <Reveal key={m.name} delay={(i % 4) * 0.08}>
              <article className="group">
                <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-fog/20">
                  <Image
                    src={m.src}
                    alt={`${m.name}, ${m.role}`}
                    fill
                    sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover transition duration-500 ease-out group-hover:scale-110 group-active:scale-110"
                  />
                  {m.linkedin && (
                    <a
                      href={m.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${m.name} on LinkedIn`}
                      className="absolute bottom-4 right-4 grid size-11 place-items-center rounded-full bg-white text-ink transition hover:bg-signal"
                    >
                      <FaLinkedinIn className="size-4" />
                    </a>
                  )}
                </div>
                <div className="px-1 pt-4">
                  <h3 className="text-xl font-light">{m.name}</h3>
                  <p className="text-sm text-mist">{m.role}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}