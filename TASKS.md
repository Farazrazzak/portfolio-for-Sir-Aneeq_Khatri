# TASKS.md: Portfolio Website Task Board

Derived from `PLAN.md`. Rules in `AGENTS.md`. Requirements in `SPEC.md`.

**Status:** `[ ]` todo | `[~]` in progress | `[x]` done | `[!]` blocked

**Size:** S = up to 1h | M = 1 to 3h | L = 3 to 6h | XL = split further

**Priority:** P1 must | P2 should | P3 could

**Owner:** `OWN` = site owner decision/content | `DEV` = agent or developer | `DES` = design

Each task is done only when it meets the Definition of Done in `AGENTS.md` Section 10.

---

## Summary

| Phase | Tasks | Est. effort |
|---|---|---|
| P0 Discovery | 8 | ~7h |
| P1 Design | 10 | ~20h |
| P2 Foundation | 14 | ~22h |
| P3 Core pages | 12 | ~20h |
| P4 Work | 12 | ~26h |
| P5 Quality | 10 | ~16h |
| P6 Launch | 9 | ~7h |
| **Total** | **75** | **~118h** |

---

## P0. Discovery and Decisions

| ID | Task | Owner | Size | Pri | Depends | Acceptance Criteria |
|---|---|---|---|---|---|---|
| [ ] T-001 | Answer open questions (SPEC.md Section 13) | OWN | M | P1 | none | All 7 questions answered in writing |
| [ ] T-002 | Decide framework | OWN | S | P1 | T-001 | Decision Log #1 filled |
| [ ] T-003 | Decide hosting and domain | OWN | S | P1 | T-001 | Decision Log #2, #6 filled; domain available |
| [ ] T-004 | Decide form handler and analytics | OWN | S | P1 | T-001 | Decision Log #3, #4 filled |
| [ ] T-005 | Select 3 to 6 featured projects and confirm what is public | OWN | M | P1 | T-001 | List ranked; confidentiality status per project |
| [ ] T-006 | Collect assets (photo, logo, project images, resume, bio draft) | OWN | M | P1 | T-005 | Files in `/assets-inbox`, named consistently |
| [ ] T-007 | Collect 2 to 3 visual reference sites + direction | OWN | S | P2 | T-001 | Decision Log #5 filled |
| [ ] T-008 | Write content inventory (exists vs must create) | DEV | S | P1 | T-005, T-006 | Inventory table committed |

---

## P1. Design

| ID | Task | Owner | Size | Pri | Depends | Acceptance Criteria |
|---|---|---|---|---|---|---|
| [ ] T-010 | Wireframe Home | DES | M | P1 | T-007 | Mobile + desktop low-fi |
| [ ] T-011 | Wireframe Work index | DES | S | P1 | T-007 | Grid + filter states |
| [ ] T-012 | Wireframe Case study | DES | M | P1 | T-007 | All SPEC 4.3 blocks present |
| [ ] T-013 | Wireframe About, Contact, Resume, 404 | DES | M | P1 | T-007 | One frame each, mobile + desktop |
| [ ] T-014 | Define color tokens (light + dark) | DES | M | P1 | T-007 | Palette documented as variables |
| [ ] T-015 | Verify contrast for every color pair | DES | S | P1 | T-014 | All pairs meet 4.5:1 / 3:1 |
| [ ] T-016 | Define type scale, spacing, radii, shadows | DES | M | P1 | T-007 | Token sheet complete |
| [ ] T-017 | Design core components (Button, Card, Tag, Nav, Footer, FormField) | DES | L | P1 | T-014, T-016 | All states: default, hover, focus, disabled, error |
| [ ] T-018 | Hi-fi mock: Home + one case study | DES | L | P1 | T-010, T-012, T-017 | Mobile + desktop |
| [ ] T-019 | Owner design review and sign-off | OWN | M | P1 | T-018 | Approved; max one revision round |

---

## P2. Foundation

