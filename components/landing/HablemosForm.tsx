"use client";

import { MessageCircle } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { DecorativeLine } from "@/components/ui/DecorativeLine";
import { Reveal } from "@/components/ui/Reveal";
import { CTA_PRIMARY, whatsappHref } from "@/lib/landing";

/**
 * Sección "¿Tenés dudas? Hablemos": un formulario simple que, al enviar, abre
 * WhatsApp con los datos ya cargados en el mensaje. Sin backend: el formulario
 * arma el texto y lo manda directo al WhatsApp de Mica.
 */
export function HablemosForm() {
  const [name, setName] = useState("");
  const [brand, setBrand] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    const body = [
      "Hola Mica! Tengo una consulta.",
      "",
      name ? `Nombre: ${name}` : null,
      brand ? `Marca / negocio: ${brand}` : null,
      message ? `Consulta: ${message}` : null,
    ]
      .filter((line) => line !== null)
      .join("\n");
    window.open(whatsappHref(body), "_blank", "noopener,noreferrer");
  }

  return (
    <section
      id="hablemos"
      aria-labelledby="hablemos-heading"
      className="relative scroll-mt-20 overflow-hidden bg-surface-muted/40 px-6 py-20 md:px-10 md:py-28"
    >
      <div className="mx-auto grid max-w-5xl items-start gap-10 md:grid-cols-2 md:gap-16">
        <Reveal>
          <div className="flex items-center gap-3">
            <DecorativeLine orientation="vertical" className="h-4" />
            <p className="font-mono font-medium text-xs uppercase tracking-[0.2em] text-accent">Hablemos</p>
          </div>
          <h2 id="hablemos-heading" className="mt-4 font-heading text-3xl font-medium text-accent sm:text-4xl">
            ¿Tenés dudas? Hablemos.
          </h2>
          <p className="mt-4 max-w-md text-base text-text-secondary">
            Contame qué necesita tu marca y te respondo por WhatsApp. Sin vueltas, sin compromiso.
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div>
              <label htmlFor="hablemos-name" className="font-mono text-xs uppercase tracking-wider text-text-muted">
                Nombre
              </label>
              <input
                id="hablemos-name"
                type="text"
                value={name}
                onChange={(event) => setName(event.target.value)}
                placeholder="Tu nombre"
                className="mt-1.5 w-full rounded-xl border border-accent-support/40 bg-bg px-4 py-2.5 text-sm text-text placeholder:text-text-muted focus:border-accent focus:outline-none"
              />
            </div>

            <div>
              <label htmlFor="hablemos-brand" className="font-mono text-xs uppercase tracking-wider text-text-muted">
                Marca / negocio · opcional
              </label>
              <input
                id="hablemos-brand"
                type="text"
                value={brand}
                onChange={(event) => setBrand(event.target.value)}
                placeholder="El nombre de tu marca"
                className="mt-1.5 w-full rounded-xl border border-accent-support/40 bg-bg px-4 py-2.5 text-sm text-text placeholder:text-text-muted focus:border-accent focus:outline-none"
              />
            </div>

            <div>
              <label htmlFor="hablemos-message" className="font-mono text-xs uppercase tracking-wider text-text-muted">
                Tu consulta
              </label>
              <textarea
                id="hablemos-message"
                rows={3}
                value={message}
                onChange={(event) => setMessage(event.target.value)}
                placeholder="Contame en qué estás y qué necesitás"
                className="mt-1.5 w-full resize-none rounded-xl border border-accent-support/40 bg-bg px-4 py-2.5 text-sm text-text placeholder:text-text-muted focus:border-accent focus:outline-none"
              />
            </div>

            <Button type="submit" className={`mt-2 w-full sm:w-auto ${CTA_PRIMARY}`}>
              <MessageCircle size={16} aria-hidden="true" />
              Enviar por WhatsApp
            </Button>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
