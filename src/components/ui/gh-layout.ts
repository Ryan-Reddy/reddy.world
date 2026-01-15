import { LitElement, css, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { baseStyles } from '../../css/baseStyles';
import { themeTokens } from '../../css/themeTokens';

/**
 * Container Component
 * Responsive container for content layout
 * 
 * @property {string} size - Container size: 'sm' | 'md' | 'lg' | 'xl' | 'full'
 * @property {boolean} centered - Center the container
 */
@customElement('gh-container')
export class GhContainer extends LitElement {
  @property({type: String}) size: 'sm' | 'md' | 'lg' | 'xl' | 'full' = 'lg';
  @property({type: Boolean}) centered = true;

  static styles = [
    themeTokens,
    baseStyles,
    css`
      :host {
        display: block;
        width: 100%;
      }

      .container {
        width: 100%;
        padding-left: var(--space-4);
        padding-right: var(--space-4);
      }

      .centered {
        margin-left: auto;
        margin-right: auto;
      }

      /* Sizes */
      .size-sm {
        max-width: 640px;
      }

      .size-md {
        max-width: 768px;
      }

      .size-lg {
        max-width: 1024px;
      }

      .size-xl {
        max-width: 1280px;
      }

      .size-full {
        max-width: 100%;
      }

      @media (max-width: 768px) {
        .container {
          padding-left: var(--space-3);
          padding-right: var(--space-3);
        }
      }
    `
  ];

  render() {
    const classes = [
      'container',
      `size-${this.size}`,
      this.centered ? 'centered' : ''
    ].filter(Boolean).join(' ');

    return html`
      <div class=${classes}>
        <slot></slot>
      </div>
    `;
  }
}

/**
 * Stack Component
 * Vertical spacing between elements
 * 
 * @property {string} spacing - Space between items: '1' | '2' | '3' | '4' | '6' | '8'
 */
@customElement('gh-stack')
export class GhStack extends LitElement {
  @property({type: String}) spacing: '1' | '2' | '3' | '4' | '6' | '8' = '4';

  static styles = [
    themeTokens,
    baseStyles,
    css`
      :host {
        display: flex;
        flex-direction: column;
      }

      .stack {
        display: flex;
        flex-direction: column;
      }

      .spacing-1 {
        gap: var(--space-1);
      }

      .spacing-2 {
        gap: var(--space-2);
      }

      .spacing-3 {
        gap: var(--space-3);
      }

      .spacing-4 {
        gap: var(--space-4);
      }

      .spacing-6 {
        gap: var(--space-6);
      }

      .spacing-8 {
        gap: var(--space-8);
      }
    `
  ];

  render() {
    return html`
      <div class="stack spacing-${this.spacing}">
        <slot></slot>
      </div>
    `;
  }
}

/**
 * Flex Component
 * Flexible layout container
 * 
 * @property {string} direction - Flex direction: 'row' | 'column'
 * @property {string} justify - Justify content: 'start' | 'center' | 'end' | 'between' | 'around'
 * @property {string} align - Align items: 'start' | 'center' | 'end' | 'stretch'
 * @property {string} gap - Gap size: '1' | '2' | '3' | '4' | '6' | '8'
 * @property {boolean} wrap - Allow wrapping
 */
@customElement('gh-flex')
export class GhFlex extends LitElement {
  @property({type: String}) direction: 'row' | 'column' = 'row';
  @property({type: String}) justify: 'start' | 'center' | 'end' | 'between' | 'around' = 'start';
  @property({type: String}) align: 'start' | 'center' | 'end' | 'stretch' = 'stretch';
  @property({type: String}) gap: '1' | '2' | '3' | '4' | '6' | '8' = '4';
  @property({type: Boolean}) wrap = false;

  static styles = [
    themeTokens,
    baseStyles,
    css`
      :host {
        display: flex;
      }

      .flex {
        display: flex;
      }

      .direction-row {
        flex-direction: row;
      }

      .direction-column {
        flex-direction: column;
      }

      .justify-start {
        justify-content: flex-start;
      }

      .justify-center {
        justify-content: center;
      }

      .justify-end {
        justify-content: flex-end;
      }

      .justify-between {
        justify-content: space-between;
      }

      .justify-around {
        justify-content: space-around;
      }

      .align-start {
        align-items: flex-start;
      }

      .align-center {
        align-items: center;
      }

      .align-end {
        align-items: flex-end;
      }

      .align-stretch {
        align-items: stretch;
      }

      .gap-1 {
        gap: var(--space-1);
      }

      .gap-2 {
        gap: var(--space-2);
      }

      .gap-3 {
        gap: var(--space-3);
      }

      .gap-4 {
        gap: var(--space-4);
      }

      .gap-6 {
        gap: var(--space-6);
      }

      .gap-8 {
        gap: var(--space-8);
      }

      .wrap {
        flex-wrap: wrap;
      }
    `
  ];

  render() {
    const classes = [
      'flex',
      `direction-${this.direction}`,
      `justify-${this.justify}`,
      `align-${this.align}`,
      `gap-${this.gap}`,
      this.wrap ? 'wrap' : ''
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
    'gh-container': GhContainer;
    'gh-stack': GhStack;
    'gh-flex': GhFlex;
  }
}
