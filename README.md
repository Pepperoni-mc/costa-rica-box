# Zarpa — sitio del servicio

Web del servicio de **recolección, custodia y despliegue de equipo de cómputo dentro de
Costa Rica**, para empresas extranjeras con personal remoto tico. Es la versión local de lo
que hacen Retriever, Workwize, Deel IT y Firstbase, que no operan en el país.

Dirección de arte inspirada en [indisea.com](https://indisea.com).

## Archivos

- `index.html` — el sitio. Un solo archivo, sin build, sin dependencias.
- `dashboard.html` — panel de cliente de muestra, sin login, con datos de ejemplo.

Las tipografías (Archivo + IBM Plex Mono) vienen de Google Fonts; sin internet cae a las del
sistema y se ve bien igual.

## Idiomas

Botón **EN / ES** en la barra superior. El español vive en el HTML y el inglés en atributos
`data-en` (y `data-en-ph` para los placeholders). Para cambiar un texto hay que tocar los dos.
El idioma elegido se recuerda y se comparte entre el sitio y el panel.

## Animaciones

- Cargador que cuenta de 000 a 100.
- Titulares que se revelan por líneas enmascaradas (el partidor de líneas está en el JS y
  se vuelve a correr al cambiar de idioma, al cargar las tipografías y al cambiar el ancho).
- Resaltador ámbar que barre de palabra en palabra.
- El gráfico de la portada se dibuja trazo por trazo.
- Los cuatro pasos de "Cómo funciona" se apilan uno sobre otro al bajar (`position:sticky`).
- Números que cuentan al entrar en pantalla, botones que se rellenan al pasar el mouse.

Todo respeta `prefers-reduced-motion`.

## Panel de cliente

`dashboard.html` no tiene login ni backend: los movimientos y el inventario son arreglos en
el JS (`MOVES` e `INV`). Los filtros y la búsqueda funcionan de verdad sobre esos datos.
Sirve para enseñar la idea; para que sea real hay que conectarlo a una base y ponerle acceso.

## Qué falta

- Correo, teléfono y dominio reales — hoy son `hola@ejemplo.cr` y `+506 0000 0000`.
- Logo vectorial final. El de la demo es un SVG hecho a mano, sirve de punto de partida.
- Fotos: bodega, mensajero, equipo empacado. No hay ninguna.
- El formulario arma un `mailto:`. Para recibirlo de verdad: Formspree, Basin o un Google Form.
- Confirmar la póliza de seguro antes de sostener lo que dice la sección de preguntas.

## Publicar cambios

```
git add -A
git commit -m "..."
git push
```

GitHub Pages republica solo en un par de minutos.
