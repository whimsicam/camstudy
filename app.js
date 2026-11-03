/* CAM Study — vedi SPEC.md. Vanilla JS, nessuna dipendenza. */
'use strict';

/* ---------- testi dell'interfaccia ---------- */
const T = {
  it: {
    today: 'Oggi', browse: 'Argomenti', program: 'Piano', map: 'Mappa', settings: 'Impostazioni',
    quick: 'Ripasso veloce', quickSub: 'Carte a caso da tutti gli argomenti. Tocca la carta per vedere la risposta.', spaced: 'Ripasso del giorno', spacedSub: 'Le carte che stai per dimenticare, scelte dall\'algoritmo.',
    studyTopic: 'Studia per argomento', studyTopicSub: 'Leggi le schede e ripassa solo le loro carte.', toRead: 'Da leggere', tapToFlip: 'Tocca per vedere la risposta',
    optional: 'facoltativo', writeAnswer: 'Scrivi la tua risposta', undo: 'Annulla', inArrivo: 'in arrivo', written: 'pronte', planCard: 'Piano colloqui',
    hello: 'Ciao CAM.', week: 'Settimana', of: 'di', dailyReview: 'Ripasso del giorno',
    cards: 'carte', minutes: 'minuti', about: 'circa', start: 'Inizia', resume: 'Riprendi', nothingDue: 'Niente da ripassare oggi. Puoi sfogliare quello che vuoi.',
    mixedNote: 'Mescolate da più argomenti. Prima rispondi, poi giri.',
    programCard: 'Programma colloqui', minimum: 'Minimo', extra: 'Extra', done: 'Fatto', doneMin: 'Fatto il minimo', doneExtra: 'Fatto anche l\'extra', wildcard: 'jolly',
    fiveMin: 'Hai 5 minuti?', fiveMinSub: 'Sfoglia le schede che vuoi, a caso o per argomento.',
    thisWeek: 'Questa settimana', noPile: 'Salti un giorno? Il programma slitta, non si accumula.',
    yourAnswer: 'La tua risposta, prima di girare', yourAnswerPh: 'Anche solo i punti chiave…', howSure: 'Quanto sei sicuro?',
    sure: 'Sicuro', unsure: 'Incerto', dunno: 'Non so', show: 'Mostra risposta', again: 'Di nuovo', hard: 'Difficile', good: 'Bene', easy: 'Facile',
    why: 'Perché', detail: 'Dettaglio', youWrote: 'Hai scritto', wasSure: 'Eri sicuro: occhio', askClaude: 'Chiedi a Claude', doubt: 'Ho un dubbio', openCard: 'Apri scheda',
    mixed: 'Ripasso misto', types: { F: 'Fatto', M: 'Meccanica', A: 'Domanda aperta', T: 'Trappola', X: 'Cross-topic' },
    sessionDone: 'Sessione finita', correct: 'giuste', strongest: 'Area più solida', weakest: 'Da rinforzare', backHome: 'Torna a Oggi',
    browseSub: 'Quando vuoi, quante ne vuoi. Le risposte date qui contano anche per il ripasso.',
    shuffleAll: 'Mescola tutto', shuffleSub: 'Carte a caso da tutte le schede', all: 'Tutte', weakOnly: 'Solo le deboli', interview: 'Da colloquio',
    sheets: 'schede', recall: 'Ricordi il', comingSoon: 'In arrivo', reviewSheet: 'Ripassa le carte di questa scheda', linked: 'Collegato a', sources: 'Fonti',
    mapSub: 'Quanto ricordi ogni scheda e come si collegano.', notSeen: 'mai viste',
    programSub: 'Il compito di oggi è il primo non fatto.', current: 'In corso', markDone: 'Segna fatto',
    settingsSub: 'Lingua, sincronizzazione e ritmo.', language: 'Lingua', owner: 'Owner', repo: 'Repo', branch: 'Branch', token: 'Token GitHub (fine-grained, Contents read/write)',
    tokenNote: 'Il token resta solo in questo browser: non finisce mai nel repo.', claudeLink: 'Link al progetto Claude "CAM Study" (facoltativo)',
    newPerDay: 'Carte nuove al giorno', maxReviews: 'Tetto ripassi al giorno', retention: 'Ritenzione target', save: 'Salva', test: 'Prova connessione', export: 'Esporta tutti i dati',
    sync: 'Sincronizza', pending: 'in attesa di sincronizzazione', saved: 'Salvato', copied: 'Copiato: incollalo nella chat di CAM Study', doubtPh: 'Cosa non ti torna?', doubtSaved: 'Dubbio salvato: lo vedo nella revisione settimanale',
    cancel: 'Annulla', send: 'Salva dubbio', betaInsight: 'Beta\'s insight', loading: 'Carico i contenuti…', offline: 'Contenuti non raggiungibili: controlla la rete.',
    configure: 'Configura owner, repo e token', back: 'Indietro', close: 'Chiudi', min: 'min', d: 'g', mo: 'mesi', fromSheet: 'dalla scheda'
  },
  en: {
    today: 'Today', browse: 'Topics', program: 'Plan', map: 'Map', settings: 'Settings',
    quick: 'Quick review', quickSub: 'Random cards from every topic. Tap the card to see the answer.', spaced: 'Daily review', spacedSub: 'The cards you\'re about to forget, picked by the algorithm.',
    studyTopic: 'Study by topic', studyTopicSub: 'Read the sheets and review only their cards.', toRead: 'To read', tapToFlip: 'Tap to see the answer',
    optional: 'optional', writeAnswer: 'Write your answer', undo: 'Undo', inArrivo: 'coming soon', written: 'ready', planCard: 'Interview plan',
    hello: 'Hi CAM.', week: 'Week', of: 'of', dailyReview: 'Daily review',
    cards: 'cards', minutes: 'minutes', about: 'about', start: 'Start', resume: 'Resume', nothingDue: 'Nothing due today. Browse whatever you like.',
    mixedNote: 'Mixed across topics. Answer first, then flip.',
    programCard: 'Interview plan', minimum: 'Minimum', extra: 'Extra', done: 'Done', doneMin: 'Minimum done', doneExtra: 'Extra done too', wildcard: 'wildcard',
    fiveMin: 'Got 5 minutes?', fiveMinSub: 'Browse any card, at random or by topic.',
    thisWeek: 'This week', noPile: 'Skip a day? The plan shifts, nothing piles up.',
    yourAnswer: 'Your answer, before flipping', yourAnswerPh: 'Even just the key points…', howSure: 'How sure are you?',
    sure: 'Sure', unsure: 'Unsure', dunno: 'No idea', show: 'Show answer', again: 'Again', hard: 'Hard', good: 'Good', easy: 'Easy',
    why: 'Why', detail: 'Detail', youWrote: 'You wrote', wasSure: 'You were sure: careful', askClaude: 'Ask Claude', doubt: 'I have a doubt', openCard: 'Open sheet',
    mixed: 'Mixed review', types: { F: 'Fact', M: 'Mechanics', A: 'Open question', T: 'Trap', X: 'Cross-topic' },
    sessionDone: 'Session complete', correct: 'right', strongest: 'Strongest area', weakest: 'To reinforce', backHome: 'Back to Today',
    browseSub: 'Whenever, as many as you like. Answers here count for review too.',
    shuffleAll: 'Shuffle everything', shuffleSub: 'Random cards from every sheet', all: 'All', weakOnly: 'Weak only', interview: 'Interview',
    sheets: 'sheets', recall: 'Recall', comingSoon: 'Coming soon', reviewSheet: 'Review this sheet\'s cards', linked: 'Linked to', sources: 'Sources',
    mapSub: 'How well you recall each sheet and how they connect.', notSeen: 'not seen yet',
    programSub: 'Today\'s task is the first one not done.', current: 'Current', markDone: 'Mark done',
    settingsSub: 'Language, sync and pace.', language: 'Language', owner: 'Owner', repo: 'Repo', branch: 'Branch', token: 'GitHub token (fine-grained, Contents read/write)',
    tokenNote: 'The token stays in this browser only: it never reaches the repo.', claudeLink: 'Link to the "CAM Study" Claude project (optional)',
    newPerDay: 'New cards per day', maxReviews: 'Daily review cap', retention: 'Target retention', save: 'Save', test: 'Test connection', export: 'Export all data',
    sync: 'Sync', pending: 'waiting to sync', saved: 'Saved', copied: 'Copied: paste it in the CAM Study chat', doubtPh: 'What doesn\'t add up?', doubtSaved: 'Doubt saved: I\'ll see it in the weekly review',
    cancel: 'Cancel', send: 'Save doubt', betaInsight: 'Beta\'s insight', loading: 'Loading content…', offline: 'Content unreachable: check your connection.',
    configure: 'Set owner, repo and token', back: 'Back', close: 'Close', min: 'min', d: 'd', mo: 'mo', fromSheet: 'from sheet'
  }
};

/* ---------- stato ---------- */
const K = {
  lingua: 'cs.lingua', ripassi: 'cs.ripassi', programma: 'cs.programma', dubbi: 'cs.dubbi', coda: 'cs.coda',
  sessione: 'cs.sessione', impostazioni: 'cs.impostazioni', ritmo: 'cs.ritmo'
};
const S = {
  lang: leggi(K.lingua, 'it'),
  view: 'oggi', param: null, filtro: 'tutte',
  idx: null, schede: {}, carte: {}, prog: null, insight: null,
  ripassi: leggi(K.ripassi, {}),       // { 'AAAA-MM-GG': [ {carta, ora, voto, sicurezza, modo, risposta_scritta, varianti} ] }
  progLog: leggi(K.programma, {}),     // { idCompito: { data, fatto, note } }
  dubbi: leggi(K.dubbi, []),
  stato: {},                           // stato FSRS derivato: { idCarta: {s, d, last, due, reps, lapses, ultimoVoto, sicuroSbagliato} }
  sess: leggi(K.sessione, null),
  betaMood: null, errore: null
};
const t = (k) => (T[S.lang][k] ?? T.it[k] ?? k);
const L = (o) => (o == null ? '' : typeof o === 'string' ? o : (o[S.lang] ?? o.it ?? ''));

