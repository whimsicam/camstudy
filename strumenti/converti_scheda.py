#!/usr/bin/env python3
"""Converte una bozza di scheda (.md, repo camstudy-materiali/schede) nel JSON dell'app.

Uso:
  python3 strumenti/converti_scheda.py <bozza.md> [contenuti/schede]

Formato atteso della bozza:
  - frontmatter tra '---' con id, area, titolo_it, titolo_en, fonti (lista), collegate ([A, B])
  - sezione '# 🇮🇹 ...' (corpo italiano) e '# 🇬🇧 ...' (corpo inglese), chiuse da una riga '---'
  - sezione '# Carte / Cards' con una carta per '### <ID> · <TIPO>' e righe '- **Etichetta:** testo'
    IT / EN / Risposta / Answer / Dettaglio / Detail / Perché / Why / Fonti / Generatore / Collegata a
    Le righe con due lingue usano ' / ' come separatore: 'testo italiano / english text'.
  - eventuali sezioni dopo le carte (es. '# Copertura ...') vengono ignorate.
"""
import json
import os
import re
import sys


def frontmatter(testo):
    m = re.match(r"^---\n(.*?)\n---\n", testo, re.S)
    meta, lista = {}, None
    for riga in m.group(1).splitlines():
        if riga.startswith("  - ") and lista is not None:
            meta[lista].append(riga[4:].strip().strip('"'))
            continue
        chiave, _, valore = riga.partition(":")
        valore = valore.strip()
        if not valore:
            lista = chiave.strip()
            meta[lista] = []
        elif valore.startswith("["):
            meta[chiave.strip()] = [v.strip() for v in valore.strip("[]").split(",") if v.strip()]
            lista = None
        else:
            meta[chiave.strip()] = valore.strip('"')
            lista = None
    return meta, testo[m.end():]


def sezione(testo, bandiera):
    """Corpo della sezione che inizia con '# <bandiera>' fino alla riga '---' successiva, senza il titolo H1."""
    inizio = testo.index("# " + bandiera)
    fine = testo.index("\n---\n", inizio)
    corpo = testo[inizio:fine].split("\n", 1)[1]
    return corpo.strip()


def due_lingue(valore):
    if " / " in valore:
        it, en = valore.split(" / ", 1)
        return {"it": it.strip(), "en": en.strip()}
    return {"it": valore.strip(), "en": valore.strip()}


def carte(testo):
    blocco = testo[testo.index("# Carte / Cards"):]
    blocco = re.split(r"\n# (?!Carte)", blocco)[0]
    risultato = []
    for parte in re.split(r"\n### ", blocco)[1:]:
        intest, *righe = parte.strip().splitlines()
        cid, _, tipo = intest.partition("·")
        carta = {"id": cid.strip(), "tipo": tipo.strip().split()[0]}
        for riga in righe:
            m = re.match(r"- \*\*(.+?):\*\*\s*(.*)", riga.strip())
            if not m:
                continue
            etichetta, valore = m.group(1).lower(), m.group(2).strip()
            if etichetta == "it":
                carta.setdefault("domanda", {})["it"] = valore
            elif etichetta == "en":
                carta.setdefault("domanda", {})["en"] = valore
            elif etichetta.startswith("risposta"):
                carta["risposta"] = due_lingue(valore)
            elif etichetta.startswith("dettaglio"):
                carta["dettaglio"] = due_lingue(valore)
            elif etichetta.startswith("perch"):
                carta["perche"] = due_lingue(valore)
            elif etichetta == "fonti":
                carta["fonti"] = [f.strip() for f in re.split(r";", valore) if f.strip()]
            elif etichetta == "generatore":
                g = re.search(r"`(\w+)`", valore)
                if g:
                    carta["generatore"] = g.group(1)
            elif etichetta.startswith("collegata"):
                carta["collegate"] = re.findall(r"\b[A-Z]\d+\b", valore)
        risultato.append(carta)
    return risultato


def main():
    bozza = sys.argv[1]
    uscita = sys.argv[2] if len(sys.argv) > 2 else os.path.join(os.path.dirname(__file__), "..", "contenuti", "schede")
    testo = open(bozza, encoding="utf-8").read()
    meta, resto = frontmatter(testo)
    scheda = {
        "id": meta["id"],
        "area": meta["area"].lower(),
        "titolo": {"it": meta["titolo_it"], "en": meta["titolo_en"]},
        "corpo": {"it": sezione(resto, "🇮🇹"), "en": sezione(resto, "🇬🇧")},
        "fonti": meta.get("fonti", []),
        "collegate": meta.get("collegate", []),
        "carte": carte(resto),
    }
    for c in scheda["carte"]:
        for campo in ("domanda", "risposta"):
            assert campo in c and c[campo].get("it") and c[campo].get("en"), f"{c['id']}: manca {campo}"
    os.makedirs(uscita, exist_ok=True)
    percorso = os.path.join(uscita, f"{scheda['id']}.json")
    json.dump(scheda, open(percorso, "w", encoding="utf-8"), ensure_ascii=False, indent=1)
    print(f"{percorso}: {len(scheda['carte'])} carte")


if __name__ == "__main__":
    main()
