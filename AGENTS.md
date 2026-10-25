# AGENTS.md: Constitution for Portfolio Websites

This file is the governing document for any AI agent (or human) working on a portfolio website in this repository. When instructions conflict, this file wins over convenience, habit, or trend. If a request would break a rule here, say so and propose an alternative instead of silently complying.

---

## 1. Purpose and Prime Directive

A portfolio exists to **show the owner's best work clearly and make it easy to get in touch**. Every decision is judged against three questions:

1. Does it help a visitor understand who this person is and what they do within 10 seconds?
2. Does it make the work look credible and well crafted?
3. Does it make contacting the owner effortless?

If a change does not serve at least one of these, do not make it.

---

## 2. Core Principles (in priority order)

1. **Clarity over cleverness.** Content is the product. Effects, animations, and novelty never obscure the work.
2. **Accessibility is mandatory.** Not a stretch goal. See Section 6.
3. **Performance is a feature.** Fast on a mid-range phone over a mediocre connection.
4. **Honesty.** Never invent projects, clients, metrics, testimonials, awards, or job titles. Placeholders must be clearly marked `TODO` and never ship.
5. **Simplicity.** Fewest dependencies, fewest moving parts. Prefer static output.
6. **Maintainability.** The owner must be able to add a project in minutes without touching layout code.
7. **Consistency.** One design system, one voice, one way of doing each thing.

---

## 3. Content Rules

- **Source of truth:** all copy and project data live in content files (e.g. `/content/*.md`, `/data/*.json`), never hardcoded in components.
- **Required sections:** Hero (name, role, one-line value statement, primary call to action), Selected Work, About, Contact. Optional: Writing, Resume/CV, Testimonials, Now.
- **Projects** must include: title, one-sentence summary, the owner's role, tools/stack, outcome or result, at least one image or demo link, and a date. Case studies should follow *Problem → Approach → Result*.
- **Voice:** first person, plain, specific, confident without hype. No filler ("passionate", "cutting-edge", "synergy"). Use numbers and concrete outcomes where they are real.
- **No fabricated or lorem ipsum content** in committed or deployed code.
- **Personal data:** only publish what the owner has explicitly approved. Never expose home address, personal phone number, or private emails without permission. Obfuscate contact emails where practical.
- **Third-party work:** do not publish confidential, client-restricted, or NDA-covered material. Ask first.

---

## 4. Design System

- Define design tokens once (colors, type scale, spacing, radii, shadows, breakpoints) in a single source (CSS variables or theme file). Never use magic numbers inline.
- **Typography:** max two font families. Body text 16px minimum, line height 1.5 to 1.7, line length 60 to 75 characters.
- **Color:** one primary accent, neutral palette, support for light and dark mode via `prefers-color-scheme`.
- **Layout:** mobile-first, responsive from 320px up. No horizontal scrolling at any width.
- **Motion:** subtle and purposeful, under 300ms for UI transitions. Must respect `prefers-reduced-motion`. No auto-playing audio or video with sound.
- **Imagery:** real project visuals over stock. Consistent aspect ratios and corner treatment.
- Reuse existing components before creating new ones. New components need a clear reason.

---

## 5. Technical Standards

- **Stack default:** static-first (Astro, Next.js static export, Eleventy, or plain HTML/CSS/JS). Do not introduce a heavy framework, CMS, or backend unless the owner approves.
- **Dependencies:** justify each one. Prefer platform features. Pin versions. Remove unused packages.
- **Semantic HTML first.** Use proper landmarks (`header`, `nav`, `main`, `section`, `footer`), headings in logical order, one `h1` per page.
- **CSS:** no `!important` unless unavoidable and commented. Avoid deep selector nesting.
- **JavaScript:** progressive enhancement. The site must be readable and navigable with JS disabled where feasible.
- **Code quality:** use the configured linter and formatter. No dead code, no commented-out blocks, no stray `console.log`.
- **Naming:** descriptive, consistent, lowercase-kebab for files and routes.
- **Structure:** keep content, components, styles, and assets in separate, predictable folders. Document any structure change here or in the README.

---

## 6. Accessibility (WCAG 2.2 AA minimum)

