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

- [x] Nvidia Aug 2025 — Now.
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

- [x] Every row collapsed on load; the hero carries the outcome paragraph.
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
- [x] System test: 320 / 375 / 390 / 768 / 820 / 1024 / 1280 / 1440, no horizontal scroll.
- [x] Column alignment: company x=602 and date/tag x=986 in all 18 rows across the three sections.
- [x] UI/UX test in Playwright: 10 of 12 pass; the two failures were per-row pin expectations that the section-wide toggle replaced.
- [x] Accessibility pass: 18/18 summaries keyboard operable, 143 names non-empty, focus rings visible, contrast lifted to base1 (dark 5.61, light 4.99).
- [x] Link audit: 41 external hosts, 34 answer 200, the rest are bot walls (403/406/429/999), 0 of 37 deep links is a 404.
- [x] Claims audit: 49 of 51 pass. The two failures were my own forbidden-list entries; the brief approves the DeepSeek credit. Vendor claim made singular.
- [~] Print media emulation: all rows expanded, no clipped text.

## 9. Deploy

- [x] Commit the content pass.
- [x] Push to `origin` (phongvcao.github.io): `66c142e`, `d10a56f`, `09278a8`, `3036f91`, `aee5bd6`, `671cee5`, `d42b7b9`.
- [x] Mirror to `legacy` (phongvcaocom) at `6c1637d` before the content pass; the branch `legacy-django-2014` keeps the old tree.
- [x] Pages build verified as `built` after each push.
- [ ] Report the build id and anything still `NOT VERIFIED`.
- [ ] DNS: `phongvcao.com` still answers `15.197.148.33` / `3.33.130.190`, not the GitHub Pages A records. The site is live on the Pages edge and the local preview only.
- [ ] The linked resume PDF carries the phone number; the HTML carries none.

## 10. Run 2 — page title and internal-number scrub

Source: "OpenCode fix — phongvcao.com — combined: page title + Experience/internal-number scrub".

- [x] Task 1: `<title>`, `og:title`, `twitter:title` and the JSON-LD `name` read `Phong V. Cao — Senior Software Engineer, BMC & OpenBMC Firmware`; `jobTitle` stays `Senior Software Engineer`; zero `Senior Firmware Engineer` hits in the repo.
- [x] Task 2: Experience matches the public resume, seven entries; the reviewer bullet and the security-review bullet are deleted; Hire4Real carries `(Plausible)`.
- [x] Task 3.1: GPU card no longer prints `300 of 300` or `112 of 112`.
- [x] Task 3.2: Redfish conformance card no longer prints `130 FastAPI` or `over 1,200`.
- [x] Task 3.3: Decision 1 says `reviewed across teams`.
- [x] Task 3.4: Decision 2 trade-off is the request-boundary sentence.
- [x] Task 3.5: Decision 3 is titled `AI Loop Engineering · Redfish Validation`; the long-master test count is gone; the guardrail paragraph is intact.
- [x] Task 4: linked PDF is the public resume (email and phone present, no internal strings).
- [x] Task 5a: banned-string greps all return zero.
- [x] Task 5b: required strings all present.
- [x] Task 5c: 7 experience entries (5 and 4 bullets), 3 decisions, 8 projects, title and JSON-LD consistent.
- [ ] Deploy and report the commit hash.
- [x] Accessibility re-run after run 2: 11/11 pass. No-JS 18/18 summaries open with Enter, 0 empty names, tooltip wired to all 18, reduced motion honoured, print opens all 18 bodies. Contrast: body 5.61 dark / 4.99 light, status 5.61 / 4.99, headings 3.26 / 4.27 at 24px/700. Prompt box padding-top 24 px, meta gap 18 px.
- [x] UI matrix after run 2: 13/15, then 15/15 once the hover lock landed. Company and date columns at x=602 and x=986 in all 18 rows; prompt box padding 24 px and meta gap 18 px.
- [x] Hover lock: a collapse no longer reopens the row that lands under a stationary pointer; the peek returns on the next pointer move.
- [x] Claims re-audit: 90/92 with 7 skips. Both failures were the stale run-1 DeepSeek rule, which the brief approves; every run-2 assertion passes.
