import {css, html, LitElement} from 'lit';
import {customElement, property, query} from 'lit/decorators.js';
import {ContactForm} from "../data/contactform"

/**
 * An example element.
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */
@customElement('contact-element')
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
  firstUpdated(changedProperties) {
    let titleEvent = new CustomEvent('title-change', {
      detail: {
        message: 'Support'
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

      .hidden {
        display: none;
        pointer-events: none;
        color: var(--grijs);
        background-color: var(--grijs);
      }

      button {
        width: 66%;
        height: 2em;
      }
      ul {
        list-style: none;
        width: 100%

      }
      input, textarea {
        width: 100%;
        margin: 12px;
        height: 32px;
      }
      textarea {
        height: 256px;
      }

    `;
  }
  render() {
    return html`
      <meta name="description" content="Ryan Reddy's world contact page.">
      <meta title="Contact page">
      <body>
      <main>
        <form>
          <ul>
            <li>
          <input aria-label="name" type="text" id="name" name="name" placeholder="Name">
            </li>
            <li>
          <input aria-label="email" type="text" id="email" name="email" placeholder="Email">
            </li>
            <li>
          <input aria-label="subject" type="text" id="subject" name="subject" placeholder="Subject">
            </li>
            <li>
          <textarea aria-label="message" id="message" name="message" placeholder="Message..."></textarea>
            </li>
          </ul>
          <input @click="${this._sendForm}" type="Submit" value="Submit" aria-label="submit form">
        </form>
        </div>
      </main>
      </body>
    `;
  }
  _sendForm() {
    console.log("mailto:ryan@reddy.world");
    const formdata = new ContactForm(
      this._name.value,
      this._email.value,
      this._subject.value,
      this._message.value,
      )
    window.open('mailto:ryan@reddy.world?subject='
      + formdata.subject
      + '&body=' + formdata.message + ' sender: ' + formdata.name
    )
    alert(formdata.name + ", thanks for your message!")

  }
}
