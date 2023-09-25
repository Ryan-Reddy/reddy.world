import {css, html, LitElement} from 'lit';
import {customElement, property} from 'lit/decorators.js';
import langCSS from "../css/langCSS";
import mainCSS from "../css/mainCSS";

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
  @property() _readmeClicked = '/readme';

  constructor() {
    super();
  }

  static get styles() {
    return [langCSS, mainCSS, css`
      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        text-decoration: none;
      }

      main {
        margin: 0 auto;
        text-align: center; /* For older browsers */
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
    `];
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

  render() {
    return html`
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
          <button @click="${this._contact}">if so, mail us!</button>
          <button @click="${this._readme}">or see the README file.</button>
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

  _readme() {
    window.open(this._readmeClicked);
  }
}
