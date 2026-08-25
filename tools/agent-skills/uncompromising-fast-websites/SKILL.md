---
name: uncompromising-fast-websites
description: Build visually exceptional, conversion-aware websites with uncompromising real-world performance. Use for marketing sites, landing pages, service-business sites, portfolios, editorial sites, and other primarily content-driven web experiences where speed, aesthetic quality, responsiveness, and maintainability all matter.
---

# Uncompromisingly Fast, Beautiful Websites

## Mission

Build websites that are simultaneously:

1. **Extremely fast in real-world use**
2. **Visually excellent and appropriate for the user's taste**
3. **Responsive and polished on every common screen size**
4. **Accessible and semantically correct**
5. **Simple, maintainable, and difficult to break**
6. **Efficient to build, modify, and deploy**
7. **Optimized for the website's actual goal** — conversion, trust, clarity, lead capture, education, sales, or brand perception

Performance is not permission to make an ugly, generic, sterile, under-designed website.

Design quality is not permission to ship bloated JavaScript, oversized media, layout shifts, slow fonts, excessive animation, or fragile dependencies.

The objective is **maximum perceived quality per byte, request, component, and millisecond**.

---

# Core Principle

> Build the most beautiful version of the site that can still be delivered with an extremely small performance footprint.

Never solve a visual problem with a heavy runtime when HTML, CSS, SVG, optimized media, or a tiny isolated interaction can solve it.

Never solve a performance problem by deleting the visual character that makes the site desirable.

Prefer **better implementation**, not weaker design.

---

# Priority Order

When making tradeoffs, optimize in this order:

1. Correctness
2. User intent and brand fit
3. Visual quality
4. Perceived speed
5. Core Web Vitals
6. Accessibility
7. Conversion / task completion
8. Maintainability
9. Bundle size
10. Developer convenience

Developer convenience must never override user experience.

A technically perfect Lighthouse score on a visually poor website is a failure.

A beautiful website that feels sluggish is also a failure.

---

# Default Technical Philosophy

For primarily content-driven websites:

- Prefer **static generation**
- Prefer **server-rendered HTML**
- Prefer **HTML + CSS before JavaScript**
- Prefer **zero client JavaScript by default**
- Add JavaScript only where the interaction genuinely requires it
- Prefer **small isolated interactive islands**
- Prefer native browser behavior over JavaScript recreation
- Prefer platform primitives over dependencies
- Prefer compile-time work over client-time work
- Prefer CDN-cached assets and pages
- Prefer server-side integrations over exposing SDKs to the browser

A good default stack is:

- Astro
- TypeScript
- CSS or Tailwind
- Static generation where possible
- Small framework islands only where justified
- Optimized local assets
- Cloudflare or Vercel CDN
- Server-side form/API handlers
- Lighthouse / Core Web Vitals validation

Do not force this stack when the existing project or requirements clearly call for something else.

For highly interactive authenticated applications, use the appropriate application framework, but preserve the same performance discipline.

---

# Performance Budget

Treat these as default targets, not suggestions.

## Initial Page

Aim for:

- Client-side JavaScript: **0–50 KB gzip**
- Ideal marketing-page JavaScript: **0–20 KB gzip**
- CSS: **under 30 KB gzip when practical**
- Initial page transfer: **under 500 KB when practical**
- Hero image: usually **under 150 KB**
- Third-party scripts: **as close to zero as possible**

Do not chase these numbers blindly if doing so materially harms the design. Instead, find a better implementation.

## Core Web Vitals Targets

Target:

- LCP: **< 1.5s**
- INP: **< 150ms**
- CLS: **< 0.05**

Minimum acceptable production goal:

- LCP: **≤ 2.5s**
- INP: **≤ 200ms**
- CLS: **≤ 0.1**

## Lighthouse

Target:

- Performance: **95–100**
- Accessibility: **95–100**
- Best Practices: **95–100**
- SEO: **95–100**

Do not optimize only for Lighthouse. Test the site as a human would experience it.

---

