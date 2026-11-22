# Sayanox University

> A free, self-paced introduction to programming and computer science.

Most learning resources are either too academic (theory without practice) or too scattered (random tutorials).  
**Sayanox University** is an introductory learning resource with short lessons and self-guided practice. The broader curriculum is a roadmap, not a complete set of courses.

---

## Vision

Build the kind of knowledge that lasts:

- Strong fundamentals
- Real-world engineering judgment
- Ability to design, debug, and ship systems
- Continuous improvement through deliberate practice

This is not a tutorial dump. It is a **curriculum**.

---

## Learning Tracks

| Track | Focus | Status |
|-------|-------|--------|
| **00 · Foundations** | How to learn, mental models, problem solving, tools | 🟡 In progress |
| **01 · Programming Mastery** | Python deeply + one systems language (C/Go/Rust) | 🟡 Planned |
| **02 · Computer Science Core** | Data structures, algorithms, complexity, discrete math | Planned; track directory not yet present |
| **03 · Software Engineering** | Design, testing, architecture, code quality, collaboration | Planned; track directory not yet present |
| **04 · Systems** | OS, networking, concurrency, databases, distributed systems | Planned; track directory not yet present |
| **05 · Artificial Intelligence** | ML fundamentals, deep learning, LLMs, applied AI engineering | 🟡 Planned |
| **06 · Projects & Capstones** | End-to-end projects | Planned; track directory not yet present |

---

## How This University Works

The following is a proposed structure for future topics (not all directories exist yet):

```
Topic/
├── README.md          # Why this topic matters + learning outcomes
├── notes/             # Clear, dense explanations
├── exercises/         # Progressive practice problems
├── projects/          # Small to medium real projects
└── resources.md       # Curated high-signal resources
```

Principles:

- **Depth over breadth** — better to deeply understand fewer things
- **Practice > passive reading**
- **Build → Break → Fix** cycle
- **Write things down** (notes, decisions, post-mortems)
- Zero fluff

---

## Getting Started

1. Start with [`tracks/00-foundations`](tracks/00-foundations)
2. Set up your learning environment (see Foundations)
3. Follow the recommended order — do not skip fundamentals
4. Treat every exercise and project seriously

---

## Repository Structure

Tracks 02, 03, 04 and 06 and a `scripts/` directory are not present yet;
they are proposed rather than existing course material.

```
sayanox-university/
├── README.md
├── curriculum.md              # Planned roadmap & recommended path
├── tracks/
│   ├── 00-foundations/
│   ├── 01-programming/
│   └── 05-artificial-intelligence/
├── templates/                 # Lesson / exercise / project templates
└── LICENSE
```

---

## Philosophy

> "The goal is not to collect certificates.  
> The goal is to become the kind of engineer who can walk into any complex system and make it better."

We value:
- Clarity of thought
- Strong mental models
- Ownership
- Craftsmanship

---

## License

[MIT](LICENSE) © Sayanox Private Limited

---

**Welcome to Sayanox University.**  
Study hard. Build real things. Level up.

## Website

The English-language learning site is a lightweight static website. It includes
introductory lessons in ten subjects, browser-local progress, and printable
self-reported completion certificates. Certificates are not independently
verified credentials. No account or backend is required; progress is tied to
one browser and may be lost if its site data is cleared.

To run locally, start `python3 -m http.server 4173` in the repository root and
open `http://localhost:4173`. Run the smoke tests with `node tests/smoke.cjs`.
The site can be deployed as static files on Vercel without a build step. The
security headers in `vercel.json` apply on Vercel; other hosts (including
Cloudflare) need equivalent headers configured separately. The CSP allows inline scripts for the sandboxed HTML preview and eval only in
the worker for the JavaScript playground; these capabilities should not be used
to run untrusted code from other users. Runtimes are served from this site.

### Course classroom and practice

Open a course for its full-screen overview, background, lesson list, practice
studio, progress and certificate. Python and SQL use self-hosted browser runtimes
(Pyodide and sql.js); JavaScript runs in a disposable web worker. A service
worker caches the site and runtimes after an initial successful online visit,
subject to browser support and storage limits.
HTML/CSS and DOM examples use a sandboxed preview. Runs time out after 45
seconds. Rust, C and Go require an external compiler; Git and AI use a
scratchpad and linked resources. The studio explains these limitations and
does not pretend to execute unsupported languages. Content is introductory,
not a complete professional curriculum, and completion is self-reported.

Each course includes an optional eight-question knowledge check with feedback,
a best score, a focus mode, lesson bookmarks, and private per-lesson notes and
editor drafts. The course dashboard resumes the most recently opened course.
These features use browser-local storage, not accounts or cloud sync; clearing
site data or using another device will remove or hide the saved information.
Resetting a course clears its completion and quiz score but keeps notes, drafts
and bookmarks. Knowledge checks are formative and do not verify certificate
eligibility. Run code with Ctrl+Enter (or Command+Enter on a Mac).

Each course now has a self-guided project brief with milestones, a self-review
rubric and an optional stretch goal. Project checklist progress is stored
locally and is not automatically graded or submitted. The course catalog also
has versioned JSON export and import controls for Sayanox learning data. The
backup contains notes and code in **plain text**; keep it private. Import
validates the file and replaces this site's existing learning data only after
confirmation. Backups are not cloud sync and certificates are not verified.

### Offline use and accessibility

Open the site online once over HTTPS (or localhost) and wait for the service
worker to finish caching before going offline. Browser storage can be denied or
evicted, so offline availability is not guaranteed. External documentation and
playgrounds still require internet access. Pyodide 0.27.7 and sql.js 1.10.3
are vendored under `vendor/` with their own license files; the site has no build
step. Bump the cache version in `sw.js` when changing cached assets.

The classroom offers keyboard navigation, native modal focus containment, a
reduced-motion mode, focus indicators, and responsive layouts. Use Ctrl/⌘+Enter
to run runnable code. The Python and JavaScript example code challenges use
public, local checks only, not secure evaluation. The suggested learning path
is available at `roadmap/`.

### Local records and privacy

Certificate IDs are generated with secure random bytes. `verify/` searches
only records stored on the current browser or imported from the issuing
browser's backup; anyone can alter local records. This is **not independent
verification**, identity proof, or accreditation. If browser storage is cleared
without a backup, local lookup is no longer possible. Study streaks, daily goals
and estimated visible-tab course time are also stored locally. The estimate
may include idle time. No data is synced to a server. Backups are unencrypted.
