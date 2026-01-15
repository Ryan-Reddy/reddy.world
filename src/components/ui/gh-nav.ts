import { LitElement, css, html } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { baseStyles } from '../../css/baseStyles';
import { themeTokens } from '../../css/themeTokens';

/**
 * Nav Menu Component
 * GitHub-style navigation with clean design
 * 
 * @property {string} variant - Menu variant: 'header' | 'footer' | 'sidebar'
 * @property {string} align - Menu alignment: 'left' | 'center' | 'right'
 */
@customElement('gh-nav')
export class GhNav extends LitElement {
  @property({type: String}) variant: 'header' | 'footer' | 'sidebar' = 'header';
  @property({type: String}) align: 'left' | 'center' | 'right' = 'left';
  @state() private _mobileMenuOpen = false;

  static styles = [
    themeTokens,
    baseStyles,
    css`
      :host {
        display: block;
      }

      .nav-container {
        display: flex;
        align-items: center;
        gap: var(--space-4);
        padding: var(--space-4);
      }

      .nav-list {
        display: flex;
        list-style: none;
        margin: 0;
        padding: 0;
        gap: var(--space-2);
      }

      /* Variants */
      .variant-header {
        border-bottom: var(--border-width-thin) solid var(--color-border-default);
        background-color: var(--color-canvas-default);
      }

      .variant-footer {
        border-top: var(--border-width-thin) solid var(--color-border-default);
        background-color: var(--color-canvas-subtle);
        padding: var(--space-6) var(--space-4);
      }

      .variant-sidebar {
        flex-direction: column;
        border-right: var(--border-width-thin) solid var(--color-border-default);
        background-color: var(--color-canvas-subtle);
        min-width: 250px;
        height: 100%;
      }

      .variant-sidebar .nav-list {
        flex-direction: column;
        width: 100%;
        gap: var(--space-1);
      }

      /* Alignment */
      .align-left {
        justify-content: flex-start;
      }

      .align-center {
        justify-content: center;
      }

      .align-right {
        justify-content: flex-end;
      }

      /* Mobile Menu */
      .mobile-toggle {
        display: none;
        background: transparent;
        border: none;
        cursor: pointer;
        padding: var(--space-2);
        color: var(--color-fg-default);
      }

      @media (max-width: 768px) {
        .mobile-toggle {
          display: block;
        }

        .nav-list {
          display: none;
          flex-direction: column;
          position: absolute;
          top: 100%;
          left: 0;
          right: 0;
          background-color: var(--color-canvas-overlay);
          border-bottom: var(--border-width-thin) solid var(--color-border-default);
          box-shadow: var(--shadow-lg);
          padding: var(--space-4);
          gap: var(--space-2);
          z-index: var(--z-dropdown);
        }

        .nav-list.mobile-open {
          display: flex;
        }

        .nav-container {
          flex-wrap: wrap;
          position: relative;
        }
      }
    `
  ];

  render() {
    const containerClasses = [
      'nav-container',
      `variant-${this.variant}`,
      `align-${this.align}`
    ].join(' ');

    const listClasses = [
      'nav-list',
      this._mobileMenuOpen ? 'mobile-open' : ''
    ].filter(Boolean).join(' ');

    return html`
      <nav class=${containerClasses}>
        <button 
          class="mobile-toggle" 
          @click=${this._toggleMobileMenu}
          aria-label="Toggle menu"
        >
          ${this._mobileMenuOpen ? '✕' : '☰'}
        </button>
        <ul class=${listClasses}>
          <slot></slot>
        </ul>
      </nav>
    `;
  }

  private _toggleMobileMenu() {
    this._mobileMenuOpen = !this._mobileMenuOpen;
  }
}

/**
 * Nav Item Component
 * Individual navigation item
 * 
 * @property {boolean} active - Active state
 * @property {string} href - Link destination
 */
@customElement('gh-nav-item')
export class GhNavItem extends LitElement {
  @property({type: Boolean}) active = false;
  @property({type: String}) href = '';

  static styles = [
    themeTokens,
    baseStyles,
    css`
      :host {
        display: block;
      }

      .nav-item {
        display: block;
        padding: var(--space-2) var(--space-3);
        color: var(--color-fg-default);
        text-decoration: none;
        border-radius: var(--radius-base);
        transition: all var(--transition-fast);
        font-weight: var(--font-weight-medium);
        white-space: nowrap;
      }

      .nav-item:hover {
        background-color: var(--color-canvas-subtle);
        color: var(--color-accent-fg);
      }

      .nav-item.active {
        background-color: var(--color-accent-subtle);
        color: var(--color-accent-emphasis);
        font-weight: var(--font-weight-semibold);
      }

      .nav-item:focus-visible {
        outline: 2px solid var(--color-accent-emphasis);
        outline-offset: 2px;
      }
    `
  ];

  render() {
    const classes = ['nav-item', this.active ? 'active' : ''].filter(Boolean).join(' ');

    return html`
      <li>
        <a class=${classes} href=${this.href}>
          <slot></slot>
        </a>
      </li>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'gh-nav': GhNav;
    'gh-nav-item': GhNavItem;
  }
}
