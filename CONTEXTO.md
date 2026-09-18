# Contexto del proyecto

Este archivo es para retomar el proyecto sin tener que reconstruir el razonamiento.
El README dice **qué** hay; esto dice **por qué**.

---

## De dónde viene

El negocio es **recolección, custodia y despliegue de equipo de cómputo dentro de
Costa Rica** para empresas extranjeras con personal remoto tico. Es la versión local
de lo que hacen Retriever (helloretriever.com), Workwize, Deel IT y Firstbase — ninguno
opera en Costa Rica, y ese es el hueco.

- Nació de la propuesta **"Ruta de Retorno"**, hecha para **Jitasa** (primer prospecto).
  La propuesta vive en un artifact de Claude y en la conversación "Hello Retriever idea".
- Tarifas de esa propuesta, de septiembre 2026. **No van en la web pública**:
  $200 por movimiento dentro del GAM, $300 fuera; custodia $18 / $15 / $12 por puesto
  al mes según escalón (1-10, 11-25, 26+).

**Regla que salió de ahí:** el sitio habla del servicio y manda a cotizar. Los precios y
las comparativas con competidores son material de propuesta, no de la web.

---

## Estado actual

Cinco páginas, sin build, sin dependencias salvo dos CDN:

| Archivo | Qué es |
|---|---|
| `index.html` | El sitio público |
| `login.html` | Ingreso, con dos botones de test que entran directo |
| `dashboard.html` | Panel de cliente: sus movimientos, su inventario, sus actas, y solicitar |
| `admin.html` | Panel de operación: cola de despacho, rutas, bodega, clientes |
| `acta.html` | El acta de un movimiento; exporta PDF |
| `data.js` | Todos los datos de muestra y las utilidades compartidas |

Publicado en https://pepperoni-mc.github.io/costa-rica-box/

---

## Decisiones que no se ven en el código

