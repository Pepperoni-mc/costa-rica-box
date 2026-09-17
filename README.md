# Zarpa — sitio del servicio

Web del servicio de **recolección, custodia y despliegue de equipo de cómputo dentro de
Costa Rica**, para empresas extranjeras con personal remoto tico. Es la versión local de lo
que hacen Retriever, Workwize, Deel IT y Firstbase, que no operan en el país.

Dirección de arte inspirada en [indisea.com](https://indisea.com).

## Archivos

- `index.html` — el sitio. Sin build, sin dependencias.
- `dashboard.html` — panel de cliente de muestra, sin login.
- `acta.html` — el acta de entrega de un movimiento; recibe el folio por query string
  (`acta.html?f=ZRP-2026-0032`) y se guarda como PDF con el botón o con Ctrl+P.
- `data.js` — los movimientos, las piezas de cada acta y el inventario de bodega.
  Es lo único que habría que reemplazar por datos reales.

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

`dashboard.html` no tiene login ni backend: todo sale de `data.js`. Los filtros, la búsqueda
y los indicadores se calculan de verdad sobre esos datos, así que las tablas nunca se
contradicen entre sí.

**Ver PDF** abre `acta.html` con el folio del movimiento: el acta de entrega y recepción
completa — encabezado, datos de la visita, detalle por número de serie, declaración y los
dos bloques de firma con marca de tiempo y huella. El botón *Guardar como PDF* imprime con
estilos de página carta, sin la barra. Lleva marca de agua **MUESTRA** y lo dice en el pie:
es un documento de demostración.

Para que sea real hay que conectarlo a una base y ponerle acceso.

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

## Panel de operación

`admin.html` es la consola de quien genera los movimientos. No tiene login.

- **Hoy** — cinco indicadores, la lista de lo que vence o ya venció, y las
  últimas ocho semanas en barras.
- **Cola de despacho** — todos los clientes en una tabla. Se asigna mensajero
  con el selector de la fila y se hace avanzar el estado con el botón:
  sin agendar → agendado → en ruta → pendiente de firma → cerrado.
- **Rutas del día** — las paradas de cada mensajero.
- **Bodega** — ocupación por módulo.
- **Clientes** — una fila por cuenta.

El botón *Nuevo movimiento* (o la tecla **N**) abre el alta. La cédula se
formatea sola a `1-1234-5678` y se valida antes de crear.

El SLA se calcula contra la fecha objetivo: 48 horas dentro del GAM, 72 fuera.
La fecha de "hoy" está fija en `data.js` para que la demo no se desactualice.

## Colores

La pareja recolección / despliegue y los estados salen de una paleta de señal
plana y saturada, no de tintes pastel. Las dos parejas se verificaron con el
validador de la guía de visualización (banda de luminosidad, croma mínimo,
separación para daltonismo, separación en visión normal y contraste):

| | Claro | Oscuro |
|---|---|---|
| Recolección | `#1E7FB8` | `#3C9ED2` |
| Despliegue | `#C2681A` | `#C87C2E` |

Los estados tienen su propia paleta reservada (verde, naranja, rojo, gris) y
nunca se usan para otra cosa. Siempre llevan etiqueta de texto, nunca solo color.

## Modo oscuro

Botón en las cuatro páginas. Respeta la preferencia del sistema hasta que se
elige a mano; la elección se recuerda. Los pasos oscuros son propios, no un
volteo automático de los claros. El acta se imprime siempre en claro.
