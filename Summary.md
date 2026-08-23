# Portfolio Enhancement & Deployment Fixes — Summary

**Branch:** `main`
**Last Updated:** August 23, 2026

---

## 1. GitHub Pages Deployment — 404 Fixes

**Root Cause:** The deployed JavaScript bundle on GitHub Pages (`index-Cd5Gtiy6.js`) was built from an older commit before the `import.meta.env.BASE_URL` fixes were applied. The stale JS had hardcoded paths like `src:"/logo.png"` and `fetch("/config.json")` which resolved to the GitHub Pages root (`alphacoder-007.github.io/logo.png`) instead of the subpath (`alphacoder-007.github.io/Himanshu_Kr_Portfolio/logo.png`).

**Files Fixed:**

| File                                    | Issue                                               | Fix                                                               |
| --------------------------------------- | --------------------------------------------------- | ----------------------------------------------------------------- |
| `src/sections/Hero.tsx`                 | Resume link used hardcoded `/resume/...` path       | Changed to `${import.meta.env.BASE_URL}resume/Himanshu%20Kr..pdf` |
| `src/components/NavbarParticleLogo.tsx` | Already correct — used `BASE_URL`                   | No change needed                                                  |
| `src/sections/Hero.tsx`                 | Logo refs already correct — used `BASE_URL`         | No change needed                                                  |
| `src/hooks/useSiteConfig.ts`            | Already correct — used `BASE_URL`                   | No change needed                                                  |
| `vite.config.ts`                        | Already correct — `base: '/Himanshu_Kr_Portfolio/'` | No change needed                                                  |

**Result:** After redeployment via GitHub Actions, all paths resolve correctly:

- `/Himanshu_Kr_Portfolio/logo.png` → **200** ✅
- `/Himanshu_Kr_Portfolio/config.json` → **200** ✅
- `/Himanshu_Kr_Portfolio/resume/Himanshu%20Kr..pdf` → **200** ✅
- Old broken paths (`/logo.png`, `/config.json`) correctly return **404**

---

## 2. Logo Optimization

**File:** `public/logo.png`

- Optimized from **2014 KB** (1024×1536) to **112 KB** (512×768) using Sharp
- **94.4% file size reduction** — significantly faster page load
- Visual quality preserved for watermark and navbar use cases
- Removed stale `logoNew.png` duplicate from project root (was 2MB)

---

## 3. 404.html for GitHub Pages

**New File:** `public/404.html`

- Added a simple redirect page that sends users to the homepage when they visit an invalid URL
- Served at `/Himanshu_Kr_Portfolio/404.html` — GitHub Pages uses this for all404 responses
- Prevents ugly default GitHub Pages404 page

---

## 4. Pre-commit Quality Checks — Husky + lint-staged

**New Files:**

- `.husky/pre-commit` — Git pre-commit hook
- `package.json` additions: `husky`, `lint-staged` devDependencies + config

**How it works:**

1. On every `git commit`, husky runs the pre-commit hook
2. The hook executes `npx lint-staged`
3. lint-staged runs only on staged files (fast, focused):
   - `*.{ts,tsx}` → ESLint `--fix` + Prettier
   - `*.{json,css,md}` → Prettier
4. Commit is blocked if any check fails

**Lint fixes applied:**

- `src/App.test.tsx` — removed unused `variants`/`animate` destructured vars, replaced `any` type with `{ children: React.ReactNode }`

---

## 5. README.md

**New File:** `README.md`

- GitHub Actions deployment status badge
- Project description and tech stack overview
- Live site link
- Quick start guide (install, dev, build, test, lint)
- Deployment note (auto-deploy via GitHub Actions)

---

## 6. Dependabot Configuration

**New File:** `.github/dependabot.yml`

- **npm dependencies:** Weekly updates on Mondays, up to 10 open PRs, labeled `dependencies`
- **GitHub Actions:** Weekly updates on Mondays, up to 5 open PRs, labeled `dependencies` + `ci`
- Commit prefixes: `deps` for npm, `ci` for Actions

---

## Code Snippet Section — Logo Watermark (Original)

**File:** `src/sections/Hero.tsx`

- Added `logo.png` as a subtle watermark background element inside the code snippet card
- Two watermark layers implemented:
  - **Card-level watermark:** 4% opacity (light mode) / 15% opacity (dark mode) — barely perceptible overall background
  - **System Capabilities section watermark:** 14% opacity (light mode) / 12% opacity (dark mode) — clearly visible behind the capability list
- Watermark uses `pointer-events-none` and `aria-hidden="true"` to avoid interfering with readability or accessibility

---

## Header Logo Replacement

**Files:** `src/components/NavbarParticleLogo.tsx`, `public/logo.png`

- `public/logo.png` replaced with optimized image
- `NavbarParticleLogo` component already referenced `/logo.png`, now uses `BASE_URL`
- Logo appears in Header, Footer, and Code Snippet watermark with consistent 3D rotation animation

---

## Technical Showcase — Projects

**File:** `src/data/portfolioData.ts`

### Automation (2 Projects)

| Project                                 | Technologies                                                                                                            |
| --------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| **Enterprise Web Automation Framework** | Java, Selenium WebDriver, TestNG, Maven, Page Object Model, REST API, SQL, Git, CI/CD                                   |
| **End-to-End Test Automation Platform** | Playwright, TypeScript, JavaScript, API Automation, Database Validation, HTML Reporting, CI/CD, GitHub Actions, Jenkins |

### Development (1 Project)

| Project                                                   | Technologies                                                                               |
| --------------------------------------------------------- | ------------------------------------------------------------------------------------------ |
| **Developer Productivity & Workflow Management Platform** | Java, Spring Boot, REST API, MySQL, React.js, JavaScript, HTML5, CSS3, Authentication, Git |

