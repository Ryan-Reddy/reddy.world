import { css, html, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';

/**
 * An example element.
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */
@customElement('home-page-element')
export class HomePage extends LitElement {
  constructor() {
    super();
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
        background-color: var(--kpn-zwart);
      }
      ul {
        list-style: none;
      }
      .card {
        padding: 2em;
      }

      a {
        font-weight: 500;
        color: var(--kpn-grijs);
      }

      a:hover {
        color: var(--kpn-groen);
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
        background-color: var(--kpn-wit);
        color: var(--kpn-zwart);

        cursor: pointer;
        transition: border-color 0.25s;
      }
      button:hover {
        border-color: var(--kpn-groen);
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
      <header>
        <h1 class="header">Welkom bij de KNP medewerkers mobiliteits APP!</h1>
      </header>
        <body>

        <main>
          <div>
            <h1>Get Reddy world!</h1>
            <h2>This is Ryan Reddy.</h2>
            <div id="app"></div>
            <button><a type="button" href="/login">Login</a></button>
          </div>

          <div class="side-by-side">
            <img src="../public/unicorn-break-chains.jpg"
                 alt="Unicorn gold crown breaking free from a golden chain by whyn lewis flower oil on panel">
            <img src="../public/IMG_7430.JPG" height="845" width="590"
                 alt="harry clarke faust illustration of witch-queen and young prince with elegant fingers, full moon in the background"/>
          </div>

          <simple-greeting name="World">Get Reddy world!</simple-greeting>

    </main>
      </body>
    `;
  }
}
