# Demo: Formas de cargar estilos en una página web

Proyecto educativo que muestra varias maneras de aplicar CSS a un documento HTML:

- Estilos inline usando el atributo `style`.
- Estilos internos usando la etiqueta `<style>` dentro del documento.
- Estilos externos enlazados con `<link rel="stylesheet">`.
- Uso de `@import` dentro de una hoja CSS.
- Carga dinámica de hojas CSS creando un elemento `<link>` con JavaScript.
- Carga dinámica por `fetch` y creación de un elemento `<style>` con el contenido.
- Modificación de estilos con `element.style` (propiedad style en JS).
- Estilos aislados con Shadow DOM.

Cómo probar:

1. Abrir PowerShell y navegar a la carpeta del proyecto:

```powershell
cd "c:\Users\Joel Quilumba\Documents\AW-2025B\quilumba-2025-b-jpqm-web-gr1\04 - styles-demo"
```

2. Instalar dependencias (opcional, `http-server` funcionará por `npx`):

```powershell
npm install
```

3. Iniciar servidor:

```powershell
npm start
# abre http://localhost:8080
```

O puede usar `npx http-server . -p 8080` directamente si prefiere no instalar.

Explora `index.html` y usa los botones para ver cada forma de cargar estilos.
