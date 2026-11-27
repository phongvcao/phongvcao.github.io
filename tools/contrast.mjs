#!/usr/bin/env node
// Adjusts the Solarized company accents until each reaches 4.75:1 on the
// background it actually sits on. No dependencies.

const TARGET = 4.75;

const hexToRgb = (hex) => {
  const h = hex.replace('#', '');
  return [0, 2, 4].map((i) => parseInt(h.slice(i, i + 2), 16) / 255);
};
const rgbToHex = ([r, g, b]) =>
  '#' + [r, g, b].map((v) => Math.round(v * 255).toString(16).padStart(2, '0')).join('');
const lum = (hex) => {
  const [r, g, b] = hexToRgb(hex).map((v) => (v <= 0.03928 ? v / 12.92 : ((v + 0.055) / 1.055) ** 2.4));
  return 0.2126 * r + 0.7152 * g + 0.0722 * b;
};
const ratio = (a, b) => {
  const [l1, l2] = [lum(a), lum(b)].sort((x, y) => y - x);
  return (l1 + 0.05) / (l2 + 0.05);
};
const rgbToHsl = (hex) => {
  const [r, g, b] = hexToRgb(hex);
  const max = Math.max(r, g, b), min = Math.min(r, g, b);
  const l = (max + min) / 2;
  if (max === min) return { h: 0, s: 0, l };
  const d = max - min;
  const s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
  let h;
  if (max === r) h = (g - b) / d + (g < b ? 6 : 0);
  else if (max === g) h = (b - r) / d + 2;
  else h = (r - g) / d + 4;
  return { h: h * 60, s, l };
};
const hslToHex = ({ h, s, l }) => {
  const c = (1 - Math.abs(2 * l - 1)) * s;
  const x = c * (1 - Math.abs(((h / 60) % 2) - 1));
  const m = l - c / 2;
  let rgb;
  if (h < 60) rgb = [c, x, 0];
  else if (h < 120) rgb = [x, c, 0];
  else if (h < 180) rgb = [0, c, x];
  else if (h < 240) rgb = [0, x, c];
  else if (h < 300) rgb = [x, 0, c];
  else rgb = [c, 0, x];
  return rgbToHex(rgb.map((v) => v + m));
};
const adjust = (hex, bg, label, theme) => {
  const darkBg = lum(bg) < 0.5;
  const step = darkBg ? 0.005 : -0.005;
  const start = rgbToHsl(hex);
  let l = start.l;
  let color = hex;
  for (let i = 0; i < 400; i += 1) {
    color = hslToHex({ h: start.h, s: start.s, l });
    if (ratio(color, bg) >= TARGET) break;
    l += step;
    if (l < 0 || l > 1) break;
  }
  const final = rgbToHsl(color);
  console.log(
    `${label.padEnd(20)} ${theme.padEnd(5)} ${hex} -> ${color}  contrast ${ratio(color, bg).toFixed(2)}:1  L ${start.l.toFixed(3)}->${final.l.toFixed(3)}  bg ${bg}`
  );
  return color;
};

const rows = [
  ['NVIDIA', '#76b900', '#073642', '#eee8d5'],
  ['Google', '#268bd2', '#073642', '#eee8d5'],
  ['Tesla', '#dc322f', '#073642', '#eee8d5'],
  ['Arista Networks', '#2aa198', '#073642', '#eee8d5'],
  ['Hire4Real.fyi', '#cb4b16', '#073642', '#eee8d5'],
  ['Stony Brook University', '#93a1a1', '#002b36', '#fdf6e3'],
];
const out = {};
for (const [label, start, darkBg, lightBg] of rows) {
  out[label] = {
    dark: adjust(start, darkBg, label, 'dark'),
    light: adjust(start, lightBg, label, 'light'),
  };
}
console.log('\nCSS values');
for (const [label, v] of Object.entries(out)) {
  console.log(`${label}: dark ${v.dark}  light ${v.light}`);
}
