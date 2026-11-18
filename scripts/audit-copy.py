#!/usr/bin/env python3
"""Audita o texto visível do build em busca de marcas típicas de texto gerado.

Lê o `dist/` já construído (npm run build) e reporta:
- travessão (em dash) e reticências
- aspas tipográficas
- expressões batidas que se repetem em texto de site

Uso: python scripts/audit-copy.py
"""

from __future__ import annotations

import html
import pathlib
import re
import sys

ROOT = pathlib.Path(__file__).resolve().parents[1]
DIST = ROOT / "dist"

PHRASES = [
    "not only",
    "but also",
    "whether you",
    "attention to detail",
    "from start to finish",
    "that is why",
    "reach out",
    "when it comes to",
    "seamless",
    "elevate",
    "unlock",
    "leverage",
    "cutting-edge",
    "state-of-the-art",
    "comprehensive",
    "tailored",
    "curated",
    "nestled",
    "boasts",
    "vibrant",
    "breathtaking",
    "testament",
    "delve",
    "meticulous",
    "peace of mind",
    "dream home",
    "we pride ourselves",
    "rest assured",
    "in today's",
    "ever-evolving",
]


def visible_text(page: pathlib.Path) -> str:
    raw = page.read_text(encoding="utf-8", errors="ignore")
    raw = re.sub(r"<(script|style)[^>]*>.*?</\1>", " ", raw, flags=re.S | re.I)
    return re.sub(r"\s+", " ", html.unescape(re.sub(r"<[^>]+>", " ", raw)))


def main() -> None:
    sys.stdout.reconfigure(encoding="utf-8", errors="replace")
    pages = sorted(DIST.rglob("index.html"))
    if not pages:
        print("dist/ vazio. Rode npm run build antes.")
        return

    dashes = quotes = 0
    hits: dict[str, list[str]] = {}

    for page in pages:
        text = visible_text(page)
        dashes += text.count("\u2014")
        quotes += text.count("\u201c") + text.count("\u201d")
        low = text.lower()
        for phrase in PHRASES:
            start = low.find(phrase)
            if start == -1:
                continue
            rel = page.relative_to(DIST)
            snippet = text[max(0, start - 60) : start + 90].strip()
            hits.setdefault(phrase, []).append(f"{rel} :: {snippet}")

    print(f"paginas: {len(pages)}")
    print(f"travessoes (em dash): {dashes}")
    print(f"aspas tipograficas: {quotes}")
    if not hits:
        print("nenhuma expressao batida encontrada")
        return
    print("expressoes:")
    for phrase, items in sorted(hits.items(), key=lambda kv: -len(kv[1])):
        print(f"  {len(items):3}  {phrase}")
        for item in items[:2]:
            print(f"       {item}")


if __name__ == "__main__":
    main()
