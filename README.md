# Catify Landing

Landing de pre-lanzamiento de Catify, construida con Vite, React 19, TypeScript, Tailwind CSS 4 y `HashRouter`.

## Desarrollo

```sh
npm install
npm run dev
npm run build
npm run preview
npm run lint
```

`npm run build` incluye la comprobación de TypeScript (`tsc -b`).

## Contenido

Los textos y datos editables están en `src/data/`. Cambia únicamente esos archivos para actualizar planes, preguntas, servicios, pasos, funciones, tipos de negocio o contacto.

## GitHub Pages

En **Settings → Pages → Source**, selecciona **GitHub Actions**. El workflow compila y publica automáticamente al hacer push a `main`. El hash del router permite que las rutas funcionen en GitHub Pages. Para una URL de proyecto, el workflow configura automáticamente `VITE_BASE=/<repo>/`.

## Formularios futuros

La lista de espera y las cotizaciones actuales no envían formularios ni guardan datos; abren mensajes prearmados de WhatsApp o correo. Cuando se conecten formularios reales, deben integrarse con el backend de Catify, validando y protegiendo los datos desde el servidor.
