# CAM Study — specifica dell'app

Web app per lo studio della finanza e la preparazione ai colloqui. Si usa da telefono (iPhone, Safari, aggiunta alla Home) e da computer. Ospitata su GitHub Pages da questo repo. Interfaccia e contenuti in **italiano e inglese**, con uno switch.

## Principi

- **Zero build:** HTML, CSS e JavaScript vanilla, file statici. Nessun framework, nessuna dipendenza npm.
- **Il contenuto non è nel codice.** Schede, carte, programma e insight settimanali sono file JSON in `contenuti/`, `programma.json` e `insights/`, scritti da Claude. Cambiare il contenuto vuol dire cambiare solo quei file.
- **Il codice fa il lavoro meccanico, Claude quello di giudizio.** Il codice programma i ripassi (FSRS), genera le varianti numeriche, mescola gli argomenti, calcola statistiche e insight giornalieri. Claude scrive schede e carte, le cross-topic, gli insight settimanali e risponde ai dubbi.
- **Funziona senza campo.** Tutto si salva prima nel browser; la sincronizzazione con GitHub avviene quando c'è rete.
- **Scienza dell'apprendimento, applicata al design:**
  - prima si risponde (scrivendo o a voce), poi si gira la carta;
  - prima di girare si dichiara quanto si è sicuri (Sicuro / Incerto / Non so);
  - nel ripasso misto la domanda non mostra argomento né colore: si vedono solo dopo aver girato;
  - i gradienti stanno nelle cornici e nelle intestazioni, mai dentro il testo della risposta;
  - risposta in una riga, poi dettaglio con parole chiave in grassetto, poi il "perché";
  - nessuna punizione: niente arretrati che si accumulano, giorno jolly, tetto ai ripassi giornalieri.

## Stile

Riferimento visivo: prototipo "CAM Study — prototipo" (artifact claude.ai) e immagine di riferimento con card crema, bordo verde scuro e gradienti.

| Token | Hex | Uso |
|---|---|---|
| `--bg` | `#F4EEE3` | sfondo pagina |
| `--card` | `#FBF7EF` | card |
| `--ink` | `#1E3A2F` | testo, bordi (2 px), pulsanti pieni |
| `--ink-2` | `#2F4A3E` | testo secondario serif |
| `--muted` | `#4A6659` | etichette |
| `--line` | `#D9CFBD` | divisori, barre vuote |
| `--field` | `#FFFDF8` | campi di testo |

- Font: **DM Sans** (titoli, etichette, domande) e **Newsreader** (spiegazioni, risposte lunghe), da Google Fonts. Corpo 16–17 px.
- Card con angoli 20–22 px e bordo 2 px `--ink`. Pulsanti a pillola.
- Ogni area ha un gradiente (radial-gradient a 2–3 colori) definito in `contenuti/indice.json`.
- Pulsanti di voto: Di nuovo `#F4C2B8`, Difficile `#F7DFA8`, Bene `#CDE7B4`, Facile `#BFD5F2`, con l'intervallo previsto sotto.
- Touch target ≥ 44 px. Nessuna dark mode per ora.

## Beta, la mascotte

Pillola con braccine e gambette, stile "morbido" del laboratorio Atypicam, colore **Acqua**: gradiente radiale `#D6F0B2` → `#7FCDB5` → `#7FA8E0`, arti `#7FA8E0`, occhi `--ink`. Disegnata in SVG nel codice, con espressioni.

| Momento | Espressione / movimento |
|---|---|
| Risposta Bene o Facile | contento, saltello |
| Difficile | occhiolino |
| Di nuovo, ed eri Incerto o Non so | perplesso |
| Di nuovo, ed eri Sicuro | sorpreso (errore da correggere subito) |
| Stessa carta Di nuovo 3 volte di fila | arrabbiato o annoiato, a caso |
| Sessione finita | evviva, balla |
| Area sopra l'85% di ricordo | occhi a stella |
| Giorno jolly o più di 3 giorni di pausa | assonnato |
| Rientro dopo una pausa | saluta |
| Insight | pensoso |

Dove compare: home (con "Beta's insight"), fine sessione, schermate vuote, giorno jolly, schede. Nella carta reagisce **solo dopo il voto**, piccola, accanto ai pulsanti: mai sopra il testo della domanda o della risposta.

## File del repo

```
index.html, app.js, style.css   app
manifest.webmanifest, sw.js     PWA (contenuti network-first)
icons/                          icone 180/192/512
programma.json                  programma colloqui (scritto da Claude)
contenuti/indice.json           aree, schede, ordine di sblocco
contenuti/schede/<ID>.json      una scheda con le sue carte (scritte da Claude)
insights/ultimo.json            insight settimanale di Beta (scritto da Claude)
progressi/ripassi/AAAA-MM-GG.json  risposte del giorno (scritte dall'app)
progressi/programma/AAAA-MM-GG.json compiti del programma fatti (scritti dall'app)
progressi/dubbi/AAAA-MM-GG-HHMMSS.json dubbi segnalati (scritti dall'app)
strumenti/converti_scheda.py    converte una bozza .md (repo materiali) nel JSON della scheda
```

