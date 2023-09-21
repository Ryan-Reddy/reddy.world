import {css, html, LitElement} from 'lit';
import {customElement, property, query} from 'lit/decorators.js';
import {firebaseService} from "../services/firebaseService";

/**
 * An example element.
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */
@customElement('one-third-element')
export class ContactElement extends LitElement {
  @property() _hiddenElement = 'hidden';
  @property() _supportClicked = 'mailto:ryan@reddy.world?subject=Hello friend! I have turned it on and off again!';
  @property() _shadowRoot!: ShadowRoot;
  @query('#name') _name!: any;
  @query('#email') _email!: any;
  @query('#subject') _subject!: any;
  @query('#message') _message!: any;

  constructor() {
    super();
  }

  firstUpdated(changedProperties: any) {
    let titleEvent = new CustomEvent('title-change', {
      detail: {
        message: 'Contact'
      }
    });
    console.log('dispatching event:' + titleEvent.detail.message)
    this.dispatchEvent(titleEvent);
  }

  connectedCallback() {
    super.connectedCallback();
  }

  static get styles() {
    return css`
      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        text-decoration: none;
      }

      h1 {
        align-items: center;
        text-align: center;
        margin-right: auto;
        margin-left: auto;
        margin-top: auto;
      }

      .hidden {
        display: none;
        pointer-events: none;
        color: var(--grijs);
        background-color: var(--grijs);
      }

      ul {
        list-style: none;
        width: 100%

      }

      input, textarea, button {
        padding: 5px;
        width: 100%;
        margin: 12px;
        height: 32px;
      }

      textarea {
        height: 256px;
      }

      #submitBtn {
        background: rgba(250, 235, 215, 0.7);
        color: rgba(21, 23, 21, 1);
      }

    `;
  }

  render() {
    return html`
      <meta name="description" content="Ryan Reddy's world contact page.">
      <meta title="one third ">
      <body>
      <main>
        <h1>one third</h1>

      </main>
      </body>
    `;
  }
}