# Design Quality Is Mandatory

Before implementation, determine the visual direction from the user's:

- examples
- screenshots
- references
- existing brand
- typography
- logo
- color palette
- audience
- product category
- stated preferences
- emotional tone
- desired level of polish
- desired density
- desired sophistication
- competitors they like or dislike

When examples are available, infer the underlying visual system rather than copying isolated details.

Identify:

- visual hierarchy
- type scale
- spacing rhythm
- corner radius language
- border treatment
- contrast level
- content density
- imagery style
- use of negative space
- animation personality
- grid structure
- editorial vs software vs luxury vs utilitarian feel
- degree of visual tension
- balance of restraint vs expressiveness

Then implement those qualities efficiently.

---

# Never Let "Fast" Become "Generic"

Do not automatically default to:

- white background
- black text
- one sans-serif
- generic centered hero
- three feature cards
- blue gradient buttons
- giant rounded rectangles
- excessive glassmorphism
- generic SaaS dashboard mockups
- repetitive card grids
- arbitrary blobs
- stock illustration aesthetics
- overused startup layouts

Minimalism is valid only when it matches the user's desired aesthetic.

A high-end design may use:

- strong typography
- unusual composition
- asymmetry
- large editorial imagery
- restrained motion
- texture
- layered sections
- dramatic cropping
- advanced responsive layouts
- SVG artwork
- art direction
- custom iconography
- distinctive interaction

Implement these efficiently rather than removing them.

---

# Design Efficiency

Prefer visual techniques with high aesthetic impact and low runtime cost.

Excellent tools include:

- CSS Grid
- Flexbox
- container queries
- CSS custom properties
- pseudo-elements
- gradients
- masks
- clip-path
- transforms
- filters used sparingly
- blend modes used carefully
- variable fonts
- optimized SVG
- responsive image art direction
- CSS transitions
- CSS keyframes
- scroll-driven CSS when well-supported and appropriate

Avoid introducing a JavaScript animation framework for effects CSS can perform well.

---

# Typography

Typography is a primary design system, not an afterthought.

Use deliberate:

- font selection
- font pairing
- line height
- letter spacing
- measure
- weight hierarchy
- display/body contrast
- responsive type scaling

Prefer:

- system fonts when appropriate
- local WOFF2
- variable fonts when efficient
- aggressive font subsetting when practical
- only the weights/styles actually used

Avoid:

- loading entire font families
- multiple unnecessary font families
- blocking rendering on remote font services
- excessive font weights
- icon fonts

When custom typography is critical to the aesthetic, keep it. Optimize the implementation rather than replacing it with a generic font.

---

# Images

Every image must justify its bytes.

Use:

- responsive `srcset`
- correct intrinsic dimensions
- AVIF or WebP when appropriate
- optimized fallbacks
- width/height or aspect-ratio
- art-directed crops when necessary
- lazy loading below the fold
- eager loading only for critical media

Never:

- send a 2500px image into a 400px container
- lazy-load the LCP hero image
- use CSS background images for important semantic/LCP imagery when an image element would perform better
- ship uncompressed screenshots
- use giant transparent PNGs when SVG/WebP/AVIF is appropriate

For visually critical images, preserve quality. Compression artifacts that cheapen the design are not acceptable.

---

# Hero Section Rules

The hero is usually the most performance-sensitive and visually important region.

The hero must:

- render correctly without waiting for client JavaScript
- have stable dimensions
- reveal the primary message immediately
- prioritize the likely LCP element
- avoid blocking third-party scripts
- avoid unnecessary above-the-fold carousels
- avoid autoplay video unless the design truly depends on it

If using a hero image:

- include it in initial HTML
- size it correctly
- prioritize its fetch
- provide responsive sources

If using hero video:

- question whether video is necessary
- use a strong poster
- keep initial page rendering independent of video loading
- defer nonessential video bytes
- provide graceful fallback
- optimize aggressively

Do not remove a visually powerful hero simply because it is large. Re-engineer it.

---

