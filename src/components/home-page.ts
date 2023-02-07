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
  firstUpdated(changedProperties) {
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

      main {
      }

      ul {
        list-style: none;
      }
      img {
        max-width: 66vw;
        height: auto;
      }

      .card {
        padding: 2em;
      }

      a {
        font-weight: 500;
      }

      a:hover {
        color: var(--groen);
      }

      h1 {
        font-size: 3.2em;
        line-height: 1.1;
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
          <h2></h2>
          <div id="app"></div>

        </div>

        <div class="side-by-side">

          <img class="moonimage" src="IMG_7430.JPG"
               alt="harry clarke faust illustration of witch-queen and young prince with elegant fingers, full moon in the background"/>
        </div>

        <h1 class="header">Here stands Ryan Reddy.</h1>

      </main>
      </body>
    `;
  }
}
