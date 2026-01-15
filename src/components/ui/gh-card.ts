import { LitElement, css, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { baseStyles } from '../../css/baseStyles';
import { themeTokens } from '../../css/themeTokens';

/**
 * Card Component
 * Clean container with border and optional hover effects
 * 
 * @property {string} variant - Card style: 'default' | 'subtle' | 'bordered'
 * @property {boolean} hoverable - Add hover effect
 * @property {string} padding - Padding size: 'none' | 'sm' | 'md' | 'lg'
 */
@customElement('gh-card')
export class GhCard extends LitElement {
  @property({type: String}) variant: 'default' | 'subtle' | 'bordered' = 'default';
  @property({type: Boolean}) hoverable = false;
  @property({type: String}) padding: 'none' | 'sm' | 'md' | 'lg' = 'md';

  static styles = [
    themeTokens,
    baseStyles,
    css`
      :host {
        display: block;
      }

      .card {
        border-radius: var(--radius-lg);
        transition: all var(--transition-base);
      }

      /* Padding */
      .padding-none {
        padding: 0;
      }

      .padding-sm {
        padding: var(--space-3);
      }

      .padding-md {
        padding: var(--space-4);
      }

      .padding-lg {
        padding: var(--space-6);
      }

      /* Variants */
      .variant-default {
        background-color: transparent;
        border: 1px solid rgba(199, 168, 109, 0.2);
      }

      .variant-subtle {
        background-color: rgba(199, 168, 109, 0.03);
        border: 1px solid rgba(199, 168, 109, 0.15);
      }

      .variant-bordered {
        background-color: transparent;
        border: 1px solid rgba(199, 168, 109, 0.4);
      }

      /* Hoverable */
      .hoverable {
        cursor: pointer;
      }

      .hoverable:hover {
        border-color: var(--gold, #c7a86d);
        transform: translateY(-2px);
      }

      .hoverable:active {
        transform: translateY(0);
      }
    `
  ];

  render() {
    const classes = [
      'card',
      `variant-${this.variant}`,
      `padding-${this.padding}`,
      this.hoverable ? 'hoverable' : ''
    ].filter(Boolean).join(' ');

    return html`
      <div class=${classes}>
        <slot></slot>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'gh-card': GhCard;
  }
}
