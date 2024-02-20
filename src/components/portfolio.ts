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
@customElement('portfolio-element')
export class PortfolioElement extends LitElement {

  constructor() {
    super();
  }
  firstUpdated(changedProperties: any) {
    let titleEvent = new CustomEvent('title-change', {
      detail: {
        message: 'Portfolio'
      }
    });
    this.dispatchEvent(titleEvent);
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
          color: lightgrey;
          background-color: var(--silver);
        }

        button {
          width: 66%;
          height: 2em;
        }
      `];
  }


  render() {
    return html`
      <head>
        <meta charset="UTF-8">
        <meta name="description" content="Ryan Reddy's portfolio.">
        <meta title="Portfolio">
        <title>Connect</title>

      </head>

      <div>
        <h1>Connect</h1>


        <hr>
        <h2>Art</h2>

        <br>
        These are design and art companies that I have managed and made many things for:
        <ul>
          <li><a href="http://www.nepco.nl/">Costumes for theatre</a></li>
          <li><a href="http://www.reddymaekersproductions.wordpress.com/">Decor/props for film and events</a></li>
          <li><a href="http://www.ryanvanlil.wordpress.com">My old personal portfolio</a></li>
        </ul>

      </div>

      <h2 lang="en">Software projects</h2>
      <br>
      <ul>
        <li><a class="nav-button" href="/ral-contrast-checker" id="contrast-checker-button"
               aria-label="art">RAL-contrast-checker</a></li>
      </ul>

    `;
  }
}
