import {css, html, LitElement} from 'lit';
import {customElement, property} from 'lit/decorators.js';

/**
 * An example element.
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */
@customElement('friends-element')
export class FriendsElement extends LitElement {

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

  //TODO properly import /node_modules/zero-md:
  render() {
    return html`
      <head>
        <meta charset="UTF-8">
        <title>Friends</title>

      </head>
      <body>

      <main>
        <div>

        <h1 lang="en-GB">Friends</h1>
        <h1 lang="nl-NL">Vrienden</h1>
        <br>

        <ul>
        <li><a href="https://nepco.nl/">Studio Nepco</a></li>
        <li><a href="https://kingeve.nl/">King Eve</a></li>
        <li><a href="https://www.flegmagallery.com/">Flegma Gallery</a></li>
        <li><a href="https://www.studiobinnenstad.com/">Studio Binnenstad</a></li>
        <li><a href="https://www.noordermeer.tech">Martijn Noordermeer</a></li>
        <li><a href="https://amsterdamsefrisdrankfabriek.nl/">Amsterdamse Frisdrank Fabriek</a></li>
        </ul>
        </div>
      </main>

      </body>
      </html>
    `;
  }
}
