"use client";

import { ArrowDown } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { DecorativeLine } from "@/components/ui/DecorativeLine";
import { DotField } from "@/components/ui/DotField";
import { Reveal, RevealItem } from "@/components/ui/Reveal";
import { PROJECTS } from "@/lib/landing";

const INITIAL = 6;

/**
 * Galería de trabajos: muestra las primeras portadas y, con "Ver todos los
 * casos", despliega el resto en la misma página (no abre Behance).
 */
export function TrabajosGallery() {
  const [showAll, setShowAll] = useState(false);
  const visible = showAll ? PROJECTS : PROJECTS.slice(0, INITIAL);
  const hasMore = PROJECTS.length > INITIAL;

  return (
    <section
      id="trabajos"
      aria-labelledby="trabajos-heading"
      className="relative scroll-mt-20 overflow-hidden px-6 py-20 md:px-10 md:py-28"
    >
      <DotField />
      <div className="relative z-10 mx-auto max-w-6xl">
        <Reveal>
          <div className="flex items-center gap-3">
            <DecorativeLine orientation="vertical" className="h-4" />
            <p className="font-mono font-medium text-xs uppercase tracking-[0.2em] text-accent">Trabajos</p>
          </div>
          <h2 id="trabajos-heading" className="mt-4 max-w-2xl font-heading text-3xl font-medium text-accent sm:text-4xl">
            Marcas que ya pasaron por mis manos
          </h2>
          <p className="mt-4 max-w-xl text-base text-text-secondary">
            Una selección de tiendas, marcas y experiencias de compra que diseñé.
          </p>
        </Reveal>

        <Reveal stagger className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {visible.map((project) => (
            <RevealItem key={project.title} className="group">
              <div className="relative aspect-[4/3] overflow-hidden rounded-card ring-1 ring-accent-support/20">
                <Image
                  src={project.cover}
                  alt={project.title}
                  fill
                  sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 30vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <p className="mt-3 font-heading text-base font-medium text-text">{project.title}</p>
              <p className="mt-0.5 font-mono text-[11px] uppercase tracking-wider text-text-muted">{project.category}</p>
            </RevealItem>
          ))}
        </Reveal>

        {hasMore && !showAll ? (
          <Reveal delay={0.1} className="mt-12">
            <Button type="button" onClick={() => setShowAll(true)} variant="outline" className="uppercase">
              Ver todos los casos
              <ArrowDown size={15} aria-hidden="true" />
            </Button>
          </Reveal>
        ) : null}
      </div>
    </section>
  );
}
