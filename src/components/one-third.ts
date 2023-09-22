import {css, html, LitElement} from 'lit';
import {customElement, property, query} from 'lit/decorators.js';
import '/css/mainCSS.css';

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

  static get styles() {
    return css`
      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        text-decoration: none;
      }

      h1 {
        padding-top: 20vh;
      }

      h1, h2, h3 {
        align-items: center;
        text-align: center;
        margin-right: auto;
        margin-left: auto;
        margin-top: auto;
      }

      .paragraph {
        padding-top: 20vh;
        padding-bottom: 20vh;
      }

      p {
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

    ,
    css \`
        /* Include your external CSS file here */
        @import url('./path-to-external.css'); /* Replace 'path-to-external.css' with the actual path to your CSS file */
         \`,

    `;
  }

  firstUpdated(changedProperties: any) {
    let titleEvent = new CustomEvent('title-change', {
      detail: {
        message: 'Contact'
      }
    });
    console.log('dispatching event:' + titleEvent.detail.message)
    this.dispatchEvent(titleEvent);

    // Wait for DOMContentLoaded event to ensure the DOM is ready
    window.addEventListener('DOMContentLoaded', () => {
      // Log a message to verify if this code is executed
      console.log('DOMContentLoaded event fired');

      // Scroll down 200 pixels from the top
      window.scrollTo(0, 0)
      window.scrollBy(0, 200);
    });
  }

  connectedCallback() {
    super.connectedCallback();
  }

  render() {
    return html`
      <link rel="stylesheet" href="/css/mainCSS.css">
      <meta name="description" content="Ryan Reddy cordially invites you to join him.">
      <meta title="one third ">
      <body>
      <main>
        <h1>A Cosmic Celebration</h1>

        <div class="paragraph">
          <h2>Join me for a clandestine gathering beneath the starlit tapestry.</h2>
          <br>
          <p>As the clock ticks toward my 🌌 <i>33,333rd</i> orbit,</p>
          <br>

          <p> we'll gather for a cosmic little celebration. </p>
          <p>Save the date: <i>December 24, 2024</i>,
            <br>

            a celestial moment marked in the heavens. 🌠🌌</p>
          <br>
          <p>* Born amidst the stars on <i>21-09-1991</i></p>

          <br>
          <br>
          <h3>More t.b.a. in due course.</h3>

        </div>

      </main>
      </body>
    `;
  }
}
