# SPEC.md: Portfolio Website Specification

Version 1.0 | Status: Draft | Governed by `AGENTS.md` (the constitution wins on any conflict)

Items marked **[TBD]** need the owner's decision before build.

---

## 1. Overview

### 1.1 Goal
A fast, accessible, single-owner portfolio website that presents selected work, explains who the owner is, and drives visitors to make contact.

### 1.2 Success Criteria
| Goal | Measure |
|---|---|
| Visitor understands the owner's role and value | Hero conveys name, role, value statement without scrolling |
| Work is credible | At least 3 case studies live at launch |
| Contact is effortless | Contact reachable in 1 click from any page |
| Technical quality | Lighthouse 95+ in all four categories; WCAG 2.2 AA |
| Easy upkeep | New project added by creating one content file, no code changes |

### 1.3 Audience
1. **Primary [TBD]:** recruiters / hiring managers / clients (choose one)
2. **Secondary:** peers, collaborators, and press

### 1.4 Non-Goals (v1)
- User accounts, logins, or an admin dashboard
- E-commerce or payments
- Comments or community features
- A custom backend or database

---

## 2. Scope

### 2.1 In Scope (v1)
Home, Work (index + case studies), About, Contact, Resume/CV, 404 page, SEO and social metadata, light/dark theme.

### 2.2 Later (v2)
Blog/Writing, Now page, testimonials carousel, RSS feed, multi-language, newsletter signup.

---

## 3. Information Architecture

```
/                     Home
/work                 Work index (filterable)
/work/[slug]          Case study
/about                About
/contact              Contact
/resume               Resume (web view + PDF download)
/404                  Not found
/sitemap.xml
/robots.txt
```

**Global navigation:** Work, About, Resume, Contact (primary CTA styled distinctly). Logo/name links home. Navigation collapses to an accessible menu below 768px.

**Footer:** social links, email, copyright, back-to-top, optional theme toggle.

---

## 4. Page Requirements

### 4.1 Home
| Block | Requirement |
|---|---|
| Hero | H1 with name, role line, one-sentence value statement, primary CTA ("View work") and secondary CTA ("Contact") |
| Selected Work | 3 to 6 featured projects as cards (image, title, one-line summary, tags) linking to case studies |
| About snippet | 2 to 3 sentences, photo optional, link to /about |
| Skills / Tools | Grouped list, no percentage bars or rating gimmicks |
| Contact CTA | Closing section with email link and button |

### 4.2 Work Index
- Grid of all projects, newest first (featured pinned first via flag)
- Filter by category/tag, usable with keyboard and without JS fallback (shows all)
- Each card: thumbnail, title, summary, year, tags

### 4.3 Case Study
Required structure:
1. Title, summary, role, timeline, tools, link(s) (live, repo, prototype)
2. Hero image or video
3. **Problem**: context and constraints
4. **Approach**: process, decisions, trade-offs
5. **Result**: outcomes, real metrics only
6. **Reflection**: what was learned (optional)
7. Image gallery with captions and alt text
8. Next / previous project navigation
9. Contact CTA

Confidentiality: any restricted project gets a redacted variant approved by the owner.

### 4.4 About
Short bio (first person), photo, background/timeline, values or approach, current focus, downloadable resume link, personal note optional.

### 4.5 Contact
- Email (primary), social/professional links
- Contact form: name, email, message; validation, spam protection, success and error states
- Expected response time stated
- Form submission handled by a trusted third-party service or serverless function **[TBD]**

### 4.6 Resume
- Web version of the resume, print-friendly stylesheet
- PDF download, with file name `firstname-lastname-resume.pdf`
- Content must match the About page and LinkedIn

### 4.7 404
Friendly message, link home, link to Work.

---

## 5. Content Model

All content lives in files, never in components.

### 5.1 Project (`/content/projects/[slug].md`)
```yaml
title: string                 # required
slug: string                  # required, kebab-case
summary: string               # required, max 160 chars
date: YYYY-MM                 # required
featured: boolean             # default false
role: string                  # required
tools: [string]               # required
tags: [string]                # required
cover: path                   # required, with coverAlt
coverAlt: string              # required
links:
  live: url
  repo: url
  prototype: url
confidential: boolean         # default false
metrics: [{label, value}]     # real numbers only
draft: boolean                # drafts never build for production
```
Body: Markdown following the Problem / Approach / Result structure.

### 5.2 Site Settings (`/content/site.json`)
Name, role, tagline, email, social links, resume path, SEO defaults, analytics ID (if approved).

### 5.3 Pages
`about.md`, `home.md` (hero copy and snippets), `resume.md`.

---

## 6. Functional Requirements

| ID | Requirement | Priority |
|---|---|---|
| F1 | Site builds to static output from content files | Must |
| F2 | Adding a project file adds a card and a page automatically | Must |
| F3 | Draft projects are excluded from production | Must |
| F4 | Work filtering by tag | Should |
| F5 | Light/dark theme following system, with manual toggle persisted | Should |
| F6 | Contact form with validation and spam protection | Must |
| F7 | Auto-generated sitemap, RSS (v2), Open Graph images | Must / Could |
| F8 | Print stylesheet for resume | Should |
| F9 | Redirects for renamed routes | Should |
| F10 | Image optimization pipeline (responsive sizes, AVIF/WebP) | Must |

