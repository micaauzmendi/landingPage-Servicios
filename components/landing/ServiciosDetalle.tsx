"use client";

import { ArrowUpRight, Check } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { DecorativeLine } from "@/components/ui/DecorativeLine";
import { GridField } from "@/components/ui/GridField";
import { Reveal, RevealItem } from "@/components/ui/Reveal";
import { Tag } from "@/components/ui/Tag";
import { AGENDAR_HREF, CTA_PRIMARY, SERVICES, WHATSAPP_HREF, type Service } from "@/lib/landing";

/**
 * Detalle de los servicios con un filtro de chips: "Todos" muestra los seis;
 * al elegir un chip se ve solo ese servicio. Es un client component porque el
 * filtro necesita estado.
 */
export function ServiciosDetalle() {
  const [active, setActive] = useState<string | null>(null);
  const shown = active ? SERVICES.filter((service) => service.id === active) : SERVICES;

  const chip = (id: string | null, label: string) => {
    const isActive = active === id;
    return (
      <button
        key={id ?? "todos"}
        type="button"
        onClick={() => setActive(id)}
        aria-pressed={isActive}
        className={`rounded-full px-4 py-2 font-heading text-sm font-medium transition-colors ${
          isActive
            ? "bg-accent text-bg"
            : "border border-accent-support/50 text-text-secondary hover:border-accent hover:text-accent"
        }`}
      >
        {label}
      </button>
    );
  };

  return (
    <>
      {/* Barra de filtro por servicio. */}
      <div id="detalle" className="scroll-mt-20 px-6 pt-16 md:px-10 md:pt-24">
        <div className="mx-auto max-w-4xl">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-text-muted">Filtrá por servicio</p>
          <div className="mt-4 flex flex-wrap gap-2.5">
            {chip(null, "Todos")}
            {SERVICES.map((service) => chip(service.id, service.gridTitle))}
          </div>
        </div>
      </div>

      {shown.map((service, index) => (
        <ServiceDetail key={service.id} service={service} muted={index % 2 === 1} />
      ))}
    </>
  );
}

function ServiceDetail({ service, muted }: { service: Service; muted: boolean }) {
  const isExtras = Boolean(service.cta);

  return (
    <section
      id={service.id}
      aria-labelledby={`${service.id}-heading`}
      className={`relative scroll-mt-20 overflow-hidden px-6 py-16 md:px-10 md:py-20 ${
        muted ? "bg-surface-muted/40" : ""
      }`}
    >
      {muted ? <GridField /> : null}
      <div className="relative z-10 mx-auto max-w-4xl">
        <Reveal>
          <div className="flex items-center gap-4">
            {/* Número sin fondo. */}
            <span
              aria-hidden="true"
              className="font-heading text-5xl font-semibold leading-none text-accent-support/70 sm:text-6xl"
            >
              {service.num}
            </span>
            <DecorativeLine className="flex-1" />
          </div>
          <h2
            id={`${service.id}-heading`}
            className="mt-5 max-w-3xl font-heading text-2xl font-medium text-accent sm:text-3xl"
          >
            {service.title}
          </h2>
          {service.bajada ? <p className="mt-3 max-w-2xl text-base text-text-secondary">{service.bajada}</p> : null}
          {service.badge ? <Tag className="mt-4">{service.badge}</Tag> : null}
        </Reveal>

        {/* Listas: "Qué incluye" / "Qué gana tu marca" (o la lista suelta de Extras). */}
        <Reveal stagger className={`mt-10 grid gap-8 ${service.sections.length > 1 ? "md:grid-cols-2" : ""}`}>
          {service.sections.map((section, i) => (
            <RevealItem key={section.heading || `sec-${i}`}>
              {section.heading ? (
                <h3 className="font-mono text-xs font-medium uppercase tracking-[0.15em] text-accent">
                  {section.heading}
                </h3>
              ) : null}
              <ul className={`${section.heading ? "mt-4" : ""} space-y-3`}>
                {section.items.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm leading-relaxed text-text-secondary">
                    <Check size={16} aria-hidden="true" className="mt-0.5 shrink-0 text-accent" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </RevealItem>
          ))}
        </Reveal>

        {/* "Este servicio es para vos si" — tarjeta en rosa palo (no blanca). */}
        {service.forYou ? (
          <Reveal delay={0.1}>
            <Card className="mt-10 border border-accent-support/40 bg-accent-support/20">
              <h3 className="font-heading text-base font-medium text-accent">Este servicio es para vos si…</h3>
              <ul className="mt-4 grid gap-x-8 gap-y-3 sm:grid-cols-2">
                {service.forYou.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm leading-relaxed text-text-secondary">
                    <span aria-hidden="true" className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </Reveal>
        ) : null}

        {/* CTA del bloque: Extras usa WhatsApp; el resto empuja a la asesoría. */}
        <Reveal delay={0.15} className="mt-10">
          {isExtras ? (
            <Button href={WHATSAPP_HREF} target="_blank" rel="noreferrer" className={CTA_PRIMARY}>
              {service.cta}
            </Button>
          ) : (
            <a
              href={AGENDAR_HREF}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 font-heading text-sm font-medium uppercase tracking-wide text-accent transition-colors hover:text-text"
            >
              Quiero arrancar por acá
              <ArrowUpRight size={15} aria-hidden="true" />
            </a>
          )}
        </Reveal>
      </div>
    </section>
  );
}
