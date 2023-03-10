import {css, html, LitElement} from 'lit';
import {customElement} from 'lit/decorators.js';
import langCSS from '../css/langCSS';

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
  firstUpdated(changedProperties: any) {
    let titleEvent = new CustomEvent('title-change', {
      detail: {
        message: 'Friends'
      }
    });
    console.log('dispatching event:' + titleEvent.detail.message)
    this.dispatchEvent(titleEvent);
  }

  static get styles() {
    return [
      langCSS,
      css`
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
        }

        button {
          width: 66%;
          height: 2em;
        }
      `];
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
          <!--          <span lang="nl">Nederlandse span</span>-->
          <!--          <br>-->

          <!--          <span lang="en">Engelse span</span>-->


          <h1>Friends</h1>

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
    `;
  }
}
