import {css, html, LitElement} from 'lit';
import {customElement} from 'lit/decorators.js';

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
    `;
  }

  render() {
    return html`
      <link rel="stylesheet" href="/css/mainCSS.css">
      <head>
        <meta charset="UTF-8">
        <meta name="description" content="Ryan Reddy's portfolio.">
        <meta title="Portfolio">
        <title>Portfolio</title>

      </head>
      <body>

      <main>
        <div>
          <h1>Portfolio</h1>
          <hr>

          <h2 lang="en">Software projects</h2>
          <br>
          <ul>
            <li><a class="nav-button" href="/ral-contrast-checker" id="contrast-checker-button"
                   aria-label="art">RAL-contrast-checker</a></li>
          </ul>

          <hr>
          <h2 lang="en">Work portfolios</h2>
          <br>

          <ul>

            <li><a href="https://www.linkedin.com/in/ryan-reddy-productions/">LinkedIn</a></li>
            <li><a href="https://github.com/Ryan-Reddy">Github</a></li>
          </ul>

          <hr>
          <h2>Art</h2>

          <br>
          These are design and art companies that I have managed and made many things for:
          <ul>
            <li><a href="http://www.nepco.nl/">Costumes for theatre</a></li>
            <li><a href="http://www.reddymaekersproductions.wordpress.com/">A decor/props company</a></li>
            <li><a href="http://www.ryanvanlil.wordpress.com">My old personal portfolio</a></li>
          </ul>
          And below are ones where I worked in assignment of:
          <ul>
            <li><a href="www.nepco.nl/">Costumes for theatre</a></li>
            <li><a href="www.reddymaekersproductions.wordpress.com/">A decor/props company</a></li>
          </ul>
        </div>

      </main>

      </body>
    `;
  }
}
