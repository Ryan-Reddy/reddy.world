import { css, html, LitElement } from 'lit';
import { customElement, property } from 'lit-element';

/**
 * An example element.
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */
@customElement('support-element')
export class SupportElement extends LitElement {
  @property() _hiddenElement = 'hidden';
  @property() currentPage: string;
  constructor() {
    super();
  }

  static get styles() {
    return css`
      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        text-decoration: none;
      }

      .hidden {
        display: none;
        pointer-events: none;
        color: lightgray;
        foreground-color: var(--kpn-grijs);
        background-color: var(--kpn-grijs);
        required: invalid;
      }
      button {
        width: 66%;
        height: 2em;
      }
    `;
  }

  render() {
    return html`
      <body>
        <main>
          <label hidden for="support"></label>
          <button id="support" @click=${this._clickForSupport}>
            Click here for support!
          </button>
          <br />
          <div class=${this._hiddenElement}>
            <img src="/Have-you-tried-turning-it-off-and-on-again.jpg" alt="Hello IT... Have you tried turning it off and on again?" />
            <br />
            <br />
            <button>if so, call us on 69-420-420-69</button>
          </div>
        </main>
      </body>
    `;
  }
  _clickForSupport() {
    console.log('Click for support');
    console.log(this._hiddenElement);
    this._hiddenElement = this._hiddenElement == 'hidden' ? '' : 'hidden';
  }
}
