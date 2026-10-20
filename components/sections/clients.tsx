// Placeholder clients. Replace with real ones (only with their permission).
// For a real logo, put the file in public/logos/ and set logo: "/logos/name.png".
const clients: { name: string; logo?: string }[] = [
  { name: "Demo Co" },
  { name: "Sample Trading" },
  { name: "Example Logistics" },
  { name: "Acme Retail" },
  { name: "Northwind Estates" },
  { name: "Bright Clinics" },
  { name: "Orbit Travel" },
  { name: "Summit Education" },
];

const row = [...clients, ...clients];

function Item({ name, logo }: { name: string; logo?: string }) {
  return (
    <li className="flex shrink-0 items-center gap-3 px-8">
      {logo ? (
        <img src={logo} alt="" className="size-9 rounded-full object-contain grayscale transition hover:grayscale-0" />
      ) : (
        <span className="grid size-9 place-items-center rounded-full border border-signal text-sm font-medium text-arc">
          {name[0]}
        </span>
      )}
      <span className="whitespace-nowrap text-lg text-white">{name}</span>
    </li>
  );
}

export default function Clients() {
  return (
    <section id="clients" className="border-t border-white/10 bg-ink py-16 md:py-24">
      <div className="mx-auto max-w-[1200px] px-6 text-center">
        <p className="mb-3 text-sm font-medium uppercase tracking-[0.05em] text-arc">Our clients</p>
        <h2 className="text-3xl font-light tracking-tight md:text-5xl">Trusted by growing teams</h2>
        <p className="mx-auto mt-4 max-w-md text-mist">Businesses that stopped chasing leads by hand.</p>
      </div>
      <div className="marquee relative mt-12 overflow-hidden [mask-image:linear-gradient(to_right,transparent,#000_12%,#000_88%,transparent)]">
        <div className="marquee-track">
          {[0, 1].map((k) => (
            <ul key={k} aria-hidden={k === 1} className="flex shrink-0">
              {row.map((c, i) => (
                <Item key={i} {...c} />
              ))}
            </ul>
          ))}
        </div>
      </div>
    </section>
  );
}