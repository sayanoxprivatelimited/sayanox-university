# Platform roadmap

This is a staged plan, not a claim that the items below exist. The site is
currently a static, free, guest-only learning experience; notes, progress and
certificates stay on the device. Existing course material is introductory.
Features will be released and tested incrementally rather than represented by
placeholder buttons or promises of accreditation.

## Phase 1 — learning and practice (current work)

- Add full-text search across published lesson titles, text, examples and
  exercises; personal notes are not searched or uploaded.
- Show beginner level, approximate lesson times and reading progress; offer
  example copying, Markdown lesson/notes downloads and confirmation before
  self-reported completion.
- Add four suggested career paths and public, progressive challenge hints and
  example solutions after an attempt. Existing Python, SQL, JavaScript and
  HTML/CSS practice remains browser-based. Checks and solutions are public;
  they are not hidden tests or a secure examination.
- Build on existing bookmarks, notes, lesson navigation, quizzes, accessibility,
  responsive layouts, local backups, offline caching, SEO and CI. Expand tests.

## Later phases — planned, not yet implemented

1. **Curriculum and inclusive content:** author and review intermediate and
   advanced lessons, guided tutorials, videos/transcripts, audio, diagrams,
   language translations, prerequisites, downloadable materials, lesson quizzes
   and career-specific projects. Build translation workflows and do not imply
   content exists until it is reviewed and published.
2. **Practice:** research a lightweight editor and accessible preferences;
   playgrounds, formatting, daily challenges, hints, solutions and additional
   runtimes. C/Rust/Go currently link to external compiler resources. A browser
   cannot protect hidden tests or prevent determined cheating; trusted assessment
   would need isolated server-side execution with strict resource limits.
3. **Assessment and certificates:** optional final assessments, explainable
   scoring and accessibility accommodations. Today certificates are local,
   self-reported and not independently verified. A future issuance service may
   let a public page check that an ID was issued by this platform, but that alone
   is not identity verification, proctoring or accreditation. QR codes, badges,
   renewal and LinkedIn sharing depend on the future certificate model.
4. **Guest-first accounts and Cloudflare:** design Workers APIs, D1 migrations,
   optional sign-in, guest-data merge, cross-device progress, privacy controls,
   data export/deletion and R2 media only after deployment access and cost limits
   are confirmed. No account is required today. Design for OAuth/magic links or
   password management only after a threat model, accessible recovery and 2FA
   review. Never store passwords, tokens or service secrets in client code.
5. **Motivation and UI:** local-first streaks and daily goals already exist;
   later explore XP, levels, achievements, weekly goals, calendar views, a11y
   preferences, PWA install UX and reduced-motion-friendly celebration. Public
   leaderboards require opt-in profiles, moderation and server support.
6. **Performance and security:** budget asset sizes, monitor real performance
   only with appropriate privacy choices, review caching/offline storage, CSP,
   XSS, abuse limits, CSRF, cookies and dependency scanning. No performance or
   compliance score is guaranteed. R2, Web Push and background synchronization
   each need a separate privacy, reliability and operational review.
7. **Content administration and community:** accessible authoring, drafts,
   review, version history, roles, discussions, reporting and moderation need
   authenticated server-side authorization, storage and operational staffing.
8. **Notifications and growth:** preferences, quiet hours, consent, unsubscribe,
   analytics, referrals, blogs and feedback are future work. Email and push
   require providers; analytics and experiments must be opt-in and disclosed.
9. **AI and Sayanox ecosystem:** AI tutoring, code review and recommendations
   require a selected provider, privacy review, safety controls and cost limits.
   Sayanox language courses, interpreter, tools and developer portal require
   actual source material and integration details; no such integration is
   represented as implemented.
10. **Optional commercial services:** donations, sponsorships, mentorship,
    licenses, proctoring and institutional APIs are future decisions only;
    core courses should remain free. Do not describe assessments as proctored,
    verified or accredited without the necessary real-world process.
11. **Mobile, DevOps and trust:** installable PWA support exists; future native
    wrappers, push, device testing, staging, monitoring, rollback, accessibility
    statements, legal review, content licensing, disclosure and retention
    policies require dedicated implementation and review. Existing privacy and
    terms pages describe the current local-only site, not future services.

## Release gates

Every phase should document its dependencies, costs, data flows, security and
accessibility tradeoffs, and include migration/rollback plans and tests. Keep
existing free guest learning functional. No third-party service or new personal
data collection should be activated without an explicit decision and updated
privacy information.