/* ---------- localStorage ---------- */
function leggi(k, def) { try { const v = localStorage.getItem(k); return v ? JSON.parse(v) : def; } catch { return def; } }
function scrivi(k, v) { try { localStorage.setItem(k, JSON.stringify(v)); } catch (e) { console.warn('localStorage', e); } }
function ritmo() { return { nuove: 12, tetto: 80, ritenzione: 0.9, claude: '', ...leggi(K.ritmo, {}) }; }

/* ---------- date ---------- */
const pad = (n) => String(n).padStart(2, '0');
function isoGiorno(d = new Date()) { return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`; }
function isoOra(d = new Date()) {
  const o = -d.getTimezoneOffset(), s = o >= 0 ? '+' : '-', a = Math.abs(o);
  return `${isoGiorno(d)}T${pad(d.getHours())}:${pad(d.getMinutes())}:${pad(d.getSeconds())}${s}${pad(Math.floor(a / 60))}:${pad(a % 60)}`;
}
const GIORNO = 86400000;
function fineGiorno(d = new Date()) { const x = new Date(d); x.setHours(23, 59, 59, 999); return x.getTime(); }
function lunedi(d = new Date()) { const x = new Date(d); x.setHours(0, 0, 0, 0); x.setDate(x.getDate() - ((x.getDay() + 6) % 7)); return x; }

/* ---------- numeri ---------- */
function fmt(n, dec = 0) { return new Intl.NumberFormat(S.lang === 'it' ? 'it-IT' : 'en-GB', { minimumFractionDigits: dec, maximumFractionDigits: dec }).format(n); }
const esc = (s) => String(s ?? '').replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));

/* ---------- FSRS-5 ---------- */
const W = [0.40255, 1.18385, 3.173, 15.69105, 7.1949, 0.5345, 1.4604, 0.0046, 1.54575, 0.1192, 1.01925, 1.9395, 0.11, 0.29605, 2.2698, 0.2315, 2.9898, 0.51655, 0.6621];
const DECAY = -0.5, FACTOR = 19 / 81;
const clampD = (d) => Math.min(10, Math.max(1, d));
const ret = (t, s) => Math.pow(1 + FACTOR * t / s, DECAY);
const intervallo = (s, r) => s / FACTOR * (Math.pow(r, 1 / DECAY) - 1);
const d0 = (g) => clampD(W[4] - Math.exp(W[5] * (g - 1)) + 1);
function prossimo(st, g, quando) {
  if (!st) return { s: W[g - 1], d: d0(g), last: quando, reps: 1, lapses: g === 1 ? 1 : 0 };
  const t = Math.max(0, (quando - st.last) / GIORNO);
  let s;
  if (t < 1) s = st.s * Math.exp(W[17] * (g - 3 + W[18]));
  else {
    const r = ret(t, st.s);
    if (g === 1) s = Math.min(st.s, W[11] * Math.pow(st.d, -W[12]) * (Math.pow(st.s + 1, W[13]) - 1) * Math.exp(W[14] * (1 - r)));
    else s = st.s * (Math.exp(W[8]) * (11 - st.d) * Math.pow(st.s, -W[9]) * (Math.exp(W[10] * (1 - r)) - 1) * (g === 2 ? W[15] : 1) * (g === 4 ? W[16] : 1) + 1);
  }
  const dp = st.d + (-W[6] * (g - 3)) * (10 - st.d) / 9;
  const d = clampD(W[7] * d0(4) + (1 - W[7]) * dp);
  return { s: Math.max(0.01, s), d, last: quando, reps: st.reps + 1, lapses: st.lapses + (g === 1 ? 1 : 0) };
}
function tuttiRipassi() {
  return Object.values(S.ripassi).flat().map((x) => ({ ...x, ts: Date.parse(x.ora) })).sort((a, b) => a.ts - b.ts);
}
function ricalcolaStato() {
  const r = ritmo().ritenzione, st = {};
  for (const x of tuttiRipassi()) {
    const prev = st[x.carta];
    const n = prossimo(prev, x.voto, x.ts);
    n.ultimoVoto = x.voto;
    n.sicuroSbagliato = x.voto === 1 && x.sicurezza === 'sicuro';
    n.storia = [...(prev?.storia || []), { ts: x.ts, voto: x.voto }].slice(-12);
    n.due = n.last + intervallo(n.s, r) * GIORNO;
    if (n.sicuroSbagliato) n.due = Math.min(n.due, fineGiorno(new Date(n.last + GIORNO)));
    st[x.carta] = n;
  }
  S.stato = st;
}
function anteprima(idCarta, g) {
  const st = S.stato[idCarta], now = Date.now();
  if (g === 1) return '10 ' + t('min');
  const n = prossimo(st, g, now), giorni = intervallo(n.s, ritmo().ritenzione);
  if (giorni < 1) return '<1 ' + t('d');
  if (giorni < 60) return Math.round(giorni) + ' ' + t('d');
  return fmt(giorni / 30, 1) + ' ' + t('mo');
}
function ricordo(idCarta) { const st = S.stato[idCarta]; return st ? ret(Math.max(0, (Date.now() - st.last) / GIORNO), st.s) : null; }

/* ---------- contenuti ---------- */
async function caricaJSON(p) { const r = await fetch(`${p}?t=${Date.now()}`, { cache: 'no-store' }); if (!r.ok) throw new Error(`${p}: ${r.status}`); return r.json(); }
async function caricaContenuti() {
  try {
    S.idx = await caricaJSON('contenuti/indice.json');
    const lista = await Promise.all(S.idx.schede.map((x) => (x.file ? caricaJSON('contenuti/' + x.file).catch(() => null) : null)));
    S.schede = {}; S.carte = {};
    lista.forEach((sc, i) => {
      if (!sc) return;
      sc.meta = S.idx.schede[i];
      S.schede[sc.id] = sc;
      sc.carte.forEach((c) => { S.carte[c.id] = { ...c, scheda: sc.id, area: sc.area }; });
    });
    S.prog = await caricaJSON('programma.json').catch(() => null);
    S.insight = await caricaJSON('insights/ultimo.json').catch(() => null);
    S.errore = null;
  } catch (e) { console.warn(e); S.errore = t('offline'); }
}
const area = (id) => S.idx?.aree.find((a) => a.id === id);
function gradiente(idArea) {
  const g = area(idArea)?.gradiente || ['#F7D37A', '#EE8A9A', '#F2A65E'];
  return `radial-gradient(circle at 18% 25%, ${g[0]} 0%, ${g[0]}00 50%), radial-gradient(circle at 85% 40%, ${g[1]} 0%, ${g[1]}00 55%), ${g[2]}`;
}
function sbloccata() { return true; } // tutte le schede pubblicate sono subito disponibili
function titoloScheda(id) { const m = S.idx?.schede.find((x) => x.id === id); return S.schede[id] ? L(S.schede[id].titolo) : m ? L(m.titolo) : id; }
function chipScheda(id) {
  return S.schede[id]
    ? `<button class="chip" data-act="scheda" data-id="${id}">${esc(titoloScheda(id))}</button>`
    : `<span class="chip" style="opacity:.5">${esc(titoloScheda(id))} · ${t('inArrivo')}</span>`;
}

/* ---------- carte parametriche ---------- */
const rnd = (a, b, passo = 1) => a + passo * Math.floor(Math.random() * ((b - a) / passo + 1));
const GEN = {
  ev_collegata() {
    const eqs = rnd(200, 900, 10), q = rnd(10, 45, 5), va = rnd(50, 400, 10), cash = rnd(20, 150, 5), debt = rnd(50, 500, 10), ebitda = rnd(40, 160, 1);
    const quota = q / 100 * va, eqv = eqs + quota, ev = eqv - cash + debt - quota;
    return {
      v: { eqs, q, va, cash, debt, ebitda },
      domanda: {
        it: `Equity Value della capogruppo da sola ${fmt(eqs)}; possiede il ${q}% di una collegata che vale ${fmt(va)}. Cassa ${fmt(cash)}, debito ${fmt(debt)}, EBITDA ${fmt(ebitda)}. Calcola Equity Value, EV ed EV/EBITDA.`,
        en: `Parent standalone equity value ${fmt(eqs)}; it owns ${q}% of an associate worth ${fmt(va)}. Cash ${fmt(cash)}, debt ${fmt(debt)}, EBITDA ${fmt(ebitda)}. Compute Equity Value, EV and EV/EBITDA.`
      },
      risposta: {
        it: `Equity Value ${fmt(eqs)} + ${fmt(quota, 1)} = ${fmt(eqv, 1)}. EV = ${fmt(eqv, 1)} − ${fmt(cash)} + ${fmt(debt)} − ${fmt(quota, 1)} = ${fmt(ev, 1)}. EV/EBITDA = ${fmt(ev / ebitda, 1)}x.`,
        en: `Equity Value ${fmt(eqs)} + ${fmt(quota, 1)} = ${fmt(eqv, 1)}. EV = ${fmt(eqv, 1)} − ${fmt(cash)} + ${fmt(debt)} − ${fmt(quota, 1)} = ${fmt(ev, 1)}. EV/EBITDA = ${fmt(ev / ebitda, 1)}x.`
      }
    };
  },
  ev_minoritari() {
    const eqs = rnd(200, 900, 10), q = rnd(55, 90, 5), vs = rnd(50, 400, 10), cash = rnd(20, 150, 5), debt = rnd(50, 500, 10), ebitda = rnd(50, 180, 1);
    const quota = q / 100 * vs, nci = vs - quota, eqv = eqs + quota, ev = eqv - cash + debt + nci;
    return {
      v: { eqs, q, vs, cash, debt, ebitda },
      domanda: {
        it: `Equity Value della capogruppo da sola ${fmt(eqs)}; possiede il ${q}% di una controllata che vale ${fmt(vs)}. Cassa ${fmt(cash)}, debito ${fmt(debt)}, EBITDA consolidato ${fmt(ebitda)}. Calcola Equity Value, EV ed EV/EBITDA.`,
        en: `Parent standalone equity value ${fmt(eqs)}; it owns ${q}% of a subsidiary worth ${fmt(vs)}. Cash ${fmt(cash)}, debt ${fmt(debt)}, consolidated EBITDA ${fmt(ebitda)}. Compute Equity Value, EV and EV/EBITDA.`
      },
      risposta: {
        it: `Equity Value ${fmt(eqs)} + ${fmt(quota, 1)} = ${fmt(eqv, 1)}. Minoritari ${fmt(nci, 1)}. EV = ${fmt(eqv, 1)} − ${fmt(cash)} + ${fmt(debt)} + ${fmt(nci, 1)} = ${fmt(ev, 1)}. EV/EBITDA = ${fmt(ev / ebitda, 1)}x.`,
        en: `Equity Value ${fmt(eqs)} + ${fmt(quota, 1)} = ${fmt(eqv, 1)}. NCI ${fmt(nci, 1)}. EV = ${fmt(eqv, 1)} − ${fmt(cash)} + ${fmt(debt)} + ${fmt(nci, 1)} = ${fmt(ev, 1)}. EV/EBITDA = ${fmt(ev / ebitda, 1)}x.`
      }
    };
  },
  ev_ponte() {
    const eqv = rnd(50000, 400000, 1000), cash = rnd(2000, 40000, 1000), debt = rnd(5000, 120000, 1000), nci = rnd(0, 30000, 1000);
    const pref = Math.random() < 0.4 ? rnd(2000, 20000, 1000) : 0, assoc = Math.random() < 0.4 ? rnd(2000, 25000, 1000) : 0;
    const ev = eqv - cash + debt + nci + pref - assoc;
    const pIt = [`Equity Value diluito ${fmt(eqv)}`, `cassa ${fmt(cash)}`, `debito ${fmt(debt)}`, `minoritari ${fmt(nci)}`];
    const pEn = [`Diluted equity value ${fmt(eqv)}`, `cash ${fmt(cash)}`, `debt ${fmt(debt)}`, `NCI ${fmt(nci)}`];
    if (pref) { pIt.push(`azioni privilegiate ${fmt(pref)}`); pEn.push(`preferred stock ${fmt(pref)}`); }
    if (assoc) { pIt.push(`partecipazioni in collegate ${fmt(assoc)}`); pEn.push(`equity investments ${fmt(assoc)}`); }
    const conto = `${fmt(eqv)} − ${fmt(cash)} + ${fmt(debt)} + ${fmt(nci)}${pref ? ' + ' + fmt(pref) : ''}${assoc ? ' − ' + fmt(assoc) : ''} = ${fmt(ev)}`;
    return {
      v: { eqv, cash, debt, nci, pref, assoc },
      domanda: { it: 'Calcola l\'Enterprise Value: ' + pIt.join('; ') + '.', en: 'Compute Enterprise Value: ' + pEn.join('; ') + '.' },
      risposta: { it: conto + '.', en: conto + '.' }
    };
  }
};
function testoCarta(c, varianti) {
  if (c.generatore && GEN[c.generatore]) {
    if (!varianti[c.id]) varianti[c.id] = GEN[c.generatore]();
    const g = varianti[c.id];
    return { domanda: g.domanda, risposta: g.risposta, v: g.v };
  }
  return { domanda: c.domanda, risposta: c.risposta, v: null };
}

/* ---------- code ---------- */
function mescola(arr) { const a = [...arr]; for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; }
function intercala(ids) {
  // evita due carte della stessa scheda di fila quando possibile
  const rest = mescola(ids), out = [];
  while (rest.length) {
    const prev = out.length ? S.carte[out[out.length - 1]]?.scheda : null;
    let i = rest.findIndex((id) => S.carte[id]?.scheda !== prev);
    if (i < 0) i = 0;
    out.push(rest.splice(i, 1)[0]);
  }
  return out;
}
function codaDelGiorno() {
  const R = ritmo(), fine = fineGiorno(), oggi = isoGiorno();
  const fatteOggi = new Set((S.ripassi[oggi] || []).filter((x) => x.modo === 'giorno').map((x) => x.carta));
  const nuoveOggi = (S.ripassi[oggi] || []).filter((x) => x.modo === 'giorno' && S.stato[x.carta]?.reps === 1).length;
  const scadute = Object.entries(S.stato)
    .filter(([id, st]) => S.carte[id] && st.due <= fine && !fatteOggi.has(id))
    .sort((a, b) => a[1].due - b[1].due).map(([id]) => id).slice(0, R.tetto);
  const nuove = [];
  for (const meta of S.idx?.schede || []) {
    const sc = S.schede[meta.id];
    if (!sc || !sbloccata(sc)) continue;
    for (const c of sc.carte) if (!S.stato[c.id] && nuove.length < Math.max(0, R.nuove - nuoveOggi)) nuove.push(c.id);
  }
  const prima = insightCarta();
  let coda = intercala([...scadute, ...nuove]);
  if (prima && coda.includes(prima)) coda = [prima, ...coda.filter((x) => x !== prima)];
  return coda;
}
function codaSfoglia(filtro, idArea, idScheda) {
  let ids = Object.keys(S.carte).filter((id) => {
    const c = S.carte[id];
    if (idScheda && c.scheda !== idScheda) return false;
    if (idArea && c.area !== idArea) return false;
    if (filtro === 'deboli') { const r = ricordo(id); return r == null || r < 0.8; }
    if (filtro === 'colloquio') return c.tipo === 'A' || c.tipo === 'X';
    return true;
  });
  return idScheda ? ids : intercala(ids);
}

/* ---------- sessione ---------- */
function avviaSessione(coda, modo, etichetta) {
  if (!coda.length) { toast(t('nothingDue')); return; }
  S.sess = { modo, etichetta: etichetta || null, coda, i: 0, fase: 'domanda', sicurezza: null, scritta: '', scrivi: false, varianti: {}, esiti: [], ripetute: {} };
  scrivi(K.sessione, S.sess); vai('sessione');
}
function cartaCorrente() { return S.sess ? S.carte[S.sess.coda[S.sess.i]] : null; }
function vota(g) {
  const s = S.sess, c = cartaCorrente(); if (!c) return;
  const giorno = isoGiorno(), voce = { carta: c.id, ora: isoOra(), voto: g, sicurezza: s.sicurezza, modo: s.modo === 'giorno' ? 'giorno' : 'sfoglia' };
  if (s.scritta.trim()) voce.risposta_scritta = s.scritta.trim();
  if (s.varianti[c.id]) voce.varianti = s.varianti[c.id].v;
  (S.ripassi[giorno] = S.ripassi[giorno] || []).push(voce);
  scrivi(K.ripassi, S.ripassi);
  accoda({ tipo: 'ripassi', data: giorno });
  ricalcolaStato();
  s.esiti.push({ carta: c.id, voto: g, sicurezza: s.sicurezza });
  // reazione di Beta (solo dopo il voto)
  const sbagliRecenti = (S.stato[c.id]?.storia || []).slice(-3).filter((x) => x.voto === 1).length;
  if (g >= 3) S.betaMood = { e: 'contento', a: 'hop', txt: null };
  else if (g === 2) S.betaMood = { e: 'occhiolino', a: '', txt: null };
  else if (sbagliRecenti >= 3) S.betaMood = { e: Math.random() < 0.5 ? 'arrabbiato' : 'annoiato', a: 'wobble', txt: S.lang === 'it' ? 'Terza volta! Questa la mettiamo in cima domani.' : 'Third time! This one goes first tomorrow.' };
  else if (s.sicurezza === 'sicuro') S.betaMood = { e: 'sorpreso', a: 'wobble', txt: S.lang === 'it' ? 'Eri sicuro. Questa torna domani.' : 'You were sure. This one comes back tomorrow.' };
  else S.betaMood = { e: 'perplesso', a: '', txt: null };
  // "Di nuovo": la carta torna in fondo alla sessione (una volta)
  if (g === 1 && !(s.ripetute[c.id] >= 1)) { s.ripetute[c.id] = (s.ripetute[c.id] || 0) + 1; s.coda.push(c.id); if (s.varianti[c.id]) delete s.varianti[c.id]; }
  s.i++; s.fase = 'domanda'; s.sicurezza = null; s.scritta = ''; s.scrivi = false;
  scrivi(K.sessione, s);
  if (s.i >= s.coda.length) { vai('fine'); return; }
  render();
}
function chiudiSessione() { S.sess = null; scrivi(K.sessione, null); }

/* ---------- insight di Beta ---------- */
function insightCarta() {
  const da = Date.now() - 7 * GIORNO, cont = {};
  tuttiRipassi().filter((x) => x.ts >= da && x.voto === 1).forEach((x) => { cont[x.carta] = (cont[x.carta] || 0) + 1; });
  const top = Object.entries(cont).filter(([id, n]) => n >= 3 && S.carte[id]).sort((a, b) => b[1] - a[1])[0];
  return top ? top[0] : null;
}
function ricordoArea(idArea) {
  const rs = Object.keys(S.carte).filter((id) => S.carte[id].area === idArea).map(ricordo).filter((r) => r != null);
  return rs.length ? { media: rs.reduce((a, b) => a + b, 0) / rs.length, n: rs.length } : null;
}
function ricordoScheda(idScheda) {
  const rs = (S.schede[idScheda]?.carte || []).map((c) => ricordo(c.id)).filter((r) => r != null);
  return rs.length ? { media: rs.reduce((a, b) => a + b, 0) / rs.length, n: rs.length } : null;
}
function insightDelGiorno(nCoda) {
  const oggi = isoGiorno(), it = S.lang === 'it';
  if (S.insight && S.insight.data === oggi) return { e: 'pensoso', txt: L(S.insight.testo) };
  const c = insightCarta();
  if (c) {
    const sc = S.schede[S.carte[c].scheda];
    return { e: 'perplesso', txt: it ? `"${L(sc.titolo)}" ti sfugge da qualche giorno. Oggi parte per prima.` : `"${L(sc.titolo)}" has been slipping for a few days. It goes first today.` };
  }
  const ieri = isoGiorno(new Date(Date.now() - GIORNO));
  const sicuriSbagliati = (S.ripassi[ieri] || []).filter((x) => x.voto === 1 && x.sicurezza === 'sicuro').length;
  if (sicuriSbagliati) return { e: 'sorpreso', txt: it ? `Ieri ${sicuriSbagliati} risposte date con sicurezza erano sbagliate. Le rivediamo oggi.` : `Yesterday ${sicuriSbagliati} confident answers were wrong. We'll revisit them today.` };
  const aree = (S.idx?.aree || []).map((a) => ({ a, r: ricordoArea(a.id) })).filter((x) => x.r && x.r.n >= 10);
  if (aree.length >= 2) {
    aree.sort((x, y) => x.r.media - y.r.media);
    const deb = aree[0], forte = aree[aree.length - 1];
    if (forte.r.media >= 0.85 && Math.random() < 0.5) return { e: 'stellato', txt: it ? `${L(forte.a.nome)} è al ${Math.round(forte.r.media * 100)}%. Ottimo lavoro.` : `${L(forte.a.nome)} is at ${Math.round(forte.r.media * 100)}%. Great work.` };
    return { e: 'pensoso', txt: it ? `${L(deb.a.nome)} è l'area da rinforzare: ricordi il ${Math.round(deb.r.media * 100)}%.` : `${L(deb.a.nome)} needs work: you recall ${Math.round(deb.r.media * 100)}%.` };
  }
  const tutti = tuttiRipassi(), ultimo = tutti.length ? tutti[tutti.length - 1].ts : null;
  if (ultimo && Date.now() - ultimo > 3 * GIORNO) return { e: 'saluto', txt: it ? 'Bentornato! Ripartiamo piano, con le carte più urgenti.' : 'Welcome back! Let\'s restart gently with the most urgent cards.' };
  if (!nCoda) return { e: 'assonnato', txt: it ? 'Oggi niente in scadenza. Se ti va, sfoglia.' : 'Nothing due today. Browse if you like.' };
  return { e: 'contento', txt: it ? `Oggi ${nCoda} carte, circa ${Math.max(1, Math.round(nCoda * 0.75))} minuti.` : `${nCoda} cards today, about ${Math.max(1, Math.round(nCoda * 0.75))} minutes.` };
}

