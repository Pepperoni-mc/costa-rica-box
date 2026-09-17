# Costa Rica Box — sitio demo

Landing de una página para el servicio de **recolección, custodia y despliegue de equipo de
cómputo dentro de Costa Rica** (la versión local de lo que Retriever / Workwize / Firstbase
hacen en EE. UU.).

El contenido sale de la propuesta "Ruta de Retorno". La dirección de arte está inspirada en
[indisea.com](https://indisea.com): papel crema, tipografía grotesca enorme, resaltador ámbar,
secciones numeradas en mono y un acento de color en línea fina.

## Archivos

- `index.html` — el sitio completo. Un solo archivo, sin build, sin dependencias.
  Las tipografías (Archivo + IBM Plex Mono) vienen de Google Fonts; sin internet
  cae a las del sistema y se ve bien igual.

## Cómo verlo

Doble clic en `index.html`, o publicado en GitHub Pages (ver abajo).

## El selector de marca

Abajo a la izquierda hay un panel de demo que cambia **nombre, logo y color de acento**
en vivo entre cinco opciones. Para producción se elimina:

1. Borrar el `<div id="switcher">…</div>`.
2. Borrar el bloque CSS `/* demo brand switcher */`.
3. En el JS, dejar solo la marca elegida en `BRANDS` (o fijar `applyBrand(BRANDS[0])`).

## Qué falta para que sea real

- Nombre definitivo, dominio y correo (hoy son `hola@ejemplo.cr` y `+506 0000 0000`).
- Logo vectorial final (los cinco de la demo son bocetos en SVG, sirven como punto de partida).
- Fotos reales: bodega, mensajero, equipo empacado. Hoy no hay ni una foto.
- Confirmar la póliza de seguro antes de publicar cualquier promesa de cobertura.
- Versión en inglés si el comprador es una empresa de EE. UU.

## Publicar cambios

```
git add -A
git commit -m "..."
git push
```

GitHub Pages republica solo en un par de minutos.
