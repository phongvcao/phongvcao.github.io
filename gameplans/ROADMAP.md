# ROADMAP — phongvcao.com, Staff-scope content pass

Source prompt: "OpenCode prompt - make phongvcao.com read as Staff scope while keeping the terminal design".
Repository: `phongvcao/phongvcao.github.io` (also mirrored to `phongvcao/phongvcaocom`).
Working tree: `/home/techcoldbrew/phongvcao.github.io`.

Status key: `[ ]` todo · `[~]` doing · `[x]` done.

## 0. Ground rules from the prompt

- [x] Keep static HTML/CSS/JS, no framework, no build step.
- [x] Keep Solarized palette, both themes, Powerline bar, prompt, responsive layout.
- [x] No fabricated case-study links, numbers, customers or employer approval.
- [x] Contact record: `phongvcao@gmail.com`, `github.com/phongvcao`, `linkedin.com/in/phcao`.
- [x] Tesla stays `May 2023 - Feb 2024`.
- [x] Spelling `Nvidia` everywhere.
- [x] No self-awarded title.
- [x] All content stays in the HTML (no JS-only text).

## 1. Truthful terminal chrome

- [x] Remove `668K+ (68%)`, `$66.88`, `6 subagents`, `ctrl+x commands`, `esc interrupt`, invented session counters.
- [x] Status line reads `Static HTML · CSS · JS · GitHub Pages · View source`.
- [x] Build credit reads `Built with OpenCode · static site · no live session`.
- [x] About line: `Firmware engineer in Austin, TX · 11+ yrs exp · husband · father · builder`.
- [x] Professional years computed from June 2015, repainted hourly.
- [x] Keep the moving scanner; its words are now true.
- [x] Unit test: no fake telemetry strings remain (check_site2.py covers this).

## 2. Hero

- [x] One `h1`, `Phong V. Cao`.
- [x] Role line `> Senior SWE @ Nvidia - BMC and OpenBMC Firmware`.
- [x] Two-sentence outcome paragraph (OpenBMC, Redfish, production validation, release-blocking fixes, vendor-adopted rack power API, physical-slot naming RFC, release gating).
- [x] Resume / GitHub / LinkedIn / Gmail buttons unchanged.
- [ ] UI check: hero paragraph visible on first screen at 320 and 1280.

## 3. Experience — seven rows

- [x] Nvidia Aug 2025 — Now (open by default).
- [x] Nvidia May 2024 — Aug 2025.
- [x] Tesla May 2023 — Feb 2024.
- [x] Google Nov 2021 — Mar 2023.
- [x] Google Dec 2019 — Nov 2021.
- [x] Arista Networks Jun 2015 — Dec 2019.
- [x] Hire4Real.fyi Creator Aug 2026 — Now.
- [x] Influence line: 44 reviews from 15 engineers, naming RFC, 3 cross-team reviews.
- [x] Security-review line: 48 comments, per-action checks, no request-derived D-Bus paths.

## 4. Technical Decisions — three rows

- [x] Section placed between Experience and Projects.
- [x] Row 1: Physical-slot GPU naming · HGX Rubin NVL8.
- [x] Row 2: Rack-power Redfish contract · GB200 NVL72.
- [x] Row 3: Capture once, validate many · Redfish conformance.
- [x] Each summary shows the one-line outcome; body carries Problem / Decision / Adopted / Trade-off (or Guardrail / Result).
- [x] No fake RFC links.

## 5. Projects — eight rows

- [x] GPU Management Controller Firmware · Nvidia.
- [x] Rack Power Management · Nvidia.
- [x] Redfish Conformance Automation · Nvidia.
- [x] Security Risk Automation · Google.
- [x] Server Hardware Testing · Google.
- [x] Factory Material Flow · Tesla.
- [x] Switch-Chip Drivers · Arista Networks.
- [x] hire4real.fyi · Hire4Real.
- [x] Every row shows title, badge, company, tags and a one-sentence summary without expanding.
- [x] Supporting evidence lives in the expanded body.

## 6. Progressive disclosure

- [x] Summaries visible on load; details collapsed.
- [x] Hover opens, leave closes unless pinned.
- [x] A row click expands the whole section; a second click collapses it (pins all rows while expanded).
- [x] A click on any link inside a row leaves the row untouched.
- [x] Touch: first tap pins the row.
- [x] Expand all / Collapse all per section (Experience, Decisions, Projects).
- [x] Native `<details>`/`<summary>`: Enter and Space work, focus is visible.
- [x] `prefers-reduced-motion` respected.
- [x] Content pushes following content; no overlay.
- [x] Print opens every row (`beforeprint` / `afterprint`).
- [x] Works without JavaScript.
- [x] Link clicks leave the row untouched; plain body clicks collapse it.
- [~] Playwright: hover, pin, unpin, expand-all, collapse-all, keyboard, touch, print.

## 7. Theme default

- [x] First visit follows `prefers-color-scheme`.
- [x] Choice stored only after the visitor clicks the toggle.
- [x] Both themes keep Solarized palette and readable contrast.

## 8. Verification

- [x] Content check `check_site2.py`: 0 failures (counts, claims, links, forbidden strings).
- [~] Unit-style content tests run in CI-less mode (Playwright + Python).
- [~] System test: layout at 320 / 375 / 390 / 768 / 820 / 1024 / 1280 / 1440, no horizontal scroll.
- [~] UI/UX test in Playwright: default view, expanded experience, expanded project, expanded decision, mobile, dark and light.
- [x] Accessibility pass: 18/18 summaries keyboard operable, 143 names non-empty, focus rings visible, contrast lifted to base1 (dark 5.61, light 4.99).
- [~] Link audit: every external link resolves (browser User-Agent; note unrelated 403s).
- [~] Print media emulation: all rows expanded, no clipped text.

## 9. Deploy

- [x] Commit the content pass.
- [ ] Push to `origin` (phongvcao.github.io) and `legacy` (phongvcaocom).
- [ ] Verify the Pages build for the pushed commit.
- [ ] Report the build id and anything still `NOT VERIFIED`.