| ID | Task | Owner | Size | Pri | Depends | Acceptance Criteria |
|---|---|---|---|---|---|---|
| [ ] T-020 | Init repo, `.gitignore`, `.env.example`, README skeleton | DEV | S | P1 | T-002 | Repo clones and installs cleanly |
| [ ] T-021 | Scaffold framework + folder structure (SPEC Section 9) | DEV | M | P1 | T-020 | Dev server runs; structure matches spec |
| [ ] T-022 | Configure linter, formatter, type checks, pre-commit hook | DEV | M | P1 | T-021 | Commit blocked on lint failure |
| [ ] T-023 | CI pipeline: lint, build | DEV | M | P1 | T-022 | Green run on push |
| [ ] T-024 | CI: Lighthouse CI + axe accessibility check with budgets | DEV | M | P1 | T-023 | Build fails when budgets exceeded |
| [ ] T-025 | Connect host + deploy previews per PR | DEV | M | P1 | T-003, T-023 | Preview URL on every PR |
| [ ] T-026 | Implement design tokens as CSS variables + global styles | DEV | M | P1 | T-019, T-021 | No magic numbers in components |
| [ ] T-027 | Self-host and subset fonts | DEV | S | P1 | T-016 | `font-display: swap`, one preload |
| [ ] T-028 | Base layout with landmarks and skip link | DEV | M | P1 | T-026 | One h1 per page; skip link works |
| [ ] T-029 | Header/Nav with accessible mobile menu | DEV | L | P1 | T-017, T-028 | Keyboard operable; focus trap/escape works |
| [ ] T-030 | Footer component | DEV | S | P1 | T-028 | Social links, email, back-to-top |
| [ ] T-031 | Theme toggle (system default, persisted) | DEV | M | P2 | T-026 | No flash of wrong theme |
| [ ] T-032 | Content collections + schema validation (SPEC Section 5) | DEV | M | P1 | T-021 | Invalid frontmatter fails the build |
| [ ] T-033 | SEO component (title, description, canonical, OG, Twitter) | DEV | M | P1 | T-028 | Tags render per page with defaults |

---

## P3. Core Pages

| ID | Task | Owner | Size | Pri | Depends | Acceptance Criteria |
|---|---|---|---|---|---|---|
| [ ] T-040 | Write hero copy, tagline, bio (owner-approved) | OWN | M | P1 | T-001 | Final text in `/content` |
| [ ] T-041 | Home: Hero section | DEV | M | P1 | T-029, T-040 | Name, role, value line, 2 CTAs visible above fold at 375px |
| [ ] T-042 | Home: Selected Work section | DEV | M | P1 | T-032, T-050 | Pulls featured projects from content |
| [ ] T-043 | Home: About snippet, Skills, closing CTA | DEV | M | P1 | T-041 | No rating bars; grouped skills |
| [ ] T-044 | About page | DEV | M | P1 | T-040 | Bio, photo, timeline, resume link |
| [ ] T-045 | Contact page: email + social links | DEV | S | P1 | T-028 | Links work; email obfuscated if practical |
| [ ] T-046 | Contact form UI + validation + states | DEV | L | P1 | T-017, T-045 | Labels, inline errors, success, failure |
| [ ] T-047 | Spam protection + connect form handler | DEV | M | P1 | T-004, T-046 | Test submission delivered end to end |
| [ ] T-048 | Resume page (web view + print stylesheet) | DEV | M | P2 | T-044 | Prints cleanly on A4/Letter |
| [ ] T-049 | Resume PDF download | OWN/DEV | S | P2 | T-048 | `firstname-lastname-resume.pdf` served |
| [ ] T-04A | 404 page | DEV | S | P1 | T-028 | Links home and to Work |
| [ ] T-04B | `robots.txt`, favicon set, web manifest | DEV | S | P1 | T-021 | Icons render on all platforms |

---

## P4. Work and Case Studies

| ID | Task | Owner | Size | Pri | Depends | Acceptance Criteria |
|---|---|---|---|---|---|---|
| [ ] T-050 | Project card component | DEV | M | P1 | T-017 | Image, title, summary, tags, year |
| [ ] T-051 | Work index page (grid, newest first, featured pinned) | DEV | M | P1 | T-032, T-050 | Drafts excluded in production |
| [ ] T-052 | Tag filtering with no-JS fallback | DEV | M | P2 | T-051 | Keyboard accessible; shows all without JS |
| [ ] T-053 | Image pipeline (responsive sizes, AVIF/WebP, dimensions) | DEV | L | P1 | T-021 | `srcset` output; no layout shift |
| [ ] T-054 | Case study template (meta, Problem/Approach/Result, gallery, prev/next, CTA) | DEV | L | P1 | T-012, T-053 | Matches SPEC 4.3 |
| [ ] T-055 | Write case study 1 (full) | OWN | L | P1 | T-005, T-006 | Real metrics only; alt text for all images |
| [ ] T-056 | Publish case study 1 and review template | DEV | M | P1 | T-054, T-055 | Live in preview; template adjusted if needed |
| [ ] T-057 | Write + publish case study 2 | OWN/DEV | L | P1 | T-056 | Meets launch gate quality |
| [ ] T-058 | Write + publish case study 3 | OWN/DEV | L | P1 | T-056 | Meets launch gate quality |
| [ ] T-059 | Redacted variants for confidential work | OWN | M | P2 | T-005 | Owner-approved wording |
| [ ] T-05A | Sitemap generation | DEV | S | P1 | T-051 | `sitemap.xml` includes all public routes |
| [ ] T-05B | Structured data (`Person`, `CreativeWork`) | DEV | M | P2 | T-054 | Passes Rich Results test |

