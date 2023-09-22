import {css, html, LitElement} from 'lit';
import {customElement, property} from 'lit/decorators.js';

/**
 * An example element.
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */
@customElement('support-element')
export class SupportElement extends LitElement {
  @property() _hiddenElement = 'hidden';
  @property() _supportClicked = 'mailto:ryan@reddy.world?subject=Hello friend! I have turned it on and off again!';

  constructor() {
    super();
  }
  firstUpdated(changedProperties: any) {
    let titleEvent = new CustomEvent('title-change', {
      detail: {
        message: 'Support'
      }
    });
    console.log('dispatching event:' + titleEvent.detail.message)
    this.dispatchEvent(titleEvent);
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
        color: var(--silver);
        background-color: var(--silver);
      }

      button {
        width: 66%;
        height: 2em;
      }
    `;
  }

  render() {
    return html`
      <link rel="stylesheet" href="/css/mainCSS.css">
      <meta name="description" content="Ryan Reddy's world.">
      <meta title="Support page">
      <body>
      <main>
        <label hidden for="support"></label>
        <button id="support" @click=${this._clickForSupport}>
          Click here for support!
        </button>
        <br/>
        <div class=${this._hiddenElement}>
          <img src="/Have-you-tried-turning-it-off-and-on-again.jpg"
               alt="Hello IT... Have you tried turning it off and on again?"/>
          <br/>
          <br/>
          <button @click="${this._contact}">if so, call us on 69-420-420-69</button>
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

  _contact() {
    window.open(this._supportClicked);
  }
}
