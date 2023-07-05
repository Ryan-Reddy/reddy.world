import {css, html, LitElement} from 'lit';
import {customElement} from 'lit/decorators.js';
import langCSS from '../css/langCSS';

/**
 * An example element.
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */
@customElement('art-element')
export class ArtElement extends LitElement {
  constructor() {
    super();
  }

  firstUpdated(changedProperties: any) {
    let titleEvent = new CustomEvent('title-change', {
      detail: {
        message: 'Art'
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

  render() {
    return html`
      <head>
        <meta charset="UTF-8">
        <title>Art</title>
      </head>
      <body>
      <main>
        <div>
          <!--          <span lang="nl">Nederlandse span</span>-->
          <!--          <br>-->

          <!--          <span lang="en">Engelse span</span>-->


          <h1>Art</h1>

          <br>
          These are design and art companies that I have managed and made many things for:
          <ul>
            <li><a href="www.nepco.nl/">Costumes for theatre</a></li>
            <li><a href="www.reddymaekersproductions.wordpress.com/">A decor/props company</a></li>
            <li><a href="www.ryanvanlil.wordpress.com">My old personal portfolio</a></li>
          </ul>
          And below are ones where I worked in assignment of:
          <ul>
            <li><a href="www.nepco.nl/">Costumes for theatre</a></li>
            <li><a href="www.reddymaekersproductions.wordpress.com/">A decor/props company</a></li>
          </ul>
        </div>
      </main>


      </body>
    `;
  }
}