/* ---------- Beta (SVG) ---------- */
let betaN = 0;
function beta(espr = 'neutro', size = 72, anim = '') {
  const id = 'bg' + (++betaN), ink = '#1E3A2F', limb = '#7FA8E0';
  const occhi = (() => {
    const rect = (x, y, w, h) => `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="${Math.min(w, h) / 2}" fill="${ink}"/>`;
    const arco = (x) => `<path d="M${x - 6} 52Q${x} 40 ${x + 6} 52" stroke="${ink}" stroke-width="4.3" fill="none" stroke-linecap="round"/>`;
    switch (espr) {
      case 'contento': return arco(40) + arco(60);
      case 'occhiolino': return rect(35.8, 40, 8.4, 18) + arco(60);
      case 'sorpreso': return `<circle cx="40" cy="49" r="7" fill="${ink}"/><circle cx="60" cy="49" r="7" fill="${ink}"/>`;
      case 'perplesso': return rect(35.8, 44.4, 8.4, 11.2) + rect(55.8, 40, 8.4, 18);
      case 'assonnato': return rect(33.3, 50.5, 13.4, 4) + rect(53.3, 50.5, 13.4, 4);
      case 'annoiato': return rect(35.8, 46, 8.4, 10) + rect(55.8, 46, 8.4, 10);
      case 'arrabbiato': return `<path d="M34 42L46 47L46 56Q40 60 34 56Z" fill="${ink}"/><path d="M66 42L54 47L54 56Q60 60 66 56Z" fill="${ink}"/>`;
      case 'stellato': return [40, 60].map((x) => `<path d="M${x} 40Q${x} 49 ${x + 9} 49Q${x} 49 ${x} 58Q${x} 49 ${x - 9} 49Q${x} 49 ${x} 40Z" fill="${ink}"/>`).join('');
      case 'pensoso': return rect(37.5, 40, 8.4, 16) + rect(57.5, 40, 8.4, 16);
      default: return rect(35.8, 40, 8.4, 18) + rect(55.8, 40, 8.4, 18);
    }
  })();
  // pose delle braccia: angolo sinistro e destro (gradi)
  const posa = anim === 'cheer' || anim === 'dance' ? [130, -130] : anim === 'boh' ? [95, -95] : espr === 'saluto' || anim === 'wave' ? [50, -130] : [50, -50];
  const armL = `rotate(${posa[0]} 6 58)`, armR = `rotate(${posa[1]} 94 58)`;
  const cls = ['beta', anim || (espr === 'saluto' ? 'wave' : '')].join(' ').trim();
  return `<svg class="${cls}" data-act="beta" data-e="${espr}" data-s="${size}" data-a="${anim}" width="${size}" height="${Math.round(size * 0.72)}" viewBox="-12 14 124 84" role="img" aria-label="Beta">
    <defs><radialGradient id="${id}" cx="40%" cy="35%" r="75%"><stop offset="0" stop-color="#D6F0B2"/><stop offset=".5" stop-color="#7FCDB5"/><stop offset="1" stop-color="#7FA8E0"/></radialGradient></defs>
    <g class="b-body">
      <rect x="31" y="66" width="12" height="20" rx="6" fill="${limb}"/><rect x="57" y="66" width="12" height="20" rx="6" fill="${limb}"/>
      <g transform="${armL}"><ellipse class="b-arm b-arm-l" cx="6" cy="58" rx="6" ry="9.5" fill="${limb}"/></g>
      <g transform="${armR}"><ellipse class="b-arm b-arm-r" cx="94" cy="58" rx="6" ry="9.5" fill="${limb}"/></g>
      <path d="M30 26h40c13 0 22 10 22 24s-9 24-22 24H30C17 74 8 64 8 50s9-24 22-24z" fill="url(#${id})"/>
      <g class="b-eyes"><g class="b-lids">${occhi}</g></g>
    </g></svg>`;
}
/* Beta vivo: occhi che seguono il dito o il mouse, ammiccamenti, reazione al tocco */
const REAZIONI = [['contento', 'hop'], ['contento', 'cheer'], ['occhiolino', 'wave'], ['sorpreso', 'wobble'], ['stellato', 'dance'], ['perplesso', 'boh'], ['saluto', 'wave'], ['arrabbiato', 'wobble'], ['annoiato', 'boh'], ['pensoso', 'hop'], ['contento', 'dance']];
let sguardoT;
function guarda(x, y) {
  document.querySelectorAll('svg.beta').forEach((svg) => {
    const r = svg.getBoundingClientRect(); if (!r.width) return;
    const dx = x - (r.left + r.width / 2), dy = y - (r.top + r.height / 2), d = Math.hypot(dx, dy) || 1, k = Math.min(1, d / 220);
    const occhi = svg.querySelector('.b-eyes'); if (occhi) occhi.style.transform = `translate(${(dx / d * 5 * k).toFixed(1)}px,${(dy / d * 3.5 * k).toFixed(1)}px)`;
  });
  clearTimeout(sguardoT);
  sguardoT = setTimeout(() => document.querySelectorAll('svg.beta .b-eyes').forEach((g) => { g.style.transform = ''; }), 2500);
}
function reagisci(svg) {
  if (svg.dataset.busy) return;
  const [e, a] = REAZIONI[Math.floor(Math.random() * REAZIONI.length)];
  const orig = { e: svg.dataset.e, s: Number(svg.dataset.s), a: svg.dataset.a };
  const tmp = document.createElement('div'); tmp.innerHTML = beta(e, orig.s, a);
  const nuovo = tmp.firstElementChild; nuovo.dataset.busy = '1'; svg.replaceWith(nuovo);
  setTimeout(() => { const t2 = document.createElement('div'); t2.innerHTML = beta(orig.e, orig.s, orig.a); if (nuovo.isConnected) nuovo.replaceWith(t2.firstElementChild); }, 1800);
}
if (!matchMedia('(prefers-reduced-motion: reduce)').matches) {
  addEventListener('pointermove', (e) => guarda(e.clientX, e.clientY), { passive: true });
  addEventListener('pointerdown', (e) => guarda(e.clientX, e.clientY), { passive: true });
  (function ammicca() {
    setTimeout(() => {
      document.querySelectorAll('svg.beta .b-lids').forEach((g) => { g.classList.remove('blink'); void g.getBBox(); g.classList.add('blink'); });
      ammicca();
    }, 3000 + Math.random() * 4000);
  })();
}

