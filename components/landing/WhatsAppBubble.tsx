import { WHATSAPP_HREF } from "@/lib/landing";

/**
 * Burbuja flotante de WhatsApp: siempre visible, abajo a la derecha, para
 * escribirle a Mica desde cualquier punto de la landing. Verde de WhatsApp para
 * que se reconozca al instante.
 */
export function WhatsAppBubble() {
  return (
    <a
      href={WHATSAPP_HREF}
      target="_blank"
      rel="noreferrer"
      aria-label="Escribime por WhatsApp"
      className="group fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_10px_30px_-8px_rgba(0,0,0,0.4)] transition-transform duration-300 hover:scale-105 focus-visible:scale-105 md:bottom-7 md:right-7 md:h-16 md:w-16"
    >
      {/* Ícono de WhatsApp. */}
      <svg viewBox="0 0 32 32" className="h-7 w-7 md:h-8 md:w-8" fill="currentColor" aria-hidden="true">
        <path d="M16.004 3.2c-7.06 0-12.8 5.74-12.8 12.8 0 2.257.59 4.46 1.712 6.4L3.2 28.8l6.56-1.72a12.74 12.74 0 0 0 6.244 1.62h.005c7.06 0 12.8-5.74 12.8-12.8 0-3.42-1.332-6.635-3.75-9.052A12.71 12.71 0 0 0 16.004 3.2Zm0 23.36h-.004a10.55 10.55 0 0 1-5.377-1.473l-.386-.23-3.893 1.02 1.04-3.796-.25-.39a10.53 10.53 0 0 1-1.614-5.618c0-5.86 4.77-10.63 10.63-10.63 2.84 0 5.51 1.107 7.52 3.117a10.56 10.56 0 0 1 3.113 7.52c0 5.86-4.77 10.63-10.63 10.63Zm5.83-7.96c-.32-.16-1.89-.933-2.183-1.04-.293-.107-.507-.16-.72.16-.213.32-.826 1.04-1.013 1.253-.187.213-.373.24-.693.08-.32-.16-1.35-.498-2.57-1.586-.95-.847-1.59-1.893-1.777-2.213-.187-.32-.02-.493.14-.653.144-.143.32-.373.48-.56.16-.187.213-.32.32-.533.107-.213.053-.4-.027-.56-.08-.16-.72-1.733-.986-2.373-.26-.623-.523-.54-.72-.55l-.613-.01c-.213 0-.56.08-.853.4-.293.32-1.12 1.093-1.12 2.667 0 1.573 1.147 3.093 1.307 3.307.16.213 2.253 3.44 5.46 4.826.763.33 1.36.527 1.824.674.766.244 1.464.21 2.016.127.615-.092 1.89-.773 2.157-1.52.267-.747.267-1.387.187-1.52-.08-.133-.293-.213-.613-.373Z" />
      </svg>
      {/* Tooltip en desktop. */}
      <span className="pointer-events-none absolute right-full mr-3 hidden whitespace-nowrap rounded-full bg-text px-3 py-1.5 font-heading text-xs font-medium uppercase tracking-wide text-bg opacity-0 transition-opacity duration-300 group-hover:opacity-100 md:block">
        Escribime
      </span>
    </a>
  );
}
