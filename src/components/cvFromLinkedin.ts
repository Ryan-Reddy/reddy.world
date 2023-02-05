import {css, html, LitElement} from 'lit';
import {customElement, property} from 'lit/decorators.js';

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
        width: 100%;
        height: 700px;

      }
    `;
  }
  render() {
    return html`
      <iframe src="Resume-Ryan-van-Lil-Reddy.pdf#toolbar=0">
      </iframe>
    `;
  }
}