- Color contrast: 4.5:1 for body text, 3:1 for large text and UI components.
- Every image has meaningful `alt` text (or `alt=""` if purely decorative).
- Fully keyboard navigable, visible focus states, logical tab order, working "skip to content" link.
- Links and buttons have descriptive accessible names. No "click here".
- Form fields have visible labels, clear errors, and are not color-dependent.
- Do not convey information by color or motion alone.
- Test with a screen reader pass and keyboard-only pass before major releases.

---

## 7. Performance Budgets

| Metric | Target |
|---|---|
| Lighthouse Performance / Accessibility / Best Practices / SEO | 95+ each |
| Largest Contentful Paint | under 2.5s on 4G mobile |
| Cumulative Layout Shift | under 0.1 |
| Interaction to Next Paint | under 200ms |
| Initial JS payload | under 100KB gzipped where possible |

- Images: modern formats (AVIF/WebP), responsive `srcset`, explicit width and height, lazy-load below the fold.
- Fonts: self-host, subset, `font-display: swap`, preload only the critical one.
- No third-party scripts (analytics, widgets, trackers) without owner approval and a stated purpose.

---

## 8. SEO and Sharing

- Unique `<title>` and meta description per page. Canonical URLs set.
- Open Graph and Twitter card tags with a real preview image.
- `sitemap.xml`, `robots.txt`, and structured data (`Person`, and `CreativeWork`/`Project` where relevant).
- Clean, human-readable URLs. Add redirects when renaming routes.
- Favicon set and web manifest present.

---

## 9. Security and Privacy

- Never commit secrets, API keys, tokens, or `.env` files. Use environment variables and keep `.env.example` current.
- Contact forms must use validation, spam protection (honeypot or CAPTCHA alternative), and a trusted handler. Never expose a raw email in a way that invites scraping if a safer option exists.
- Serve over HTTPS only. Set sensible security headers (CSP, `X-Content-Type-Options`, `Referrer-Policy`).
- External links to other origins use `rel="noopener noreferrer"`.
- Respect privacy: if analytics are used, prefer privacy-friendly, cookieless tools. Add a clear privacy note if any data is collected.
- Keep dependencies patched. Review advisories before upgrading or adding packages.

---

## 10. Agent Workflow Rules

**Before changing anything**
- Read this file, the README, and the relevant content and component files.
- State the plan briefly for non-trivial work. Ask when requirements are ambiguous or when a change is irreversible.

**While working**
- Make the smallest change that fully solves the task. Do not refactor unrelated code.
- Never delete or overwrite the owner's content, images, or data without explicit confirmation.
- Do not modify build config, deployment config, domains, or DNS unless asked.
- Do not install new dependencies, add trackers, or change licenses without approval.
- One logical change per commit, with a clear message (`feat:`, `fix:`, `content:`, `style:`, `chore:`).

**Before declaring done** (Definition of Done)
- [ ] Builds and runs locally with no errors or warnings
- [ ] Lint and format checks pass
- [ ] Checked at 320px, 768px, and 1280px+ widths, in light and dark mode
- [ ] Keyboard navigation and focus states verified
- [ ] Contrast, alt text, and heading order verified
- [ ] No broken links; no placeholder or lorem ipsum text
- [ ] Lighthouse scores meet Section 7 targets
- [ ] Meta tags and social preview checked
- [ ] README or this file updated if structure or conventions changed

**Reporting**
- Summarize what changed, why, and anything that needs the owner's decision. Be upfront about anything unverified or skipped.

---

## 11. Multi-Site Rules

When this repository or organization holds more than one portfolio site:

- Share design tokens, components, and tooling through a common package rather than copy-pasting.
- Each site keeps its own content, identity, and voice. Do not leak one person's content, branding, or data into another site.
- Changes to shared code must be checked against every site that consumes it.
- Site-specific overrides are documented in that site's own README, and may only **tighten**, never relax, the rules here.

---

## 12. Amendments

- This constitution may be changed only by the owner. Agents may *propose* amendments with a short rationale but must not edit this file on their own initiative.
- Record changes at the bottom with date and reason.

| Date | Change | Reason |
|---|---|---|
| 2026-10-25 | Initial version | Establish baseline rules |

---

## 13. Project-Specific Details (fill in)

- **Owner:**
- **Site URL(s):**
- **Stack / framework:**
- **Hosting / deploy method:**
- **Primary audience (recruiters, clients, peers):**
- **Primary call to action:**
- **Brand colors / fonts:**
- **Off-limits topics or content:**
