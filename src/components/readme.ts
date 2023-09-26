import {css, html, LitElement} from 'lit';
import {customElement, property} from 'lit/decorators.js';
import "https://cdn.jsdelivr.net/npm/@webcomponents/webcomponentsjs@2/webcomponents-loader.min.js";
import "https://cdn.jsdelivr.net/gh/zerodevx/zero-md@2/dist/zero-md.min.js"
import langCSS from "../css/langCSS";
import mainCSS from "../css/mainCSS";

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

  static get styles() {
    return [langCSS, mainCSS, css`
      * {
        //  margin: 0;
        //  padding: 0;
        //  box-sizing: border-box;
        text-align: left;
        text-decoration: none;
        margin-left: 16%;
      }

      main {
        display: flex;
        align-items: center;
      }


      .hidden {
        display: none;
        pointer-events: none;
        color: lightgrey;
        background-color: var(--silver);
      }

      button {
        width: 66%;
        height: 2em;
      }


      zero-md {
        margin: auto;
        width: 63%;
        border: 3px solid green;
        padding: 3em;
        font-size: .82vw;
        line-height: 1.3vw;
        color: rgb(0, 255, 0);
        //background: #00ff00;
      }

      @media (max-width: 952px) {
        zero-md {
          width: 100%;
          font-size: 29.94%;
          line-height: 125%;
          //display: none;
          //align-content: center;
        }

        div.readme:after {
          top: 0;
          left: 0;
          //content: 'This is not visible on a small screen, please view on a larger screen.'
        }
      }
    `];
  }

  firstUpdated(changedProperties: any) {
    let titleEvent = new CustomEvent('title-change', {
      detail: {
        message: 'Readme'
      }
    });
    this.dispatchEvent(titleEvent);
  }

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
