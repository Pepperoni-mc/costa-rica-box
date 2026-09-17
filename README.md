# Sitio del servicio — equipo de cómputo en Costa Rica

Web de una página para el servicio de **recolección, custodia y despliegue de equipo de
cómputo dentro de Costa Rica**: la versión local de lo que Retriever, Workwize o Firstbase
hacen en Estados Unidos.

Es el sitio de la empresa, no la propuesta comercial. No lleva tarifas: el precio se cotiza
por movimiento desde el formulario de contacto.

Dirección de arte inspirada en [indisea.com](https://indisea.com): papel crema, tipografía
grotesca enorme, resaltador ámbar, secciones numeradas en mono y un acento de color en línea fina.

## Archivos

- `index.html` — el sitio completo. Un solo archivo, sin build, sin dependencias.
  Las tipografías (Archivo + IBM Plex Mono) vienen de Google Fonts; sin internet cae a las
  del sistema y se ve bien igual.

## Secciones

1. Inicio
2. Servicios — recolección, custodia, despliegue
3. Cómo funciona — cuatro pasos
4. Para quién
5. Cobertura — GAM 48 h, resto del país 72 h
6. Qué recibís — actas, inventario, reportes
7. Preguntas frecuentes
8. Contacto — formulario

## El selector de marca

Abajo a la izquierda hay un panel de demo que cambia **nombre, logo y color de acento**
en vivo entre cinco opciones: Zarpa, Caucel, Siete, Gatera y Manigordo. Para producción:

1. Borrar el `<div id="switcher">…</div>`.
2. Borrar el bloque CSS `/* demo brand switcher */`.
3. En el JS, dejar solo la marca elegida en `BRANDS`.

## Qué falta para que sea real

- Nombre definitivo, dominio y correo — hoy son `hola@ejemplo.cr` y `+506 0000 0000`.
- Logo vectorial final. Los cinco de la demo son bocetos SVG, sirven de punto de partida.
- Fotos reales: bodega, mensajero, equipo empacado. Hoy no hay ninguna.
- El formulario no tiene backend: arma un `mailto:`. Para recibirlo en el correo de verdad,
  conectarlo a Formspree, Basin o un Google Form.
- Confirmar la póliza de seguro antes de publicar cualquier promesa de cobertura.
- Versión en inglés si el comprador es una empresa de Estados Unidos.

## Publicar cambios

```
git add -A
git commit -m "..."
git push
```

GitHub Pages republica solo en un par de minutos.
