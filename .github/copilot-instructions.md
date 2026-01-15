# reddy.world - AI Agent Instructions

## Architecture Overview

**Tech Stack**: Vite + Lit Element + TypeScript + Vaadin Router (client-side SPA)

This is a personal portfolio/website built as a single-page application (SPA) with:
- **Frontend Framework**: Lit Element web components (not React/Vue)
- **Build Tool**: Vite 4.0.5 (root: `src/`, public dir: `public/`)
- **Routing**: Vaadin Router 1.7.4 (`src/vaadin-routing.js`) - client-side only
- **Styling**: Shared CSS modules (Lit's `css` tagged template literals)

### Component Architecture

Every page/feature is a **Lit Element custom element** defined in `src/components/`:
- Components use `@customElement('element-name')` decorator
- Each component imports: `import {css, html, LitElement} from 'lit'`
- Properties use `@property()` decorator for reactive state
- Routing maps paths to custom element tag names (e.g., `/bio` → `<bio-element>`)

**Critical Pattern**: Components import **two CSS modules** for styling:
```typescript
import langCSS from "../css/langCSS";
import mainCSS from "../css/mainCSS"; // or mainCSS-refined

static get styles() {
  return [langCSS, mainCSS, css`...additional styles...`];
}
```

**Why this matters**: The CSS import order determines cascade priority. `langCSS` handles i18n, `mainCSS` provides global design tokens, and inline `css` adds component-specific styles.

### Brand Identity & Design System

**Original Brand Colors** (DO NOT CHANGE):
- Gold: `#c7a86d` or `#876618` (primary accent)
- Silver: `#a3b7c0` or `#81a3a7` (secondary accent)
- Groen: `#398718`
- Blauw: `#00aaff`
- Typography: Adobe Garamond Pro (elegant serif font)

**Current Design System**:
- `src/css/mainCSS.ts` - Original CSS with brand colors/fonts
- `src/css/mainCSS-refined.ts` - **NEW merged system** combining original brand with modern spacing/components
- `src/css/langCSS.ts` - Language-specific styles
- `src/components/ui/` - Modern UI component library (gh-button, gh-card, gh-input, etc.)

**Design Philosophy**: Elegant, refined, sophisticated aesthetic. Less "plastic" and harsh - subtle borders (2-4px), smooth transitions (300ms), transparent backgrounds with gold tints.

## Routing System

**Entry Point**: `src/index.html` → loads `src/vaadin-routing.js` → mounts router on `#app` div

Routes are defined in `vaadin-routing.js`:
```javascript
const app = document.querySelector('#app');
export const router = new Router(app);

router.setRoutes([
  { path: '/bio', component: 'bio-element', name: 'bio-element' },
  { path: '/portfolio', component: 'portfolio-element', name: 'portfolio-element' },
  { path: '/', component: 'bio-element' }, // default landing page
  { path: '(.*)', component: 'not-found-element' } // 404 - MUST BE LAST
]);
```

**Adding a new route** (4-step process):
1. Create component in `src/components/my-page.ts` with `@customElement('my-page-element')`
2. Import in `vaadin-routing.js`: `import './components/my-page'`
3. Add route **before** the catch-all `(.*)` route (order matters!)
4. Optionally add `name` property (currently unused but matches convention)

**Navigation**: Use `<a href="/path">` links - Vaadin Router intercepts clicks and renders client-side without page reload.

**Route Order Critical**: The 404 catch-all `(.*)` MUST be last, otherwise all routes after it will be unreachable.

## Development Workflow

### Starting Dev Server

**CRITICAL**: Due to Windows file permission issues with `package.json`, use:
```bash
./dev.sh
```

This script:
1. Checks if `node_modules` exists, runs `npm install` if missing
2. Starts Vite dev server with `npx vite --host`

**DO NOT** run `npm run dev` directly - it may fail with file permission errors on Windows/OneDrive.

### File Access Issues

OneDrive sync can cause file permission errors. If you encounter read/write failures:
- Use `cat` or `grep` via terminal instead of file read tools
- Create new files instead of editing locked ones
- Use `semantic_search` for code discovery when files are inaccessible

### Building for Production

```bash
npm run build  # or: npx vite build
```
Output: `dist/` directory ready for deployment

### Deployment to Firebase Hosting

**Firebase Configuration**: `firebase.json` deploys from `dist/` directory

**Automated Deployment (GitHub Actions)**:
- Push to `master` → Automatically builds, tests, and deploys to Firebase Hosting live
- Pull Requests → Creates preview deployment and runs tests
- All branches → Runs tests on every push (`.github/workflows/test.yml`)

**Manual Deployment**:
1. Build the project: `npm run build`
2. Deploy to Firebase: `firebase deploy --only hosting`

**Branch Strategy**:
- `master` - Production branch (auto-deploys on push via GitHub Actions)
- Feature branches - Tested on every push, preview on PR
- Requires: `FIREBASE_SERVICE_ACCOUNT_REDDY_WORLD` secret in GitHub repository settings

**Note**: Firebase hosting serves from `dist/` with SPA rewrite rules (all routes → `/index.html`)

## Component Patterns

### Standard Component Structure

```typescript
import {css, html, LitElement} from 'lit';
import {customElement, property} from 'lit/decorators.js';
import langCSS from "../css/langCSS";
import mainCSS from "../css/mainCSS"; // or mainCSS-refined

@customElement('my-element')
export class MyElement extends LitElement {
  @property({type: String}) myProp = 'default';

  static get styles() {
    return [langCSS, mainCSS, css`
      /* component-specific styles */
    `];
  }

  render() {
    return html`
      <div>Content here</div>
    `;
  }
}
```

### Global Components

Located in `src/components/global/` and imported in `src/index.html`:
- `menu-header.ts` - Top navigation bar with logo and menu
- `menu-footer.ts` - Footer with links
- `lang-picker.ts` - Language selector component
- `not-found.ts` - 404 error page
- `my-listener.ts` - Event listener utilities
- `my-dispatcher.ts` - Event dispatcher utilities

These components are available on all pages and handle cross-page functionality.

## Styling Conventions

**Import Order**: Always import both `langCSS` and `mainCSS` (or `mainCSS-refined`)

**CSS Custom Properties** (use these in components):
```css
--gold: #c7a86d
--silver: #a3b7c0
--groen: #398718
--blauw: #00aaff
--zwart: #1a1a1a
--wit: #fdfcfb
```

**Spacing Scale** (in mainCSS-refined):
```css
--space-1: 0.25rem
--space-2: 0.5rem
--space-4: 1rem
--space-8: 2rem
--space-16: 4rem
```

## UI Component Library

Located in `src/components/ui/`:
- `gh-button.ts` - Button with 5 variants (default, primary, danger, outline, ghost)
- `gh-card.ts` - Card container
- `gh-input.ts` - Form input with validation states
- `gh-link.ts` - Link with animations
- `gh-text.ts` - Typography component
- `gh-nav.ts` - Navigation
- `gh-layout.ts` - Container, Stack, Flex layouts

**Usage**:
```html
<gh-button variant="primary" size="md">Click Me</gh-button>
<gh-card variant="bordered" hoverable>Content</gh-card>
```

See `src/components/ui/README.md` for full documentation.

## Key Files & Directories

- `src/index.html` - Entry point, loads routing and global components
- `src/vaadin-routing.js` - Route definitions
- `src/components/` - All page/feature components
- `src/css/` - Shared CSS modules
- `public/` - Static assets (images, fonts, etc.)
- `public/veranderkunde/` - Separate MkDocs documentation site (don't modify)

## Firebase Integration

Files exist but may not be active:
- `src/services/firebaseService.ts`
- `src/services/authentication/`
- `firebase.json`

## Testing

**Test Framework**: Cucumber/Gherkin (BDD approach) with Selenium WebDriver

**Run Tests**:
```bash
npm test           # Run all tests
npm run test:ci    # Run tests with fail-fast for CI
```

**Test Structure**:
- Feature files: `src/test/resources/features/*.feature` (Gherkin syntax)
- Step definitions: `step_definitions/MySteps.ts` (TypeScript implementations)
- Config: `cucumber-js.conf.js`

**Automated Test Execution**:
- **Git Hooks** (via Husky):
  - `pre-commit`: Runs tests before each commit
  - `pre-push`: Runs build + tests before pushing
- **CI/CD**:
  - Tests run on every push to any branch
  - Tests required to pass before PR merge
  - Tests run before deployment to Firebase

**Setup Git Hooks** (first time):
```bash
npm install        # Installs husky
npm run prepare    # Sets up git hooks
```

**Current Status**: Test infrastructure exists with Selenium WebDriver for browser automation. TDD/BDD patterns are configured and enforced via CI/CD.

## Common Tasks

### Adding a new page
1. Create `src/components/my-page.ts` with `@customElement('my-page-element')`
2. Import in `vaadin-routing.js`: `import './components/my-page'`
3. Add route **before** the catch-all `(.*)` route: `{ path: '/my-page', component: 'my-page-element', name: 'my-page-element' }`
4. Component should import `langCSS` and `mainCSS-refined` (or `mainCSS`)

### Updating styles globally
- Edit `src/css/mainCSS-refined.ts` (preferred) or `src/css/mainCSS.ts`
- Components auto-update on next import

### Adding a new UI component
- Create in `src/components/ui/my-component.ts`
- Export from `src/components/ui/index.ts`
- Follow existing component patterns (gold accent colors, subtle borders, elegant transitions)
- Import `themeTokens` and `baseStyles` instead of langCSS/mainCSS

## Important Notes

- **Keep Adobe Garamond font** - it's the brand identity
- **Preserve gold/silver colors** - part of the brand
- **Use subtle styling** - 2-4px borders, not 8px; 300ms transitions
- **File permissions** - OneDrive causes issues, use workarounds
- **404 route MUST be last** in `vaadin-routing.js`
- **No npm commands** directly - use `./dev.sh` script
- **Vite config**: Root is `src/`, public dir is `public/`, output is `dist/`
