# PLAN.md: Portfolio Website Implementation Plan

Governed by `AGENTS.md`. Implements `SPEC.md` v1.0.

Status legend: `[ ]` not started, `[~]` in progress, `[x]` done, `[!]` blocked.

---

## 0. Working Assumptions

- Static-first site, one owner, English only (see SPEC.md Section 12).
- Recommended defaults until the owner decides: **Astro** + Markdown content collections, plain CSS with variables, **Cloudflare Pages / Netlify** hosting, cookieless analytics.
- Estimates assume one person working roughly 10 to 15 hours per week. Total: about 6 to 7 weeks.

---

## 1. Timeline Overview

| Phase | Milestone | Duration | Exit Gate |
|---|---|---|---|
| P0 | Discovery and decisions | Week 1 | All **[TBD]** items answered; content inventory done |
| P1 | Design | Week 1 to 2 | Wireframes + tokens approved |
| P2 | Foundation | Week 2 to 3 | Repo, CI, layouts, nav, theming running |
| P3 | Core pages | Week 3 to 4 | Home, About, Contact, Resume live in preview |
| P4 | Work and case studies | Week 4 to 5 | Work index + 3 case studies complete |
| P5 | Quality pass | Week 5 to 6 | Launch gate in SPEC.md Section 11 passes |
| P6 | Launch | Week 6 to 7 | Live on custom domain, post-launch checks done |

---

## 2. Phase Details

### P0. Discovery and Decisions (Week 1)
- [ ] Answer the open questions in SPEC.md Section 13
- [ ] Choose framework, host, domain, analytics, form handler
- [ ] Pick the 3 to 6 projects to feature; confirm what can be shown publicly
- [ ] Collect assets: photo, logo/wordmark, project images, resume, bio draft
- [ ] Gather 2 to 3 reference sites for visual direction
- [ ] Write a content inventory (what exists, what must be created)

**Deliverable:** decisions log + content inventory.

**Risk:** content not ready. Mitigation: start with one project fully written.

### P1. Design (Week 1 to 2)
- [ ] Low-fi wireframes: Home, Work index, Case study, About, Contact
- [ ] Define design tokens: colors (light + dark), type scale, spacing, radii
- [ ] Verify contrast ratios for every color pair
- [ ] Design core components: Button, Card, Tag, Nav, Footer, FormField
- [ ] Hi-fi mock of Home and one case study (mobile + desktop)
- [ ] Owner review and sign-off

**Deliverable:** approved design files + token sheet.

### P2. Foundation (Week 2 to 3)
- [ ] Initialize repo, `.gitignore`, `.env.example`, README skeleton
- [ ] Scaffold framework, set up folder structure from SPEC.md Section 9
- [ ] Configure linter, formatter, type checks, pre-commit hook
- [ ] Add CI: lint, build, Lighthouse CI, automated accessibility check (axe)
- [ ] Deploy-preview pipeline connected to host
- [ ] Implement tokens as CSS variables and global styles
- [ ] Build base layout, Header/Nav (accessible mobile menu), Footer, skip link
- [ ] Theme toggle with system default and persisted choice
- [ ] Define content collections and schema validation (SPEC.md Section 5)
- [ ] SEO component: title, description, canonical, Open Graph, Twitter tags

**Deliverable:** empty but fully wired site deploying on every push.

### P3. Core Pages (Week 3 to 4)
- [ ] Home: Hero, Selected Work (placeholder data from content), About snippet, Skills, Contact CTA
- [ ] About page with bio, timeline, resume link
- [ ] Contact page: email, social links, form with validation, honeypot, success and error states
- [ ] Connect form to handler **[TBD]**; test delivery end to end
- [ ] Resume page: web view, print stylesheet, PDF download
- [ ] 404 page, `robots.txt`, favicon set, web manifest

**Deliverable:** all non-work pages complete in preview.

### P4. Work and Case Studies (Week 4 to 5)
- [ ] Project card component and Work index grid
- [ ] Tag filtering (works without JS as a fallback)
- [ ] Case study template: meta block, Problem/Approach/Result, gallery, prev/next, CTA
- [ ] Image pipeline: responsive sizes, AVIF/WebP, explicit dimensions
- [ ] Write and publish case study 1 (full), then 2 and 3
- [ ] Redacted variants for any confidential work, approved by owner
- [ ] Wire featured projects into Home
- [ ] Generate sitemap and structured data (`Person`, `CreativeWork`)

