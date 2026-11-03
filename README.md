# CAM Study

Web app per lo studio della finanza e la preparazione ai colloqui: ripasso spaziato (FSRS), schede per argomento, programma colloqui e Beta, la mascotte. Specifica completa in [SPEC.md](SPEC.md).

- App: GitHub Pages da questo repo (`main`, cartella radice).
- Contenuti: `contenuti/` e `programma.json`, scritti da Claude. Le bozze e le fonti stanno nel repo privato `camstudy-materiali`.
- Progressi: `progressi/`, scritti dall'app.

Per aggiungere una scheda: bozza in `camstudy-materiali/schede/`, poi
`python3 strumenti/converti_scheda.py <bozza.md>` e una riga in `contenuti/indice.json`.
