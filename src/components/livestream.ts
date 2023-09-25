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
@customElement('stream-element')
export class SupportElement extends LitElement {
  constructor() {
    super();
  }

  static get styles() {
    return [
      langCSS,
      mainCSS,
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
          color: var(--silver);
          background-color: var(--silver);
        }

        button {
          width: 66%;
          height: 2em;
        }
      `];
  }

  firstUpdated(changedProperties: any) {
    let titleEvent = new CustomEvent('title-change', {
      detail: {
        message: 'LiveStream'
      }
    });
    console.log('dispatching event:' + titleEvent.detail.message)
    this.dispatchEvent(titleEvent);
  }

  render() {
    return html`
      <meta name="description" content="Ryan Reddy's world.">
      <meta title="Livestream page">
      <body>
      <main>
        <img alt="streaming-video-webcam"
             style="display: block; user-select: none; margin: auto; background-color: rgb(64, 64, 64); --darkreader-inline-bgcolor:#303436;"
             src="http://freeukraine.mywire.org:8080/?action=stream" data-darkreader-inline-bgcolor="" width="973"
             height="547">
      </main>
      </body>
    `;
  }
}
