/* Datos de muestra compartidos por el panel de cliente, el panel de operación
   y las actas. Sin backend: esto es lo que un sistema real traería de una base.
   La fecha "de hoy" es fija para que la demo siempre se vea igual. */
window.ZARPA = (function(){

  var TODAY = '2026-09-17';

  var CLIENTS = [
    {id:'c1', n:{es:'Compañía de prueba',    en:'Test company'}},
    {id:'c2', n:{es:'Cliente de prueba 02',  en:'Test client 02'}},
    {id:'c3', n:{es:'Cliente de prueba 03',  en:'Test client 03'}},
    {id:'c4', n:{es:'Cliente de prueba 04',  en:'Test client 04'}}
  ];

  /* El identificador del colaborador es la cédula. Formato nacional
     P-XXXX-XXXX (dígito de provincia, tomo, asiento). Son de prueba. */
  var PEOPLE = {
    '01':'1-1834-0290', '02':'1-1602-0778', '03':'5-0412-0931', '04':'1-1477-0356',
    '05':'3-0388-0642', '06':'5-0299-0187', '07':'2-0714-0503', '08':'7-0186-0844',
    '09':'2-0651-0229', '10':'2-0803-0415', '11':'5-0377-0668', '12':'3-0509-0772',
    '13':'1-1290-0034', '14':'1-1755-0961',
    '21':'1-1388-0517', '22':'1-1049-0283', '23':'1-1621-0740', '24':'6-0402-0158',
    '25':'4-0233-0896', '26':'2-0577-0361',
    '31':'1-1166-0429', '32':'6-0318-0605', '33':'1-1843-0092', '34':'1-1204-0736',
    '35':'3-0466-0281', '36':'4-0195-0558',
    '41':'7-0243-0817', '42':'1-1592-0374', '43':'4-0308-0126', '44':'2-0489-0693',
    '45':'5-0261-0540'
  };

  var COURIERS = [
    {id:'m1', n:{es:'Mensajero 01', en:'Courier 01'}, zone:{es:'GAM',            en:'GAM'}},
    {id:'m2', n:{es:'Mensajero 02', en:'Courier 02'}, zone:{es:'GAM',            en:'GAM'}},
    {id:'m3', n:{es:'Mensajero 03', en:'Courier 03'}, zone:{es:'Fuera del GAM',  en:'Outside the GAM'}}
  ];

  /* piezas por acta; las de las recolecciones son las mismas que siguen
     en bodega, para que el acta y el inventario cuadren */
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
    ],
    'ZRP-2026-0039': [
      {sn:'HP-EB840-2201', it:'Laptop HP EliteBook 840',     en:'HP EliteBook 840 laptop',     c:'good'},
      {sn:'HP-DOCK-9910',  it:'Dock HP USB-C G5',            en:'HP USB-C G5 dock',            c:'good'},
      {sn:'DL-P2419-7788', it:'Monitor Dell P2419H',         en:'Dell P2419H monitor',         c:'good'},
      {sn:'LG-MK270-3401', it:'Teclado y mouse Logitech',    en:'Logitech keyboard and mouse', c:'good'}
    ],
    'ZRP-2026-0030': [
      {sn:'HP-EB840-2188', it:'Laptop HP EliteBook 840',     en:'HP EliteBook 840 laptop',     c:'fair'},
      {sn:'HP-DOCK-9902',  it:'Dock HP USB-C G5',            en:'HP USB-C G5 dock',            c:'good'},
      {sn:'DL-U2419-6702', it:'Monitor Dell U2419H',         en:'Dell U2419H monitor',         c:'good'},
      {sn:'JB-EVO2-0166',  it:'Headset Jabra Evolve2 40',    en:'Jabra Evolve2 40 headset',    c:'good'}
    ]
  };

  /* s: new (sin agendar) · scheduled (agendado) · transit (en ruta)
        signing (pendiente de firma) · done (cerrado)
     gam: true si la visita cae dentro del Gran Área Metropolitana (SLA 48 h) */
  var MOVES = [
    /* ---- cliente 1: el que ve el panel de cliente ---- */
    {f:'ZRP-2026-0050', c:'c1', d:'2026-09-23', p:'12', k:'pickup', z:'Turrialba',       gam:false, s:'scheduled', m:'m3', w:'08:00 – 12:00'},
    {f:'ZRP-2026-0049', c:'c1', d:'2026-09-22', p:'11', k:'deploy', z:'Nicoya',          gam:false, s:'scheduled', m:'m3', w:'13:00 – 17:00'},
    {f:'ZRP-2026-0046', c:'c1', d:'2026-09-16', p:'01', k:'pickup', z:'Pérez Zeledón',   gam:false, s:'transit',   m:'m3', w:'08:00 – 12:00'},
    {f:'ZRP-2026-0045', c:'c1', d:'2026-09-15', p:'02', k:'deploy', z:'Heredia centro',  gam:true,  s:'transit',   m:'m1', w:'13:00 – 17:00'},
    {f:'ZRP-2026-0044', c:'c1', d:'2026-09-15', p:'03', k:'pickup', z:'Liberia',         gam:false, s:'transit',   m:'m3', w:'08:00 – 12:00'},
    {f:'ZRP-2026-0041', c:'c1', d:'2026-09-11', p:'04', k:'deploy', z:'Desamparados',    gam:true,  s:'done',      m:'m1', w:'08:00 – 12:00'},
    {f:'ZRP-2026-0040', c:'c1', d:'2026-09-09', p:'05', k:'pickup', z:'Cartago centro',  gam:true,  s:'signing',   m:'m2', w:'13:00 – 17:00'},
    {f:'ZRP-2026-0038', c:'c1', d:'2026-09-08', p:'06', k:'pickup', z:'Santa Cruz',      gam:false, s:'done',      m:'m3', w:'08:00 – 12:00'},
    {f:'ZRP-2026-0035', c:'c1', d:'2026-09-04', p:'07', k:'deploy', z:'Alajuela centro', gam:true,  s:'done',      m:'m1', w:'08:00 – 12:00'},
    {f:'ZRP-2026-0032', c:'c1', d:'2026-09-02', p:'08', k:'pickup', z:'Limón centro',    gam:false, s:'done',      m:'m2', w:'13:00 – 17:00'},
    {f:'ZRP-2026-0028', c:'c1', d:'2026-08-28', p:'09', k:'deploy', z:'Grecia',          gam:true,  s:'done',      m:'m1', w:'08:00 – 12:00'},
    {f:'ZRP-2026-0026', c:'c1', d:'2026-08-26', p:'10', k:'pickup', z:'San Ramón',       gam:true,  s:'done',      m:'m3', w:'13:00 – 17:00'},

    /* ---- otros clientes: solo se ven en el panel de operación ---- */
    {f:'ZRP-2026-0052', c:'c2', d:'2026-09-18', p:'21', k:'pickup', z:'Santa Ana',       gam:true,  s:'new',       m:null, w:'—'},
    {f:'ZRP-2026-0051', c:'c4', d:'2026-09-18', p:'41', k:'deploy', z:'Puerto Viejo',    gam:false, s:'new',       m:null, w:'—'},
    {f:'ZRP-2026-0048', c:'c3', d:'2026-09-19', p:'31', k:'deploy', z:'Escazú',          gam:true,  s:'scheduled', m:'m2', w:'08:00 – 12:00'},
    {f:'ZRP-2026-0047', c:'c2', d:'2026-09-17', p:'22', k:'pickup', z:'Tibás',           gam:true,  s:'transit',   m:'m2', w:'13:00 – 17:00'},
    {f:'ZRP-2026-0043', c:'c3', d:'2026-09-15', p:'32', k:'pickup', z:'Golfito',         gam:false, s:'transit',   m:'m3', w:'08:00 – 12:00'},
    {f:'ZRP-2026-0042', c:'c4', d:'2026-09-12', p:'42', k:'deploy', z:'Curridabat',      gam:true,  s:'signing',   m:'m1', w:'08:00 – 12:00'},
    {f:'ZRP-2026-0039', c:'c2', d:'2026-09-10', p:'23', k:'pickup', z:'Moravia',         gam:true,  s:'done',      m:'m2', w:'13:00 – 17:00'},
    {f:'ZRP-2026-0037', c:'c3', d:'2026-09-07', p:'33', k:'deploy', z:'San Isidro',      gam:false, s:'done',      m:'m3', w:'08:00 – 12:00'},
    {f:'ZRP-2026-0034', c:'c4', d:'2026-09-03', p:'43', k:'pickup', z:'Belén',           gam:true,  s:'done',      m:'m1', w:'08:00 – 12:00'},
    {f:'ZRP-2026-0030', c:'c2', d:'2026-08-31', p:'24', k:'pickup', z:'Jacó',            gam:false, s:'done',      m:'m3', w:'13:00 – 17:00'},
    {f:'ZRP-2026-0027', c:'c3', d:'2026-08-27', p:'34', k:'deploy', z:'Coronado',        gam:true,  s:'done',      m:'m2', w:'08:00 – 12:00'},
    {f:'ZRP-2026-0024', c:'c2', d:'2026-08-21', p:'25', k:'deploy', z:'Heredia centro',  gam:true,  s:'done',      m:'m1', w:'13:00 – 17:00'},
    {f:'ZRP-2026-0021', c:'c4', d:'2026-08-18', p:'44', k:'pickup', z:'Upala',           gam:false, s:'done',      m:'m3', w:'08:00 – 12:00'},
    {f:'ZRP-2026-0018', c:'c3', d:'2026-08-12', p:'35', k:'pickup', z:'Cartago centro',  gam:true,  s:'done',      m:'m2', w:'08:00 – 12:00'},
    {f:'ZRP-2026-0015', c:'c2', d:'2026-08-06', p:'26', k:'deploy', z:'Alajuela centro', gam:true,  s:'done',      m:'m1', w:'13:00 – 17:00'},
    {f:'ZRP-2026-0012', c:'c4', d:'2026-07-30', p:'45', k:'pickup', z:'Nicoya',          gam:false, s:'done',      m:'m3', w:'08:00 – 12:00'},
    {f:'ZRP-2026-0009', c:'c3', d:'2026-07-23', p:'36', k:'deploy', z:'Santo Domingo',   gam:true,  s:'done',      m:'m2', w:'08:00 – 12:00'}
  ];

  MOVES.forEach(function(mv){ mv.items = KITS[mv.f] || null; mv.doc = !!mv.items && mv.s === 'done'; });

  /* lo que sigue en bodega */
  var INV = [
    {sn:'TP-T14-8842',   it:'Laptop ThinkPad T14 Gen 4', en:'ThinkPad T14 Gen 4 laptop',   cl:'c1', u:'06', c:'good', l:'A-03', since:'2026-09-08'},
    {sn:'LN-DOCK-4419',  it:'Dock Lenovo USB-C',         en:'Lenovo USB-C dock',           cl:'c1', u:'06', c:'good', l:'A-03', since:'2026-09-08'},
    {sn:'DL-U2722-1190', it:'Monitor Dell U2722D',       en:'Dell U2722D monitor',         cl:'c1', u:'06', c:'good', l:'A-03', since:'2026-09-08'},
    {sn:'DL-U2722-1191', it:'Monitor Dell U2722D',       en:'Dell U2722D monitor',         cl:'c1', u:'06', c:'good', l:'A-03', since:'2026-09-08'},
    {sn:'JB-EVO2-0111',  it:'Headset Jabra Evolve2 40',  en:'Jabra Evolve2 40 headset',    cl:'c1', u:'06', c:'good', l:'A-03', since:'2026-09-08'},
    {sn:'LG-MK270-3345', it:'Teclado y mouse Logitech',  en:'Logitech keyboard and mouse', cl:'c1', u:'06', c:'good', l:'A-03', since:'2026-09-08'},
    {sn:'TP-T14-8720',   it:'Laptop ThinkPad T14 Gen 3', en:'ThinkPad T14 Gen 3 laptop',   cl:'c1', u:'08', c:'fair', l:'A-05', since:'2026-09-02'},
    {sn:'LN-DOCK-4411',  it:'Dock Lenovo USB-C',         en:'Lenovo USB-C dock',           cl:'c1', u:'08', c:'good', l:'A-05', since:'2026-09-02'},
    {sn:'DL-P2419-7701', it:'Monitor Dell P2419H',       en:'Dell P2419H monitor',         cl:'c1', u:'08', c:'good', l:'A-05', since:'2026-09-02'},
    {sn:'JB-EVO2-0098',  it:'Headset Jabra Evolve2 40',  en:'Jabra Evolve2 40 headset',    cl:'c1', u:'08', c:'good', l:'A-05', since:'2026-09-02'},
    {sn:'LG-MK270-3310', it:'Teclado y mouse Logitech',  en:'Logitech keyboard and mouse', cl:'c1', u:'08', c:'good', l:'A-05', since:'2026-09-02'},
    {sn:'TP-T14-8613',   it:'Laptop ThinkPad T14 Gen 3', en:'ThinkPad T14 Gen 3 laptop',   cl:'c1', u:'10', c:'out',  l:'C-01', since:'2026-08-26'},
    {sn:'LN-DOCK-4390',  it:'Dock Lenovo USB-C',         en:'Lenovo USB-C dock',           cl:'c1', u:'10', c:'good', l:'B-02', since:'2026-08-26'},
    {sn:'DL-P2419-7732', it:'Monitor Dell P2419H',       en:'Dell P2419H monitor',         cl:'c1', u:'10', c:'fair', l:'B-02', since:'2026-08-26'},
    {sn:'LG-MK270-3288', it:'Teclado y mouse Logitech',  en:'Logitech keyboard and mouse', cl:'c1', u:'10', c:'good', l:'B-02', since:'2026-08-26'},
    {sn:'TP-E14-5521',   it:'Laptop ThinkPad E14 Gen 5', en:'ThinkPad E14 Gen 5 laptop',   cl:'c1', u:'13', c:'good', l:'B-04', since:'2026-07-30'},
    {sn:'LN-DOCK-4402',  it:'Dock Lenovo USB-C',         en:'Lenovo USB-C dock',           cl:'c1', u:'13', c:'good', l:'B-04', since:'2026-07-30'},
    {sn:'DL-U2419-6650', it:'Monitor Dell U2419H',       en:'Dell U2419H monitor',         cl:'c1', u:'14', c:'good', l:'B-06', since:'2026-07-14'},

    {sn:'HP-EB840-2201', it:'Laptop HP EliteBook 840',   en:'HP EliteBook 840 laptop',     cl:'c2', u:'23', c:'good', l:'A-07', since:'2026-09-10'},
    {sn:'HP-DOCK-9910',  it:'Dock HP USB-C G5',          en:'HP USB-C G5 dock',            cl:'c2', u:'23', c:'good', l:'A-07', since:'2026-09-10'},
    {sn:'DL-P2419-7788', it:'Monitor Dell P2419H',       en:'Dell P2419H monitor',         cl:'c2', u:'23', c:'good', l:'A-07', since:'2026-09-10'},
    {sn:'LG-MK270-3401', it:'Teclado y mouse Logitech',  en:'Logitech keyboard and mouse', cl:'c2', u:'23', c:'good', l:'A-07', since:'2026-09-10'},
    {sn:'HP-EB840-2188', it:'Laptop HP EliteBook 840',   en:'HP EliteBook 840 laptop',     cl:'c2', u:'24', c:'fair', l:'A-09', since:'2026-08-31'},
    {sn:'HP-DOCK-9902',  it:'Dock HP USB-C G5',          en:'HP USB-C G5 dock',            cl:'c2', u:'24', c:'good', l:'A-09', since:'2026-08-31'},
    {sn:'DL-U2419-6702', it:'Monitor Dell U2419H',       en:'Dell U2419H monitor',         cl:'c2', u:'24', c:'good', l:'A-09', since:'2026-08-31'},
    {sn:'JB-EVO2-0166',  it:'Headset Jabra Evolve2 40',  en:'Jabra Evolve2 40 headset',    cl:'c2', u:'24', c:'good', l:'A-09', since:'2026-08-31'},
    {sn:'TP-T14-8501',   it:'Laptop ThinkPad T14 Gen 3', en:'ThinkPad T14 Gen 3 laptop',   cl:'c3', u:'35', c:'good', l:'B-08', since:'2026-08-12'},
    {sn:'LN-DOCK-4301',  it:'Dock Lenovo USB-C',         en:'Lenovo USB-C dock',           cl:'c3', u:'35', c:'good', l:'B-08', since:'2026-08-12'},
    {sn:'DL-U2419-6611', it:'Monitor Dell U2419H',       en:'Dell U2419H monitor',         cl:'c3', u:'35', c:'good', l:'B-08', since:'2026-08-12'},
    {sn:'TP-T14-8477',   it:'Laptop ThinkPad T14 Gen 3', en:'ThinkPad T14 Gen 3 laptop',   cl:'c4', u:'44', c:'out',  l:'C-02', since:'2026-08-18'},
    {sn:'DL-P2419-7655', it:'Monitor Dell P2419H',       en:'Dell P2419H monitor',         cl:'c4', u:'44', c:'fair', l:'B-10', since:'2026-08-18'},
    {sn:'LG-MK270-3190', it:'Teclado y mouse Logitech',  en:'Logitech keyboard and mouse', cl:'c4', u:'44', c:'good', l:'B-10', since:'2026-08-18'},
    {sn:'TP-E14-5388',   it:'Laptop ThinkPad E14 Gen 5', en:'ThinkPad E14 Gen 5 laptop',   cl:'c4', u:'45', c:'good', l:'B-12', since:'2026-07-30'},
    {sn:'LN-DOCK-4255',  it:'Dock Lenovo USB-C',         en:'Lenovo USB-C dock',           cl:'c4', u:'45', c:'good', l:'B-12', since:'2026-07-30'}
  ];

  /* estantería: capacidad por módulo. C es el módulo de equipo fuera de servicio. */
  var RACKS = [
    {id:'A', cap:44, label:{es:'Módulo A · activo',        en:'Rack A · active'}},
    {id:'B', cap:40, label:{es:'Módulo B · activo',        en:'Rack B · active'}},
    {id:'C', cap:16, label:{es:'Módulo C · fuera de servicio', en:'Rack C · decommissioned'}}
  ];

  /* ---------- utilidades ---------- */
  function days(iso, n){
    var p = iso.split('-'), d = new Date(+p[0], +p[1] - 1, +p[2]);
    d.setDate(d.getDate() + n);
    return d.getFullYear() + '-' + ('0' + (d.getMonth() + 1)).slice(-2) + '-' + ('0' + d.getDate()).slice(-2);
  }
  function diffDays(a, b){
    var pa = a.split('-'), pb = b.split('-');
    return Math.round((new Date(+pb[0], +pb[1] - 1, +pb[2]) - new Date(+pa[0], +pa[1] - 1, +pa[2])) / 86400000);
  }

  return {
    TODAY:TODAY,
    CLIENTS:CLIENTS,
    COURIERS:COURIERS,
    MOVES:MOVES,
    INV:INV,
    RACKS:RACKS,
    PEOPLE:PEOPLE,
    company:{es:'Compañía de prueba', en:'Test company'},

    /* cédula del colaborador; los creados desde el panel la traen consigo */
    ced:function(id){ return PEOPLE[id] || '—'; },
    setCed:function(id, v){ PEOPLE[id] = v; },

    byFolio:function(f){
      for (var i = 0; i < MOVES.length; i++) if (MOVES[i].f === f) return MOVES[i];
      return null;
    },
    client:function(id){
      for (var i = 0; i < CLIENTS.length; i++) if (CLIENTS[i].id === id) return CLIENTS[i];
      return null;
    },
    courier:function(id){
      for (var i = 0; i < COURIERS.length; i++) if (COURIERS[i].id === id) return COURIERS[i];
      return null;
    },
    slaHours:function(mv){ return mv.gam ? 48 : 72; },
    dueDate:function(mv){ return days(mv.d, mv.gam ? 2 : 3); },

    /* met · ok · risk (vence hoy o mañana) · late */
    slaState:function(mv){
      if (mv.s === 'done') return 'met';
      var left = diffDays(TODAY, days(mv.d, mv.gam ? 2 : 3));
      if (left < 0) return 'late';
      if (left <= 1) return 'risk';
      return 'ok';
    },
    daysLeft:function(mv){ return diffDays(TODAY, days(mv.d, mv.gam ? 2 : 3)); },
    days:days,
    diffDays:diffDays,

    nextFolio:function(){
      var max = 0;
      MOVES.forEach(function(mv){
        var n = parseInt(mv.f.split('-')[2], 10);
        if (n > max) max = n;
      });
      return 'ZRP-2026-' + ('000' + (max + 1)).slice(-4);
    }
  };
})();