**La dirección de arte sale de [indisea.com](https://indisea.com).** No fue inspiración
vaga: le leí los estilos computados con el navegador. De ahí salen IBM Plex Sans y Mono,
el botón de 56 px en píldora con texto de 16 px peso 500 sin mayúsculas, el menú numerado
con colores de señal, y el cursor de punto sólido que sigue al puntero sin interpolación.
**Si hay que decidir algo de forma, la respuesta está en ese sitio** — vale la pena volver
a medirlo antes de inventar.

**El color es funcional, no decorativo.** Recolección azul, despliegue naranja, y los
estados con su propia paleta reservada. Las dos parejas pasaron el validador de la guía de
visualización (banda de luminosidad, croma mínimo, separación para daltonismo, separación
en visión normal, contraste) en claro y en oscuro. **Si se cambia un color, hay que
volver a pasarlo por ahí**, no elegirlo a ojo.

**Los chips son planos y de contorno, no pastel redondeado.** Se cambiaron a propósito:
el pastel con esquina redonda hacía que el panel se leyera como plantilla genérica. Lo
único con relleno sólido es lo vencido, porque si todo grita, nada grita.

**El fondo es gris muy claro con superficies blancas**, no crema. El crema original venía
de indisea pero se leía beige.

**Las personas son "Persona 01..14" y las empresas "Compañía de prueba" / "Cliente de
prueba 0X".** No hay nombres inventados a propósito: es data de demo y tiene que verse
como tal. La cédula sí tiene formato real de Costa Rica (`P-XXXX-XXXX`) porque es el
identificador del colaborador y va en el acta.

**El acta lleva marca de agua "MUESTRA" y lo dice en el pie.** Es un documento con firmas,
marca de tiempo y huella; sin esa marca podría circular como si fuera real.

**El ingreso dice de frente que es una demo.** No hay autenticación y nada se envía a
ningún lado. Los campos están para enseñar el flujo. Cuando haya autenticación de verdad,
se quitan el aviso y los botones de test; el formulario ya está armado.

---

## Cómo están los datos

Todo sale de `data.js`. Un movimiento se ve así:

```js
{ f:'ZRP-2026-0041',  // folio
  c:'c1',             // cliente
  d:'2026-09-11',     // fecha objetivo
  p:'04',             // colaborador (la cédula vive en PEOPLE)
  k:'pickup',         // pickup | deploy
  z:'Desamparados',   // zona
  gam:true,           // dentro del GAM: SLA 48 h, si no 72 h
  s:'done',           // new | scheduled | transit | signing | done
  m:'m1',             // id del mensajero, null si no hay
  w:'08:00 – 12:00',  // ventana
  items:[...] }       // piezas; si las tiene y está cerrado, hay acta
```

- `TODAY` está fijo en `2026-09-17` a propósito, para que la demo no se desactualice sola.
  **El SLA se calcula contra esa fecha.** Si se mueve, cambian los "vencidos".
- Las solicitudes que el cliente manda se guardan en `localStorage` bajo
  `zarpa_solicitudes` y `data.js` las mezcla al cargar. Por eso una solicitud creada en el
  panel de cliente aparece de verdad en la cola del panel de operación.
  `ZARPA.clearRequests()` las borra.

---

## Trampas donde ya caí

Para no repetirlas:

1. **`gh` usa la cuenta del trabajo por defecto.** Este repo es de `Pepperoni-mc`. Antes de
   crear repos personales: `gh auth switch --user Pepperoni-mc`.
2. **`git push` falla con 403** porque el credential helper de Windows agarra la otra
   cuenta. Funciona así:
   `git push "https://x-access-token:$(gh auth token)@github.com/Pepperoni-mc/costa-rica-box.git" main`
3. **El marcado de un modal tiene que ir antes del `<script>`** que lo cablea. Una vez quedó
   después y el script reventaba en la primera línea, llevándose el dibujado de las tablas.
4. **Las reglas viejas ganan por especificidad.** `.type.pickup` pesa más que `.type`
   aunque el bloque nuevo esté después. Al reemplazar estilos, revisar el selector completo.
5. **Al renombrar un campo en `data.js` hay que buscarlo en las cuatro páginas.**
   `courier` pasó a `m` y el acta siguió mostrando "Mensajero undefined" un rato.
6. **La portada solo se revela cuando termina el contador del cargador.** Hay un
   temporizador de respaldo a 2.6 s para que nunca quede en blanco si el navegador frena
   ese intervalo. No quitarlo.
7. **El resaltador ámbar lleva texto oscuro**, así que el color tiene que acompañar al
   estado: sin resaltar vuelve a la tinta normal, o en modo oscuro queda invisible.

---

## Cómo verificar antes de publicar

No hay tests. Lo que uso:

```bash
# sintaxis de los scripts embebidos y llaves de CSS balanceadas
node -e "const fs=require('fs');for(const f of ['index.html','login.html','dashboard.html','admin.html','acta.html']){const s=fs.readFileSync(f,'utf8');[...s.matchAll(/<script(?![^>]*src)[^>]*>([\s\S]*?)<\/script>/g)].forEach((x,i)=>{try{new Function(x[1])}catch(e){console.log(f,i,'FAIL',e.message)}});const c=(s.match(/<style>([\s\S]*?)<\/style>/)||[])[1]||'';if((c.match(/{/g)||[]).length!==(c.match(/}/g)||[]).length)console.log(f,'CSS DESBALANCEADO')}"
```

Y después mirarlo en el navegador de verdad. Varios errores de esta lista aparecieron solo
al ver la pantalla, no al leer el código.

Para móvil, en vez de pelear con el tamaño de ventana: cargar la página en un iframe de
390 px dentro de otra del mismo origen y medir `documentElement.scrollWidth`. Si da más de
390, hay desborde.

---

## Qué falta para que deje de ser demo

- **Nombre definitivo.** "Zarpa" salió de una lista de cinco opciones felinas
  (Zarpa, Caucel, Siete, Gatera, Manigordo). No está decidido.
- Correo, teléfono y dominio reales. Hoy son `hola@ejemplo.cr` y `+506 0000 0000`.
- Logo vectorial final. El actual es un SVG hecho a mano; sirve de punto de partida.
- Fotos: bodega, mensajero, equipo empacado. No hay ninguna, y es lo que más se nota.
- El formulario de contacto arma un `mailto:`. Para recibirlo de verdad: Formspree, Basin
  o un Google Form.
- Confirmar la póliza de seguro antes de sostener lo que dice la sección de preguntas.
- Autenticación real y una base de datos detrás de `data.js`.
- **Pendiente fuera del código:** borrar el repo viejo en la cuenta del trabajo
  (`sebastian-vl/costa-rica-box`, ya está en privado). Necesita
  `gh auth refresh -h github.com -s delete_repo` o hacerlo desde la web.