/* ---------- markdown minimo ---------- */
function inline(s) {
  return esc(s)
    .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
    .replace(/`([^`]+)`/g, '<code>$1</code>')
    .replace(/\[([^\]]*(?:p\.|pp\.|Claude|FB|IBIG|immagini)[^\]]*)\]/g, '<span class="src">$1</span>');
}
function md(testo) {
  const righe = String(testo || '').split('\n'), out = [];
  let i = 0;
  while (i < righe.length) {
    const r = righe[i];
    if (!r.trim()) { i++; continue; }
    if (r.startsWith('## ')) { out.push(`<h2>${inline(r.slice(3))}</h2>`); i++; continue; }
    if (r.trim().startsWith('|')) {
      const tab = [];
      while (i < righe.length && righe[i].trim().startsWith('|')) { tab.push(righe[i].trim()); i++; }
      const celle = (x) => x.replace(/^\||\|$/g, '').split('|').map((c) => c.trim());
      const corpo = tab.filter((x) => !/^\|\s*-/.test(x));
      const [h, ...rs] = corpo;
      out.push(`<div class="tbl"><table><thead><tr>${celle(h).map((c) => `<th>${inline(c)}</th>`).join('')}</tr></thead><tbody>${rs.map((x) => `<tr>${celle(x).map((c) => `<td>${inline(c)}</td>`).join('')}</tr>`).join('')}</tbody></table></div>`);
      continue;
    }
    if (/^\s*(-|\d+\.)\s/.test(r)) {
      const ord = /^\s*\d+\./.test(r), items = [];
      while (i < righe.length && /^\s*(-|\d+\.)\s/.test(righe[i])) { items.push(righe[i].replace(/^\s*(-|\d+\.)\s/, '')); i++; }
      out.push(`<${ord ? 'ol' : 'ul'}>${items.map((x) => `<li>${inline(x)}</li>`).join('')}</${ord ? 'ol' : 'ul'}>`);
      continue;
    }
    const par = [];
    while (i < righe.length && righe[i].trim() && !righe[i].startsWith('## ') && !righe[i].trim().startsWith('|') && !/^\s*(-|\d+\.)\s/.test(righe[i])) { par.push(righe[i]); i++; }
    out.push(`<p>${inline(par.join(' '))}</p>`);
  }
  return out.join('');
}

/* ---------- icone ---------- */
const IC = {
  oggi: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/></svg>',
  sfoglia: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="5" width="14" height="16" rx="3"/><path d="M7 2h11a3 3 0 0 1 3 3v12"/></svg>',
  programma: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="4" width="18" height="17" rx="3"/><path d="M3 9h18M8 2v4M16 2v4"/></svg>',
  mappa: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><circle cx="6" cy="6" r="2.5"/><circle cx="18" cy="8" r="2.5"/><circle cx="10" cy="18" r="2.5"/><path d="M8.2 7.2l7.5.6M7 8.3l2.2 7.4M16.4 10l-4.8 6.2"/></svg>',
  impostazioni: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.7 1.7 0 0 0 .3 1.8l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.7 1.7 0 0 0-1.8-.3 1.7 1.7 0 0 0-1 1.5V21a2 2 0 1 1-4 0v-.1a1.7 1.7 0 0 0-1.1-1.5 1.7 1.7 0 0 0-1.8.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.7 1.7 0 0 0 .3-1.8 1.7 1.7 0 0 0-1.5-1H3a2 2 0 1 1 0-4h.1a1.7 1.7 0 0 0 1.5-1.1 1.7 1.7 0 0 0-.3-1.8l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1.7 1.7 0 0 0 1.8.3H9a1.7 1.7 0 0 0 1-1.5V3a2 2 0 1 1 4 0v.1a1.7 1.7 0 0 0 1 1.5 1.7 1.7 0 0 0 1.8-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.7 1.7 0 0 0-.3 1.8V9a1.7 1.7 0 0 0 1.5 1H21a2 2 0 1 1 0 4h-.1a1.7 1.7 0 0 0-1.5 1z"/></svg>',
  x: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" aria-hidden="true"><path d="M6 6l12 12M18 6L6 18"/></svg>',
  indietro: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M15 6l-6 6 6 6"/></svg>',
  avanti: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M9 6l6 6-6 6"/></svg>',
  mescola: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M16 3h5v5M4 20L21 3M21 16v5h-5M15 15l6 6M4 4l5 5"/></svg>'
};

/* ---------- viste ---------- */
function lingua() {
  return `<span class="row" style="gap:8px"><button class="lang" data-act="lingua" aria-label="${t('language')}"><span class="${S.lang === 'it' ? 'on' : ''}">IT</span><span class="${S.lang === 'en' ? 'on' : ''}">EN</span></button>`
    + (S.view === 'impostazioni' ? '' : `<button class="icon-btn" data-act="vai" data-v="impostazioni" aria-label="${t('settings')}">${IC.impostazioni}</button>`) + '</span>';
}
function nav() {
  const v = ['oggi', 'sfoglia', 'programma', 'mappa'];
  const etich = { oggi: t('today'), sfoglia: t('browse'), programma: t('program'), mappa: t('map') };
  const att = ({ area: 'sfoglia', scheda: 'sfoglia' }[S.view]) || S.view;
  return `<nav class="nav">${v.map((x) => `<button class="${att === x ? 'on' : ''}" data-act="vai" data-v="${x}">${IC[x]}${etich[x]}</button>`).join('')}</nav>`;
}
function compitoDiOggi() {
  if (!S.prog) return null;
  for (const w of S.prog.settimane) for (const c of w.compiti) if (!S.progLog[c.id]) return { w, c };
  return null;
}
function vistaOggi() {
  if (!S.idx) return `<main class="main"><p class="serif">${esc(S.errore || t('loading'))}</p></main>`;
  const coda = codaDelGiorno(), n = coda.length, ins = insightDelGiorno(n), cp = compitoDiOggi();
  const nTot = Object.keys(S.carte).length;
  const d = new Date(), dataTxt = d.toLocaleDateString(S.lang === 'it' ? 'it-IT' : 'en-GB', { weekday: 'long', day: 'numeric', month: 'long' });
  const settN = cp ? cp.w.n : (S.prog?.settimane.length || 0);
  const lun = lunedi(), giorni = [...Array(7)].map((_, i) => { const x = new Date(lun); x.setDate(lun.getDate() + i); return isoGiorno(x); });
  const nomi = S.lang === 'it' ? ['L', 'M', 'M', 'G', 'V', 'S', 'D'] : ['M', 'T', 'W', 'T', 'F', 'S', 'S'];
  const inCorso = S.sess && S.sess.i < S.sess.coda.length;
  return `<main class="main">
    <div class="top"><div><div class="eyebrow">${esc(dataTxt.charAt(0).toUpperCase() + dataTxt.slice(1))}${S.prog ? ` · ${t('week')} ${settN} ${t('of')} ${S.prog.settimane.length}` : ''}</div><h1>${t('hello')}</h1></div><div class="top-r">${lingua()}</div></div>
    <div class="beta-row">${beta(ins.e, 76, ins.e === 'saluto' ? 'wave' : 'breathe')}<div class="bubble"><b class="lbl">${t('betaInsight')}</b>${esc(ins.txt)}</div></div>
    ${inCorso ? `<button class="btn" data-act="riprendi">${t('resume')} · ${S.sess.coda.length - S.sess.i} ${t('cards')}</button>` : ''}
    <div class="card" style="background:${gradiente('accounting')}">
      <div class="row between"><b class="small">${t('quick')}</b><span class="small" style="font-weight:600">${nTot} ${t('cards')}</span></div>
      <div style="font-size:28px;line-height:1.1;font-weight:700;letter-spacing:-.02em">${S.lang === 'it' ? 'Qualche carta a caso?' : 'A few random cards?'}</div>
      <div class="serif" style="color:var(--ink)">${t('quickSub')}</div>
      <div class="row" style="flex-wrap:wrap"><button class="btn" data-act="veloce" data-n="10">10 ${t('cards')}</button><button class="btn ghost" data-act="veloce" data-n="20">20</button><button class="btn ghost" data-act="veloce" data-n="0">${t('all')}</button></div>
    </div>
    <button class="card link" data-act="giorno" ${n ? '' : 'disabled'}>
      <div class="row between"><b class="small">${t('spaced')}</b><span class="small" style="font-weight:600">${n ? `${n} ${t('cards')} · ~${Math.max(1, Math.round(n * 0.75))} ${t('min')}` : '—'}</span></div>
      <div class="serif">${n ? t('spacedSub') : t('nothingDue')}</div>
    </button>
    ${cp ? `<div class="card">
      <div class="row between"><b class="small">${t('planCard')} · ${t('week')} ${cp.w.n}</b><button class="chip" data-act="vai" data-v="programma">${esc(L(cp.w.titolo)).slice(0, 40)}${L(cp.w.titolo).length > 40 ? '…' : ''}</button></div>
      <h2>${esc(L(cp.c.titolo))}</h2>
      ${(cp.c.leggi || []).length ? `<div style="display:flex;flex-direction:column;gap:6px"><b class="small">${t('toRead')}</b><div class="chips">${cp.c.leggi.map(chipScheda).join('')}</div></div>` : ''}
      <div class="serif">${esc(L(cp.c.minimo))}</div>
      ${cp.c.extra ? `<div class="serif small"><b>${t('extra')}:</b> ${esc(L(cp.c.extra))}</div>` : ''}
      <div class="btns2"><button class="btn sm" data-act="compito" data-id="${cp.c.id}" data-f="minimo">${t('doneMin')}</button>${cp.c.extra ? `<button class="btn ghost sm" data-act="compito" data-id="${cp.c.id}" data-f="extra">${t('doneExtra')}</button>` : ''}</div>
    </div>` : ''}
    <button class="card link row" data-act="vai" data-v="sfoglia" style="flex-direction:row;align-items:center;gap:14px">
      <span style="width:52px;height:52px;flex:none;border-radius:16px;background:${gradiente('investimenti')}"></span>
      <span style="flex:1"><b style="font-size:17px">${t('studyTopic')}</b><br><span class="serif">${t('studyTopicSub')}</span></span>${IC.avanti}
    </button>
    <div style="display:flex;flex-direction:column;gap:8px">
      <div class="small muted" style="font-weight:600">${t('thisWeek')}</div>
      <div class="week">${giorni.map((g, i) => `<div class="${(S.ripassi[g] || []).length ? 'done' : g === isoGiorno() ? 'today' : ''}">${nomi[i]}</div>`).join('')}</div>
      <div class="serif small muted">${t('noPile')}</div>
    </div>
    ${statoSync()}
  </main>`;
}
function statoSync() {
  const q = leggi(K.coda, []);
  return q.length ? `<button class="btn ghost sm" data-act="sync">${t('sync')} · ${q.length} ${t('pending')}</button>` : '';
}
function vistaSessione() {
  const s = S.sess, c = cartaCorrente();
  if (!s || !c) { chiudiSessione(); return vistaOggi(); }
  const tx = testoCarta(c, s.varianti); scrivi(K.sessione, s);
  const sc = S.schede[c.scheda];
  const pct = Math.round(s.i / s.coda.length * 100);
  const confs = [['sicuro', t('sure')], ['incerto', t('unsure')], ['nonso', t('dunno')]];
  const contesto = `${esc(L(area(c.area)?.nome))} · ${esc(L(sc.titolo))}`;
  let corpo;
  if (s.fase === 'domanda') {
    corpo = `<button class="card q-card flip" data-act="gira" style="text-align:left;width:100%">
        <div class="q-type">${t('types')[c.tipo] || c.tipo}</div>
        <div class="q-ctx">${contesto}</div>
        <div class="q-text">${inline(L(tx.domanda))}</div>
        <div class="q-tap">${t('tapToFlip')}</div>
      </button>
      <div style="display:flex;flex-direction:column;gap:8px"><div class="small muted" style="font-weight:600">${t('howSure')} <span style="font-weight:400">(${t('optional')})</span></div>
      <div class="btns3">${confs.map(([k, v]) => `<button class="conf ${s.sicurezza === k ? 'on' : ''}" data-act="sicurezza" data-k="${k}">${v}</button>`).join('')}</div></div>
      ${s.scrivi ? `<label class="fld"><span>${t('writeAnswer')}</span><textarea id="scritta" rows="4" placeholder="${t('yourAnswerPh')}">${esc(s.scritta)}</textarea></label>`
        : `<button class="btn ghost sm" data-act="scrivi" style="align-self:flex-start">✎ ${t('writeAnswer')} (${t('optional')})</button>`}`;
  } else {
    const d = c.dettaglio ? L(c.dettaglio) : '', p = c.perche ? L(c.perche) : '';
    corpo = `<div class="card q-card"><div class="q-type">${t('types')[c.tipo] || c.tipo}</div><div class="q-ctx">${contesto}</div><div class="q-text" style="font-size:18px">${inline(L(tx.domanda))}</div></div>
      <div class="card ans">
        <div class="ans-head" style="background:${gradiente(c.area)}"><b>${esc(L(area(c.area)?.nome))}</b>${s.sicurezza === 'sicuro' ? `<span class="warn">${t('wasSure')}</span>` : ''}</div>
        <div class="ans-body">
          <div class="ans-short">${inline(L(tx.risposta))}</div>
          ${s.scritta.trim() ? `<div class="mine"><b style="font-family:var(--sans);font-size:12px">${t('youWrote')}</b>\n${esc(s.scritta.trim())}</div>` : ''}
          ${d && !c.generatore ? `<div>${inline(d)}</div>` : ''}
          ${p ? `<div class="ans-why"><strong>${t('why')}</strong>: ${inline(p)}</div>` : ''}
        </div>
        ${(c.fonti || []).length ? `<div class="ans-src">${c.fonti.map((f) => `<span class="src">${esc(f)}</span>`).join('')}</div>` : ''}
      </div>
      <div class="grades">${[1, 2, 3, 4].map((g) => `<button class="grade g${g}" data-act="vota" data-g="${g}">${[t('again'), t('hard'), t('good'), t('easy')][g - 1]}<span>${anteprima(c.id, g)}</span></button>`).join('')}</div>
      <div class="btns3"><button class="btn ghost sm" data-act="claude">${t('askClaude')}</button><button class="btn ghost sm" data-act="dubbio" data-scheda="${c.scheda}" data-carta="${c.id}">${t('doubt')}</button><button class="btn ghost sm" data-act="scheda" data-id="${c.scheda}">${t('openCard')}</button></div>`;
  }
  const m = S.betaMood;
  const reazione = s.fase === 'domanda' && m && s.i > 0 ? `<div class="react">${beta(m.e, 56, m.a)}${m.txt ? `<div class="bubble">${esc(m.txt)}</div>` : ''}</div>` : '';
  return `<main class="main">
    <div class="s-top"><button class="icon-btn" data-act="esci" aria-label="${t('close')}">${IC.x}</button><div class="bar"><div style="width:${pct}%"></div></div><b class="small">${s.i + 1} / ${s.coda.length}</b></div>
    ${corpo}
    ${reazione}
  </main>`;
}
function vistaFine() {
  const s = S.sess; if (!s) return vistaOggi();
  const tot = s.esiti.length, giuste = s.esiti.filter((x) => x.voto >= 3).length;
  const perArea = {};
  s.esiti.forEach((x) => { const a = S.carte[x.carta]?.area; if (!a) return; (perArea[a] = perArea[a] || { ok: 0, n: 0 }); perArea[a].n++; if (x.voto >= 3) perArea[a].ok++; });
  const ord = Object.entries(perArea).map(([a, v]) => ({ a, p: v.ok / v.n })).sort((x, y) => y.p - x.p);
  return `<main class="main" style="align-items:center;text-align:center;justify-content:center">
    ${beta('contento', 150, 'cheer')}
    <h1>${t('sessionDone')}</h1>
    <div style="font-size:22px;font-weight:700">${giuste} / ${tot} ${t('correct')}</div>
    ${ord.length > 1 ? `<div class="serif">${t('strongest')}: <b>${esc(L(area(ord[0].a)?.nome))}</b><br>${t('weakest')}: <b>${esc(L(area(ord[ord.length - 1].a)?.nome))}</b></div>` : ''}
    <button class="btn" data-act="fine">${t('backHome')}</button>
  </main>`;
}
function vistaSfoglia() {
  if (!S.idx) return vistaOggi();
  const f = S.filtro;
  return `<main class="main">
    <div class="top"><h1>${t('browse')}</h1>${lingua()}</div>
    <div class="serif">${t('browseSub')}</div>
    <button class="card link row" data-act="mescola" style="flex-direction:row;justify-content:space-between;background:${gradiente('cross-topic')}">
      <span><b style="font-size:20px">${t('shuffleAll')}</b><br><span class="small" style="font-weight:500">${t('shuffleSub')}</span></span>${IC.mescola}
    </button>
    <div class="chips">${[['tutte', t('all')], ['deboli', t('weakOnly')], ['colloquio', t('interview')]].map(([k, v]) => `<button class="chip ${f === k ? 'on' : ''}" data-act="filtro" data-k="${k}">${v}</button>`).join('')}</div>
    <div class="grid2">${S.idx.aree.map((a) => {
      const tutte = S.idx.schede.filter((x) => x.area === a.id), sch = tutte.filter((x) => S.schede[x.id]);
      const nC = sch.reduce((n, x) => n + S.schede[x.id].carte.length, 0), r = ricordoArea(a.id);
      return `<button class="deck ${nC ? '' : 'off'}" data-act="area" data-id="${a.id}">
        <div class="g" style="background:${gradiente(a.id)}"></div>
        <div class="b"><div class="t">${esc(L(a.nome))}</div>
        <div class="small muted" style="font-weight:500">${sch.length}/${tutte.length} ${t('sheets')} ${t('written')}${nC ? ` · ${nC} ${t('cards')}` : ''}</div>
        ${nC ? `<div class="bar"><div style="width:${r ? Math.round(r.media * 100) : 0}%"></div></div><div class="small" style="font-weight:600">${r ? `${t('recall')} ${Math.round(r.media * 100)}%` : t('notSeen')}</div>` : ''}</div>
      </button>`;
    }).join('')}</div>
  </main>`;
}
function vistaArea() {
  const a = area(S.param); if (!a) return vistaSfoglia();
  const tutte = S.idx.schede.filter((x) => x.area === a.id), pronte = tutte.filter((x) => S.schede[x.id]);
  return `<main class="main">
    <div class="hero" style="background:${gradiente(a.id)}">
      <div class="row between"><button class="icon-btn" data-act="vai" data-v="sfoglia" aria-label="${t('back')}">${IC.indietro}</button>${lingua()}</div>
      <h1>${esc(L(a.nome))}</h1>
    </div>
    ${pronte.length ? `<button class="btn" data-act="ripassa-area" data-id="${a.id}">${t('shuffleAll')} · ${esc(L(a.nome))}</button>` : ''}
    <div class="list">${tutte.map((m) => { const sc = S.schede[m.id];
      if (!sc) return `<div class="item" style="opacity:.55"><b>${esc(L(m.titolo))}</b><div class="small muted">${t('inArrivo')}</div></div>`;
      const r = ricordoScheda(sc.id); return `<button class="item" data-act="scheda" data-id="${sc.id}">
      <div class="row between"><b>${esc(L(sc.titolo))}</b>${IC.avanti}</div>
      <div class="small muted">${sc.carte.length} ${t('cards')} · ${r ? `${t('recall')} ${Math.round(r.media * 100)}%` : t('notSeen')}</div>
      <div class="bar"><div style="width:${r ? Math.round(r.media * 100) : 0}%"></div></div></button>`; }).join('')}</div>
  </main>`;
}
function vistaScheda() {
  const sc = S.schede[S.param]; if (!sc) return vistaSfoglia();
  const col = (sc.collegate || []).map(chipScheda).join('');
  return `<main class="main">
    <div class="hero" style="background:${gradiente(sc.area)}">
      <div class="row between"><button class="icon-btn" data-act="indietro" aria-label="${t('back')}">${IC.indietro}</button><div class="row"><b class="small">${esc(L(area(sc.area)?.nome))}</b>${lingua()}</div></div>
      <h1>${esc(L(sc.titolo))}</h1>
    </div>
    <div class="md">${md(L(sc.corpo))}</div>
    ${col ? `<div style="display:flex;flex-direction:column;gap:10px"><h3>${t('linked')}</h3><div class="chips">${col}</div></div>` : ''}
    <div class="chips">${(sc.fonti || []).map((f) => `<span class="src">${esc(f)}</span>`).join('')}</div>
    <button class="btn" data-act="ripassa-scheda" data-id="${sc.id}">${t('reviewSheet')} (${sc.carte.length})</button>
    <div class="btns2"><button class="btn ghost sm" data-act="claude-scheda" data-id="${sc.id}">${t('askClaude')}</button><button class="btn ghost sm" data-act="dubbio" data-scheda="${sc.id}">${t('doubt')}</button></div>
  </main>`;
}
function vistaMappa() {
  if (!S.idx) return vistaOggi();
  return `<main class="main">
    <div class="top"><h1>${t('map')}</h1>${lingua()}</div>
    <div class="serif">${t('mapSub')}</div>
    ${S.idx.aree.map((a) => {
      const sch = S.idx.schede.filter((x) => x.area === a.id && S.schede[x.id]).map((x) => S.schede[x.id]);
      if (!sch.length) return '';
      return `<div class="card" style="padding:0;overflow:hidden;gap:0"><div style="padding:12px 18px;border-bottom:2px solid var(--ink);background:${gradiente(a.id)}"><b>${esc(L(a.nome))}</b></div>
        <div style="padding:14px 18px;display:flex;flex-direction:column;gap:14px">${sch.map((sc) => { const r = ricordoScheda(sc.id); return `<div style="display:flex;flex-direction:column;gap:6px">
          <button class="row between" data-act="scheda" data-id="${sc.id}" style="background:none;border:none;padding:0;text-align:left"><b>${esc(L(sc.titolo))}</b><span class="small">${r ? Math.round(r.media * 100) + '%' : '—'}</span></button>
          <div class="bar"><div style="width:${r ? Math.round(r.media * 100) : 0}%"></div></div>
          <div class="chips">${(sc.collegate || []).map(chipScheda).join('')}</div></div>`; }).join('')}</div></div>`;
    }).join('')}
  </main>`;
}
function vistaProgramma() {
  if (!S.prog) return `<main class="main"><h1>${t('program')}</h1><p class="serif">${t('loading')}</p></main>`;
  const cp = compitoDiOggi();
  return `<main class="main">
    <div class="top"><h1>${t('program')}</h1>${lingua()}</div>
    <div class="serif">${esc(L(S.prog.messaggio))}</div>
    <div class="small muted">${t('programSub')}</div>
    ${S.prog.settimane.map((w) => `<div class="card">
      <div class="row between"><b class="small">${t('week')} ${w.n} · ${esc(w.dal || '')}</b>${cp && cp.w.n === w.n ? `<span class="chip on">${t('current')}</span>` : ''}</div>
      <h2>${esc(L(w.titolo))}</h2>
      ${w.compiti.map((c) => { const f = S.progLog[c.id]; return `<div style="display:flex;gap:10px;align-items:flex-start;border-top:1.5px solid var(--line);padding-top:10px">
        <span class="num" style="${f ? 'background:var(--ink);color:var(--bg)' : ''}">${f ? '✓' : ''}</span>
        <div style="flex:1;display:flex;flex-direction:column;gap:6px"><div><b>${esc(L(c.titolo))}</b>${c.jolly ? ` <span class="tag">${t('wildcard')}</span>` : ''}</div>
        ${(c.leggi || []).length ? `<div class="chips"><span class="small muted" style="font-weight:600;align-self:center">${t('toRead')}:</span>${c.leggi.map(chipScheda).join('')}</div>` : ''}
        <div class="serif small">${esc(L(c.minimo))}</div>
        ${f ? `<button class="btn ghost sm" style="align-self:flex-start" data-act="annulla-compito" data-id="${c.id}">${t('undo')}</button>`
            : `<button class="btn sm" style="align-self:flex-start" data-act="compito" data-id="${c.id}" data-f="minimo">${t('markDone')}</button>`}</div></div>`; }).join('')}
    </div>`).join('')}
  </main>`;
}
function vistaImpostazioni() {
  const c = cfg(), r = ritmo();
  return `<main class="main">
    <div class="top"><h1>${t('settings')}</h1>${lingua()}</div>
    <div class="serif">${t('settingsSub')}</div>
    <div class="beta-row">${beta('pensoso', 64)}<div class="bubble">${S.lang === 'it' ? 'Qui decidi il ritmo. Io mi adatto.' : 'You set the pace here. I\'ll adapt.'}</div></div>
    <div class="sheet">
      <label class="fld"><span>${t('owner')}</span><input id="c-owner" type="text" value="${esc(c.owner)}" autocomplete="off"></label>
      <label class="fld"><span>${t('repo')}</span><input id="c-repo" type="text" value="${esc(c.repo)}" autocomplete="off"></label>
      <label class="fld"><span>${t('branch')}</span><input id="c-branch" type="text" value="${esc(c.branch)}" autocomplete="off"></label>
      <label class="fld"><span>${t('token')}</span><input id="c-token" type="password" value="${esc(c.token)}" autocomplete="off"></label>
      <div class="small muted">${t('tokenNote')}</div>
      <label class="fld"><span>${t('claudeLink')}</span><input id="c-claude" type="url" value="${esc(r.claude)}" placeholder="https://claude.ai/project/…"></label>
      <div class="btns3">
        <label class="fld"><span>${t('newPerDay')}</span><input id="r-nuove" type="number" min="0" max="60" value="${r.nuove}"></label>
        <label class="fld"><span>${t('maxReviews')}</span><input id="r-tetto" type="number" min="10" max="300" value="${r.tetto}"></label>
        <label class="fld"><span>${t('retention')}</span><input id="r-ret" type="number" min="0.7" max="0.97" step="0.01" value="${r.ritenzione}"></label>
      </div>
      <div class="btns3"><button class="btn sm" data-act="salva-impostazioni">${t('save')}</button><button class="btn ghost sm" data-act="prova">${t('test')}</button><button class="btn ghost sm" data-act="esporta">${t('export')}</button></div>
      <div id="esito" class="small muted"></div>
    </div>
    ${statoSync()}
  </main>`;
}
function vistaDubbio() {
  const p = S.param || {}, c = p.carta ? S.carte[p.carta] : null, sc = S.schede[p.scheda];
  return `<main class="main">
    <div class="top"><button class="icon-btn" data-act="annulla-dubbio" aria-label="${t('cancel')}">${IC.x}</button><h2>${t('doubt')}</h2><span></span></div>
    <div class="beta-row">${beta('pensoso', 64)}<div class="bubble">${esc(c ? L(c.domanda) : L(sc?.titolo))}</div></div>
    <label class="fld"><span>${t('doubtPh')}</span><textarea id="dubbio-testo" rows="6"></textarea></label>
    <div class="btns2"><button class="btn ghost" data-act="annulla-dubbio">${t('cancel')}</button><button class="btn" data-act="salva-dubbio">${t('send')}</button></div>
  </main>`;
}

/* ---------- render e navigazione ---------- */
const storia = [];
function vai(v, param = null) {
  if (S.view !== v || S.param !== param) storia.push({ v: S.view, p: S.param });
  S.view = v; S.param = param;
  render(); window.scrollTo(0, 0);
}
function render() {
  const viste = { oggi: vistaOggi, sessione: vistaSessione, fine: vistaFine, sfoglia: vistaSfoglia, area: vistaArea, scheda: vistaScheda, mappa: vistaMappa, programma: vistaProgramma, impostazioni: vistaImpostazioni, dubbio: vistaDubbio };
  const conNav = !['sessione', 'fine', 'dubbio'].includes(S.view);
  document.getElementById('app').innerHTML = (viste[S.view] || vistaOggi)() + (conNav ? nav() : '');
  document.documentElement.lang = S.lang;
  const ta = document.getElementById('scritta');
  if (ta) ta.addEventListener('input', () => { S.sess.scritta = ta.value; scrivi(K.sessione, S.sess); });
}
let toastT;
function toast(msg) { const el = document.getElementById('toast'); el.textContent = msg; el.classList.add('on'); clearTimeout(toastT); toastT = setTimeout(() => el.classList.remove('on'), 2600); }

/* ---------- azioni ---------- */
function testoPerClaude(c, extra) {
  const sc = S.schede[c?.scheda || extra?.scheda];
  if (S.lang === 'it') {
    return c
      ? `CAM Study · scheda ${sc.id} "${L(sc.titolo)}" · carta ${c.id}\n\nDomanda: ${L(extra.domanda)}\nRisposta della carta: ${L(extra.risposta)}${extra.scritta ? `\nLa mia risposta: ${extra.scritta}` : ''}\n\nNon mi è chiaro: `
      : `CAM Study · scheda ${sc.id} "${L(sc.titolo)}"\n\nNon mi è chiaro: `;
  }
  return c
    ? `CAM Study · sheet ${sc.id} "${L(sc.titolo)}" · card ${c.id}\n\nQuestion: ${L(extra.domanda)}\nCard answer: ${L(extra.risposta)}${extra.scritta ? `\nMy answer: ${extra.scritta}` : ''}\n\nWhat I don't get: `
    : `CAM Study · sheet ${sc.id} "${L(sc.titolo)}"\n\nWhat I don't get: `;
}
async function copiaEApri(testo) {
  try { await navigator.clipboard.writeText(testo); toast(t('copied')); } catch { prompt(t('copied'), testo); }
  const link = ritmo().claude; if (link) window.open(link, '_blank', 'noopener');
}
document.addEventListener('click', async (e) => {
  const el = e.target.closest('[data-act]'); if (!el) return;
  const a = el.dataset.act;
  switch (a) {
    case 'vai': vai(el.dataset.v); break;
    case 'lingua': S.lang = S.lang === 'it' ? 'en' : 'it'; scrivi(K.lingua, S.lang); render(); break;
    case 'giorno': avviaSessione(codaDelGiorno(), 'giorno'); break;
    case 'riprendi': vai('sessione'); break;
    case 'mescola': avviaSessione(codaSfoglia(S.filtro), 'sfoglia'); break;
    case 'filtro': S.filtro = el.dataset.k; render(); break;
    case 'area': vai('area', el.dataset.id); break;
    case 'ripassa-area': avviaSessione(codaSfoglia(S.filtro, el.dataset.id), 'area'); break;
    case 'scheda': vai('scheda', el.dataset.id); break;
    case 'ripassa-scheda': avviaSessione(codaSfoglia('tutte', null, el.dataset.id), 'scheda'); break;
    case 'indietro': { const p = storia.pop(); if (p) { S.view = p.v; S.param = p.p; render(); window.scrollTo(0, 0); } else vai('sfoglia'); break; }
    case 'sicurezza': S.sess.sicurezza = S.sess.sicurezza === el.dataset.k ? null : el.dataset.k; scrivi(K.sessione, S.sess); render(); break;
    case 'gira': S.sess.fase = 'risposta'; S.betaMood = null; scrivi(K.sessione, S.sess); render(); window.scrollTo(0, 0); break;
    case 'scrivi': S.sess.scrivi = true; scrivi(K.sessione, S.sess); render(); document.getElementById('scritta')?.focus(); break;
    case 'veloce': { const tutte = codaSfoglia('tutte'), n = Number(el.dataset.n); avviaSessione(n ? tutte.slice(0, n) : tutte, 'veloce'); break; }
    case 'beta': reagisci(el); break;
    case 'annulla-compito': {
      const id = el.dataset.id, v = S.progLog[id]; if (!v) break;
      delete S.progLog[id]; scrivi(K.programma, S.progLog);
      const q = leggi(K.coda, []).filter((x) => !(x.tipo === 'programma' && x.id === id)); q.push({ tipo: 'programma-annulla', id, data: v.data }); scrivi(K.coda, q);
      render(); sincronizza(); break;
    }
    case 'vota': vota(Number(el.dataset.g)); break;
    case 'esci': chiudiSessione(); vai('oggi'); break;
    case 'fine': chiudiSessione(); S.betaMood = null; vai('oggi'); sincronizza(); break;
    case 'claude': { const c = cartaCorrente(), tx = testoCarta(c, S.sess.varianti); copiaEApri(testoPerClaude(c, { domanda: tx.domanda, risposta: tx.risposta, scritta: S.sess.scritta.trim() })); break; }
    case 'claude-scheda': copiaEApri(testoPerClaude(null, { scheda: el.dataset.id })); break;
    case 'dubbio': vai('dubbio', { scheda: el.dataset.scheda, carta: el.dataset.carta || null, ritorno: S.view }); break;
    case 'annulla-dubbio': { const r = S.param?.ritorno || 'oggi'; S.view = r; S.param = r === 'scheda' ? S.param.scheda : null; render(); break; }
    case 'salva-dubbio': {
      const testo = document.getElementById('dubbio-testo').value.trim(); if (!testo) return;
      const p = S.param, d = new Date(), id = `${isoGiorno(d)}-${pad(d.getHours())}${pad(d.getMinutes())}${pad(d.getSeconds())}`;
      const dub = { id, data: isoOra(d), carta: p.carta, scheda: p.scheda, testo, stato: 'aperto' };
      S.dubbi.push(dub); scrivi(K.dubbi, S.dubbi); accoda({ tipo: 'dubbio', id });
      toast(t('doubtSaved'));
      const r = p.ritorno || 'oggi'; S.view = r; S.param = r === 'scheda' ? p.scheda : null; render(); sincronizza(); break;
    }
    case 'compito': {
      const id = el.dataset.id, giorno = isoGiorno();
      S.progLog[id] = { data: giorno, compito: id, fatto: el.dataset.f, note: '' }; scrivi(K.programma, S.progLog);
      accoda({ tipo: 'programma', id }); toast(t('saved')); render(); sincronizza(); break;
    }
    case 'salva-impostazioni': salvaImpostazioni(); toast(t('saved')); break;
    case 'prova': salvaImpostazioni(); provaConnessione(); break;
    case 'esporta': esporta(); break;
    case 'sync': sincronizza(true); break;
  }
});

