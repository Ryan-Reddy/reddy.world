import { css } from 'lit';

/**
 * Base styles for the design system
 * Clean, sharp, terminal-inspired aesthetic
 */
export const baseStyles = css`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  :host {
    font-family: var(--font-family-base);
    font-size: var(--font-size-base);
    line-height: var(--line-height-normal);
    color: var(--color-fg-default);
    background-color: var(--color-canvas-default);
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-rendering: optimizeLegibility;
  }

  /* Typography Base */
  h1, h2, h3, h4, h5, h6 {
    font-weight: var(--font-weight-semibold);
    line-height: var(--line-height-tight);
    margin-bottom: var(--space-4);
    color: var(--color-fg-default);
  }

  h1 {
    font-size: var(--font-size-4xl);
    font-weight: var(--font-weight-bold);
  }

  h2 {
    font-size: var(--font-size-3xl);
  }

  h3 {
    font-size: var(--font-size-2xl);
  }

  h4 {
    font-size: var(--font-size-xl);
  }

  h5 {
    font-size: var(--font-size-lg);
  }

  h6 {
    font-size: var(--font-size-base);
  }

  p {
    margin-bottom: var(--space-4);
    color: var(--color-fg-default);
  }

  /* Links */
  a {
    color: var(--color-link-default);
    text-decoration: none;
    transition: color var(--transition-fast);
  }

  a:hover {
    color: var(--color-link-hover);
    text-decoration: underline;
  }

  a:focus-visible {
    outline: 2px solid var(--color-accent-emphasis);
    outline-offset: 2px;
    border-radius: var(--radius-sm);
  }

  /* Code and Pre */
  code {
    font-family: var(--font-family-mono);
    font-size: 0.9em;
    padding: 0.2em 0.4em;
    background-color: var(--color-canvas-subtle);
    border: var(--border-width-thin) solid var(--color-border-default);
    border-radius: var(--radius-sm);
  }

  pre {
    font-family: var(--font-family-mono);
    font-size: var(--font-size-sm);
    padding: var(--space-4);
    background-color: var(--color-canvas-inset);
    border: var(--border-width-thin) solid var(--color-border-default);
    border-radius: var(--radius-base);
    overflow-x: auto;
    margin-bottom: var(--space-4);
  }

  pre code {
    padding: 0;
    background: none;
    border: none;
  }

  /* Lists */
  ul, ol {
    margin-bottom: var(--space-4);
    padding-left: var(--space-6);
  }

  li {
    margin-bottom: var(--space-2);
  }

  /* Images */
  img {
    max-width: 100%;
    height: auto;
    display: block;
  }

  /* Tables */
  table {
    width: 100%;
    border-collapse: collapse;
    margin-bottom: var(--space-4);
  }

  th, td {
    padding: var(--space-3) var(--space-4);
    text-align: left;
    border: var(--border-width-thin) solid var(--color-border-default);
  }

  th {
    font-weight: var(--font-weight-semibold);
    background-color: var(--color-canvas-subtle);
  }

  /* Focus States */
  *:focus {
    outline: none;
  }

  *:focus-visible {
    outline: 2px solid var(--color-accent-emphasis);
    outline-offset: 2px;
  }

  /* Selection */
  ::selection {
    background-color: var(--color-accent-subtle);
    color: var(--color-fg-default);
  }

  /* Scrollbar Styling */
  ::-webkit-scrollbar {
    width: 10px;
    height: 10px;
  }

  ::-webkit-scrollbar-track {
    background: var(--color-canvas-subtle);
  }

  ::-webkit-scrollbar-thumb {
    background: var(--color-border-default);
    border-radius: var(--radius-base);
  }

  ::-webkit-scrollbar-thumb:hover {
    background: var(--color-border-muted);
  }
`;
