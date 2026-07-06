export interface Trainer {
  id: string;
  name: string;
  specialty: { es: string; en: string };
  bio: { es: string; en: string };
  image: string;
}

export const trainers: Trainer[] = [
  {
    id: "diego",
    name: "Diego Villca",
    specialty: { es: "Fuerza y Cross Training", en: "Strength & Cross Training" },
    bio: {
      es: "Ex atleta de halterofilia con 10 años formando coaches de cross training en Bolivia.",
      en: "Former weightlifting athlete with 10 years training cross-training coaches in Bolivia.",
    },
    image: "https://picsum.photos/seed/mtm-trainer-diego/400/400",
  },
  {
    id: "camila",
    name: "Camila Rojas",
    specialty: { es: "Yoga y Pilates", en: "Yoga & Pilates" },
    bio: {
      es: "Instructora certificada en Hatha Yoga, especializada en movilidad y recuperación activa.",
      en: "Certified Hatha Yoga instructor, specialized in mobility and active recovery.",
    },
    image: "https://picsum.photos/seed/mtm-trainer-camila/400/400",
  },
  {
    id: "hugo",
    name: "Hugo Mamani",
    specialty: { es: "Boxeo y HIIT", en: "Boxing & HIIT" },
    bio: {
      es: "Ex boxeador amateur, hoy dedicado a llevar la disciplina del ring al entrenamiento fitness.",
      en: "Former amateur boxer, now dedicated to bringing ring discipline into fitness training.",
    },
    image: "https://picsum.photos/seed/mtm-trainer-hugo/400/400",
  },
  {
    id: "valeria",
    name: "Valeria Choque",
    specialty: { es: "Nutrición y Personalizado", en: "Nutrition & Personal Training" },
    bio: {
      es: "Nutricionista deportiva y entrenadora personal, diseña planes integrales de cuerpo y alimentación.",
      en: "Sports nutritionist and personal trainer, designs comprehensive body and nutrition plans.",
    },
    image: "https://picsum.photos/seed/mtm-trainer-valeria/400/400",
  },
];

export interface Plan {
  id: string;
  name: { es: string; en: string };
  price: number;
  period: { es: string; en: string };
  highlight?: boolean;
  features: { es: string[]; en: string[] };
}

export const plans: Plan[] = [
  {
    id: "basico",
    name: { es: "Básico", en: "Basic" },
    price: 150,
    period: { es: "por mes", en: "per month" },
    features: {
      es: ["Acceso a sala de musculación", "1 clase grupal por semana", "Horario diurno"],
      en: ["Weight room access", "1 group class per week", "Daytime schedule"],
    },
  },
  {
    id: "premium",
    name: { es: "Premium", en: "Premium" },
    price: 250,
    period: { es: "por mes", en: "per month" },
    highlight: true,
    features: {
      es: ["Acceso ilimitado a sala de musculación", "Clases grupales ilimitadas", "Horario completo", "1 evaluación física al mes"],
      en: ["Unlimited weight room access", "Unlimited group classes", "Full schedule", "1 physical assessment per month"],
    },
  },
  {
    id: "elite",
    name: { es: "Elite", en: "Elite" },
    price: 380,
    period: { es: "por mes", en: "per month" },
    features: {
      es: ["Todo lo del plan Premium", "2 sesiones personalizadas al mes", "Plan de nutrición incluido", "Acceso prioritario a reservas"],
      en: ["Everything in Premium", "2 personal sessions per month", "Nutrition plan included", "Priority booking access"],
    },
  },
];

export interface FAQ {
  question: { es: string; en: string };
  answer: { es: string; en: string };
}

export const faqs: FAQ[] = [
  {
    question: { es: "¿Necesito experiencia previa para empezar?", en: "Do I need previous experience to start?" },
    answer: {
      es: "No. Todas nuestras clases tienen niveles de intensidad ajustables y nuestros entrenadores adaptan cada ejercicio a tu nivel.",
      en: "No. All our classes have adjustable intensity levels and our trainers adapt every exercise to your level.",
    },
  },
  {
    question: { es: "¿Puedo congelar mi membresía?", en: "Can I freeze my membership?" },
    answer: {
      es: "Sí, puedes pausar tu membresía hasta 15 días al mes por motivos de viaje o salud, avisando con 48 horas de anticipación.",
      en: "Yes, you can pause your membership for up to 15 days a month for travel or health reasons, with 48 hours notice.",
    },
  },
  {
    question: { es: "¿Las clases requieren reserva previa?", en: "Do classes require advance booking?" },
    answer: {
      es: "Sí, todas las clases grupales tienen cupo limitado. Puedes reservar tu lugar desde la sección de Reservas de esta página.",
      en: "Yes, all group classes have limited capacity. You can book your spot from the Booking section of this page.",
    },
  },
  {
    question: { es: "¿Ofrecen planes de nutrición?", en: "Do you offer nutrition plans?" },
    answer: {
      es: "Sí, nuestra nutricionista deportiva diseña planes personalizados, incluidos automáticamente en el plan Elite.",
      en: "Yes, our sports nutritionist designs personalized plans, automatically included in the Elite plan.",
    },
  },
  {
    question: { es: "¿Tienen casilleros y duchas?", en: "Do you have lockers and showers?" },
    answer: {
      es: "Sí, contamos con vestidores con casilleros diarios y duchas de agua caliente para socios de todos los planes.",
      en: "Yes, we have changing rooms with daily lockers and hot showers for members of all plans.",
    },
  },
];
