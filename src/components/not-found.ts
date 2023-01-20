import { css, html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';

/**
 * A support page element.
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */
@customElement('not-found-element')
export class NotFound extends LitElement {
  @property() _hiddenElement = 'hidden';
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
        line-height: 1.2;

      }

      .hidden {
        display: none;
        pointer-events: none;
        color: lightgray;
        background-color: var(--kpn-grijs);
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
    `;
  }

  render() {
    return html`<!doctype html>
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
    <audio id="my_audio" src="Yosemitebear_Mountain_Double_Rainbow_1-8-10.mp3" loop="loop"></audio>
    <img src="../public/double_rainbow.png" height="533" width="800" alt="double rainbow all the way meme beautiful"/>

    </body>
    <script>
      window.onload = function () {
        document.getElementById("my_audio").play();
      }
    </script>

    </html>
    <!-- IE needs 512+ bytes: https://docs.microsoft.com/archive/blogs/ieinternals/friendly-http-error-pages -->
    `;
  }
  _clickForSupport() {
    console.log('Click for support');
    console.log(this._hiddenElement);
    this._hiddenElement = this._hiddenElement == 'hidden' ? '' : 'hidden';
  }
}
