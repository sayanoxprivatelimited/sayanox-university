# Sayanox University

> A structured, self-paced learning platform to master computer science, software engineering, systems, and AI — the way real engineers learn.

Most learning resources are either too academic (theory without practice) or too scattered (random tutorials).  
**Sayanox University** is designed as a complete learning journey: clear tracks, progressive difficulty, hands-on exercises, projects, and deep understanding.

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
| **02 · Computer Science Core** | Data structures, algorithms, complexity, discrete math | 🟡 Planned |
| **03 · Software Engineering** | Design, testing, architecture, code quality, collaboration | 🟡 Planned |
| **04 · Systems** | OS, networking, concurrency, databases, distributed systems | 🟡 Planned |
| **05 · Artificial Intelligence** | ML fundamentals, deep learning, LLMs, applied AI engineering | 🟡 Planned |
| **06 · Projects & Capstones** | End-to-end real projects that prove mastery | 🟡 Planned |

---

## How This University Works

Every major topic follows this structure:

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

```
sayanox-university/
├── README.md
├── curriculum.md              # Full roadmap & recommended path
├── tracks/
│   ├── 00-foundations/
│   ├── 01-programming/
│   ├── 02-computer-science/
│   ├── 03-software-engineering/
│   ├── 04-systems/
│   ├── 05-artificial-intelligence/
│   └── 06-projects/
├── templates/                 # Lesson / exercise / project templates
├── scripts/                   # Helper scripts
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
The site can be deployed as static files on Vercel without a build step.
