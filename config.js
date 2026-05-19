// ─────────────────────────────────────────────────────────────────────────────
// CONFIG.JS — Torneo dei Quartieri (Maschile) · V Edizione 2026
// Modifica solo questo file per personalizzare il sito.
// ─────────────────────────────────────────────────────────────────────────────

const CONFIG = {

  // ── DATI GOOGLE SHEETS ────────────────────────────────────────────────────
  spreadsheetId: '1mT1OIclqD3ClJHaBlB00YoW2lB_JiiHERFCz6stPZys',
  apiKey:        'AIzaSyAdN7BX1xID-YDW2ZwAoivSbAPbqz_Tr50',

  // ── IDENTITÀ ──────────────────────────────────────────────────────────────
  title:       'TORNEO DEI QUARTIERI',
  titleAccent: 'QUARTIERI',           // parola colorata nel titolo h1
  edition:     'V EDIZIONE',
  tagline:     'Il torneo amatoriale di padel che accende la passione sportiva nei rioni della città di Benevento.',
  eyebrow:     'Benevento · Padel Amatoriale · 2026',
  footerSub:   'V Edizione · Benevento 2026 · Padel Amatoriale',
  footerCredit:'Fatto con passione per i rioni di Benevento',
  pageTitle:   'Torneo dei Quartieri – V Edizione · Benevento Padel 2026',

  // ── SOCIAL ────────────────────────────────────────────────────────────────
  social: {
    facebook:  'https://www.facebook.com/groups/400903518309647',
    instagram: 'https://www.instagram.com/torneo_dei_rioni_padel_bn/',
  },

  // ── PALETTE ───────────────────────────────────────────────────────────────
  // Colori CSS (verranno iniettati come variabili :root)
  palette: {
    '--accent':       '#2db866',
    '--accent-light': '#3fd97a',
    '--accent-dim':   '#0f2a1a',
    '--accent-mid':   '#1a4d2e',
    '--bg':           '#080c09',
    '--bg2':          '#0d1210',
    '--card':         '#111714',
    '--border':       '#1e2b22',
    '--muted':        '#5a7060',
    '--text':         '#e8f0ea',
    '--gold':         '#f5c842',
    // Colore mese nel calendario
    '--cal-month-color': '#2db866',
    // Filtro mappa
    '--map-filter': 'grayscale(0.2) invert(0.88) hue-rotate(120deg)',
  },

  // ── GIRONI ────────────────────────────────────────────────────────────────
  // Ogni girone ha: name (= nome foglio Google Sheet), label, colori CSS,
  // classi CSS helper e il markup SVG del simbolo.
  gironi: [
    {
      name:      'Orsini',
      label:     'GIRONE ORSINI',
      color:     '#e8922a',
      // Variabili CSS usate per pill/header/classifica
      cssVars: {
        '--g-color':  '#e8922a',
        '--g-dim':    '#2a1a08',
        '--g-mid':    '#4d3010',
        '--g-muted':  '#70502a',
      },
      // Classi CSS (devono esistere nell'HTML)
      dotCls:    'girone-dot-o',
      headerCls: 'gg-orsini',
      ptsCls:    'pts-orsini',
      cardCls:   'girone-orsini',
      filterPillCls: 'f-orsini',
      // SVG symbol inline (viewBox + paths)
      svgId:     'sym-orsini',
      svgViewBox:'0 0 64 64',
      svgPaths: `
        <rect x="4"  y="0"  width="10" height="12" rx="1" fill="currentColor"/>
        <rect x="18" y="0"  width="10" height="12" rx="1" fill="currentColor"/>
        <rect x="32" y="0"  width="10" height="12" rx="1" fill="currentColor"/>
        <rect x="46" y="0"  width="10" height="12" rx="1" fill="currentColor"/>
        <rect x="4"  y="10" width="52" height="46" rx="1" fill="currentColor"/>
        <rect x="24" y="16" width="16" height="12" rx="1" fill="black" opacity="0.35"/>
        <rect x="22" y="38" width="20" height="18" rx="0" fill="black" opacity="0.35"/>
        <path d="M22 46 Q32 34 42 46" fill="black" opacity="0.35"/>
        <rect x="4"  y="10" width="6"  height="46" rx="0" fill="currentColor" opacity="0.6"/>
        <rect x="50" y="10" width="6"  height="46" rx="0" fill="currentColor" opacity="0.6"/>
        <rect x="0"  y="56" width="64" height="8" rx="1" fill="currentColor"/>`,
    },
    {
      name:      'Svevi',
      label:     'GIRONE SVEVI',
      color:     '#9b6fd9',
      cssVars: {
        '--g-color':  '#9b6fd9',
        '--g-dim':    '#1a0f2a',
        '--g-mid':    '#32214d',
        '--g-muted':  '#604070',
      },
      dotCls:    'girone-dot-s',
      headerCls: 'gg-svevi',
      ptsCls:    'pts-svevi',
      cardCls:   'girone-svevi',
      filterPillCls: 'f-svevi',
      svgId:     'sym-svevi',
      svgViewBox:'0 0 64 72',
      svgPaths: `
        <path d="M4 4 H60 V42 Q60 64 32 70 Q4 64 4 42 Z" fill="currentColor"/>
        <path d="M10 10 H54 V42 Q54 60 32 65 Q10 60 10 42 Z" fill="currentColor" opacity="0.5"/>
        <rect x="29" y="14" width="6" height="36" rx="1" fill="black" opacity="0.3"/>
        <rect x="14" y="28" width="36" height="6" rx="1" fill="black" opacity="0.3"/>
        <circle cx="32" cy="32" r="7" fill="black" opacity="0.2"/>`,
    },
    {
      name:      'Longobardi',
      label:     'GIRONE LONGOBARDI',
      color:     '#2dc4c4',
      cssVars: {
        '--g-color':  '#2dc4c4',
        '--g-dim':    '#082a2a',
        '--g-mid':    '#104d4d',
        '--g-muted':  '#306060',
      },
      dotCls:    'girone-dot-l',
      headerCls: 'gg-longo',
      ptsCls:    'pts-longo',
      cardCls:   'girone-longo',
      filterPillCls: 'f-longo',
      svgId:     'sym-longo',
      svgViewBox:'0 0 64 72',
      svgPaths: `
        <polygon points="30,4 34,4 38,52 26,52" fill="currentColor"/>
        <rect x="10" y="50" width="44" height="7" rx="2" fill="currentColor"/>
        <rect x="28" y="57" width="8" height="10" rx="1" fill="currentColor" opacity="0.8"/>
        <ellipse cx="32" cy="68" rx="7" ry="4" fill="currentColor"/>
        <polygon points="32,6 33,6 35,50 31,50" fill="white" opacity="0.15"/>`,
    },
  ],

  // ── GIORNATE ──────────────────────────────────────────────────────────────
  giornate: {
    labels: ['I. Giornata','II. Giornata','III. Giornata','IV. Giornata','V. Giornata'],
    roman:  ['I','II','III','IV','V'],
  },

  // ── FEATURE FLAGS ─────────────────────────────────────────────────────────
  features: {
    calendarFilters: true,   // pillole filtro girone nel calendario
    levelLegend:     true,   // legenda livelli (Bianco/Giallo/Verde/Arancione/Rosso) nella sezione Squadre
    loadMoreButton:  true,   // pulsante "Carica settimane successive"
  },

  // ── LEGENDA LIVELLI ───────────────────────────────────────────────────────
  // Usata solo se features.levelLegend = true
  levelLegend: [
    { label: 'Bianco',    cls: 'lev-white'  },
    { label: 'Giallo',    cls: 'lev-yellow' },
    { label: 'Verde',     cls: 'lev-green'  },
    { label: 'Arancione', cls: 'lev-orange' },
    { label: 'Rosso',     cls: 'lev-red'    },
  ],

  // ── STORICO EDIZIONI ──────────────────────────────────────────────────────
  storia: [
    { edition: 'I Edizione · 2022',  winner: 'ARCO E DINTORNI', current: false },
    { edition: 'II Edizione · 2023', winner: 'CENTRO STORICO',  current: false },
    { edition: 'III Edizione · 2024',winner: 'VALLE CAUDINA',   current: false },
    { edition: 'IV Edizione · 2025', winner: 'COCCHIA',         current: false },
    { edition: 'V Edizione · 2026',  winner: 'In corso',        current: true  },
  ],

  // ── VENUE ─────────────────────────────────────────────────────────────────
  venue: {
    name:       'MOOD SPORT VILLAGE',
    subtitle:   '3 campi da padel · Coperti · Panoramici',
    address:    'Strada Provinciale 17\n82010 Sant\'Angelo a Cupolo (BN)\nCampania, Italia',
    hours:      'Tutti i giorni · 08:30 – 00:00',
    services:   '🅿️ Parcheggio gratuito\n🚿 Spogliatoi\n🍹 Bar & snack\n📶 WiFi\n🎾 Noleggio attrezzatura',
    playtomicUrl: 'https://playtomic.io/tenant/362372fa-8ece-439e-8a3b-42de92c3f824',
    mapsUrl:    'https://www.google.com/maps?q=41.09364247,14.81436365',
    imageUrl:   'https://res.cloudinary.com/playtomic/image/upload/c_scale,w_1200,q_80,f_auto/pro/tenants/362372fa-8ece-439e-8a3b-42de92c3f824/1708523265153',
    embedUrl:   'https://maps.google.com/maps?q=41.09364247,14.81436365&z=15&output=embed',
  },

  // ── COLORI SQUADRE (carte rosa) ───────────────────────────────────────────
  // Palette ciclica per le card squadre
  squadreColori: [
    { h:'#1a6b3a', b:'#0d3d20', t:'#4fd988', dim:'rgba(79,217,136,0.12)'  },
    { h:'#1a3d6b', b:'#0d2040', t:'#4fa8d9', dim:'rgba(79,168,217,0.12)'  },
    { h:'#6b1a1a', b:'#3d0d0d', t:'#d94f4f', dim:'rgba(217,79,79,0.12)'   },
    { h:'#5a3a0a', b:'#321f05', t:'#e8a030', dim:'rgba(232,160,48,0.12)'  },
    { h:'#3a1a6b', b:'#200d3d', t:'#9b6fd9', dim:'rgba(155,111,217,0.12)' },
    { h:'#1a5a5a', b:'#0d3232', t:'#3fd9d9', dim:'rgba(63,217,217,0.12)'  },
    { h:'#6b4a1a', b:'#3d2a0d', t:'#d9a04f', dim:'rgba(217,160,79,0.12)'  },
    { h:'#1a6b5a', b:'#0d3d32', t:'#4fd9b8', dim:'rgba(79,217,184,0.12)'  },
    { h:'#6b1a4a', b:'#3d0d2a', t:'#d94fa8', dim:'rgba(217,79,168,0.12)'  },
    { h:'#2e5a1a', b:'#1a3209', t:'#82d94f', dim:'rgba(130,217,79,0.12)'  },
    { h:'#1a2e6b', b:'#0d1a3d', t:'#4f6fd9', dim:'rgba(79,111,217,0.12)'  },
    { h:'#6b2e1a', b:'#3d1a0d', t:'#d96f4f', dim:'rgba(217,111,79,0.12)'  },
    { h:'#4a6b1a', b:'#2a3d0d', t:'#b8d94f', dim:'rgba(184,217,79,0.12)'  },
    { h:'#1a4a6b', b:'#0d2a3d', t:'#4fb8d9', dim:'rgba(79,184,217,0.12)'  },
  ],

};
