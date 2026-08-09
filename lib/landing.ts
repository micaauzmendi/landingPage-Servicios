/**
 * Enlaces y datos de la landing de servicios. No hardcodees estos valores en los
 * componentes: importalos de acá.
 */
import { buildWhatsAppUrl } from "@/lib/whatsapp";

// Reserva de la asesoría gratuita (Calendly).
export const AGENDAR_HREF = "https://calendly.com/soymicaauzmendi/asesoria-gratuita";

// WhatsApp. Formato Argentina para wa.me: 54 + 9 + área + número (sin + ni espacios).
// TODO: confirmá que este sea tu número de WhatsApp.
export const WHATSAPP_NUMBER = "5492262532348";

/** Arma un link de WhatsApp a Mica con un mensaje opcional prellenado. */
export function whatsappHref(message?: string): string {
  return buildWhatsAppUrl(
    WHATSAPP_NUMBER,
    message ?? "Hola Mica! Vengo de tu web y quería hacerte una consulta.",
  );
}

// Link genérico de WhatsApp (botón "Escribime y lo vemos" de Extras, etc.).
export const WHATSAPP_HREF = whatsappHref();

/**
 * Clase única para todos los botones sólidos (CTA): malva por defecto, hover a
 * rosa palo. Tipografía Jost (la trae el componente Button). Mismo criterio en
 * toda la landing.
 */
export const CTA_PRIMARY = "bg-accent text-bg hover:bg-accent-support hover:text-text uppercase";

/** Sección "Sobre mí". Editá el texto libremente. */
export const ABOUT = {
  eyebrow: "Sobre mí",
  title: "Hola, soy Mica.",
  paragraphs: [
    "Hace más de 18 años que diseño y, durante 8, tuve mi propia marca de productos. Sé lo que es vender, atender por mensaje y querer que cada cliente vuelva.",
    "Mi recorrido —del diseño de productos a la identidad de marca, y de ahí a la experiencia de compra y la UX/UI— es lo que hoy pongo al servicio de tu marca: una mirada que junta lo lindo con lo que de verdad vende.",
  ],
  stats: [
    { value: "+18", label: "Años diseñando" },
    { value: "8", label: "Años con marca propia" },
    { value: "+4", label: "Disciplinas" },
    { value: "100%", label: "Autodidacta" },
  ],
  focus: "Marca · UX/UI · Tiendas online",
};

// TODO: confirmar el @ y la URL de Instagram (¿es https://instagram.com/soymicaauzmendi?).
export const INSTAGRAM_HANDLE = "@soymicaauzmendi";
export const INSTAGRAM_URL = "https://instagram.com/soymicaauzmendi";

// El teléfono ya vive en el diccionario del portfolio (personalInfo.phone);
// lo repetimos acá para no acoplar la landing al dict de i18n.
export const PHONE = "+54 2262 532348";
export const PHONE_DISPLAY = "+54 2262-532348";

export interface ServiceSection {
  heading: string;
  items: string[];
}

export interface Service {
  /** Número mostrado en grande, ej. "01". */
  num: string;
  /** Ancla para el scroll interno, ej. "servicio-01". */
  id: string;
  /** Título corto para la grilla "Todo lo que hago por tu marca". */
  gridTitle: string;
  /** Bajada de una línea para la grilla. */
  gridDesc: string;
  /** Título completo del bloque de detalle. */
  title: string;
  /** Bajada opcional del detalle. */
  bajada?: string;
  /** Etiqueta de plataforma opcional (ej. "En Tienda Nube ó Empretienda"). */
  badge?: string;
  /** Listas del detalle: "Qué incluye", "Qué vas a lograr", "Qué gana tu marca". */
  sections: ServiceSection[];
  /** Lista "Este servicio es para vos si". */
  forYou?: string[];
  /** CTA propio del bloque (solo lo usa "Extras"). */
  cta?: string;
}

export interface Photo {
  src: string;
  alt: string;
}

/** Foto de Mica para el hero (vive en /public/photos). */
export const PHOTOS: Record<string, Photo> = {
  hero: {
    src: "/photos/mica-05.png",
    alt: "Mica Auzmendi sentada en el piso, con el celular, rodeada de bocetos del viaje de compra",
  },
};

export interface Project {
  title: string;
  category: string;
  cover: string;
}

/**
 * Galería curada de trabajos, enfocada en marcas de producto y experiencia de
 * compra (el público de la landing). Las portadas viven en /public/photos.
 * TODO: si querés que cada tarjeta abra su caso, cargá un `href` por proyecto.
 */
