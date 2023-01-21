import {css, html, LitElement} from 'lit';
import {customElement, property} from 'lit/decorators.js';

/**
 * An example element.
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */
@customElement('socials-element')
export class SocialsElement extends LitElement {

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

      .hidden {
        display: none;
        pointer-events: none;
        color: lightgrey;
        foreground-color: grey;
        background-color: var(--grijs);
        required: invalid;
      }

      button {
        width: 66%;
        height: 2em;
      }
    `;
  }
  render() {
    return html`
      <head>
        <meta charset="UTF-8">
        <title>Socials</title>

      </head>
      <body>

      <main>
        <div>
        <h1>Socials</h1>
        <br>

        <ul>
        <li><a href="https://www.linkedin.com/in/ryan-reddy-productions/">LinkedIn</a></li>
        <li><a href="https://github.com/Ryan-Reddy">Github</a></li>

        <li><a href="https://www.facebook.com/klugook/">Facebook</a></li>
        <li><a href="https://www.instagram.com/so_fluffy_ill_die/">Instagram</a></li>

        </ul>
        </div>
      </main>

      </body>
      </html>
    `;
  }
}
