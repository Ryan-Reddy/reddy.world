import { LitElement, css, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { baseStyles } from '../../css/baseStyles';
import { themeTokens } from '../../css/themeTokens';

/**
 * Link Component
 * Clean, accessible link with hover states
 * 
 * @property {string} href - Link destination
 * @property {string} variant - Link style: 'default' | 'muted' | 'accent'
 * @property {boolean} underline - Show underline
 * @property {string} target - Link target (_blank, _self, etc.)
 */
@customElement('gh-link')
export class GhLink extends LitElement {
  @property({type: String}) href = '';
  @property({type: String}) variant: 'default' | 'muted' | 'accent' = 'default';
  @property({type: Boolean}) underline = false;
  @property({type: String}) target = '';

  static styles = [
    themeTokens,
    baseStyles,
    css`
      :host {
        display: inline;
      }

      a {
        font-family: var(--font-family-base);
        font-weight: var(--font-weight-medium);
        transition: all var(--transition-fast);
        cursor: pointer;
        position: relative;
      }

      a:focus-visible {
        outline: 2px solid var(--color-accent-emphasis);
        outline-offset: 2px;
        border-radius: var(--radius-sm);
      }

      /* Variants */
      .variant-default {
        color: var(--color-link-default);
      }

      .variant-default:hover {
        color: var(--color-link-hover);
      }

      .variant-muted {
        color: var(--color-fg-muted);
      }

      .variant-muted:hover {
        color: var(--color-fg-default);
      }

      .variant-accent {
        color: var(--color-accent-emphasis);
      }

      .variant-accent:hover {
        color: var(--color-accent-fg);
      }

      /* Underline styles */
      .underline {
        text-decoration: underline;
        text-underline-offset: 2px;
      }

      .no-underline {
        text-decoration: none;
      }

      .no-underline:hover {
        text-decoration: underline;
        text-underline-offset: 2px;
      }

      /* Fancy underline animation */
      .fancy-underline {
        text-decoration: none;
        position: relative;
      }

      .fancy-underline::after {
        content: '';
        position: absolute;
        bottom: -2px;
        left: 0;
        width: 0;
        height: 2px;
        background: currentColor;
        transition: width var(--transition-base);
      }

      .fancy-underline:hover::after {
        width: 100%;
      }
    `
  ];

  render() {
    const classes = [
      `variant-${this.variant}`,
      this.underline ? 'underline' : 'fancy-underline'
    ].join(' ');

    return html`
      <a
        class=${classes}
        href=${this.href}
        target=${this.target || undefined}
        rel=${this.target === '_blank' ? 'noopener noreferrer' : undefined}
      >
        <slot></slot>
      </a>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'gh-link': GhLink;
  }
}
