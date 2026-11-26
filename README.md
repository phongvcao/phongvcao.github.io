# phongvcao.github.io

Static personal site for Phong V. Cao, served by GitHub Pages at https://phongvcao.com. The page is a hand-written OpenCode/tmux-style TUI in the 16-color ANSI Solarized Dark palette, with Vim markdown colors, expandable experience rows, and a live Austin clock. Edit `index.html` for copy, metadata, and structured data; `styles.css` for the visual system; and replace `assets/phong-cao-resume.pdf` to update the resume. Regenerate `assets/og-image.png` after major visual changes, update `sitemap.xml` and the JSON-LD `dateModified` when the page changes, then commit to `main`; GitHub Pages builds automatically.

The whole page renders in DejaVu Sans Mono. `@font-face` loads the local Nerd Font build when the machine has it and otherwise downloads the two subset files in `assets/` (about 20 KB each, ASCII, Latin-1, general punctuation, block elements, geometric shapes, dingbats). To rebuild them from `~/.local/share/fonts/NerdFonts/DejaVuSansMNerdFont-{Regular,Bold}.ttf`:

```bash
UNI="U+0020-007E,U+00A0-00FF,U+2010-2027,U+2580-259F,U+25A0-25FF,U+2713-2714"
uv run --with fonttools --with brotli pyftsubset DejaVuSansMNerdFont-Regular.ttf \
  --output-file=assets/dejavu-sans-mono-regular.woff2 --flavor=woff2 --unicodes="$UNI"
uv run --with fonttools --with brotli pyftsubset DejaVuSansMNerdFont-Bold.ttf \
  --output-file=assets/dejavu-sans-mono-bold.woff2 --flavor=woff2 --unicodes="$UNI"
```
