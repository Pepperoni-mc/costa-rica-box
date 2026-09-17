/* Datos de muestra compartidos por el panel y las actas.
   Sin backend: esto es lo que un sistema real traería de una base de datos. */
window.ZARPA = (function(){

  /* piezas por movimiento; las de las recolecciones son las mismas que
     siguen en bodega, para que el acta y el inventario cuadren */
  var KITS = {
    'ZRP-2026-0041': [
      {sn:'TP-T14-9012',   it:'Laptop ThinkPad T14 Gen 4',   en:'ThinkPad T14 Gen 4 laptop',   c:'good'},
      {sn:'LN-DOCK-4501',  it:'Dock Lenovo USB-C',           en:'Lenovo USB-C dock',           c:'good'},
      {sn:'DL-U2722-1240', it:'Monitor Dell U2722D',         en:'Dell U2722D monitor',         c:'good'},
      {sn:'DL-U2722-1241', it:'Monitor Dell U2722D',         en:'Dell U2722D monitor',         c:'good'},
      {sn:'JB-EVO2-0150',  it:'Headset Jabra Evolve2 40',    en:'Jabra Evolve2 40 headset',    c:'good'},
      {sn:'LG-MK270-3400', it:'Teclado y mouse Logitech',    en:'Logitech keyboard and mouse', c:'good'}
    ],
    'ZRP-2026-0038': [
      {sn:'TP-T14-8842',   it:'Laptop ThinkPad T14 Gen 4',   en:'ThinkPad T14 Gen 4 laptop',   c:'good'},
      {sn:'LN-DOCK-4419',  it:'Dock Lenovo USB-C',           en:'Lenovo USB-C dock',           c:'good'},
      {sn:'DL-U2722-1190', it:'Monitor Dell U2722D',         en:'Dell U2722D monitor',         c:'good'},
      {sn:'DL-U2722-1191', it:'Monitor Dell U2722D',         en:'Dell U2722D monitor',         c:'good'},
      {sn:'JB-EVO2-0111',  it:'Headset Jabra Evolve2 40',    en:'Jabra Evolve2 40 headset',    c:'good'},
      {sn:'LG-MK270-3345', it:'Teclado y mouse Logitech',    en:'Logitech keyboard and mouse', c:'good'}
    ],
    'ZRP-2026-0035': [
      {sn:'TP-T14-8990',   it:'Laptop ThinkPad T14 Gen 4',   en:'ThinkPad T14 Gen 4 laptop',   c:'good'},
      {sn:'LN-DOCK-4488',  it:'Dock Lenovo USB-C',           en:'Lenovo USB-C dock',           c:'good'},
      {sn:'DL-U2722-1233', it:'Monitor Dell U2722D',         en:'Dell U2722D monitor',         c:'good'},
      {sn:'JB-EVO2-0142',  it:'Headset Jabra Evolve2 40',    en:'Jabra Evolve2 40 headset',    c:'good'},
      {sn:'LG-MK270-3392', it:'Teclado y mouse Logitech',    en:'Logitech keyboard and mouse', c:'good'}
    ],
    'ZRP-2026-0032': [
      {sn:'TP-T14-8720',   it:'Laptop ThinkPad T14 Gen 3',   en:'ThinkPad T14 Gen 3 laptop',   c:'fair'},
      {sn:'LN-DOCK-4411',  it:'Dock Lenovo USB-C',           en:'Lenovo USB-C dock',           c:'good'},
      {sn:'DL-P2419-7701', it:'Monitor Dell P2419H',         en:'Dell P2419H monitor',         c:'good'},
      {sn:'JB-EVO2-0098',  it:'Headset Jabra Evolve2 40',    en:'Jabra Evolve2 40 headset',    c:'good'},
      {sn:'LG-MK270-3310', it:'Teclado y mouse Logitech',    en:'Logitech keyboard and mouse', c:'good'}
    ],
    'ZRP-2026-0028': [
      {sn:'TP-E14-5610',   it:'Laptop ThinkPad E14 Gen 5',   en:'ThinkPad E14 Gen 5 laptop',   c:'good'},
      {sn:'LN-DOCK-4470',  it:'Dock Lenovo USB-C',           en:'Lenovo USB-C dock',           c:'good'},
      {sn:'DL-P2419-7760', it:'Monitor Dell P2419H',         en:'Dell P2419H monitor',         c:'good'},
      {sn:'JB-EVO2-0130',  it:'Headset Jabra Evolve2 40',    en:'Jabra Evolve2 40 headset',    c:'good'},
      {sn:'LG-MK270-3377', it:'Teclado y mouse Logitech',    en:'Logitech keyboard and mouse', c:'good'}
    ],
    'ZRP-2026-0026': [
      {sn:'TP-T14-8613',   it:'Laptop ThinkPad T14 Gen 3',   en:'ThinkPad T14 Gen 3 laptop',   c:'out'},
      {sn:'LN-DOCK-4390',  it:'Dock Lenovo USB-C',           en:'Lenovo USB-C dock',           c:'good'},
      {sn:'DL-P2419-7732', it:'Monitor Dell P2419H',         en:'Dell P2419H monitor',         c:'fair'},
      {sn:'LG-MK270-3288', it:'Teclado y mouse Logitech',    en:'Logitech keyboard and mouse', c:'good'}
    ]
  };

  var MOVES = [
    {f:'ZRP-2026-0046', d:'2026-09-16', p:'01', k:'pickup', z:'Pérez Zeledón',   s:'transit',   courier:'02'},
    {f:'ZRP-2026-0045', d:'2026-09-15', p:'02', k:'deploy', z:'Heredia centro',  s:'transit',   courier:'01'},
    {f:'ZRP-2026-0044', d:'2026-09-15', p:'03', k:'pickup', z:'Liberia',         s:'transit',   courier:'03'},
    {f:'ZRP-2026-0041', d:'2026-09-11', p:'04', k:'deploy', z:'Desamparados',    s:'done',      courier:'01'},
    {f:'ZRP-2026-0040', d:'2026-09-09', p:'05', k:'pickup', z:'Cartago centro',  s:'signing',   courier:'02'},
    {f:'ZRP-2026-0038', d:'2026-09-08', p:'06', k:'pickup', z:'Santa Cruz',      s:'done',      courier:'03'},
    {f:'ZRP-2026-0035', d:'2026-09-04', p:'07', k:'deploy', z:'Alajuela centro', s:'done',      courier:'01'},
    {f:'ZRP-2026-0032', d:'2026-09-02', p:'08', k:'pickup', z:'Limón centro',    s:'done',      courier:'02'},
    {f:'ZRP-2026-0028', d:'2026-08-28', p:'09', k:'deploy', z:'Grecia',          s:'done',      courier:'01'},
    {f:'ZRP-2026-0026', d:'2026-08-26', p:'10', k:'pickup', z:'San Ramón',       s:'done',      courier:'03'},
    {f:'ZRP-2026-0049', d:'2026-09-22', p:'11', k:'deploy', z:'Nicoya',          s:'scheduled', courier:'03'},
    {f:'ZRP-2026-0050', d:'2026-09-23', p:'12', k:'pickup', z:'Turrialba',       s:'scheduled', courier:'02'}
  ];

  MOVES.forEach(function(m){ m.items = KITS[m.f] || null; m.doc = !!m.items && m.s === 'done'; });

  /* lo que sigue en bodega: las piezas de las recolecciones cerradas */
  var INV = [
    {sn:'TP-T14-8842',   it:'Laptop ThinkPad T14 Gen 4', en:'ThinkPad T14 Gen 4 laptop',   u:'06', c:'good', l:'A-03', since:'2026-09-08'},
    {sn:'LN-DOCK-4419',  it:'Dock Lenovo USB-C',         en:'Lenovo USB-C dock',           u:'06', c:'good', l:'A-03', since:'2026-09-08'},
    {sn:'DL-U2722-1190', it:'Monitor Dell U2722D',       en:'Dell U2722D monitor',         u:'06', c:'good', l:'A-03', since:'2026-09-08'},
    {sn:'DL-U2722-1191', it:'Monitor Dell U2722D',       en:'Dell U2722D monitor',         u:'06', c:'good', l:'A-03', since:'2026-09-08'},
    {sn:'JB-EVO2-0111',  it:'Headset Jabra Evolve2 40',  en:'Jabra Evolve2 40 headset',    u:'06', c:'good', l:'A-03', since:'2026-09-08'},
    {sn:'LG-MK270-3345', it:'Teclado y mouse Logitech',  en:'Logitech keyboard and mouse', u:'06', c:'good', l:'A-03', since:'2026-09-08'},
    {sn:'TP-T14-8720',   it:'Laptop ThinkPad T14 Gen 3', en:'ThinkPad T14 Gen 3 laptop',   u:'08', c:'fair', l:'A-05', since:'2026-09-02'},
    {sn:'LN-DOCK-4411',  it:'Dock Lenovo USB-C',         en:'Lenovo USB-C dock',           u:'08', c:'good', l:'A-05', since:'2026-09-02'},
    {sn:'DL-P2419-7701', it:'Monitor Dell P2419H',       en:'Dell P2419H monitor',         u:'08', c:'good', l:'A-05', since:'2026-09-02'},
    {sn:'JB-EVO2-0098',  it:'Headset Jabra Evolve2 40',  en:'Jabra Evolve2 40 headset',    u:'08', c:'good', l:'A-05', since:'2026-09-02'},
    {sn:'LG-MK270-3310', it:'Teclado y mouse Logitech',  en:'Logitech keyboard and mouse', u:'08', c:'good', l:'A-05', since:'2026-09-02'},
    {sn:'TP-T14-8613',   it:'Laptop ThinkPad T14 Gen 3', en:'ThinkPad T14 Gen 3 laptop',   u:'10', c:'out',  l:'C-01', since:'2026-08-26'},
    {sn:'LN-DOCK-4390',  it:'Dock Lenovo USB-C',         en:'Lenovo USB-C dock',           u:'10', c:'good', l:'B-02', since:'2026-08-26'},
    {sn:'DL-P2419-7732', it:'Monitor Dell P2419H',       en:'Dell P2419H monitor',         u:'10', c:'fair', l:'B-02', since:'2026-08-26'},
    {sn:'LG-MK270-3288', it:'Teclado y mouse Logitech',  en:'Logitech keyboard and mouse', u:'10', c:'good', l:'B-02', since:'2026-08-26'},
    {sn:'TP-E14-5521',   it:'Laptop ThinkPad E14 Gen 5', en:'ThinkPad E14 Gen 5 laptop',   u:'13', c:'good', l:'B-04', since:'2026-07-30'},
    {sn:'LN-DOCK-4402',  it:'Dock Lenovo USB-C',         en:'Lenovo USB-C dock',           u:'13', c:'good', l:'B-04', since:'2026-07-30'},
    {sn:'DL-U2419-6650', it:'Monitor Dell U2419H',       en:'Dell U2419H monitor',         u:'14', c:'good', l:'B-06', since:'2026-07-14'}
  ];

  return {
    company:{es:'Compañía de prueba', en:'Test company'},
    MOVES:MOVES,
    INV:INV,
    byFolio:function(f){
      for (var i = 0; i < MOVES.length; i++) if (MOVES[i].f === f) return MOVES[i];
      return null;
    }
  };
})();