# JavaScript Rules

JavaScript is a cost center.

Before adding client JavaScript, ask:

1. Can HTML do this?
2. Can CSS do this?
3. Can the server do this?
4. Can this interaction load only when visible?
5. Can a tiny vanilla script do it?
6. Does this feature create enough user value to justify its runtime cost?

Use client JavaScript for legitimate needs such as:

- application state
- complex form interactions
- rich calculators
- user-controlled filtering
- realtime UI
- authenticated application behavior
- genuinely interactive visualizations

Avoid using JavaScript for:

- static layout
- decorative hover states
- basic responsive behavior
- simple reveal animations
- typography
- purely decorative effects
- content that could be rendered server-side

---

# Hydration Rules

If the framework supports partial hydration:

- default to no hydration
- hydrate only interactive components
- use idle hydration when immediate interaction is unnecessary
- use viewport hydration for below-the-fold components
- do not hydrate large parent trees just to support one button

Keep interactive islands narrow.

---

# Animation

Motion should improve:

- hierarchy
- orientation
- feedback
- storytelling
- perceived quality

Animation must never make the website feel slower.

Prefer:

- transforms
- opacity
- CSS transitions
- short durations
- intentional easing
- GPU-friendly properties
- subtle entrance motion
- motion tied to meaningful interaction

Avoid:

- animating layout-heavy properties
- excessive scroll listeners
- long entrance sequences
- blocking page usability until animation completes
- animating every element
- gratuitous parallax
- large animation libraries for trivial effects

Respect `prefers-reduced-motion`.

---

# Third-Party Scripts

Treat every third-party script as hostile to performance until proven otherwise.

Examples:

- analytics
- ad pixels
- heatmaps
- chat widgets
- schedulers
- A/B testing
- social embeds
- tracking tags
- CRM embeds

For every third-party script:

1. Verify it is necessary.
2. Load it only on pages that need it.
3. Defer it when possible.
4. Avoid duplicative trackers.
5. Measure its impact.
6. Prefer server-side integrations when appropriate.

Do not allow tag-manager convenience to destroy the frontend.

---

# Forms

Forms should be fast, resilient, and trustworthy.

Prefer:

- native HTML form semantics
- server-side handling
- progressive enhancement
- minimal client validation
- clear error states
- optimistic UX only when safe
- bot protection that does not create excessive friction

Do not ship an entire CRM SDK into the browser just to submit a lead.

Typical architecture:

`form -> local/server endpoint -> database/source of truth -> downstream integrations`

Persist important submissions before calling fragile third-party services when the product requirements justify it.

---

# Accessibility

Accessibility is part of quality.

Require:

- semantic HTML
- logical heading structure
- keyboard navigation
- visible focus states
- correct labels
- alt text
- sufficient contrast
- touch-friendly hit targets
- reduced-motion support
- usable zoom behavior
- proper landmark elements
- correct button/link semantics

Do not sacrifice visual sophistication. Solve accessibility within the design system.

---

# Responsive Design

Do not treat mobile as a compressed desktop.

Design intentionally for:

- small phones
- large phones
- tablets
- laptops
- desktops
- large displays

Verify:

- typography scales correctly
- content order makes sense
- navigation remains usable
- imagery crops intentionally
- buttons remain tappable
- no text becomes too wide
- layout does not feel empty on large screens
- complex grids collapse gracefully
- decorative elements do not cause overflow

Prefer fluid systems using:

- `clamp()`
- min/max constraints
- responsive grid
- container queries where useful
- content-driven breakpoints

---

# Layout Stability

CLS is a design defect.

Always reserve space for:

- images
- video
- embeds
- dynamic UI
- banners
- fonts where practical

Avoid injecting content above existing content after load.

---

# SEO and Semantics

Fast sites should also be machine-readable.

Include as appropriate:

- meaningful title
- meta description
- canonical URL
- Open Graph data
- Twitter/social metadata
- structured data
- semantic headings
- descriptive links
- crawlable navigation
- sitemap
- robots configuration