I PDF e le bozze stanno nel repo privato `camstudy-materiali`, mai qui.

## Formato dei contenuti

`contenuti/indice.json`:
```json
{
  "versione": "1",
  "aree": [
    { "id": "valuation", "nome": {"it": "Valuation", "en": "Valuation"},
      "gradiente": ["#F7E08A", "#6FC2B0", "#A9D57A"] }
  ],
  "schede": [
    { "id": "V7", "area": "valuation", "file": "schede/V7.json", "sblocco": "2026-11-10" }
  ]
}
```
`sblocco`: dalla data in poi le carte nuove della scheda entrano nel ripasso del giorno. In "Sfoglia" tutte le schede pubblicate sono sempre consultabili.

`contenuti/schede/<ID>.json`:
```json
{
  "id": "V7", "area": "valuation",
  "titolo": {"it": "...", "en": "..."},
  "corpo": {"it": "markdown", "en": "markdown"},
  "fonti": ["IBIG 04 pp. 40–50", "..."],
  "collegate": ["V1", "V3"],
  "carte": [
    { "id": "V7-07", "tipo": "M",
      "domanda": {"it": "...", "en": "..."},
      "risposta": {"it": "...", "en": "..."},
      "dettaglio": {"it": "...", "en": "..."},
      "perche": {"it": "...", "en": "..."},
      "fonti": ["IBIG04 p045"],
      "generatore": "ev_collegata" }
  ]
}
```
Tipi di carta: `F` fatto, `M` meccanica, `A` aperta da colloquio, `T` trappola, `X` cross-topic. Il markdown supportato: titoli `##`, grassetto, elenchi, tabelle, citazioni di fonte tra parentesi quadre (mostrate come etichette piccole).

**Carte parametriche:** se `generatore` è presente, l'app genera ogni volta numeri nuovi con la funzione omonima in `app.js` e ricalcola la risposta. Il testo nel JSON è l'esempio di riferimento.

## Viste

### 1. Oggi
- Data, settimana del programma, saluto.
- **Beta's insight** del giorno (calcolato dal codice, vedi sotto), oppure quello settimanale di Claude se è di oggi.
- Card "Ripasso del giorno": numero di carte e minuti stimati (≈ 45 s a carta), "Inizia".
- Card "Programma colloqui": compito del giorno, con **minimo** ed **extra** facoltativo, spunta "Fatto".
- Card "Hai 5 minuti? Sfoglia".
- Striscia della settimana: giorni fatti, oggi, giorno jolly.