### API (1 Project)

| Project                                            | Technologies                                                                                                  |
| -------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- |
| **Enterprise REST API Testing & Validation Suite** | REST API, Postman, Newman, Node.js, JavaScript, JSON Schema, SQL, Authentication, Automated Validation, CI/CD |

### Fullstack (2 Existing Projects — Preserved)

| Project                              | Technologies                                      |
| ------------------------------------ | ------------------------------------------------- |
| **Bug Tracking System**              | React.js, Node.js, Express.js, MongoDB, REST APIs |
| **Full Stack Reporting Application** | React.js, Node.js, SQL, Selenium, REST APIs       |

**Total: 6 projects across 4 categories.**

---

## Contact Information — Dynamic `config.json`

**Files:**

- `public/config.json` — Configuration file for site-wide URLs
- `src/hooks/useSiteConfig.ts` — React hook to load config at runtime

**config.json:**

```json
{
  "gitURL": "https://github.com/AlphaCoder-007",
  "linkedInURL": "https://www.linkedin.com/in/himanshu-kumar-tripathi/"
}
```

**Files Updated to Use Config:**

- `src/sections/Hero.tsx` — GitHub & LinkedIn icon links
- `src/sections/Contact.tsx` — GitHub & LinkedIn buttons in contact info panel
- `src/sections/Footer.tsx` — GitHub & LinkedIn icon links in footer

**No hard-coded GitHub or LinkedIn URLs remain in any UI component.**

---

## Contact Form — Message Destination

**File:** `src/sections/Contact.tsx`

**Current behavior:** Frontend-only simulation. No actual data is sent anywhere.

**Flow:**

1. User fills form (name, email, message)
2. Client-side validation runs (required fields, email format)
3. On valid submission, shows "Transmitting Payload..." spinner for 1.5 seconds
4. Shows "Transmission Complete!" success message
5. Form data is cleared — nothing is sent to any API, email service, or database

---

## Files Changed Summary

### New Files

| File                     | Purpose                                 |
| ------------------------ | --------------------------------------- |
| `public/404.html`        | GitHub Pages404 redirect to homepage    |
| `.husky/pre-commit`      | Git pre-commit hook running lint-staged |
| `.github/dependabot.yml` | Automated weekly dependency updates     |
| `README.md`              | Project README with deployment badge    |

### Modified Files

| File                    | Changes                                               |
| ----------------------- | ----------------------------------------------------- |
| `package.json`          | Added husky, lint-staged devDeps + lint-staged config |
| `package-lock.json`     | Updated lockfile                                      |
| `src/sections/Hero.tsx` | Resume link uses `BASE_URL` instead of hardcoded path |
| `src/App.test.tsx`      | Fixed lint warnings (unused vars, `any` type)         |
| `public/logo.png`       | Optimized from 2014KB to 112KB (94% reduction)        |

### Removed Files

| File                 | Reason                              |
| -------------------- | ----------------------------------- |
| `logoNew.png` (root) | Stale duplicate of unoptimized logo |

### Pre-existing Files (No changes needed)

| File                                    | Notes                                                 |
| --------------------------------------- | ----------------------------------------------------- |
| `vite.config.ts`                        | Already has correct `base: '/Himanshu_Kr_Portfolio/'` |
| `src/components/NavbarParticleLogo.tsx` | Already uses `import.meta.env.BASE_URL`               |
| `src/hooks/useSiteConfig.ts`            | Already uses `import.meta.env.BASE_URL`               |
| `.github/workflows/deploy.yml`          | GitHub Actions deployment workflow                    |

---

## Verification Results

| Check                          | Result                        |
| ------------------------------ | ----------------------------- |
| Deployed HTML loads            | ✅ 200                        |
| Deployed JS bundle loads       | ✅ 200 (`index-Ny0N_eoS.js`)  |
| Deployed CSS bundle loads      | ✅ 200                        |
| `logo.png` serves correctly    | ✅ 200 (112 KB)               |
| `config.json` serves correctly | ✅ 200 (correct content)      |
| Resume PDF serves correctly    | ✅ 200                        |
| `404.html` serves correctly    | ✅ 200                        |
| Old broken paths return404     | ✅ 404 (as expected)          |
| TypeScript typecheck           | ✅ Pass                       |
| Tests (5/5)                    | ✅ Pass                       |
| Lint (0 errors, 0 warnings)    | ✅ Pass                       |
| Production build               | ✅ Success                    |
| Husky pre-commit hook          | ✅ Runs lint-staged on commit |

---

## Git Log (This Session)

```
4936e9b Add README with deployment badge and Dependabot config
d64da80 Add husky + lint-staged for pre-commit quality checks
9f8f2a8 Optimize logo (2MB→112KB), add 404.html, remove stale logoNew.png
cc7217a Fix resume download link to use BASE_URL for GitHub Pages
```

---

## Decisions to Review

1. **config.json placement** — Placed in `public/` as a static asset. Changes require a rebuild. If runtime config without rebuild is needed, consider environment variables instead.
2. **Resume filename** — The actual file is `Himanshu Kr..pdf` (double dot). The download path in `Hero.tsx` is URL-encoded to match. Renaming the file requires updating this path.
3. **Contact form** — Currently frontend-only simulation. No real message delivery.
4. **Logo optimization** — Reduced from 1024×1536 to 512×768. Sufficient for watermark/navbar use. If higher resolution is needed, the original can be re-optimized at a larger size.
5. **404.html** — Simple redirect to homepage. Site uses hash-based routing (`#projects`, `#contact`), so SPA-style 404 handling isn't needed.
