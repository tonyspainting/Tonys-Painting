#!/usr/bin/env python3
"""Gera o GIF de comemoraÃ§Ã£o que abre o e-mail de novo lead.

O Gmail nÃ£o executa JavaScript em mensagens recebidas, entÃ£o a celebraÃ§Ã£o
precisa ser um GIF animado (o Gmail anima GIFs normalmente).
SaÃ­da: form-api/assets/lead-confetti.gif
"""

from __future__ import annotations

import math
import random
from pathlib import Path

from PIL import Image, ImageDraw

ROOT = Path(__file__).resolve().parents[1]
OUTPUT = ROOT / "form-api" / "assets" / "lead-confetti.gif"

WIDTH, HEIGHT = 600, 150
FRAMES = 24
COLORS = [
    (196, 41, 28),    # vermelho da marca
    (242, 112, 95),
    (245, 197, 24),
    (255, 255, 255),
    (76, 175, 125),
    (86, 138, 214),
]


def ribbons(seed: int) -> list[dict]:
    rng = random.Random(seed)
    pieces = []
    for _ in range(110):
        pieces.append(
            {
                "x": rng.uniform(0, WIDTH),
                "y": rng.uniform(-HEIGHT, HEIGHT * 0.9),
                "len": rng.uniform(6, 16),
                "w": rng.uniform(3, 6),
                "speed": rng.uniform(6, 14),
                "drift": rng.uniform(-0.6, 0.6),
                "angle": rng.uniform(0, math.pi),
                "spin": rng.uniform(-0.25, 0.25),
                "color": rng.choice(COLORS),
            }
        )
    return pieces


def draw_frame(pieces: list[dict], t: int) -> Image.Image:
    img = Image.new("RGB", (WIDTH, HEIGHT), (22, 20, 19))
    draw = ImageDraw.Draw(img)

    for p in pieces:
        y = p["y"] + p["speed"] * t
        if y > HEIGHT + 20:
            y -= HEIGHT * 1.8
        x = p["x"] + p["drift"] * t * 3
        angle = p["angle"] + p["spin"] * t
        half = p["len"] / 2
        dx = math.cos(angle) * half
        dy = math.sin(angle) * half
        draw.line(
            [(x - dx, y - dy), (x + dx, y + dy)],
            fill=p["color"],
            width=int(p["w"]),
        )

    return img


def main() -> None:
    pieces = ribbons(7)
    frames = [draw_frame(pieces, t) for t in range(FRAMES)]
    OUTPUT.parent.mkdir(parents=True, exist_ok=True)
    frames[0].save(
        OUTPUT,
        save_all=True,
        append_images=frames[1:],
        duration=70,
        loop=0,
        optimize=True,
        colors=64,
    )
    print(f"{OUTPUT.relative_to(ROOT)} | {OUTPUT.stat().st_size / 1024:.1f} KB")


if __name__ == "__main__":
    main()
