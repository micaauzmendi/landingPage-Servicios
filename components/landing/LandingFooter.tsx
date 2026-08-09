import { MessageCircle } from "lucide-react";
import Image from "next/image";
import { AGENDAR_HREF, INSTAGRAM_HANDLE, INSTAGRAM_URL, PHONE_DISPLAY, WHATSAPP_HREF } from "@/lib/landing";

/**
 * Footer minimalista de la landing. Reutiliza los tokens y el patrón visual del
 * footer del portfolio (logo, tipografías mono, borde superior con accent), pero
 * acotado a lo que necesita una landing: contacto directo y el CTA de siempre.
 */
export function LandingFooter() {
  return (
    <footer className="relative overflow-hidden border-t border-accent-support/30 bg-surface-muted/25 px-6 pt-14 md:px-10">
      <div className="mx-auto grid max-w-6xl gap-10 pb-12 sm:grid-cols-2">
        <div>
          <Image
            src="/photos/logo-micaauzmendi.png"
            alt="Mica Auzmendi"
            width={200}
            height={40}
            className="h-10 w-auto"
          />
          <p className="mt-3 font-mono text-xs uppercase tracking-[0.15em] text-text-muted">
            Diseño de tiendas online y experiencia de compra
          </p>
        </div>

        <div className="sm:text-right">
          <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-text-muted">Hablemos</p>
          <ul className="mt-4 space-y-2.5 text-sm">
            <li>
              {/* TODO: confirmar handle/URL de Instagram en lib/landing.ts. */}
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-text-secondary transition-colors hover:text-accent sm:justify-end"
              >
                {INSTAGRAM_HANDLE}
              </a>
            </li>
            <li>
              {/* El teléfono abre WhatsApp. */}
              <a
                href={WHATSAPP_HREF}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-text-secondary transition-colors hover:text-accent sm:justify-end"
              >
                <MessageCircle size={14} aria-hidden="true" /> {PHONE_DISPLAY}
              </a>
            </li>
          </ul>

          <a
            href={AGENDAR_HREF}
            target="_blank"
            rel="noreferrer"
            className="mt-6 inline-flex rounded-full bg-accent px-5 py-2.5 font-heading text-xs font-medium uppercase tracking-wider text-bg transition-colors duration-300 hover:bg-accent-support hover:text-text"
          >
            Asesoría gratuita
          </a>
        </div>
      </div>

      <div className="mx-auto flex max-w-6xl flex-col items-center gap-1.5 border-t border-accent-support/20 py-6 text-center">
        <p className="font-mono text-xs uppercase tracking-wider text-text-muted">© {new Date().getFullYear()}</p>
        <p className="font-mono text-xs uppercase tracking-wider text-text-muted">Mica Auzmendi · {INSTAGRAM_HANDLE}</p>
      </div>
    </footer>
  );
}
