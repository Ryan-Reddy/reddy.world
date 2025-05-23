import {css, html, LitElement} from 'lit';
import {customElement} from 'lit/decorators.js';
import langCSS from "../css/langCSS";
import mainCSS from "../css/mainCSS";

/**
 * An example element.
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */
@customElement('enquete-element')
export class EnqueteElement extends LitElement {
  constructor() {
    super();
  }

  static get styles() {
    return [langCSS, mainCSS, css`
      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        text-decoration: none;
      }

      main {
        margin: 0 auto;
        text-align: center; /* For older browsers */
      }

      button {
        width: 66%;
        height: 2em;
      }
    `];
  }

  render() {
    return html`
      <meta name="description" content="Ryan Reddy's world.">
      <meta title="Enquete Domits Sustainability">
      <body>
      <div data-tf-live="01JVY68G97QJBHRKPCNBTAA48W"></div><script src="//embed.typeform.com/next/embed.js"></script>
      </main>
      </body>
    `;
  }

}