---

## 7. Non-Functional Requirements

| Area | Requirement |
|---|---|
| Performance | LCP under 2.5s, CLS under 0.1, INP under 200ms on mobile 4G; JS under 100KB gzipped |
| Accessibility | WCAG 2.2 AA; keyboard, screen reader, and reduced-motion support |
| Browser support | Last 2 versions of Chrome, Edge, Firefox, Safari; iOS Safari and Android Chrome |
| Responsive | 320px to 2560px, mobile-first |
| SEO | Unique titles/descriptions, canonical URLs, structured data (`Person`, `CreativeWork`) |
| Security | HTTPS only, security headers, no committed secrets, sanitized form input |
| Privacy | Cookieless analytics only; no data collected without notice |
| Reliability | Static hosting with CDN; target 99.9% availability |
| Maintainability | Lint and format enforced; README documents setup, content editing, and deploy |

---

## 8. Design Requirements

- **Direction [TBD]:** e.g. minimal editorial, bold/expressive, or technical/clean
- **Tokens:** colors, type scale, spacing, radii defined once as CSS variables
- **Type:** maximum two families, 16px+ body, 1.5 to 1.7 line height
- **Color:** one accent plus neutrals; AA contrast in both themes
- **Components:** Button, Card, Tag, Nav, Footer, Section, Figure, FormField, ThemeToggle
- **Motion:** under 300ms, subtle, honors `prefers-reduced-motion`
- **Imagery:** real project visuals, consistent aspect ratios (e.g. 16:10 cards)
- Design deliverable: wireframes for Home, Work, Case Study, and Contact, then a hi-fi review before build **[TBD]**

---

## 9. Technical Architecture

| Layer | Decision |
|---|---|
| Framework **[TBD]** | Astro (recommended: static-first, content collections) or Next.js static export |
| Styling | CSS variables + modern CSS (or Tailwind if the owner prefers) |
| Content | Markdown/MDX + YAML frontmatter in repo |
| Images | Build-time optimization, responsive `srcset` |
| Forms | Serverless function or hosted form service **[TBD]** |
| Hosting **[TBD]** | Netlify, Vercel, or Cloudflare Pages |
| CI/CD | On push: lint, build, Lighthouse CI, accessibility check; deploy previews per PR |
| Analytics | Plausible/Umami or none **[TBD]** |
| Domain | Custom domain with HTTPS **[TBD]** |

**Suggested structure**
```
/content      projects, pages, site.json
/src
  /components
  /layouts
  /pages
  /styles     tokens, global
/public       fonts, favicons, static files
AGENTS.md     constitution
SPEC.md       this document
README.md
```

---

## 10. Milestones

| # | Milestone | Deliverables |
|---|---|---|
| M0 | Discovery | Answer all **[TBD]** items, collect content and assets |
| M1 | Design | Wireframes, tokens, key component designs |
| M2 | Foundation | Repo, tooling, CI, layouts, nav, footer, theming |
| M3 | Content pages | Home, About, Contact, Resume |
| M4 | Work | Work index, case study template, first 3 case studies |
| M5 | Quality | Accessibility audit, performance tuning, SEO, cross-browser tests |
| M6 | Launch | Domain, deploy, redirects, analytics, post-launch checks |

---

## 11. Acceptance Criteria (Launch Gate)

- [ ] All v1 pages are live and match Section 4
- [ ] At least 3 complete case studies, each with real outcomes
- [ ] No placeholder text, broken links, or missing alt text
- [ ] Lighthouse 95+ in Performance, Accessibility, Best Practices, and SEO on Home and one case study
- [ ] Keyboard-only and screen-reader pass completed
- [ ] Verified at 320px, 768px, and 1280px+; light and dark mode
- [ ] Contact form tested end to end, including failure state
- [ ] Meta tags and social previews verified
- [ ] 404, sitemap, robots, and favicon in place
- [ ] README explains how to add a project and deploy

---

## 12. Risks and Assumptions

| Risk / Assumption | Mitigation |
|---|---|
| Content is not ready, so the build stalls | Lock content list in M0; build the template with one real project first |
| NDA or confidential work cannot be shown | Use redacted case studies approved by the owner |
| Scope creep (blog, animations, extras) | Anything outside Section 2.1 goes to the v2 backlog |
| Heavy media hurts performance | Enforce image pipeline and size budgets in CI |
| Assumes one owner and one language in v1 | Revisit for multi-site or multi-language in v2 |

---

## 13. Open Questions for the Owner

1. Who is the primary audience, and what single action should they take?
2. Which framework, hosting, and domain?
3. Which projects will be featured, and what outcomes can be publicly stated?
4. Preferred visual direction and any reference sites?
5. Is analytics wanted, and which tool?
6. Which social and professional profiles should be linked?
7. Is a blog planned soon enough to include in v1?

---

## 14. Change Log

| Date | Version | Change |
|---|---|---|
| 2026-10-25 | 1.0 | Initial draft |
