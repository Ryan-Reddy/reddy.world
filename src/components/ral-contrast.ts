import {css, html, LitElement} from 'lit';
import {customElement} from 'lit/decorators.js';
import langCSS from '../css/langCSS';

/**
 * An example element.
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */
@customElement('ral-contrast-element')
export class RalContrastElement extends LitElement {

  constructor() {
    super();
  }

  firstUpdated(changedProperties: any) {
    let titleEvent = new CustomEvent('title-change', {
      detail: {
        message: 'Ral Contrast Checker'
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

        .iframe-container {
          width: 100%;
          height: 750px;
          border: none;
          border-radius: 8px;
          box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
        }
      `];
  }

  render() {

    return html`
      <head>
        <meta charset="UTF-8">
        <title>RAL CONTRAST CHECKER</title>
      </head>
      <body>
      <main>
        <div>
          <!--          <span lang="nl">Nederlandse span</span>-->
          <!--          <br>-->

          <!--          <span lang="en">Engelse span</span>-->
          <div>
            <iframe
              src="../ralcontrast/index.html"
              class="iframe-container"
            ></iframe>
          </div>
        </div>
      </main>
      </body>
    `;
  }
}
