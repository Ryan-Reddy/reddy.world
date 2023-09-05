import {css, html, LitElement} from 'lit';
import {customElement} from 'lit/decorators.js';

/**
 * An example element.
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */
@customElement('home-page-element')
export class HomePage extends LitElement {
  constructor() {    super();  }
  firstUpdated(changedProperties: any) {
    let titleEvent = new CustomEvent('title-change', {
      detail: {
        message: 'A little corner of the internet Ryan Reddy calls his home.'
      }
    });
    console.log('dispatching event:' + titleEvent.detail.message)
    this.dispatchEvent(titleEvent);
  }

  static get styles() {
    return css`
      :host {
        max-width: 1280px;
        margin: 0 auto;
        padding: 2rem;
        text-align: center;
      }
      img {
        width: auto;
        max-height: 60svh;
      }

      .card {
        padding: 2em;
      }

      a {
        font-weight: 500;
      }
      h1 {
        font-size: 5lvb;
        line-height: 1.5;
      }

      button {
        border-radius: 8px;
        border: 1px solid transparent;
        padding: 0.6em 1.2em;
        font-size: 1em;
        font-weight: 500;
        font-family: inherit;
        background-color: var(--wit);
        color: var(--zwart);

        cursor: pointer;
        transition: border-color 0.25s;
      }

      button:hover {
        border-color: var(--groen);
      }

      button:focus,
      button:focus-visible {
        outline: 4px auto -webkit-focus-ring-color;
      }

      @media (prefers-color-scheme: light) {
        a:hover {
          color: #747bff;
        }

        button {
          background-color: #f9f9f9;
        }
      }
    `;
  }

  render() {
    return html`
      <title>HomeTITLER</title>
      <meta name="description" content="Ryan Reddy's world.">
      <meta title="Home Page">
      <header>
      </header>
      <body>

      <main>
        <div>
          <h1 class="header">Ryan Reddy,</h1>
          <p class="undertitle">Artist,
            <br>Product Designer,
            <br> and Aspiring Computer Science Engineer.</p>
        </div>
        <img src="ryan_images/IMG_6869.png" class="landingImage"
             alt="Ryan Reddy profile image, black and white, straw hat"
             style="max-width: 90%"/>
      </main>
      </body>
    `;
  }
}