export const PROJECTS: Project[] = [
  { title: "Experiencia de Compra", category: "UX/UI · E-commerce", cover: "/photos/yonofui-compra-portada-hd.png" },
  { title: "Ember Café", category: "Branding", cover: "/photos/ember-portada-hd.png" },
  { title: "Savia", category: "Branding", cover: "/photos/savia-portada-hd.png" },
  { title: "La Viandita", category: "Branding", cover: "/photos/laviandita-portada-hd.png" },
  { title: "Khalipa", category: "App de pedidos", cover: "/photos/khalipa-portada-hd.png" },
  { title: "KENT", category: "Branding", cover: "/photos/kent-portada-hd.png" },
  { title: "Yo No Fui", category: "Branding", cover: "/photos/yonofui-branding-portada-hd.png" },
  { title: "Desarrollo de Marca", category: "Branding", cover: "/photos/yonofui-marca-portada-hd.png" },
  { title: "Yo No Fui · Contenido", category: "Branding", cover: "/photos/yonofui-emociones-portada-hd.png" },
  { title: "Appis Group", category: "Branding", cover: "/photos/appis-portada-hd.png" },
  { title: "Arbolado GCBA", category: "UX/UI", cover: "/photos/arbolado-portada-hd.png" },
  { title: "Plataforma migratoria", category: "UX/UI", cover: "/photos/migraciones-portada-hd.png" },
  { title: "Control fronterizo", category: "UX/UI", cover: "/photos/fronteras-portada-hd.png" },
  { title: "Stakeholders · SaaS", category: "UX/UI", cover: "/photos/stakeholders-portada-hd.png" },
  { title: "Sisgea · Sistema interno", category: "UX/UI", cover: "/photos/sisgea-portada-hd.png" },
  { title: "AFIP", category: "UX/UI", cover: "/photos/afip-portada-hd.png" },
];

