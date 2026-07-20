# Premium Portfolio Website – Sanjaykumar S (Python Developer)

Build a world-class, recruiter-friendly portfolio website for a Python Developer fresher using React + Vite + TypeScript + Tailwind CSS + Framer Motion + Shadcn UI.

## Resume Analysis

| Field | Details |
|-------|---------|
| **Name** | Sanjaykumar S |
| **Role** | Python Developer (Fresher) |
| **Location** | Chennai, Tamil Nadu, India |
| **Email** | sivasanjay769@gmail.com |
| **Phone** | +91-9841571817 |
| **LinkedIn** | linkedin.com/in/sanjaykumar-s-1773923a5 |
| **GitHub** | github.com/sanjaykumar251 |
| **Education** | BCA (2023–2026), HSC 68% (2020–2022) |
| **Projects** | 3 academic projects (Django, Python, Kotlin) |
| **Certifications** | 3 certifications |
| **Coding Profiles** | GitHub, LinkedIn, LeetCode |

> [!IMPORTANT]
> No professional work experience in the resume. The portfolio will emphasize **projects, skills, certifications, and learning journey** instead. No fabricated experience will be included.

---

## Proposed Changes

### 1. Project Scaffolding

#### [NEW] Vite + React + TypeScript project

- Initialize with `npx create-vite@latest ./ --template react-ts`
- Install dependencies:
  - `tailwindcss` + `@tailwindcss/vite`
  - `framer-motion`
  - `lucide-react`, `react-icons`
  - `shadcn/ui` components (button, card, badge, input, textarea)
  - `react-type-animation` (typing effect)
  - `@fontsource/inter`, `@fontsource/jetbrains-mono`

---

### 2. Design System & Global Styles

#### [NEW] `src/index.css`
- Tailwind v4 imports
- CSS custom properties for color palette:
  - **Primary**: Deep Indigo/Purple gradient (`#6366f1` → `#8b5cf6`)
  - **Accent**: Cyan/Teal (`#06b6d4`)
  - **Background**: Dark navy (`#0a0a1a`, `#111133`)
  - **Glass**: `rgba(255,255,255,0.05)` with backdrop-blur
  - **Text**: White/Gray hierarchy
- Animated gradient background (CSS keyframes)
- Glassmorphism utility classes
- Custom scrollbar styling
- Smooth scroll behavior
- Loading animation keyframes

---

### 3. Application Structure

```
src/
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx          # Sticky nav with scroll-spy
│   │   ├── Footer.tsx          # Footer with links
│   │   └── Loader.tsx          # Initial loading animation
│   ├── sections/
│   │   ├── Hero.tsx            # Hero with typing animation + floating icons
│   │   ├── About.tsx           # Professional summary + career goals
│   │   ├── Skills.tsx          # Categorized skill cards with icons
│   │   ├── Projects.tsx        # Premium project cards
│   │   ├── Education.tsx       # Timeline layout
│   │   ├── Certifications.tsx  # Cert cards
│   │   ├── Achievements.tsx    # Achievement highlights
│   │   ├── CodingProfiles.tsx  # GitHub, LinkedIn, LeetCode
│   │   └── Contact.tsx         # Contact form + info
│   └── ui/
│       ├── GlassCard.tsx       # Reusable glassmorphism card
│       ├── SectionHeader.tsx   # Animated section titles
│       ├── SkillCard.tsx       # Individual skill with icon + progress
│       ├── ProjectCard.tsx     # Project card component
│       ├── TimelineItem.tsx    # Education timeline item
│       └── AnimatedButton.tsx  # Button with ripple/hover effects
├── data/
│   └── portfolio.ts            # All resume data as typed constants
├── hooks/
│   └── useScrollReveal.ts      # Intersection observer hook
├── App.tsx                     # Main app composition
├── main.tsx                    # Entry point
└── index.css                   # Global styles + Tailwind
```

---

### 4. Section Details

