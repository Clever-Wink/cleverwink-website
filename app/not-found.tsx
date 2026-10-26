import Link from "next/link";
import Image from "next/image";

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col bg-ink px-6">
      <header className="mx-auto w-full max-w-[1200px] py-6">
        <Link href="/" aria-label="CLEVER WINK home">
          {/* Use the same width/height as the logo in your navbar */}
          <Image src="/clever-wink-logo.webp" alt="CLEVER WINK" width={600} height={150} className="h-8 w-auto md:h-10" />
        </Link>
      </header>

      <section className="mx-auto flex w-full max-w-xl flex-1 flex-col items-center justify-center pb-24 text-center">
        <p aria-hidden className="text-8xl font-light tracking-tight text-arc md:text-9xl">404</p>
        <h1 className="mt-4 text-3xl font-light tracking-tight md:text-4xl">Page not found</h1>
        <p className="mt-4 text-mist">
          The page you are looking for has moved or doesn&apos;t exist. Let&apos;s get you back on track.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Link href="/" className="rounded-lg bg-signal px-6 py-3.5 text-sm font-medium text-ink transition hover:-translate-y-0.5">
            Back to home
          </Link>
          <Link href="/#contact" className="rounded-lg border border-fog/60 px-4 py-3.5 text-sm font-medium text-white transition hover:border-signal">
            Book a Demo
          </Link>
        </div>
        <nav aria-label="Helpful links" className="mt-10 flex gap-6 text-sm text-mist">
          <Link href="/#services" className="hover:text-white">Services</Link>
          <Link href="/#about" className="hover:text-white">About</Link>
          <Link href="/#contact" className="hover:text-white">Contact</Link>
        </nav>
      </section>

      <footer className="mx-auto w-full max-w-[1200px] pb-8 text-xs text-mist">© 2026 CLEVER WINK. All rights reserved.</footer>
    </main>
  );
}