/* ---------- impostazioni e GitHub ---------- */
function cfgDefault() {
  const h = location.hostname, seg = location.pathname.split('/').filter(Boolean)[0] || '';
  return h.endsWith('.github.io') ? { owner: h.split('.')[0], repo: seg } : { owner: '', repo: '' };
}
function cfg() { return { ...cfgDefault(), branch: 'main', token: '', ...leggi(K.impostazioni, {}) }; }
function salvaImpostazioni() {
  const v = (id) => document.getElementById(id)?.value.trim() ?? '';
  scrivi(K.impostazioni, { owner: v('c-owner'), repo: v('c-repo'), branch: v('c-branch') || 'main', token: v('c-token') });
  const n = (id, def) => { const x = Number(v(id)); return Number.isFinite(x) && x > 0 ? x : def; };
  scrivi(K.ritmo, { nuove: Math.round(n('r-nuove', 12)), tetto: Math.round(n('r-tetto', 80)), ritenzione: Math.min(0.97, Math.max(0.7, n('r-ret', 0.9))), claude: v('c-claude') });
  ricalcolaStato();
}
function syncPronto() { const c = cfg(); return !!(c.owner && c.repo && c.token); }
function gh(path, opts = {}) {
  const c = cfg();
  return fetch(`https://api.github.com/repos/${encodeURIComponent(c.owner)}/${encodeURIComponent(c.repo)}${path}`, {
    ...opts, headers: { Accept: 'application/vnd.github+json', Authorization: `Bearer ${c.token}`, 'X-GitHub-Api-Version': '2022-11-28', ...(opts.headers || {}) }
  });
}
const b64e = (s) => btoa(unescape(encodeURIComponent(s)));
const b64d = (s) => decodeURIComponent(escape(atob(s.replace(/\n/g, ''))));
async function leggiFile(percorso) {
  const r = await gh(`/contents/${percorso}?ref=${encodeURIComponent(cfg().branch)}`);
  if (r.status === 404) return null;
  if (!r.ok) throw new Error(`GitHub ${r.status}`);
  const j = await r.json();
  return { sha: j.sha, dati: JSON.parse(b64d(j.content)) };
}
async function scriviFile(percorso, dati, messaggio, sha) {
  const body = { message: messaggio, content: b64e(JSON.stringify(dati, null, 1) + '\n'), branch: cfg().branch };
  if (sha) body.sha = sha;
  const r = await gh(`/contents/${percorso}`, { method: 'PUT', body: JSON.stringify(body) });
  if (!r.ok) throw new Error(`GitHub ${r.status}`);
}
function accoda(x) {
  const q = leggi(K.coda, []);
  if (!q.some((y) => y.tipo === x.tipo && (y.data || y.id) === (x.data || x.id))) q.push(x);
  scrivi(K.coda, q);
}
let syncInCorso = false;
async function sincronizza(manuale = false) {
  if (!syncPronto()) { if (manuale) toast(t('configure')); return; }
  if (syncInCorso || !navigator.onLine) return;
  syncInCorso = true;
  let q = leggi(K.coda, []);
  try {
    for (const x of [...q]) {
      if (x.tipo === 'ripassi') {
        const p = `progressi/ripassi/${x.data}.json`, rem = await leggiFile(p);
        const tutti = [...(rem?.dati.ripassi || []), ...(S.ripassi[x.data] || [])];
        const visti = new Set(), uniti = tutti.filter((r) => { const k = r.carta + '|' + r.ora; if (visti.has(k)) return false; visti.add(k); return true; }).sort((a, b) => a.ora.localeCompare(b.ora));
        await scriviFile(p, { data: x.data, ripassi: uniti }, `ripassi: ${x.data}`, rem?.sha);
        S.ripassi[x.data] = uniti;
      } else if (x.tipo === 'programma') {
        const v = S.progLog[x.id]; if (v) { const p = `progressi/programma/${v.data}-${x.id}.json`, rem = await leggiFile(p); await scriviFile(p, v, `programma: ${x.id}`, rem?.sha); }
      } else if (x.tipo === 'programma-annulla') {
        const p = `progressi/programma/${x.data}-${x.id}.json`, rem = await leggiFile(p);
        if (rem) { const r = await gh(`/contents/${p}`, { method: 'DELETE', body: JSON.stringify({ message: `programma: annulla ${x.id}`, sha: rem.sha, branch: cfg().branch }) }); if (!r.ok) throw new Error(`GitHub ${r.status}`); }
      } else if (x.tipo === 'dubbio') {
        const d = S.dubbi.find((y) => y.id === x.id); if (d) { const p = `progressi/dubbi/${d.id}.json`, rem = await leggiFile(p); await scriviFile(p, d, `dubbio: ${d.scheda}${d.carta ? ' ' + d.carta : ''}`, rem?.sha); }
      }
      q = q.filter((y) => y !== x); scrivi(K.coda, q);
    }
    scrivi(K.ripassi, S.ripassi);
    if (manuale) toast(t('saved'));
  } catch (e) { console.warn('sync', e); if (manuale) toast(String(e.message || e)); }
  finally { syncInCorso = false; if (['oggi', 'impostazioni'].includes(S.view)) render(); }
}
async function scaricaProgressi() {
  if (!syncPronto() || !navigator.onLine) return;
  try {
    const lista = async (dir) => { const r = await gh(`/contents/${dir}?ref=${encodeURIComponent(cfg().branch)}`); return r.ok ? (await r.json()).filter((f) => f.name.endsWith('.json')) : []; };
    for (const f of await lista('progressi/ripassi')) {
      const giorno = f.name.replace('.json', ''), loc = S.ripassi[giorno] || [];
      const rem = await leggiFile(f.path); if (!rem) continue;
      const visti = new Set(loc.map((r) => r.carta + '|' + r.ora));
      S.ripassi[giorno] = [...loc, ...rem.dati.ripassi.filter((r) => !visti.has(r.carta + '|' + r.ora))].sort((a, b) => a.ora.localeCompare(b.ora));
    }
    for (const f of await lista('progressi/programma')) {
      const annullati = new Set(leggi(K.coda, []).filter((x) => x.tipo === 'programma-annulla').map((x) => x.id));
      const rem = await leggiFile(f.path); if (rem && !S.progLog[rem.dati.compito] && !annullati.has(rem.dati.compito)) S.progLog[rem.dati.compito] = rem.dati;
    }
    scrivi(K.ripassi, S.ripassi); scrivi(K.programma, S.progLog);
    ricalcolaStato(); if (S.view !== 'sessione') render();
  } catch (e) { console.warn('download', e); }
}
async function provaConnessione() {
  const out = document.getElementById('esito');
  try {
    if (!syncPronto()) throw new Error(t('configure'));
    const r = await gh('');
    if (!r.ok) throw new Error(r.status === 404 ? 'repo / token' : `GitHub ${r.status}`);
    const j = await r.json();
    out.textContent = j.permissions?.push ? `OK · ${j.full_name}` : `${j.full_name}: no write permission`;
  } catch (e) { out.textContent = String(e.message || e); }
}
function esporta() {
  const dati = { esportato: isoOra(), ripassi: S.ripassi, programma: S.progLog, dubbi: S.dubbi };
  const a = document.createElement('a');
  a.href = URL.createObjectURL(new Blob([JSON.stringify(dati, null, 1)], { type: 'application/json' }));
  a.download = `camstudy-${isoGiorno()}.json`; a.click();
}

/* ---------- avvio ---------- */
(async function avvio() {
  render();
  await caricaContenuti();
  ricalcolaStato();
  if (S.sess && S.sess.i < S.sess.coda.length && S.sess.coda.every((id) => S.carte[id])) S.view = 'sessione';
  else if (S.sess) chiudiSessione();
  render();
  scaricaProgressi().then(() => sincronizza());
  window.addEventListener('online', () => sincronizza());
  if ('serviceWorker' in navigator) navigator.serviceWorker.register('sw.js').catch(() => {});
})();
