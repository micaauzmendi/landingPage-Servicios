import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { HablemosForm } from "@/components/landing/HablemosForm";
import { LandingFooter } from "@/components/landing/LandingFooter";
import { LandingHeader } from "@/components/landing/LandingHeader";
import { ServiciosDetalle } from "@/components/landing/ServiciosDetalle";
import { TrabajosGallery } from "@/components/landing/TrabajosGallery";
import { WhatsAppBubble } from "@/components/landing/WhatsAppBubble";
import { Button } from "@/components/ui/Button";
import { DecorativeLine } from "@/components/ui/DecorativeLine";
import { GridField } from "@/components/ui/GridField";
import { Reveal, RevealItem } from "@/components/ui/Reveal";
import {
  ABOUT,
  AGENDAR_HREF,
  CTA_PRIMARY,
  INSTAGRAM_HANDLE,
  INSTAGRAM_URL,
  PHONE_DISPLAY,
  PHOTOS,
  SERVICES,
  WHATSAPP_HREF,
} from "@/lib/landing";

/**
 * Landing de servicios de Mica Auzmendi. Una sola página, scroll vertical.
 * Reutiliza el sistema de diseño (tokens, tipografías y primitivos de UI) pero
 * con su propia identidad: hero con foto full-bleed, títulos en malva y una
 * paleta más cálida (rosa palo) para diferenciarla del portfolio.
 */
export function ServiciosLandingContent() {
  return (
    <div id="top" className="flex min-h-screen flex-col">
      <a href="#main-content" className="sr-only-focusable">
        Saltar al contenido
      </a>
      <LandingHeader />
      <main id="main-content" className="flex-1">
        <Hero />
        <ServicesGrid />
        <ServiciosDetalle />
        <SobreMi />
        <TrabajosGallery />
        <HablemosForm />
        <FinalCTA />
      </main>
      <LandingFooter />
      <WhatsAppBubble />
    </div>
  );
}

/* ── Hero (foto full-bleed + velo cálido + formas) ─────────────────────── */