Do not hide important content behind client-only rendering without a reason.

---

# Conversion and Content

Do not optimize speed at the expense of persuasion.

Preserve:

- strong copy hierarchy
- meaningful social proof
- visual trust
- clear CTA placement
- objection handling
- product explanation
- pricing clarity
- relevant imagery
- credibility signals

A site that loads instantly but fails to communicate value is not optimized.

---

# Dependency Discipline

Before installing a dependency:

1. Check whether the browser or current framework already solves the problem.
2. Check package size.
3. Check whether it adds client JavaScript.
4. Check maintenance quality.
5. Check whether it introduces transitive dependencies.
6. Check whether a tiny local implementation would be safer.

Avoid dependency accumulation.

Delete unused packages, code, components, assets, and CSS.

---

# Component Discipline

Create components when they:

- repeat
- express a meaningful design primitive
- improve maintainability
- encapsulate real behavior

Do not atomize every `<div>` into a component.

Avoid abstraction that makes simple markup difficult to understand.

Prefer a small, obvious component system.

---

# CSS Discipline

Keep CSS intentional.

Use:

- design tokens
- CSS variables
- consistent spacing scales
- consistent radii
- consistent typography
- reusable layout primitives

Avoid:

- duplicated arbitrary values
- thousands of generated utilities that are never used
- specificity wars
- global overrides that create side effects
- deeply nested selectors

---

# Data and Network Discipline

Every network request should have a purpose.

Avoid:

- fetching static content from an API on every page load
- browser-side database reads for content that can be built statically
- sequential request waterfalls
- duplicate requests
- excessive polling
- blocking rendering on noncritical data

Prefer:

- static data
- server fetching
- parallel requests
- caching
- precomputation
- edge/CDN delivery

---

# Caching

Cache immutable assets aggressively.

For fingerprinted static assets:

- use long-lived caching
- use immutable cache headers when appropriate

For content:

- choose static generation first
- use CDN caching
- use revalidation where content freshness requires it
- avoid dynamic rendering without a real need

---

# Perceived Performance

Optimize what users feel, not only what tools score.

A site should:

- show useful content immediately
- respond instantly to input
- avoid blank loading screens
- avoid jank
- preserve scroll smoothness
- keep navigation immediate
- make loading states visually intentional

Do not hide a slow architecture behind skeletons when the content could simply render immediately.

---

# Build Workflow

Use this workflow for every site.

## 1. Understand the Goal

Determine:

- audience
- primary conversion
- brand personality
- desired aesthetic
- content hierarchy
- required functionality
- performance constraints
- existing technology constraints

## 2. Define the Visual System

Before building random sections, define:

- typography
- colors
- spacing
- grid
- radius
- borders
- shadows
- imagery
- interaction style
- section rhythm

## 3. Choose the Lightest Valid Architecture

Classify each page/feature as:

- static
- server-rendered
- interactive island
- fully dynamic application UI

Use the least expensive rendering model that satisfies the requirement.

## 4. Build the Critical Path First

Implement:

- shell
- header
- hero
- primary CTA
- initial viewport
- critical fonts
- critical image strategy

Verify the above-the-fold experience before building the rest.

## 5. Complete the Site

Build remaining sections using the established design system.

Avoid visual degradation as implementation expands.

## 6. Optimize Media

Inspect every:

- image
- icon
- font
- video
- SVG

Resize, compress, subset, defer, or remove where appropriate.

## 7. Audit JavaScript

For every client bundle, identify:

- why it exists
- whether it can be removed
- whether it can be delayed
- whether it can be isolated

## 8. Audit Third Parties

Measure and challenge each external script.

## 9. Responsive QA

Inspect all major breakpoints visually.

Do not rely solely on CSS correctness.

## 10. Performance QA

Run:

- Lighthouse
- browser performance tools
- network inspection
- bundle inspection when relevant

Test with throttling, not only on a fast development machine.

## 11. Visual QA

Confirm:

