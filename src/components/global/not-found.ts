import {css, html, LitElement} from 'lit';
import {customElement, property, query} from 'lit/decorators.js';
import langCSS from "../../css/langCSS";
import mainCSS from "../../css/mainCSS";

/**
 * A support page element.
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */
@customElement('not-found-element')
export class NotFound extends LitElement {
  @property() _hiddenElement = 'hidden';
  @query('#my_audio') _audio: any;

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
        line-height: 1.2;

      }

      .hidden {
        display: none;
        pointer-events: none;
        color: lightgray;
        background-color: var(--silver);
      }

      button {
        width: 66%;
        height: 2em;
      }

      html {
        color: #888;
        display: table;
        font-family: sans-serif;
        height: 100%;
        text-align: center;
        width: 100%;
      }

      body {
        display: table-cell;
        vertical-align: middle;
        margin: 2em auto;
      }

      h1 {
        color: #555;
        font-size: 2em;
        font-weight: 400;
      }

      p {
        margin: 0 auto;
        width: 280px;
      }

      @media only screen and (max-width: 280px) {

        body,
        p {
          width: 95%;
        }

        h1 {
          font-size: 1.5em;
          margin: 0 0 0.3em;
        }

      }
    `];
  }

  firstUpdated(changedProperties: any) {
    let titleEvent = new CustomEvent('title-change', {
      detail: {
        message: 'Page Not Found'
      }
    });
    console.log('dispatching event:' + titleEvent.detail.message)
    this.dispatchEvent(titleEvent);

    this._audio.play();
  }

  render() {
    return html`
      <html lang="en">

      <head>
        <meta charset="utf-8">
        <title>Page Not Found</title>
        <meta name="viewport" content="width=device-width, initial-scale=1">

      </head>

      <body>
      <h1>Page Not Found</h1>

      <p>Sorry, but the page you were trying to view does not exist.
        But sometimes that's when you find something you didn't know you where looking for.
      </p>
      <br>
      <audio id="my_audio" src="yosemitebear_nountain_double_rainbow.mp3" loop="loop"></audio>
      <img src="double_rainbow.png" height="533" width="800" alt="double rainbow all the way meme beautiful"/>

      </body>

      <!-- IE needs 512+ bytes: https://docs.microsoft.com/archive/blogs/ieinternals/friendly-http-error-pages -->
    `;
  }
}
