#!/usr/bin/env python3
"""Rebuild the two bundled woff2 subsets from a local Nerd Font.

The site loads assets/dejavu-sans-mono-{regular,bold}.woff2 as "Site Mono".
The subset must carry every Nerd Font glyph the page uses, otherwise visitors
without the font installed locally see tofu boxes.

Run:
    uv run --with fonttools --with brotli python3 tools/build_fonts.py

Source fonts: ~/.local/share/fonts/NerdFonts/DejaVuSansMNerdFont-{Regular,Bold}.ttf
(Nerd Fonts release, DejaVu Sans Mono patched with the complete icon set.)
"""

from pathlib import Path

from fontTools import subset

ROOT = Path(__file__).resolve().parent.parent
SRC_DIR = Path.home() / ".local/share/fonts/NerdFonts"

# Latin-1 + punctuation + block/shape fills the page draws itself.
BASE = [(0x20, 0xFF), (0x2010, 0x2026), (0x2580, 0x25FF), (0x2713, 0x2714)]

# Nerd Font glyphs the page actually renders. Keep in sync with index.html.
ICONS = [
    0xE0A0,  # nf-pl-branch        (prompt glyph support)
    0xE62B,  # nf-dev-vim          (Vim segment)
    0xF00C,  # nf-fa-check
    0xF017,  # nf-fa-clock_o       (clock segment)
    0xF041,  # nf-fa-flag_o
    0xF073,  # nf-fa-calendar      (date segment)
    0xF07B,  # nf-fa-folder_o      (role segment)
    0xF09B,  # nf-fa-github        (GitHub links, octocat mark)
    0xF0E0,  # nf-fa-envelope      (email links)
    0xF126,  # nf-fa-nvidia mark   (Nvidia segment)
    0xF17C,  # nf-fa-linux         (Linux kernel segment)
    0xF0226,  # nf-md-file_pdf_box  (Resume PDF links)
    0xF033B,  # nf-md-linkedin      (LinkedIn links, boxed logo)
]

TARGETS = {
    "Regular": "dejavu-sans-mono-regular.woff2",
    "Bold": "dejavu-sans-mono-bold.woff2",
}


def build(style: str, out_name: str) -> None:
    src = SRC_DIR / f"DejaVuSansMNerdFont-{style}.ttf"
    out = ROOT / "assets" / out_name
    unicodes = []
    for lo, hi in BASE:
        unicodes.extend(range(lo, hi + 1))
    unicodes.extend(ICONS)

    args = [
        str(src),
        f"--unicodes={','.join(f'{cp:X}' for cp in sorted(set(unicodes)))}",
        "--flavor=woff2",
        "--layout-features=",
        "--desubroutinize",
        f"--output-file={out}",
    ]
    subset.main(args)
    print(f"{out.name}: {out.stat().st_size} bytes")


if __name__ == "__main__":
    for style, name in TARGETS.items():
        build(style, name)
