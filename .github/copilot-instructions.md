# reddy.world - AI Agent Instructions

## Architecture Overview

**Tech Stack**: Vite + Lit Element + TypeScript + Vaadin Router (client-side SPA)

This is a personal portfolio/website built as a single-page application (SPA) with:
- **Frontend Framework**: Lit Element web components (not React/Vue)
- **Build Tool**: Vite (root: `src/`, public dir: `public/`)
- **Routing**: Vaadin Router (`src/vaadin-routing.js`) - client-side only
- **Styling**: Shared CSS modules imported into each component

### Component Architecture

Every page/feature is a **Lit Element custom element** defined in `src/components/`:
- Components use `@customElement('element-name')` decorator
- Each component imports: `import {css, html, LitElement} from 'lit'`
- Routing maps paths to custom element tag names (e.g., `/bio` → `<bio-element>`)

**Critical Pattern**: Components import **two CSS modules** for styling:
```typescript
import langCSS from "../css/langCSS";
import mainCSS from "../css/mainCSS";

static get styles() {
  return [langCSS, mainCSS, css`...additional styles...`];
}
```

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

**Entry Point**: `src/index.html` loads `src/vaadin-routing.js`

Routes are defined in `vaadin-routing.js`:
```javascript
router.setRoutes([
  { path: '/bio', component: 'bio-element' },
  { path: '/portfolio', component: 'portfolio-element' },
  { path: '/', component: 'bio-element' }, // default landing page
  { path: '(.*)', component: 'not-found-element' } // 404 - MUST BE LAST
]);
```

**Adding a new route**:
1. Create component in `src/components/my-page.ts`
2. Export as custom element: `@customElement('my-page-element')`
3. Import in `vaadin-routing.js`: `import './components/my-page'`
4. Add route: `{ path: '/my-page', component: 'my-page-element' }`

**Navigation**: Use `<a href="/path">` links - Vaadin Router intercepts and renders client-side

## Development Workflow

### Starting Dev Server

**CRITICAL**: Due to Windows file permission issues with `package.json`, use:
```bash
./dev.sh
```

This script tries multiple methods:
1. `npx vite --host` (preferred)
2. Direct node execution
3. Falls back to Python HTTP server on port 8080

**DO NOT** run `npm run dev` directly - it fails with file permission errors.

### File Access Issues

OneDrive sync causes permission errors. If you can't read files:
- Use `cat` or `grep` via terminal instead of `read_file` tool
- Create new files instead of editing existing ones
- Use `semantic_search` for code discovery

### Building

```bash
npm run build  # or: npx vite build
```
Output: `dist/` directory

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

- `src/components/global/menu-header.ts` - Top navigation bar
- `src/components/global/menu-footer.ts` - Footer
- `src/components/global/lang-picker.ts` - Language selector
- `src/components/global/my-listener.ts` - Event listener
- `src/components/global/my-dispatcher.ts` - Event dispatcher

These are imported in `index.html` and available on all pages.

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

Cucumber/Gherkin test files exist but may be incomplete:
- `src/test/resources/features/trainer.feature`
- `step_definitions/MySteps.ts`

## Common Tasks

### Adding a new page
1. Create `src/components/my-page.ts` with `@customElement('my-page-element')`
2. Import in `vaadin-routing.js`
3. Add route before the catch-all `(.*)`

### Updating styles globally
- Edit `src/css/mainCSS-refined.ts` (preferred) or `src/css/mainCSS.ts`
- Components auto-update on next import

### Adding a new UI component
- Create in `src/components/ui/my-component.ts`
- Export from `src/components/ui/index.ts`
- Follow existing component patterns (gold accent colors, subtle borders)

## Important Notes

- **Keep Adobe Garamond font** - it's the brand identity
- **Preserve gold/silver colors** - part of the brand
- **Use subtle styling** - 2-4px borders, not 8px; 300ms transitions
- **File permissions** - OneDrive causes issues, use workarounds
- **404 route MUST be last** in `vaadin-routing.js`
- **No npm commands** directly - use `./dev.sh` script
