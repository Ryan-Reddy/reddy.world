import {css, html, LitElement} from 'lit';
import {customElement, property, query} from 'lit/decorators.js';
import {firebaseService} from "../services/firebaseService";

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
        color: var(--silver);
        background-color: var(--silver);
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

      #contactForm {
        /* This will center the child elements horizontally */
        display: flex;
        justify-content: center;
        align-items: center;

        ///* Set width and height as needed */
        //width: 100%; /* Adjust as needed */
        //height: 10vh; /* Adjust as needed, using viewport height for full height */
      }

    `;
  }
  render() {
    return html`
      <link rel="stylesheet" href="/css/mainCSS.css">
      <meta name="description" content="Ryan Reddy's world contact page.">
      <meta title="Contact page">
      <body>
      <main id="contactForm">
        <form onsubmit="preventDefault()">
          <ul>
            <li>
              <input aria-label="name" type="text" id="name" name="name" placeholder="Name" maxlength="254">
            </li>
            <li>
              <input aria-label="email" type="email" id="email" name="email" placeholder="Email" maxlength="254"
                     required>
            </li>
            <li>
              <input aria-label="subject" type="text" id="subject" name="subject" placeholder="Subject" maxlength="254">
            </li>
            <li>
              <textarea aria-label="message" id="message" name="message" placeholder="Message..."></textarea>
            </li>
          </ul>
        <button id="submitBtn" type="submit" @click="${this._submitFormToFirebase}" value="Submit"
                aria-label="submit form"><strong>Submit</strong></button>
        </form>
        </div>
      </main>
      </body>
    `;
  }

// <!--
// <button @click="${this._getAllDataFromFirebase}">_getAllDataFromFirebase</button>
// <button @click="${this._getSingleDataFromFirebase}">_getSingleDataFromFirebase</button>
// -->
  _submitFormToFirebase() {

    console.log('_submitFormToFirebase')

    firebaseService.writeContactFormToFirestore(
      this._name.value,
      this._email.value,
      this._subject.value,
      this._message.value,
      Date.now())
  }
  _getSingleDataFromFirebase() {
    console.log(this._getSingleDataFromFirebase)
    return firebaseService.readSingleContactFromDatabase('insertId');
  }
  _getAllDataFromFirebase() {
    console.log(this._getAllDataFromFirebase)
    const data = firebaseService.getAllDocs();
    console.log(data)
    return data;
  }
}
