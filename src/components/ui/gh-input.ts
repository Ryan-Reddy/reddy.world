import { LitElement, css, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { baseStyles } from '../../css/baseStyles';
import { themeTokens } from '../../css/themeTokens';

/**
 * Input Component
 * Clean form input with validation states
 * 
 * @property {string} type - Input type
 * @property {string} placeholder - Placeholder text
 * @property {string} value - Input value
 * @property {boolean} disabled - Disabled state
 * @property {boolean} required - Required field
 * @property {string} state - Validation state: 'default' | 'success' | 'error'
 * @property {string} size - Input size: 'sm' | 'md' | 'lg'
 */
@customElement('gh-input')
export class GhInput extends LitElement {
  @property({type: String}) type = 'text';
  @property({type: String}) placeholder = '';
  @property({type: String}) value = '';
  @property({type: Boolean}) disabled = false;
  @property({type: Boolean}) required = false;
  @property({type: String}) state: 'default' | 'success' | 'error' = 'default';
  @property({type: String}) size: 'sm' | 'md' | 'lg' = 'md';

  static styles = [
    themeTokens,
    baseStyles,
    css`
      :host {
        display: block;
      }

      input {
        width: 100%;
        font-family: var(--font-family-base, serif);
        color: inherit;
        background-color: transparent;
        border: 1px solid rgba(199, 168, 109, 0.3);
        border-radius: 3px;
        transition: all 300ms cubic-bezier(0.4, 0, 0.2, 1);
      }

      input::placeholder {
        color: rgba(199, 168, 109, 0.5);
      }

      input:hover:not(:disabled) {
        border-color: rgba(199, 168, 109, 0.5);
      }

      input:focus {
        outline: none;
        border-color: var(--gold, #c7a86d);
        background-color: rgba(199, 168, 109, 0.03);
      }

      input:disabled {
        background-color: var(--color-input-disabled-bg);
        cursor: not-allowed;
        opacity: 0.6;
      }

      /* Sizes */
      .size-sm {
        font-size: var(--font-size-sm);
        padding: var(--space-1) var(--space-3);
      }

      .size-md {
        font-size: var(--font-size-base);
        padding: var(--space-2) var(--space-4);
      }

      .size-lg {
        font-size: var(--font-size-lg);
        padding: var(--space-3) var(--space-5);
      }

      /* States */
      .state-success {
        border-color: var(--color-success-emphasis);
      }

      .state-success:focus {
        box-shadow: 0 0 0 3px var(--color-success-subtle);
      }

      .state-error {
        border-color: var(--color-danger-emphasis);
      }

      .state-error:focus {
        box-shadow: 0 0 0 3px var(--color-danger-subtle);
      }
    `
  ];

  render() {
    const classes = [
      `size-${this.size}`,
      `state-${this.state}`
    ].join(' ');

    return html`
      <input
        class=${classes}
        type=${this.type}
        placeholder=${this.placeholder}
        .value=${this.value}
        ?disabled=${this.disabled}
        ?required=${this.required}
        @input=${this._handleInput}
        @change=${this._handleChange}
      />
    `;
  }

  private _handleInput(e: Event) {
    const input = e.target as HTMLInputElement;
    this.value = input.value;
    this.dispatchEvent(new CustomEvent('gh-input', {
      detail: {value: this.value},
      bubbles: true,
      composed: true
    }));
  }

  private _handleChange(e: Event) {
    this.dispatchEvent(new CustomEvent('gh-change', {
      detail: {value: this.value},
      bubbles: true,
      composed: true
    }));
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'gh-input': GhInput;
  }
}
