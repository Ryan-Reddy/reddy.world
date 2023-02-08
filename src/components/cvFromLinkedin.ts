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
  firstUpdated(changedProperties: any) {
    let titleEvent = new CustomEvent('title-change', {
      detail: {
        message: 'CV'
      }
    });
    console.log('dispatching event:' + titleEvent.detail.message)
    this.dispatchEvent(titleEvent);
  }
  static get styles() {
    return css`
      #wrapper {
        width: 100vw;
      }
    `;
  }
  render() {
    return html`
      <div id="wrapper">
      <iframe id="iframe-cv"
        src="Resume-Ryan-van-Lil-Reddy.pdf#view=FitH"
              title="Resume-Ryan-van-Lil-Reddy.pdf"
              height="100%" width="100%"
      >
      </iframe>
      </div>
    `;
  }
}
