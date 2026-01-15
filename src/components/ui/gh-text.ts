import { LitElement, css, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { baseStyles } from '../../css/baseStyles';
import { themeTokens } from '../../css/themeTokens';

/**
 * Text Component
 * Typography component with variants and sizes
 * 
 * @property {string} variant - Text variant: 'body' | 'muted' | 'subtle' | 'accent' | 'mono'
 * @property {string} size - Text size: 'xs' | 'sm' | 'base' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl'
 * @property {string} weight - Font weight: 'normal' | 'medium' | 'semibold' | 'bold'
 * @property {string} as - HTML tag to render: 'p' | 'span' | 'div'
 */
@customElement('gh-text')
export class GhText extends LitElement {
  @property({type: String}) variant: 'body' | 'muted' | 'subtle' | 'accent' | 'mono' = 'body';
  @property({type: String}) size: 'xs' | 'sm' | 'base' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' = 'base';
  @property({type: String}) weight: 'normal' | 'medium' | 'semibold' | 'bold' = 'normal';
  @property({type: String}) as: 'p' | 'span' | 'div' = 'span';

  static styles = [
    themeTokens,
    baseStyles,
    css`
      :host {
        display: inline;
      }

      .text {
        margin: 0;
        line-height: var(--line-height-normal);
      }

      /* Variants */
      .variant-body {
        color: var(--color-fg-default);
        font-family: var(--font-family-base);
      }

      .variant-muted {
        color: var(--color-fg-muted);
        font-family: var(--font-family-base);
      }

      .variant-subtle {
        color: var(--color-fg-subtle);
        font-family: var(--font-family-base);
      }

      .variant-accent {
        color: var(--color-accent-fg);
        font-family: var(--font-family-base);
      }

      .variant-mono {
        color: var(--color-fg-default);
        font-family: var(--font-family-mono);
      }

      /* Sizes */
      .size-xs {
        font-size: var(--font-size-xs);
      }

      .size-sm {
        font-size: var(--font-size-sm);
      }

      .size-base {
        font-size: var(--font-size-base);
      }

      .size-lg {
        font-size: var(--font-size-lg);
      }

      .size-xl {
        font-size: var(--font-size-xl);
      }

      .size-2xl {
        font-size: var(--font-size-2xl);
      }

      .size-3xl {
        font-size: var(--font-size-3xl);
      }

      .size-4xl {
        font-size: var(--font-size-4xl);
      }

      /* Weights */
      .weight-normal {
        font-weight: var(--font-weight-normal);
      }

      .weight-medium {
        font-weight: var(--font-weight-medium);
      }

      .weight-semibold {
        font-weight: var(--font-weight-semibold);
      }

      .weight-bold {
        font-weight: var(--font-weight-bold);
      }
    `
  ];

  render() {
    const classes = [
      'text',
      `variant-${this.variant}`,
      `size-${this.size}`,
      `weight-${this.weight}`
    ].join(' ');

    const content = html`<slot></slot>`;

    switch (this.as) {
      case 'p':
        return html`<p class=${classes}>${content}</p>`;
      case 'div':
        return html`<div class=${classes}>${content}</div>`;
      default:
        return html`<span class=${classes}>${content}</span>`;
    }
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'gh-text': GhText;
  }
}