export const SERVICES: Service[] = [
  {
    num: "01",
    id: "servicio-01",
    gridTitle: "Sesión 1:1",
    gridDesc: "Miramos tu marca juntas, en vivo. Definimos puntos de mejora.",
    title: "Sesión 1:1 — Miramos tu marca juntas.",
    bajada: "60 minutos, en vivo, vos y yo.",
    sections: [
      {
        heading: "Qué incluye",
        items: [
          "60 minutos en vivo: tu tienda en pantalla, tu IG, todo lo que tengas, lo recorremos.",
          "Te muestro qué puede estar frenando tus ventas y por dónde conviene arrancar. Te llevás un plan de acción.",
          "Queda grabada: la repasás cuando quieras.",
          "Te llevás un documento con todos los cambios que hablamos, listos para aplicar.",
        ],
      },
      {
        heading: "Qué vas a lograr",
        items: [
          "Claridad: vas a saber exactamente qué tocar primero.",
          "Una mirada experta sobre tu tienda, sin adivinar más.",
          "Un plan por escrito para avanzar sola o conmigo.",
        ],
      },
    ],
    forYou: [
      "Ya tenés tienda pero sentís que algo no funciona.",
      "No sabés por dónde empezar a mejorarla.",
      "Querés una mirada experta antes de invertir en publicidad.",
      "Preferís entender vos misma qué está pasando.",
      "Necesitás claridad, y la necesitás rápido.",
    ],
  },
  {
    num: "02",
    id: "servicio-02",
    gridTitle: "Tu tienda desde cero",
    gridDesc: "Le doy vida a tu tienda online (en Tienda Nube ó Empretienda).",
    title: "Tu tienda desde cero — Le doy vida a tu tienda online.",
    bajada: "Para cuando vendés por DM y todavía no tenés tienda.",
    badge: "En Tienda Nube ó Empretienda",
    sections: [
      {
        heading: "Qué incluye",
        items: [
          "Tu tienda armada de cero, con orden y lógica de venta.",
          "Fichas de producto y textos escritos por mí, pensados para vender.",
          "Categorías, pagos y envíos: todo configurado y funcionando.",
          "Adaptada a mobile, que es desde donde más te compran.",
        ],
      },
      {
        heading: "Qué gana tu marca",
        items: [
          "Existir online de verdad, más allá del DM.",
          "Vender sin estar respondiendo mensajes todo el día.",
          "Una tienda tan cuidada como tu marca.",
        ],
      },
    ],
    forYou: [
      "Vendés por DM y todavía no tenés tienda.",
      "Sentís que perdés ventas por no tener desde dónde comprar rápido.",
      "Querés dejar de anotar pedidos a mano.",
      "Estás lista para profesionalizar tu marca.",
      "Querés vender aunque no estés conectada.",
    ],
  },
  {
    num: "03",
    id: "servicio-03",
    gridTitle: "El remake",
    gridDesc: "Rediseño la tienda que ya tenés.",
    title: "El remake — Le hago un remake a tu tienda.",
    bajada: "Ya tenés tienda, pero no vende como debería.",
    badge: "Tienda Nube, Empretienda y WordPress",
    sections: [
      {
        heading: "Qué incluye",
        items: [
          "Rediseño tu tienda actual: para que venda, no solo para que se vea linda.",
          "Fichas que convencen: fotos, textos y señales de confianza.",
          "Variantes y combos que se entienden de una.",
          "Un camino de compra sin vueltas: del «me gusta» al «lo compré».",
        ],
      },
      {
        heading: "Qué gana tu marca",
        items: [
          "Que la gente que entra, compre (y no se vaya).",
          "Menos preguntas por DM, más ventas solas.",
          "Una tienda que trabaja para vos las 24 horas.",
        ],
      },
    ],
    forYou: [
      "Ya tenés tienda pero casi no vende.",
      "Entra gente pero casi nadie compra.",
      "Tu tienda no se parece a tu marca.",
      "Recibís muchas preguntas que la tienda debería responder.",
      "Sentís que la armaste «como pudiste».",
    ],
  },
  {
    num: "04",
    id: "servicio-04",
    gridTitle: "Landing Page",
    gridDesc: "Una página web para tu marca, producto o servicio.",
    title: "Landing Page — Si tu negocio necesita una landing para vender, te la diseño.",
    bajada: "Para profesionales y marcas que venden un producto o servicio.",
    sections: [
      {
        heading: "Qué incluye",
        items: [
          "Una página con un solo objetivo: vender. Todo empuja hacia la venta.",
          "Pensada para convertir visitas en clientes, no para decorar.",
          "Diseño a medida de tu marca, no una plantilla.",
          "Lista en menos de una semana.",
        ],
      },
      {
        heading: "Qué gana tu marca",
        items: [
          "Un lugar propio para vender tu producto o servicio.",
          "Que quien entra haga lo que querés: comprar, reservar, escribirte.",
          "Una imagen profesional que genera confianza y vende.",
        ],
      },
    ],
    forYou: [
      "Sos profesional o tenés un negocio y querés vender online.",
      "Necesitás una página con un solo objetivo: convertir.",
      "Querés un sitio profesional y rápido.",
      "No necesitás una tienda entera, solo una página que venda.",
      "Querés medir e ir directo a la conversión.",
    ],
  },
  {
    num: "05",
    id: "servicio-05",
    gridTitle: "La experiencia completa",
    gridDesc: "El viaje entero de tu cliente, de principio a fin.",
    title: "La experiencia completa — El viaje entero de tu cliente, de punta a punta.",
    sections: [
      {
        heading: "Qué incluye",
        items: [
          "Conocé a tu cliente ideal: mapa de empatía, qué siente y su viaje de compra.",
          "Tu feed, pensado para atraer a quien te compra.",
          "Del feed a la tienda, sin que se pierdan en el camino.",
          "Tu tienda que vende: completa y optimizada.",
          "El post-venta, para que vuelvan a comprarte.",
        ],
      },
      {
        heading: "Qué gana tu marca",
        items: [
          "El perfil de tu cliente ideal: quién es, qué siente y qué necesita.",
          "Su mapa de empatía y su viaje de compra, paso a paso.",
          "Una marca que vende parejo de principio a fin.",
          "Clientes que compran, vuelven y te recomiendan.",
          "Una experiencia que se siente cuidada en cada paso.",
        ],
      },
    ],
    forYou: [
      "Querés resolver todo de una vez.",
      "Tu marca ya vende pero querés escalar.",
      "Buscás acompañamiento, no solo una entrega.",
      "Querés una experiencia cuidada de punta a punta.",
      "Estás lista para el paso grande.",
    ],
  },
  {
    num: "06",
    id: "servicio-06",
    gridTitle: "Extras",
    gridDesc: "Servicios sueltos y puntuales.",
    title: "Extras — ¿Necesitás algo puntual?",
    sections: [
      {
        heading: "",
        items: [
          "Mensajes de post-venta para que vuelvan a comprarte.",
          "El viaje de compra de tu cliente ordenado y sin fugas.",
          "Packs de producto armados para vender más.",
          "Fichas de producto que venden.",
          "Banners para tu tienda que acompañen tus campañas.",
        ],
      },
    ],
    cta: "Escribime y lo vemos →",
  },
];
