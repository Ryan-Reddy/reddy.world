import { LitElement, css, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { baseStyles } from '../../css/baseStyles';
import { themeTokens } from '../../css/themeTokens';

/**
 * Button Component
 * GitHub terminal-inspired button with multiple variants
 * 
 * @property {string} variant - Button style: 'default' | 'primary' | 'danger' | 'outline' | 'ghost'
 * @property {string} size - Button size: 'sm' | 'md' | 'lg'
 * @property {boolean} disabled - Disabled state
 * @property {boolean} fullWidth - Full width button
 */
@customElement('gh-button')
export class GhButton extends LitElement {
  @property({type: String}) variant: 'default' | 'primary' | 'danger' | 'outline' | 'ghost' = 'default';
  @property({type: String}) size: 'sm' | 'md' | 'lg' = 'md';
  @property({type: Boolean}) disabled = false;
  @property({type: Boolean}) fullWidth = false;

  static styles = [
    themeTokens,
    baseStyles,
    css`
      :host {
        display: inline-block;
      }

      :host([fullWidth]) {
        display: block;
      }

      button {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        font-family: var(--font-family-base);
        font-weight: var(--font-weight-medium);
        line-height: var(--line-height-tight);
        border-radius: var(--radius-base);
        border: var(--border-width-thin) solid;
        cursor: pointer;
        transition: all var(--transition-fast);
        text-decoration: none;
        white-space: nowrap;
        user-select: none;
        position: relative;
        overflow: hidden;
      }

      button:focus-visible {
        outline: 2px solid var(--color-accent-emphasis);
        outline-offset: 2px;
      }

      button:disabled {
        cursor: not-allowed;
        opacity: 0.5;
      }

      :host([fullWidth]) button {
        width: 100%;
      }

      /* Sizes */
      .size-sm {
        font-size: var(--font-size-sm);
        padding: var(--space-1) var(--space-3);
        gap: var(--space-2);
      }

      .size-md {
        font-size: var(--font-size-base);
        padding: var(--space-2) var(--space-4);
        gap: var(--space-2);
      }

      .size-lg {
        font-size: var(--font-size-lg);
        padding: var(--space-3) var(--space-6);
        gap: var(--space-3);
      }

      /* Variants */
      .variant-default {
        background-color: transparent;
        border-color: rgba(199, 168, 109, 0.3);
        color: inherit;
      }

      .variant-default:hover:not(:disabled) {
        background-color: rgba(199, 168, 109, 0.08);
        border-color: var(--gold, #c7a86d);
      }

      .variant-default:active:not(:disabled) {
        background-color: rgba(199, 168, 109, 0.12);
      }

      .variant-primary {
        background-color: transparent;
        border-color: var(--gold, #c7a86d);
        color: var(--gold, #c7a86d);
      }

      .variant-primary:hover:not(:disabled) {
        background-color: var(--gold, #c7a86d);
        color: var(--zwart, #1a1a1a);
      }

      .variant-primary:active:not(:disabled) {
        transform: translateY(0);
      }

      .variant-danger {
        background-color: transparent;
        border-color: var(--warning-red, #cf222e);
        color: var(--warning-red, #cf222e);
      }

      .variant-danger:hover:not(:disabled) {
        background-color: var(--warning-red, #cf222e);
        color: white;
      }

      .variant-danger:active:not(:disabled) {
        transform: translateY(0);
      }

      .variant-outline {
        background-color: transparent;
        border-color: rgba(199, 168, 109, 0.5);
        color: inherit;
      }

      .variant-outline:hover:not(:disabled) {
        background-color: rgba(199, 168, 109, 0.08);
        border-color: var(--gold, #c7a86d);
      }

      .variant-ghost {
        background-color: transparent;
        border-color: transparent;
        color: var(--gold, #c7a86d);
      }

      .variant-ghost:hover:not(:disabled) {
        background-color: rgba(199, 168, 109, 0.08);
      }
    `
  ];

  render() {
    return html`
      <button
        class="variant-${this.variant} size-${this.size}"
        ?disabled=${this.disabled}
        @click=${this._handleClick}
      >
        <slot></slot>
      </button>
    `;
  }

  private _handleClick(e: Event) {
    if (this.disabled) {
      e.preventDefault();
      e.stopPropagation();
      return;
    }
    this.dispatchEvent(new CustomEvent('gh-click', {
      bubbles: true,
      composed: true
    }));
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'gh-button': GhButton;
  }
}
