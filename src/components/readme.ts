import {css, html, LitElement} from 'lit';
import {customElement, property} from 'lit/decorators.js';
import "https://cdn.jsdelivr.net/npm/@webcomponents/webcomponentsjs@2/webcomponents-loader.min.js";
import "https://cdn.jsdelivr.net/gh/zerodevx/zero-md@2/dist/zero-md.min.js"

/**
 * An example element.
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */
@customElement('readme-element')
export class ReadmeElement extends LitElement {
  @property() _hiddenElement = 'hidden';
  @property() currentPage: string | undefined;
  @property() _readmeFile = "README.md";

  constructor() {
    super();
  }
  firstUpdated(changedProperties: any) {
    let titleEvent = new CustomEvent('title-change', {
      detail: {
        message: 'Readme'
      }
    });
    console.log('dispatching event:' + titleEvent.detail.message)
    this.dispatchEvent(titleEvent);
  }

  static get styles() {
    return css`
      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        text-decoration: none;
      }
      main {
        display: flex;
        align-items: center;
      }


      .hidden {
        display: none;
        pointer-events: none;
        color: lightgrey;
        background-color: var(--grijs);
      }

      button {
        width: 66%;
        height: 2em;
      }


      zero-md {
        margin: auto;
        width: 60%;
        border: 3px solid green;
        padding: 3em;
      }

      @media (max-width: 952px) {
        zero-md {
          display: none;
          align-content: center;
        }

        div.readme:after {
          top: 0;
          left: 0;
          content: 'This is not visible on a small screen, please view on a larger screen.'
        }
      }

    `;
  }

  //TODO properly import /node_modules/zero-md:
  render() {
    return html`
      <head>
        <meta charset="UTF-8">
        <title>README</title>
      </head>

      <h1 hidden>README FILE</h1>
      <div class="readme">
        <zero-md src="${this._readmeFile}">  <!-- Wrap with a <template> tag -->
          <template>
            <!-- Define your own styles inside a \`<style>\` tag -->
            <style>
              h1 {
                color: red;
              }
            </style>
          </template>
        </zero-md>
      </div>
    `;
  }

  _clickForSupport() {
    console.log('Click for support');
    console.log(this._hiddenElement);
    this._hiddenElement = this._hiddenElement == 'hidden' ? '' : 'hidden';
  }
}
