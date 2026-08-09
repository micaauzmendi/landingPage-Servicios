import Image from "next/image";
import Link from "next/link";
import { AGENDAR_HREF } from "@/lib/landing";

const NAV = [
  { label: "Servicios", href: "#servicios" },
  { label: "Trabajos", href: "#trabajos" },
];

/**
 * Header liviano de la landing: la firma manuscrita como logo, una nav corta con
 * anclas internas + un CTA fijo a "Asesoría gratuita" siempre a mano (el header
 * es sticky). Reutiliza los mismos tokens y clases del header del portfolio, sin
 * toggle de tema (la landing queda fija en claro).
 */
export function LandingHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-accent-support/30 bg-bg/85 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-2.5 md:px-10">
        <Link href="#top" aria-label="Mica Auzmendi" className="shrink-0">
          <Image
            src="/photos/logo-micaauzmendi.png"
            alt="Mica Auzmendi"
            width={156}
            height={32}
            priority
            className="h-8 w-auto"
          />
        </Link>

        <nav aria-label="Navegación principal" className="hidden items-center gap-7 md:flex">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="font-mono text-xs font-medium uppercase tracking-wider text-text underline-offset-[6px] transition-colors duration-300 hover:text-accent"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <a
          href={AGENDAR_HREF}
          target="_blank"
          rel="noreferrer"
          className="inline-flex rounded-full bg-accent px-5 py-2.5 font-heading text-xs font-medium uppercase tracking-wider text-bg transition-colors duration-300 hover:bg-accent-support hover:text-text"
        >
          Asesoría gratuita
        </a>
      </div>
    </header>
  );
}
