import {css, html, LitElement} from 'lit';
import {customElement} from 'lit/decorators.js';

/**
 * An example element.
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */
@customElement('cv-linkedin-element')
export class CVElement extends LitElement {

  constructor() {
    super();
  }

  static get styles() {
    return css`
      iframe {
        height: 80vh;
        width: 100%;
      }

    `;
  }
  render() {
    return html`
      <iframe id="iframe-cv"
        src="Resume-Ryan-van-Lil-Reddy.pdf#page=1&view=FitB"
              title="Resume-Ryan-van-Lil-Reddy.pdf"
              height="80vh"
      >
      </iframe>
    `;
  }
}