function Hero() {
  return (
    <section
      aria-label="Servicios"
      className="relative flex min-h-[92vh] items-end overflow-hidden px-6 py-20 md:items-center md:px-10"
    >
      {/* Foto a pantalla completa: es el fondo del hero, no una imagen pegada.
          Va en z-0 (por encima del AmbientBackground, que es una capa crema
          opaca en -z-10). */}
      <Image
        src={PHOTOS.hero.src}
        alt={PHOTOS.hero.alt}
        fill
        priority
        sizes="100vw"
        className="z-0 object-cover object-[center_42%]"
      />
      {/* Forma de color detrás del velo (rosa palo). */}
      <div
        aria-hidden="true"
        className="absolute -left-24 top-16 z-0 h-80 w-80 rounded-full bg-accent-support/30 blur-3xl"
      />
      {/* Velo cálido de abajo hacia arriba: crema sólido donde va el texto, y se
          abre hacia arriba para que la foto se vea. En mobile es más fuerte
          (el texto va sobre la foto); en desktop se afloja porque el texto va a
          la izquierda con su propio velo. */}
      <div
        aria-hidden="true"
        className="absolute inset-0 z-0 bg-gradient-to-t from-bg via-bg/85 to-transparent md:via-bg/40 md:to-bg/5"
      />
      {/* Un poco más de crema del lado del texto en desktop, sin tapar la foto. */}
      <div
        aria-hidden="true"
        className="absolute inset-0 z-0 hidden bg-gradient-to-r from-bg via-bg/20 to-transparent md:block"
      />

      <div className="relative z-10 mx-auto w-full max-w-6xl pb-6 md:pb-0">
        <div className="max-w-xl">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full bg-accent px-4 py-1.5 font-mono text-xs font-medium uppercase tracking-[0.25em] text-bg">
              Servicios
            </span>
          </Reveal>

          <Reveal delay={0.1}>
            <h1 className="mt-6 font-heading text-4xl font-medium leading-[1.1] text-accent text-balance sm:text-5xl lg:text-6xl">
              Hago que comprarte sea fácil.
            </h1>
          </Reveal>

          <Reveal delay={0.25}>
            <p className="mt-6 max-w-md text-lg leading-relaxed text-text-secondary text-pretty">
              Del feed a la tienda. De la compra a la re-compra.
            </p>
          </Reveal>

          <Reveal delay={0.4} className="mt-9 flex flex-wrap items-center gap-3">
            <Button href={AGENDAR_HREF} target="_blank" rel="noreferrer" className={CTA_PRIMARY}>
              Asesoría gratuita
              <ArrowRight size={16} aria-hidden="true" />
            </Button>
            <Button href="#servicios" variant="outline" className="uppercase">
              Ver servicios
            </Button>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ── Grilla de servicios (índice) ──────────────────────────────────────── */

function ServicesGrid() {
  return (
    <section
      id="servicios"
      aria-labelledby="servicios-heading"
      className="relative scroll-mt-20 overflow-hidden bg-surface-muted/40 px-6 py-20 md:px-10 md:py-28"
    >
      <GridField />
      <div className="relative z-10 mx-auto max-w-4xl">
        <Reveal>
          <div className="flex items-center gap-3">
            <DecorativeLine orientation="vertical" className="h-4" />
            <p className="font-mono font-medium text-xs uppercase tracking-[0.2em] text-accent">
              Servicios para marcas y pymes
            </p>
          </div>
          <h2 id="servicios-heading" className="mt-4 max-w-2xl font-heading text-3xl font-medium text-accent sm:text-4xl">
            Todo lo que hago por tu marca
          </h2>
        </Reveal>

        <Reveal stagger className="mt-12 grid gap-x-12 sm:grid-cols-2">
          {SERVICES.map((service) => (
            <RevealItem key={service.id}>
              <a
                href={`#${service.id}`}
                className="group flex h-full items-start gap-5 border-t border-accent-support/30 py-5 transition-colors hover:bg-surface-muted/40"
              >
                <span className="font-mono text-sm font-medium text-accent tabular-nums">{service.num}</span>
                <span className="flex-1">
                  <span className="block font-heading text-lg font-medium text-text transition-colors group-hover:text-accent">
                    {service.gridTitle}
                  </span>
                  <span className="mt-1 block text-sm text-text-secondary">{service.gridDesc}</span>
                </span>
                <ArrowRight
                  size={18}
                  aria-hidden="true"
                  className="mt-1 shrink-0 text-text-muted transition-all group-hover:translate-x-1 group-hover:text-accent"
                />
              </a>
            </RevealItem>
          ))}
        </Reveal>
      </div>
    </section>
  );
}

/* ── Sobre mí ──────────────────────────────────────────────────────────── */

function SobreMi() {
  return (
    <section
      id="sobre-mi"
      aria-labelledby="sobre-mi-heading"
      className="relative scroll-mt-20 overflow-hidden px-6 py-20 md:px-10 md:py-28"
    >
      <div className="mx-auto grid max-w-5xl items-center gap-10 md:grid-cols-2 md:gap-16">
        <Reveal>
          <div className="flex items-center gap-3">
            <DecorativeLine orientation="vertical" className="h-4" />
            <p className="font-mono font-medium text-xs uppercase tracking-[0.2em] text-accent">{ABOUT.eyebrow}</p>
          </div>
          <h2 id="sobre-mi-heading" className="mt-4 font-heading text-3xl font-medium text-accent sm:text-4xl">
            {ABOUT.title}
          </h2>
          {ABOUT.paragraphs.map((paragraph) => (
            <p key={paragraph} className="mt-4 max-w-md text-base leading-relaxed text-text-secondary">
              {paragraph}
            </p>
          ))}
        </Reveal>

        <Reveal delay={0.1}>
          <div className="rounded-card border border-accent-support/40 bg-accent-support/20 p-8">
            <div className="grid grid-cols-2 gap-6">
              {ABOUT.stats.map((stat) => (
                <div key={stat.label}>
                  <p className="font-heading text-4xl font-semibold leading-none text-accent sm:text-5xl">
                    {stat.value}
                  </p>
                  <p className="mt-2 font-mono text-[11px] uppercase tracking-wider text-text-secondary">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
            <p className="mt-7 border-t border-accent-support/40 pt-5 font-heading text-sm font-medium uppercase tracking-wide text-accent">
              {ABOUT.focus}
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ── CTA final (fondo oscuro) ──────────────────────────────────────────── */

function FinalCTA() {
  return (
    <section
      id="agendar"
      aria-labelledby="agendar-heading"
      className="relative scroll-mt-20 overflow-hidden bg-text px-6 py-24 text-bg md:px-10 md:py-32"
    >
      <div
        aria-hidden="true"
        className="bg-glow-warm absolute left-1/2 top-0 h-[320px] w-[320px] -translate-x-1/2 -translate-y-1/2 opacity-[0.14] blur-3xl"
      />

      <div className="relative z-10 mx-auto max-w-xl text-center">
        <Reveal>
          <div className="flex items-center justify-center gap-3">
            <DecorativeLine orientation="vertical" className="h-4" />
            <p className="font-mono font-medium text-xs uppercase tracking-[0.2em] text-accent-support">Hablemos</p>
          </div>
          <h2 id="agendar-heading" className="mt-4 font-heading text-3xl font-medium sm:text-4xl">
            Asesoría <span className="text-accent-support">gratuita</span>
          </h2>
          <p className="mt-4 text-base text-bg/80">
            Agendá una asesoría gratis de 15-20 min. Charlamos qué necesita tu marca y por dónde arrancar.
          </p>
        </Reveal>

        <Reveal delay={0.15} className="mt-10 flex flex-col items-center gap-6">
          <Button href={AGENDAR_HREF} target="_blank" rel="noreferrer" className={CTA_PRIMARY}>
            Tocá el link para agendar
            <ArrowRight size={16} aria-hidden="true" />
          </Button>

          <div className="flex flex-col items-center gap-1.5 font-mono text-xs uppercase tracking-wider text-bg/70">
            {/* El teléfono abre WhatsApp. */}
            <a href={WHATSAPP_HREF} target="_blank" rel="noreferrer" className="transition-colors hover:text-accent-support">
              {PHONE_DISPLAY}
            </a>
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noreferrer"
              className="transition-colors hover:text-accent-support"
            >
              {INSTAGRAM_HANDLE}
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
