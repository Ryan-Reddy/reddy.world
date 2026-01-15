import { css } from 'lit';

/**
 * Updated Design System - Your Original Elegant Style + Modern Components
 * Keeps Adobe Garamond, gold/silver colors, and refined aesthetic
 * Less "plastic", more sophisticated and clean
 */
export default css`
  :root {
    /* Typography - Elegant serif with modern fallbacks */
    font-family: "Adobe Garamond Pro", Garamond, "Times New Roman", serif;
    --font-family-base: "Adobe Garamond Pro", Garamond, "Times New Roman", serif;
    --font-family-sans: Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif;
    --font-family-mono: 'SF Mono', 'Fira Code', 'Consolas', 'Monaco', 'Courier New', monospace;

    font-size: 18px;
    line-height: 1.6;
    font-weight: 400;
    color-scheme: light dark;
    color: rgba(255, 255, 255, 0.92);
    background-color: #1a1a1a;
    font-synthesis: none;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    /* Your Original Brand Colors - PRESERVED */
    --gold: #c7a86d;
    --groen: #398718;
    --blauw: #00aaff;
    --wit: #fdfcfb;
    --silver: #a3b7c0;
    --zwart: #1a1a1a;
    --warning-red: #cf222e;
    --fullwidth: 100%;
    --transitionInSeconds: all 0.6s ease;
    --transition: all 0.6s ease;
    --logoTransitionInSeconds: 0.8s;
    --be_here_now_blue: #301987;

    /* Modern spacing scale - clean and consistent */
    --space-1: 0.25rem;
    --space-2: 0.5rem;
    --space-3: 0.75rem;
    --space-4: 1rem;
    --space-5: 1.25rem;
    --space-6: 1.5rem;
    --space-8: 2rem;
    --space-10: 2.5rem;
    --space-12: 3rem;
    --space-16: 4rem;

    /* Font sizes */
    --font-size-xs: 0.75rem;
    --font-size-sm: 0.875rem;
    --font-size-base: 1rem;
    --font-size-lg: 1.125rem;
    --font-size-xl: 1.25rem;
    --font-size-2xl: 1.5rem;
    --font-size-3xl: 2rem;
    --font-size-4xl: 2.5rem;

    /* Border radius - subtle and refined */
    --radius-sm: 2px;
    --radius-base: 3px;
    --radius-lg: 4px;

    /* Transitions - smooth and elegant */
    --transition-fast: 150ms cubic-bezier(0.4, 0, 0.2, 1);
    --transition-base: 300ms cubic-bezier(0.4, 0, 0.2, 1);

    --background-dark: #1a1a1a;
    --background-light: #fdfcfb;
    --border: 1px solid var(--gold);
    
    /* Light mode colors - warm and elegant */
    --light-mode-color: #2a2a2a;
    --light-mode-background: #fdfcfb;
    --light-mode-subtle: #f5f5f4;
    --light-mode-border: #e5e3df;

    /* Dark mode colors - sophisticated */
    --color-dark-mode: #e8e6e3;
    --background-dark-mode: #1a1a1a;
    --dark-mode-subtle: #252525;
    --dark-mode-border: #3a3835;
  }

  * {
    text-decoration: none;
    box-sizing: border-box;
  }

  *, *::before, *::after {
    box-sizing: border-box;
  }

  /* Base layout */
  main {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    line-height: normal;
    min-height: calc(100vh - 120px);
    padding: var(--space-8) var(--space-4);
  }

  body {
    width: 100%;
    height: 100%;
    margin: 0;
    font-family: var(--font-family-base);
    color: var(--color-dark-mode);
    background-color: var(--background-dark);
    line-height: 1.6;
  }

  /* Typography - Elegant and refined */
  h1 {
    font-size: var(--font-size-4xl);
    font-weight: 400;
    letter-spacing: -0.02em;
    margin-top: var(--space-8);
    margin-bottom: var(--space-4);
  }

  h2 {
    font-size: var(--font-size-3xl);
    font-weight: 400;
    letter-spacing: -0.01em;
    margin-top: var(--space-6);
    margin-bottom: var(--space-3);
  }

  h3 {
    font-size: var(--font-size-2xl);
    font-weight: 500;
    margin-top: var(--space-5);
    margin-bottom: var(--space-2);
  }

  h4 {
    font-size: var(--font-size-xl);
    font-weight: 500;
    margin-top: var(--space-4);
    margin-bottom: var(--space-2);
  }

  p {
    width: 100%;
    line-height: 1.7;
    margin: var(--space-4) 0;
  }

  hr {
    margin-top: var(--space-8);
    margin-bottom: var(--space-8);
    width: 100%;
    border: none;
    border-top: 1px solid var(--gold);
    opacity: 0.3;
  }

  /* Links - Elegant with gold underline */
  a {
    color: inherit;
    text-decoration: none;
    border-bottom: 1px solid transparent;
    transition: all var(--transition-base);
    position: relative;
    padding-bottom: 2px;
  }

  a:hover {
    color: var(--gold);
    border-bottom-color: var(--gold);
  }

  a:focus-visible {
    outline: 1px solid var(--gold);
    outline-offset: 4px;
  }

  /* Navigation - Clean and refined */
  nav ul {
    display: flex;
    list-style-type: none;
    margin: 0;
    padding: 0;
    justify-content: center;
    align-items: center;
    gap: var(--space-1);
  }

  nav li {
    position: relative;
    padding: 0;
    text-align: center;
  }

  nav ul li a {
    padding: var(--space-2) var(--space-4);
    border-radius: var(--radius-base);
    text-transform: uppercase;
    letter-spacing: 0.1em;
    font-size: var(--font-size-sm);
    font-weight: 400;
    display: inline-block;
    transition: all var(--transition-base);
    border: 1px solid transparent;
  }

  nav ul li a:hover {
    background-color: rgba(199, 168, 109, 0.08);
    border-color: var(--gold);
    border-bottom-color: var(--gold);
  }

  nav ul li a.active {
    background-color: rgba(199, 168, 109, 0.12);
    border-color: var(--gold);
    color: var(--gold);
  }

  /* Lists */
  ul {
    justify-content: center;
    align-items: center;
    margin-left: 0;
  }

  li {
    padding: var(--space-1) 0;
  }

  /* Images - Elegant framing */
  img {
    width: auto;
    max-height: 60vh;
    max-width: 90%;
    display: block;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: var(--space-8);
    border: 3px solid var(--gold);
    padding: var(--space-2);
    transition: all var(--transition-base);
    filter: sepia(5%);
  }

  img:hover {
    border-color: var(--silver);
    transform: translateY(-2px);
  }

  /* Tables - Clean and elegant */
  table {
    width: 100%;
    border-collapse: collapse;
    margin-bottom: var(--space-6);
    border: 1px solid var(--gold);
    border-radius: var(--radius-base);
    overflow: hidden;
  }

  th, td {
    padding: var(--space-3) var(--space-4);
    text-align: left;
    border-bottom: 1px solid rgba(199, 168, 109, 0.2);
  }

  th {
    font-weight: 500;
    background-color: rgba(199, 168, 109, 0.08);
  }

  tr:last-child td {
    border-bottom: none;
  }

  tr:hover {
    background-color: rgba(199, 168, 109, 0.05);
  }

  /* Code blocks - Monospace with subtle styling */
  code {
    font-family: var(--font-family-mono);
    font-size: 0.9em;
    padding: 0.2em 0.4em;
    background-color: rgba(199, 168, 109, 0.08);
    border: 1px solid rgba(199, 168, 109, 0.2);
    border-radius: var(--radius-sm);
  }

  pre {
    font-family: var(--font-family-mono);
    padding: var(--space-4);
    background-color: rgba(199, 168, 109, 0.05);
    border: 1px solid rgba(199, 168, 109, 0.2);
    border-radius: var(--radius-base);
    overflow-x: auto;
    margin-bottom: var(--space-4);
  }

  pre code {
    padding: 0;
    background: none;
    border: none;
  }

  /* Custom elements */
  footer-menu {
    width: 100%;
    font-size: var(--font-size-lg);
    line-height: 1.4;
    letter-spacing: 0.05em;
  }

  header-menu {
    z-index: 100;
    position: relative;
  }

  .header_bar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: var(--space-4);
    border-bottom: 1px solid rgba(199, 168, 109, 0.2);
  }

  .dropdown-menu {
    margin-left: 0;
    background-color: var(--background-dark);
    border: 1px solid var(--gold);
    border-radius: var(--radius-base);
    padding: var(--space-2);
  }

  /* Buttons - Clean and elegant */
  button {
    font-family: var(--font-family-base);
    font-size: var(--font-size-base);
    font-weight: 400;
    padding: var(--space-2) var(--space-5);
    border-radius: var(--radius-base);
    border: 1px solid var(--gold);
    background-color: transparent;
    color: var(--gold);
    cursor: pointer;
    transition: all var(--transition-base);
    letter-spacing: 0.05em;
  }

  button:hover:not(:disabled) {
    background-color: var(--gold);
    color: var(--zwart);
    transform: translateY(-1px);
  }

  button:active:not(:disabled) {
    transform: translateY(0);
  }

  button:disabled {
    opacity: 0.4;
    cursor: not-allowed;
  }

  button:focus-visible {
    outline: 1px solid var(--gold);
    outline-offset: 3px;
  }

  /* Form inputs - Refined and clean */
  input, textarea, select {
    font-family: var(--font-family-base);
    font-size: var(--font-size-base);
    padding: var(--space-2) var(--space-3);
    border: 1px solid rgba(199, 168, 109, 0.3);
    border-radius: var(--radius-base);
    background-color: transparent;
    color: inherit;
    transition: all var(--transition-base);
  }

  input:focus, textarea:focus, select:focus {
    outline: none;
    border-color: var(--gold);
    background-color: rgba(199, 168, 109, 0.05);
  }

  input:disabled, textarea:disabled, select:disabled {
    opacity: 0.4;
    cursor: not-allowed;
  }

  /* Scrollbar - Subtle and refined */
  ::-webkit-scrollbar {
    width: 8px;
    height: 8px;
  }

  ::-webkit-scrollbar-track {
    background: transparent;
  }

  ::-webkit-scrollbar-thumb {
    background: rgba(199, 168, 109, 0.3);
    border-radius: var(--radius-base);
  }

  ::-webkit-scrollbar-thumb:hover {
    background: rgba(199, 168, 109, 0.5);
  }

  /* Selection - Gold highlight */
  ::selection {
    background-color: rgba(199, 168, 109, 0.3);
    color: inherit;
  }

  /* Responsive breakpoints */
  @media (max-width: 952px) {
    :root {
      font-size: 16px;
    }

    h1 {
      font-size: var(--font-size-3xl);
    }

    h2 {
      font-size: var(--font-size-2xl);
    }

    main {
      padding: var(--space-6) var(--space-3);
    }

    nav ul {
      flex-direction: column;
      gap: var(--space-1);
    }

    img {
      max-width: 100%;
      border-width: 2px;
    }

    *, *::before, *::after {
      box-sizing: border-box;
    }

    main {
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      text-align: center;
      line-height: normal;
    }

    body {
      margin: 0;
      height: 100vh;
      display: inline !important;
      justify-content: center !important;
    }

    ul {
      justify-content: center;
      align-items: center;
      margin-left: 0;
    }

    footer-menu {
      width: 100%;
      font-size: 2.1rem;
      line-height: 1.3rem;
      letter-spacing: 2px;
    }

    .dropdown-menu {
      margin-left: 0 !important;
    }

    img {
      border: var(--space-2) solid moccasin !important;
      padding: var(--space-1) !important;
      margin: var(--space-2);
    }

    li {
      padding: 0;
    }

    a {
      margin: var(--space-2);
    }
  }

  @media (max-width: 768px) {
    :root {
      font-size: 15px;
    }

    footer-menu {
      font-size: var(--font-size-base);
    }
  }

  @media (max-width: 580px) {
    :root {
      font-size: 14px;
    }

    h1 {
      font-size: var(--font-size-2xl);
    }

    main {
      padding: var(--space-4) var(--space-2);
    }
  }

  /* Light Theme - Warm and elegant */
  @media (prefers-color-scheme: light) {
    :root {
      color: var(--light-mode-color);
      background-color: var(--light-mode-background);
    }

    body {
      color: var(--light-mode-color);
      background-color: var(--light-mode-background);
    }

    main {
      color: var(--light-mode-color);
      background-color: var(--light-mode-background);
    }

    table {
      color: var(--light-mode-color);
      background-color: var(--light-mode-background);
    }

    :root .header_bar {
      color: var(--light-mode-color);
      background-color: var(--light-mode-background);
      border-bottom-color: rgba(199, 168, 109, 0.2);
    }

    nav ul li a {
      color: var(--light-mode-color);
    }

    nav ul li a.active, nav ul li a:hover {
      color: var(--gold);
    }

    button {
      color: var(--gold);
      background-color: transparent;
    }

    button:hover:not(:disabled) {
      background-color: var(--gold);
      color: var(--wit);
    }
  }

  /* Dark Theme - Sophisticated */
  @media (prefers-color-scheme: dark) {
    :root {
      color: var(--color-dark-mode);
      background-color: var(--background-dark);
    }

    body {
      color: var(--color-dark-mode);
      background-color: var(--background-dark);
    }

    main {
      color: var(--color-dark-mode);
      background-color: var(--background-dark);
    }

    table {
      color: var(--color-dark-mode);
      background-color: var(--background-dark);
    }

    :root .header_bar {
      color: var(--color-dark-mode);
      background-color: var(--background-dark);
      border-bottom-color: rgba(199, 168, 109, 0.2);
    }

    a {
      color: var(--color-dark-mode);
    }

    nav ul li a {
      color: var(--color-dark-mode);
    }

    nav ul li a.active, nav ul li a:hover {
      color: var(--gold);
    }
  }
`;