- hierarchy
- rhythm
- typography
- alignment
- responsive composition
- image quality
- hover/focus states
- animation quality
- polish

## 12. Final Regression Check

Ensure performance optimizations did not damage:

- brand
- layout
- readability
- imagery
- CTA prominence
- accessibility
- interactions

---

# Performance Debugging Order

When a site is slow, investigate in this order:

1. Oversized images/video
2. LCP resource discovery
3. Render-blocking fonts/CSS
4. Excessive client JavaScript
5. Third-party scripts
6. Hydration scope
7. Server response time
8. Request waterfalls
9. Excessive DOM/layout work
10. Animation/main-thread work

Fix root causes before applying superficial tricks.

---

# Aesthetic Debugging Order

When a fast site looks cheap or generic, investigate:

1. Typography
2. Spacing rhythm
3. Visual hierarchy
4. Image quality/art direction
5. Composition
6. Color/contrast
7. Section transitions
8. Repetition
9. Generic components
10. Missing polish in interaction states

Do not respond by adding random gradients, shadows, animation, or cards.

---

# Anti-Patterns

Do not:

- build a SPA for a static brochure site without a strong reason
- hydrate the whole page unnecessarily
- install animation libraries for simple motion
- ship huge hero video by default
- use low-quality compressed imagery
- lazy-load the LCP image
- load every font weight
- use five analytics tools
- embed heavy scheduling/chat widgets above the fold
- fetch static content client-side
- over-componentize simple markup
- use UI libraries that erase the user's brand
- sacrifice typography to save a few kilobytes
- remove important imagery only to improve a benchmark
- substitute generic templates for thoughtful design
- accept a visually mediocre result because "performance is good"
- accept poor performance because "the design is impressive"

---

# Decision Rule for Heavy Features

When a desired feature is expensive, do not immediately reject it.

Instead:

1. Identify the visual/user value it provides.
2. Find the cheapest implementation that preserves that value.
3. Reduce its loading priority if it is noncritical.
4. isolate it from the critical rendering path.
5. Measure the result.
6. Keep it if its value justifies its cost.

Examples:

- Replace a JS parallax library with CSS transforms.
- Replace an autoplay hero video with a poster + deferred playback.
- Replace an embedded scheduler with a lightweight trigger that loads it on demand.
- Replace a full icon library with selected SVGs.
- Replace a carousel with an intentional static composition when motion adds little value.

---

# When Design and Performance Conflict

Never choose between them prematurely.

Use this sequence:

1. Preserve the design intent.
2. Identify the expensive implementation detail.
3. Rebuild that detail more efficiently.
4. Re-test.
5. Only simplify the visual concept if no efficient implementation can preserve it.

The goal is not "minimal design."

The goal is **minimal waste**.

---

# Definition of Done

A website is not finished until all are true:

- [ ] The visual direction clearly matches the user's taste or brand
- [ ] The site looks intentional rather than template-generated
- [ ] Typography is polished
- [ ] Desktop layout is polished
- [ ] Mobile layout is polished
- [ ] Important content renders without client JavaScript where practical
- [ ] Client JavaScript is justified and minimized
- [ ] Images are responsive and optimized
- [ ] Fonts are optimized
- [ ] LCP is intentionally managed
- [ ] Layout shifts are minimal
- [ ] Interaction latency is low
- [ ] Third-party scripts are minimized
- [ ] Forms work reliably
- [ ] Accessibility basics are complete
- [ ] Metadata and semantic structure are complete
- [ ] No obvious console errors exist
- [ ] No unnecessary dependencies remain
- [ ] Lighthouse / performance testing has been run
- [ ] The site still looks excellent after optimization
- [ ] Performance optimizations did not flatten the design
- [ ] Visual polish did not compromise the critical rendering path

---

# Final Standard

The finished website should create this reaction:

> "This looks expensive, feels instant, and nothing seems wasted."

If it is fast but visually mediocre, continue working.

If it is beautiful but bloated or sluggish, continue working.

Ship only when **design quality and performance quality reinforce each other**.