---

## P5. Quality Pass

| ID | Task | Owner | Size | Pri | Depends | Acceptance Criteria |
|---|---|---|---|---|---|---|
| [ ] T-060 | Keyboard-only audit | DEV | M | P1 | P3, P4 | Every function reachable; focus visible |
| [ ] T-061 | Screen reader pass (NVDA or VoiceOver) | DEV | M | P1 | T-060 | Landmarks, headings, forms announced correctly |
| [ ] T-062 | Contrast, alt text, heading order audit | DEV | S | P1 | P3, P4 | Zero violations in axe |
| [ ] T-063 | Performance tuning to budgets (SPEC Section 7) | DEV | L | P1 | P3, P4 | LCP under 2.5s, CLS under 0.1, INP under 200ms |
| [ ] T-064 | Responsive checks: 320, 768, 1280, 1920px; both themes | DEV | M | P1 | P3, P4 | No horizontal scroll; no overlaps |
| [ ] T-065 | Cross-browser and device testing | DEV | M | P1 | T-064 | Chrome, Edge, Firefox, Safari, iOS, Android pass |
| [ ] T-066 | SEO validation (meta, social previews, structured data) | DEV | S | P1 | T-033, T-05B | Previews render on major platforms |
| [ ] T-067 | Security: headers, dependency audit, secrets scan | DEV | M | P1 | P3 | No high advisories; CSP set |
| [ ] T-068 | Proofread; remove placeholders and TODOs; link check | OWN/DEV | M | P1 | P3, P4 | Zero placeholders; zero broken links |
| [ ] T-069 | Launch Gate review (SPEC Section 11) | OWN/DEV | M | P1 | T-060 to T-068 | Every item checked; signed off |

---

## P6. Launch

| ID | Task | Owner | Size | Pri | Depends | Acceptance Criteria |
|---|---|---|---|---|---|---|
| [ ] T-070 | Configure custom domain, DNS, HTTPS, www redirect | DEV/OWN | M | P1 | T-003 | HTTPS valid; redirects correct |
| [ ] T-071 | Set production env vars; enable analytics if approved | DEV | S | P1 | T-004 | No secrets in repo |
| [ ] T-072 | Redirects for renamed routes | DEV | S | P2 | T-070 | Old URLs resolve |
| [ ] T-073 | Final production deploy | DEV | S | P1 | T-069, T-070 | Live at custom domain |
| [ ] T-074 | Smoke test (all pages, form, resume download, 404) | DEV | S | P1 | T-073 | All pass on production |
| [ ] T-075 | Submit sitemap to search engines | OWN | S | P2 | T-073 | Submission confirmed |
| [ ] T-076 | Update LinkedIn, GitHub, and other profile links | OWN | S | P2 | T-073 | Links point to the new site |
| [ ] T-077 | Finalize README (setup, add a project, deploy) | DEV | M | P1 | T-073 | A new contributor can add a project from the README alone |
| [ ] T-078 | Tag release `v1.0.0` | DEV | S | P1 | T-074 | Tag pushed |

---

## Critical Path

`T-001` > `T-002/T-003` > `T-019` (design sign-off) > `T-026` > `T-029` > `T-041` > ... > `T-054` > `T-056` > `T-069` > `T-073` > `T-078`

Content tasks (`T-005`, `T-006`, `T-040`, `T-055`) run in parallel with development but block P4 and launch if late. Start them first.

---

## Parallel Tracks

| Track | Tasks | Can start |
|---|---|---|
| Owner content | T-005, T-006, T-040, T-055, T-057, T-058, T-059 | Week 1 |
| Design | T-010 to T-019 | After T-007 |
| Dev setup | T-020 to T-025 | After T-002 (does not need design) |
| Dev build | T-026 onward | After T-019 |

---

## Blocked / Needs Decision

| Task | Waiting on |
|---|---|
| T-002 | Framework decision |
| T-025, T-070 | Hosting and domain decision |
| T-047 | Form handler decision |
| T-071 | Analytics decision |

---

## v2 Backlog (not in scope)

- [ ] V2-01 Blog / Writing section with RSS
- [ ] V2-02 Now page
- [ ] V2-03 Testimonials (real, owner-approved only)
- [ ] V2-04 Newsletter signup
- [ ] V2-05 Multi-language support
- [ ] V2-06 Dynamic Open Graph image generation

---

## Working Rules for Agents

1. Pick the lowest-numbered unblocked P1 task in the current phase.
2. Set it to `[~]`; finish it fully before starting another.
3. Verify against its acceptance criteria and the AGENTS.md Definition of Done.
4. Mark `[x]` and note anything the owner must decide.
5. Never start work outside this file without adding a task and getting approval.
6. If blocked, mark `[!]`, state the blocker, and move to the next unblocked task.