### 2. Sessione (carta)
- Barra in alto: chiudi, avanzamento, contatore.
- **Domanda:** tipo di carta visibile (Fatto, Meccanica…); argomento e colore **nascosti** nel ripasso misto, visibili quando si sfoglia per argomento.
- Campo "La tua risposta" (facoltativo, si può saltare), poi "Quanto sei sicuro?" (obbligatorio), poi "Mostra risposta".
- **Risposta:** intestazione con gradiente e nome dell'area, risposta in una riga in grassetto, dettaglio, perché, fonti come etichette. Se si era Sicuri e si vota Di nuovo, etichetta "Eri sicuro: occhio".
- Voti: Di nuovo / Difficile / Bene / Facile con intervallo previsto.
- Sotto: "Chiedi a Claude" (copia negli appunti un messaggio pronto con domanda, risposta, la tua risposta e il riferimento alla scheda; se nelle impostazioni c'è il link al progetto Claude lo apre), "Ho un dubbio" (salva un dubbio), "Apri scheda".
- Fine sessione: riepilogo (carte, giuste, area più forte e più debole) con Beta che festeggia.

### 3. Sfoglia
- "Mescola tutto": carte a caso da tutte le schede pubblicate.
- Filtri: Tutte, Solo le deboli (R < 80% o mai viste), Da colloquio (tipi A e X).
- Griglia delle aree con gradiente, numero di carte e schede, percentuale media di ricordo. Toccando un'area: elenco delle sue schede; toccando una scheda: la scheda.
- Le risposte date qui aggiornano lo stato FSRS come quelle del ripasso.

### 4. Scheda
- Intestazione con gradiente, titolo, area.
- Corpo in markdown, fonti, schede collegate (cliccabili).
- "Ripassa le N carte di questa scheda", "Chiedi a Claude", "Ho un dubbio".

### 5. Mappa
- Aree e schede con la percentuale di ricordo (media della R delle carte viste) e i collegamenti tra schede (`collegate`). Prima versione: elenco per area con barre e collegamenti cliccabili. Il grafo vero arriva dopo.

### 6. Programma
- Settimane del `programma.json`, compiti con stato. Il compito di oggi è il primo non fatto: se salti un giorno, si slitta, non si accumula.

### 7. Impostazioni
- Lingua (IT / EN), anche come switch in alto in ogni vista.
- Owner, repo, branch, token GitHub fine-grained (Contents read/write su questo repo), "Prova connessione". Il token resta solo in localStorage.
- Link al progetto Claude "CAM Study" (facoltativo).
- Nuove carte al giorno (default 12), tetto ripassi al giorno (default 80), ritenzione target (default 0,90).
- "Esporta tutti i dati".

## Ripasso: FSRS (calcolato dall'app)

- Algoritmo **FSRS-5** con i parametri di default. Voti: Di nuovo = 1, Difficile = 2, Bene = 3, Facile = 4.
- Lo stato di ogni carta (stabilità, difficoltà, ultimo ripasso) **si ricalcola a ogni avvio rileggendo tutti i ripassi** in `progressi/ripassi/`: i log sono l'unica fonte di verità, lo stato è derivato.
- Una carta è "da ripassare" quando la ritenzione prevista scende sotto il target (intervallo = stabilità con target 0,90).
- **Ripasso del giorno** = carte scadute (dalle più in ritardo) fino al tetto + carte nuove fino al limite giornaliero, prese dalle schede già sbloccate nell'ordine di `indice.json`. Le carte vengono **mescolate** evitando due carte della stessa scheda di fila. Una carta votata Di nuovo torna in fondo alla sessione.
- Errore con sicurezza (Sicuro + Di nuovo): la carta è segnata e ritorna il giorno dopo anche se FSRS direbbe prima o dopo.

## Insight di Beta

Giornalieri, calcolati dal codice senza AI, uno solo per giorno scelto da queste regole in ordine:
1. Una carta sbagliata 3+ volte negli ultimi 7 giorni: "X ti sfugge da N giorni. Oggi parte per prima." (e la mette in testa).
2. Errori con sicurezza ieri: "Ieri N risposte sicure erano sbagliate. Le rivediamo oggi."
3. Area più debole (R media più bassa, almeno 10 carte viste).
4. Area più forte sopra l'85%: complimento.
5. Nessun ripasso da 3+ giorni: bentornato.
6. Default: quante carte oggi e quanto tempo.

Settimanali: file `insights/ultimo.json` scritto da Claude nella revisione settimanale: `{ "data": "...", "testo": {"it": "...", "en": "..."} }`. Ha la precedenza il giorno della sua data.

## Formato dei dati scritti dall'app

`progressi/ripassi/AAAA-MM-GG.json`:
```json
{
  "data": "2026-11-03",
  "ripassi": [
    { "carta": "V7-07", "ora": "2026-11-03T08:12:30+01:00", "voto": 3,
      "sicurezza": "sicuro", "modo": "giorno", "risposta_scritta": "...",
      "varianti": {"a": 320, "b": 30} }
  ]
}
```
`modo`: `giorno` (ripasso del giorno) o `sfoglia`.

`progressi/programma/AAAA-MM-GG.json`: `{ "data": "...", "compito": "s1-g2", "fatto": "minimo" | "extra", "note": "" }`

`progressi/dubbi/AAAA-MM-GG-HHMMSS.json`: `{ "data": "...", "carta": "V7-13" | null, "scheda": "V7", "testo": "...", "stato": "aperto" }`

## Sincronizzazione con GitHub
- Ogni file scritto va in una coda in localStorage e si invia con la GitHub Contents API (PUT). Se il file del giorno esiste già, si legge, si uniscono i ripassi (per `carta` + `ora`) e si riscrive. Messaggio di commit: "ripassi: 2026-11-03".
- All'avvio l'app legge `progressi/` dal repo e lo unisce ai dati locali.
- `programma.json`, `contenuti/` e `insights/` letti sempre freschi (network-first).

## Programma colloqui (`programma.json`)
```json
{
  "versione": "1",
  "inizio": "2026-11-04",
  "fine": "2026-12-20",
  "settimane": [
    { "n": 1, "titolo": {"it": "...", "en": "..."},
      "compiti": [
        { "id": "s1-g1", "titolo": {"it": "...", "en": "..."},
          "minimo": {"it": "...", "en": "...", "min": 35},
          "extra": {"it": "...", "en": "...", "min": 20},
          "jolly": false }
      ] }
  ]
}
```

## Criteri di accettazione
1. Su iPhone, aggiunta alla Home, si apre a schermo intero con nome "CAM Study".
2. Ripasso del giorno: rispondere, dichiarare la sicurezza, girare, votare; l'intervallo mostrato sui pulsanti cambia con lo stato della carta.
3. Nel ripasso misto la domanda non mostra né area né colore; in Sfoglia per area sì.
4. Una carta parametrica mostra numeri diversi a ogni uscita e la risposta è coerente con quei numeri.
5. Switch IT/EN: cambia interfaccia, schede e carte senza ricaricare.
6. Ricaricare la pagina a metà sessione: si riprende dalla carta corrente.
7. Salvare offline, poi riattivare la rete: il file compare in `progressi/ripassi/` sul repo.
8. Modificare una carta in `contenuti/` sul repo: dopo il ricaricamento l'app mostra il nuovo testo.
9. Nessun token nel codice o nei file del repo.
