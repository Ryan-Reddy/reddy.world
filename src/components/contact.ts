import {css, html, LitElement} from 'lit';
import {customElement, property, query} from 'lit/decorators.js';
import {ContactformDTO} from "../data/contactformDTO"
import {firebaseService} from "../services/firebaseService";
import {sendmail} from "../services/email/emailClient";

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
          <input aria-label="name" type="text" id="name" name="name" placeholder="Name" maxlength="254">
            </li>
            <li>
          <input aria-label="email" type="text" id="email" name="email" placeholder="Email" maxlength="254">
            </li>
            <li>
          <input aria-label="subject" type="text" id="subject" name="subject" placeholder="Subject" maxlength="254">
            </li>
            <li>
          <textarea aria-label="message" id="message" name="message" placeholder="Message..."></textarea>
            </li>
          </ul>
<!--          <input @click="${this._submitFormToFirebase}" type="Submit" value="Submit" aria-label="submit form">-->

        </form>
          <input type="button" @click="${this._submitFormToFirebase}" value="Submit" aria-label="submit form">
        </div>
      <button @click="${this._getAllDataFromFirebase}">_getAllDataFromFirebase</button>
      <button @click="${this._getSingleDataFromFirebase}">_getSingleDataFromFirebase</button>
      <button @click="${this._sendMail}">_sendMail</button>
      </main>

      </body>
    `;
  }
  _sendMail() {
    sendmail();
  }
  _submitFormToFirebase() {
    console.log('_submitFormToFirebase')
    const formdata = new ContactformDTO(
      this._name.value,
      this._email.value,
      this._subject.value,
      this._message.value,
    )
    firebaseService.writeContactFormDataToFirebase(formdata)
  }
  _getSingleDataFromFirebase() {
    console.log('_getSingleDataFromFirebase');
    return firebaseService.readAllContactFormDataToFirebase();
  }
  _getAllDataFromFirebase() {
    console.log('_getAllDataFromFirebase')
    return firebaseService.readAllContactFormDataToFirebase();
  }
}
