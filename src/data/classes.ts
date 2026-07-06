export interface GymClass {
  id: string;
  name: { es: string; en: string };
  category: { es: string; en: string };
  intensity: "baja" | "media" | "alta";
  duration: number;
  description: { es: string; en: string };
  longDescription: { es: string; en: string };
  image: string;
  gallery: string[];
  schedule: { day: { es: string; en: string }; time: string }[];
  tags: string[];
}

export const classes: GymClass[] = [
  {
    id: "funcional",
    name: { es: "Entrenamiento Funcional", en: "Functional Training" },
    category: { es: "Fuerza", en: "Strength" },
    intensity: "alta",
    duration: 50,
    description: {
      es: "Movimientos multiarticulares que mejoran fuerza, equilibrio y coordinación para la vida real.",
      en: "Multi-joint movements that improve strength, balance, and coordination for real life.",
    },
    longDescription: {
      es: "Combina ejercicios con el propio peso corporal, kettlebells, bandas y TRX en circuitos de alta exigencia. Ideal para quienes buscan un cuerpo más fuerte y funcional sin depender de máquinas.",
      en: "Combines bodyweight exercises, kettlebells, bands, and TRX in demanding circuits. Ideal for those seeking a stronger, more functional body without relying on machines.",
    },
    image: "https://picsum.photos/seed/mtm-funcional/900/650",
    gallery: ["https://picsum.photos/seed/mtm-funcional-1/700/500", "https://picsum.photos/seed/mtm-funcional-2/700/500"],
    schedule: [
      { day: { es: "Lunes", en: "Monday" }, time: "07:00" },
      { day: { es: "Miércoles", en: "Wednesday" }, time: "18:00" },
      { day: { es: "Viernes", en: "Friday" }, time: "07:00" },
    ],
    tags: ["fuerza", "cardio"],
  },
  {
    id: "crosstraining",
    name: { es: "Cross Training", en: "Cross Training" },
    category: { es: "Fuerza y resistencia", en: "Strength & conditioning" },
    intensity: "alta",
    duration: 60,
    description: {
      es: "Entrenamiento variado de alta intensidad inspirado en el levantamiento y la gimnasia.",
      en: "High-intensity varied training inspired by weightlifting and gymnastics.",
    },
    longDescription: {
      es: "Rutinas diferentes cada día (WOD) que combinan levantamiento olímpico, gimnasia y acondicionamiento metabólico. Entrenamiento en grupo con coach certificado.",
      en: "Different routines every day (WOD) combining olympic lifting, gymnastics, and metabolic conditioning. Group training with a certified coach.",
    },
    image: "https://picsum.photos/seed/mtm-cross/900/650",
    gallery: ["https://picsum.photos/seed/mtm-cross-1/700/500", "https://picsum.photos/seed/mtm-cross-2/700/500"],
    schedule: [
      { day: { es: "Martes", en: "Tuesday" }, time: "19:00" },
      { day: { es: "Jueves", en: "Thursday" }, time: "19:00" },
      { day: { es: "Sábado", en: "Saturday" }, time: "09:00" },
    ],
    tags: ["fuerza", "cardio", "resistencia"],
  },
  {
    id: "spinning",
    name: { es: "Spinning", en: "Spinning" },
    category: { es: "Cardio", en: "Cardio" },
    intensity: "alta",
    duration: 45,
    description: {
      es: "Ciclismo indoor al ritmo de la música para quemar calorías y mejorar la resistencia.",
      en: "Indoor cycling to the beat of the music to burn calories and improve endurance.",
    },
    longDescription: {
      es: "Clases grupales sobre bicicletas estáticas con cambios de ritmo, sprints y subidas simuladas. Apta para todos los niveles, cada persona regula su propia resistencia.",
      en: "Group classes on stationary bikes with pace changes, sprints, and simulated climbs. Suitable for all levels, each person controls their own resistance.",
    },
    image: "https://picsum.photos/seed/mtm-spinning/900/650",
    gallery: ["https://picsum.photos/seed/mtm-spinning-1/700/500", "https://picsum.photos/seed/mtm-spinning-2/700/500"],
    schedule: [
      { day: { es: "Lunes", en: "Monday" }, time: "18:30" },
      { day: { es: "Miércoles", en: "Wednesday" }, time: "06:30" },
    ],
    tags: ["cardio"],
  },
  {
    id: "yoga",
    name: { es: "Yoga", en: "Yoga" },
    category: { es: "Movilidad", en: "Mobility" },
    intensity: "baja",
    duration: 60,
    description: {
      es: "Posturas y respiración consciente para mejorar flexibilidad y reducir el estrés.",
      en: "Postures and mindful breathing to improve flexibility and reduce stress.",
    },
    longDescription: {
      es: "Sesiones de Hatha y Vinyasa yoga guiadas para todos los niveles, enfocadas en la movilidad articular, el control de la respiración y la calma mental.",
      en: "Hatha and Vinyasa yoga sessions guided for all levels, focused on joint mobility, breath control, and mental calm.",
    },
    image: "https://picsum.photos/seed/mtm-yoga/900/650",
    gallery: ["https://picsum.photos/seed/mtm-yoga-1/700/500", "https://picsum.photos/seed/mtm-yoga-2/700/500"],
    schedule: [
      { day: { es: "Martes", en: "Tuesday" }, time: "07:00" },
      { day: { es: "Jueves", en: "Thursday" }, time: "07:00" },
    ],
    tags: ["movilidad", "bajo-impacto"],
  },
  {
    id: "boxeo",
    name: { es: "Boxeo Fitness", en: "Boxing Fitness" },
    category: { es: "Cardio y fuerza", en: "Cardio & strength" },
    intensity: "alta",
    duration: 50,
    description: {
      es: "Golpeo, esquiva y trabajo de saco para liberar tensión y tonificar todo el cuerpo.",
      en: "Punching, dodging, and bag work to release tension and tone the whole body.",
    },
    longDescription: {
      es: "Combinaciones de boxeo sobre saco y manoplas, combinadas con ejercicios de fuerza. No requiere experiencia previa ni contacto entre alumnos.",
      en: "Boxing combinations on bags and pads, combined with strength exercises. No prior experience or contact between students required.",
    },
    image: "https://picsum.photos/seed/mtm-boxeo/900/650",
    gallery: ["https://picsum.photos/seed/mtm-boxeo-1/700/500", "https://picsum.photos/seed/mtm-boxeo-2/700/500"],
    schedule: [
      { day: { es: "Lunes", en: "Monday" }, time: "19:30" },
      { day: { es: "Viernes", en: "Friday" }, time: "18:00" },
    ],
    tags: ["cardio", "fuerza"],
  },
  {
    id: "musculacion",
    name: { es: "Sala de Musculación", en: "Weight Room" },
    category: { es: "Fuerza", en: "Strength" },
    intensity: "media",
    duration: 90,
    description: {
      es: "Acceso libre a máquinas y pesas libres con asesoría de nuestros entrenadores.",
      en: "Free access to machines and free weights with guidance from our trainers.",
    },
    longDescription: {
      es: "Espacio equipado con máquinas de última generación, rack de sentadillas, mancuernas hasta 50kg y zona de peso libre. Nuestros entrenadores están disponibles para corregir técnica.",
      en: "Space equipped with state-of-the-art machines, squat racks, dumbbells up to 50kg, and a free-weight zone. Our trainers are available to correct technique.",
    },
    image: "https://picsum.photos/seed/mtm-pesas/900/650",
    gallery: ["https://picsum.photos/seed/mtm-pesas-1/700/500", "https://picsum.photos/seed/mtm-pesas-2/700/500"],
    schedule: [{ day: { es: "Lunes a sábado", en: "Monday to Saturday" }, time: "06:00 - 21:00" }],
    tags: ["fuerza"],
  },
  {
    id: "zumba",
    name: { es: "Zumba", en: "Zumba" },
    category: { es: "Baile y cardio", en: "Dance & cardio" },
    intensity: "media",
    duration: 45,
    description: {
      es: "Coreografías al ritmo de música latina para bajar de peso divirtiéndote.",
      en: "Choreographies to Latin music rhythms to lose weight while having fun.",
    },
    longDescription: {
      es: "Clase grupal de baile fitness con ritmos como cumbia, reggaetón y merengue. No se necesita experiencia previa en baile.",
      en: "Group dance fitness class with rhythms like cumbia, reggaeton, and merengue. No previous dance experience needed.",
    },
    image: "https://picsum.photos/seed/mtm-zumba/900/650",
    gallery: ["https://picsum.photos/seed/mtm-zumba-1/700/500", "https://picsum.photos/seed/mtm-zumba-2/700/500"],
    schedule: [
      { day: { es: "Martes", en: "Tuesday" }, time: "18:00" },
      { day: { es: "Sábado", en: "Saturday" }, time: "10:00" },
    ],
    tags: ["cardio", "baile"],
  },
  {
    id: "pilates",
    name: { es: "Pilates", en: "Pilates" },
    category: { es: "Movilidad", en: "Mobility" },
    intensity: "baja",
    duration: 50,
    description: {
      es: "Fortalece el core y mejora la postura con ejercicios de control y precisión.",
      en: "Strengthen your core and improve posture with controlled, precise exercises.",
    },
    longDescription: {
      es: "Trabajo de bajo impacto enfocado en el centro del cuerpo, la postura y la respiración, con y sin accesorios como el aro pilates y bandas elásticas.",
      en: "Low-impact work focused on the body's center, posture, and breathing, with and without accessories like the pilates ring and elastic bands.",
    },
    image: "https://picsum.photos/seed/mtm-pilates/900/650",
    gallery: ["https://picsum.photos/seed/mtm-pilates-1/700/500", "https://picsum.photos/seed/mtm-pilates-2/700/500"],
    schedule: [
      { day: { es: "Miércoles", en: "Wednesday" }, time: "08:00" },
      { day: { es: "Viernes", en: "Friday" }, time: "08:00" },
    ],
    tags: ["movilidad", "bajo-impacto"],
  },
  {
    id: "hiit",
    name: { es: "HIIT", en: "HIIT" },
    category: { es: "Cardio intenso", en: "Intense cardio" },
    intensity: "alta",
    duration: 30,
    description: {
      es: "Intervalos de alta intensidad para maximizar la quema de grasa en poco tiempo.",
      en: "High-intensity intervals to maximize fat burning in a short time.",
    },
    longDescription: {
      es: "Bloques cortos de esfuerzo máximo seguidos de descansos breves. Una sesión de 30 minutos que combina fuerza y cardio para elevar tu metabolismo por horas.",
      en: "Short blocks of maximal effort followed by brief rests. A 30-minute session combining strength and cardio to boost your metabolism for hours.",
    },
    image: "https://picsum.photos/seed/mtm-hiit/900/650",
    gallery: ["https://picsum.photos/seed/mtm-hiit-1/700/500", "https://picsum.photos/seed/mtm-hiit-2/700/500"],
    schedule: [
      { day: { es: "Martes", en: "Tuesday" }, time: "06:30" },
      { day: { es: "Jueves", en: "Thursday" }, time: "18:30" },
    ],
    tags: ["cardio", "alta-intensidad"],
  },
  {
    id: "personalizado",
    name: { es: "Entrenamiento Personalizado", en: "Personal Training" },
    category: { es: "A tu medida", en: "Tailored" },
    intensity: "media",
    duration: 60,
    description: {
      es: "Plan individual diseñado según tus objetivos, con seguimiento uno a uno.",
      en: "Individual plan designed around your goals, with one-on-one follow-up.",
    },
    longDescription: {
      es: "Sesiones privadas con un entrenador dedicado que diseña tu programa de entrenamiento y nutrición, ajustándolo semana a semana según tu progreso.",
      en: "Private sessions with a dedicated trainer who designs your training and nutrition program, adjusting it week by week based on your progress.",
    },
    image: "https://picsum.photos/seed/mtm-personal/900/650",
    gallery: ["https://picsum.photos/seed/mtm-personal-1/700/500", "https://picsum.photos/seed/mtm-personal-2/700/500"],
    schedule: [{ day: { es: "A convenir", en: "By appointment" }, time: "flexible" }],
    tags: ["fuerza", "personalizado"],
  },
];
