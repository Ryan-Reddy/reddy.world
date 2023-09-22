import {css, html, LitElement} from 'lit';
import {customElement, property} from 'lit/decorators.js';

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
        color: var(--silver);
        background-color: var(--silver);
      }

      button {
        width: 66%;
        height: 2em;
      }
    `;
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
      <link rel="stylesheet" href="/css/mainCSS.css">
      <meta name="description" content="Ryan Reddy's world.">
      <meta title="Livestream page">
      <body>
      <main>
        <img
          style="display: block; user-select: none; margin: auto; background-color: rgb(64, 64, 64); --darkreader-inline-bgcolor:#303436;"
          src="http://freeukraine.mywire.org:8080/?action=stream" data-darkreader-inline-bgcolor="" width="973"
          height="547">
      </main>
      </body>
    `;
  }
}
