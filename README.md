# phongvcao.github.io

Static personal site for Phong V. Cao, served by GitHub Pages at https://phongvcao.com. The page is a hand-written OpenCode/tmux-style TUI in the 16-color ANSI Solarized Dark palette, with Vim markdown colors, expandable experience rows, and a live Austin clock. Edit `index.html` for copy, metadata, and structured data; `styles.css` for the visual system; and replace `assets/phong-cao-resume.pdf` to update the resume. Regenerate `assets/og-image.png` after major visual changes, update `sitemap.xml` and the JSON-LD `dateModified` when the page changes, then commit to `main`; GitHub Pages builds automatically.

The whole page renders in DejaVu Sans Mono. `@font-face` loads the local Nerd Font build when the machine has it and otherwise downloads the two subset files in `assets/` (about 22 KB each, ASCII, Latin-1, general punctuation, block elements, geometric shapes, dingbats, and the Nerd Font glyphs the page uses). Rebuild both from `~/.local/share/fonts/NerdFonts/DejaVuSansMNerdFont-{Regular,Bold}.ttf` with:

```bash
uv run --with fonttools --with brotli python3 tools/build_fonts.py
```

The script holds the codepoint list. Add any new page glyph to `ICONS` there first, or visitors without the font installed see a tofu box: the octocat, the boxed LinkedIn mark, the PDF plate, the envelope, the penguin, the Vim mark and the Nvidia mark all come from that subset.