**Deliverable:** Work section complete with at least 3 real case studies.

### P5. Quality Pass (Week 5 to 6)
- [ ] Accessibility: keyboard-only pass, screen reader pass (NVDA/VoiceOver), contrast, heading order, alt text audit
- [ ] Performance: meet LCP/CLS/INP and JS budgets; audit fonts and images
- [ ] Responsive checks at 320, 768, 1280, 1920px; light and dark
- [ ] Cross-browser: Chrome, Edge, Firefox, Safari, iOS Safari, Android Chrome
- [ ] SEO: validate meta, social previews, structured data, sitemap
- [ ] Security: headers (CSP, Referrer-Policy, etc.), dependency audit, secrets scan
- [ ] Content proofread; remove every placeholder and TODO
- [ ] Broken-link check
- [ ] Walk through the Launch Gate checklist (SPEC.md Section 11)

**Deliverable:** signed-off quality report.

### P6. Launch (Week 6 to 7)
- [ ] Configure custom domain, DNS, HTTPS, www/non-www redirect
- [ ] Set production env variables, enable analytics (if approved)
- [ ] Final production deploy
- [ ] Smoke test: all pages, form submission, resume download, 404
- [ ] Submit sitemap to search engines
- [ ] Update links on LinkedIn, GitHub, and other profiles
- [ ] Tag release `v1.0.0`
- [ ] Finalize README: setup, adding a project, deploy steps

**Deliverable:** live site + documentation.

---

## 3. Task Dependencies

```
P0 decisions ──► P1 design ──► P2 foundation ──► P3 core pages ──┐
                       │                                          ├──► P5 quality ──► P6 launch
                       └──────────────► P4 work (needs content) ──┘
```

- Case study writing (P4) can start during P2 as content work in parallel with development.
- Form handler choice (P0) blocks the Contact page (P3).
- Domain and DNS setup can begin during P5 to avoid launch delays.

---

## 4. Backlog Management

- Anything outside SPEC.md Section 2.1 goes to the **v2 backlog**, not this plan.
- v2 candidates: blog/Writing, Now page, testimonials, RSS, newsletter, multi-language.
- Changes to scope require a spec update and a change log entry before work begins.

---

## 5. Risk Register

| Risk | Likelihood | Impact | Response |
|---|---|---|---|
| Content delayed | High | High | Lock inventory in P0; ship with 3 projects, add more later |
| Perfectionism on design | Medium | Medium | Time-box P1 to one review round plus one revision |
| NDA restricts project visibility | Medium | Medium | Prepare redacted case studies early |
| Performance regressions from media | Medium | Medium | CI budgets fail the build when exceeded |
| Form spam or delivery failures | Medium | Low | Honeypot + provider spam filter; show visible fallback email |
| Domain or DNS delays | Low | Medium | Start domain setup in P5 |

---

## 6. Definition of Done (per task)

A task is done only when it satisfies the checklist in `AGENTS.md` Section 10: builds cleanly, lint passes, checked at three breakpoints and both themes, keyboard and contrast verified, no placeholders, performance targets met, and docs updated if conventions changed.

---

## 7. Decision Log

| # | Decision | Options | Chosen | Date |
|---|---|---|---|---|
| 1 | Framework | Astro / Next.js | **[TBD]** | |
| 2 | Hosting | Cloudflare / Netlify / Vercel | **[TBD]** | |
| 3 | Form handling | Hosted service / serverless | **[TBD]** | |
| 4 | Analytics | Plausible / Umami / none | **[TBD]** | |
| 5 | Visual direction | Editorial / Bold / Technical | **[TBD]** | |
| 6 | Domain | | **[TBD]** | |

---

## 8. Weekly Check-in Template

```
Week of: ____
Done:
In progress:
Blocked / needs owner decision:
Risks changed:
Next week's focus:
```

---

## 9. First Actions (start here)

1. Fill in the Decision Log (Section 7) with the owner.
2. List and rank the projects to feature.
3. Draft the hero sentence and the bio.
4. Produce Home and case study wireframes.
5. Scaffold the repo and get an empty site deploying.
