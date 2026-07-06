# MTM Training Club — Proyecto INF460

Sitio web de un centro deportivo/gimnasio ficticio ("MTM Training Club", con sede en Potosí),
construido con **React + TypeScript + Vite**, cumpliendo los puntos del enunciado del Proyecto de Asignatura INF460.

## Cómo correr el proyecto localmente

Requiere Node.js 18 o superior.

```bash
npm install
npm run dev
```

Para generar la versión de producción:

```bash
npm run build
npm run preview
```

## Publicación automática en GitHub Pages (sin pasos manuales)

Este proyecto incluye un flujo de **GitHub Actions** (`.github/workflows/deploy.yml`) que compila
y publica el sitio automáticamente cada vez que subes cambios a la rama `main`. No necesitas generar
ni subir manualmente ninguna carpeta compilada.

### Configuración única (solo la primera vez)

1. Sube todo el contenido de este proyecto (tal como está, incluida la carpeta oculta `.github/`) a tu
   repositorio de GitHub llamado **`MTM`**.
   - Si subes los archivos manualmente por la web de GitHub, asegúrate de que tu explorador de archivos
     muestre archivos/carpetas ocultas (las que empiezan con `.`), o crea el archivo directamente en GitHub:
     botón **Add file → Create new file**, escribe la ruta completa `.github/workflows/deploy.yml`
     y pega el contenido de ese archivo.
2. En el repositorio, ve a **Settings → Pages**.
3. En "Build and deployment" → **Source**, elige **GitHub Actions** (no "Deploy from a branch").
4. Ve a la pestaña **Actions** del repositorio: debería aparecer un workflow "Deploy to GitHub Pages"
   ejecutándose (o dale a "Run workflow" si no se disparó solo).
5. Cuando el workflow termine en verde ✅, tu sitio estará en:

   **https://Rorigo-glitch.github.io/MTM/**

### Después de la primera vez

Cada vez que subas cambios a `main`, el sitio se recompila y publica solo. No hace falta correr
`npm run build` ni subir ninguna carpeta `dist/` o `docs/` a mano.

## Checklist de requisitos del enunciado

| Requisito | Dónde está resuelto |
|---|---|
| React.js + CSS + TypeScript | Todo el proyecto (`.tsx`, Vite + TS, CSS en `src/styles`) |
| Mínimo 10 páginas | `src/pages`: Home, Classes, ClassDetail, Gallery, Trainers, Plans, About, Booking, Contact, Weather, Faq, Blog, NotFound |
| Cantidad similar/superior de componentes | `src/components`: Header, Footer, Banner, SettingsPanel, ClassCard, MapView, GalleryLightbox, ContactForm, ScheduleForm, WeatherWidget, UiBits (TrainerCard, PlanCard, FAQItem, TestimonialCard, StatBox) |
| Página principal + menú de navegación | `Home.tsx` + `Header.tsx` (navbar visible en todas las páginas vía `App.tsx`) |
| Responsive (desktop y celular) | Media queries en `global.css` y `components.css`, menú hamburguesa en móvil |
| Cambio de tamaño de letra (5 niveles) | Selector en `SettingsPanel.tsx`, variable `--fs-scale` en `global.css` |
| Cambio de idioma (ES / EN) | `SettingsContext.tsx` + diccionario `translations.ts` |
| Al menos 3 combinaciones de color | Temas `fuerza`, `amanecer`, `oceano` en `global.css`, seleccionables desde `SettingsPanel.tsx` |
| Banner, menú, sección de info, pie de página | `Banner.tsx`, `Header.tsx`, secciones de cada página, `Footer.tsx` |
| Galería de fotos con características | `Gallery.tsx` + `GalleryLightbox.tsx` (filtros por categoría y modal con detalle) |
| Mapa geográfico de la empresa | `MapView.tsx` (Leaflet + OpenStreetMap) usado en `About.tsx` y `Contact.tsx` |
| Formulario, manejo de listas, imágenes | `Booking.tsx` / `ScheduleForm.tsx` (formulario + lista dinámica de horario semanal) |
| Datos desde una API externa | `WeatherWidget.tsx` consume la API pública **Open-Meteo** (sin API key) en tiempo real |

## Notas técnicas

- Las imágenes usan `picsum.photos` como placeholder libre de derechos.
- El routing usa `HashRouter` (URLs con `#`) para funcionar sin configuración extra en GitHub Pages.
- El mapa usa `react-leaflet` con capas de OpenStreetMap (gratuito, sin API key).
- El clima usa `https://api.open-meteo.com` (gratuito, sin API key).
- Las preferencias de idioma, tema y tamaño de letra se guardan en `localStorage`.