#### Hero Section
- Large animated name with gradient text
- **Typing animation** cycling: `Python Developer`, `Backend Developer`, `Django Developer`, `Open to Work`
- Two CTA buttons: "Download Resume" + "Contact Me" (glassmorphism with hover glow)
- Floating Python/code icons animated with Framer Motion
- Animated gradient mesh background
- Scroll-down indicator

#### About Me
- Professional photo placeholder area
- Career objective from resume
- Key highlights as icon+text pairs (Education, Location, Availability)
- Stats: `3+ Projects`, `3 Certifications`, `Immediate Availability`

#### Technical Skills
- 5 categories in a grid:
  1. **Languages**: Python, SQL, JavaScript, HTML, CSS
  2. **Frameworks & Libraries**: Django, Bootstrap, NumPy, Pandas
  3. **Databases**: MySQL, PostgreSQL, MongoDB
  4. **Concepts**: OOP, DSA
  5. **Tools & Platforms**: Git/GitHub, VS Code
- Each skill: icon (from `react-icons`) + name + animated progress bar + hover scale effect
- Category cards with glassmorphism

#### Projects (3 cards)
1. **Explore – Travel Destination Platform**: Django, PostgreSQL, full-stack
2. **Resume Builder Web Application**: Python, HTML, CSS
3. **Verra Beauty – E-Commerce Platform**: Full-featured + Android WebView

Each card: gradient top border, tech badges, feature bullets, GitHub link button, hover lift animation

#### Education (Vertical Timeline)
- BCA at Patrician College (2023–2026)
- HSC at Chennai Higher Secondary School (2020–2022, 68%)
- Timeline line with animated dots, glassmorphism cards

#### Certifications (3 cards)
- Python Full Stack
- Data Analyst (Naan Mudhalvan)
- Python Web Development (Naan Mudhalvan)
- Each: provider badge, icon, hover animation

#### Achievements
- 3+ open-source projects on GitHub
- 1st Runner-up Cricket Tournament
- Active DSA practice on LeetCode
- Animated list items with icons

#### Coding Profiles
- GitHub (github.com/sanjaykumar251)
- LinkedIn (linkedin.com/in/sanjaykumar-s-1773923a5)
- LeetCode (mentioned in resume)
- Styled buttons with platform colors and icons

#### Contact
- Contact form (Name, Email, Message) – frontend only
- Info cards: Email, Phone, Location
- Social links
- "Download Resume" button

---

### 5. Animations (Framer Motion)

| Animation | Where |
|-----------|-------|
| Fade-in + slide-up | All sections on scroll |
| Typing animation | Hero subtitle |
| Floating icons | Hero background |
| Hover scale (1.05) | Cards, buttons |
| Stagger children | Skill grids, project cards |
| Progress bar fill | Skill indicators |
| Gradient text shimmer | Section headers |
| Smooth scroll | Navigation links |
| Page load animation | Loader component |

---

### 6. Responsive Design

- **Desktop**: Multi-column grids, full navigation
- **Tablet**: 2-column layouts, adjusted spacing
- **Mobile**: Single column, hamburger menu, touch-friendly buttons

---

## Open Questions

1. **Resume PDF**: Do you have a hosted link for your resume PDF for the "Download Resume" button? If not, I'll wire it to a placeholder path (`/resume.pdf`) that you can replace later.

2. **Profile photo**: Would you like me to generate a placeholder avatar, or will you add your own photo later?

3. **LeetCode username**: Your resume mentions LeetCode practice but doesn't include a profile URL. Should I include a LeetCode button with a placeholder link?

4. **Project GitHub links**: Should all GitHub buttons point to your main GitHub profile, or do you have specific repo URLs for each project?

---

## Verification Plan

### Dev Server
- Run `npm run dev` and verify all sections render correctly
- Test responsive layouts at mobile/tablet/desktop breakpoints

### Visual Checks
- Verify glassmorphism, animations, dark theme, and typography
- Confirm all resume data is accurately represented
- Ensure no fabricated work experience exists

### Build Validation
- Run `npm run build` to verify production build succeeds with no TypeScript errors
