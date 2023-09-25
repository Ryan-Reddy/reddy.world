import {css, html, LitElement} from 'lit';
import {customElement} from 'lit/decorators.js';
import langCSS from '../css/langCSS';

/**
 * An example element.
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */
@customElement('ral-contrast-element')
export class RalContrastElement extends LitElement {
  credits = [{name: 'Kerem Uzuner', link: 'https://www.linkedin.com/in/kerem-uzuner/'}, {
    name: 'Hind Baroudi',
    link: 'https://www.linkedin.com/in/hind-baroudi-097a33225'
  }, {name: 'Mehmet Ali Bayram', link: 'https://www.linkedin.com/in/mehmet-ali-bayram-20201010/'}, {
    name: 'Jan de Graaf',
    link: 'mailto:jt.graaf@gmail.com'
  }, {name: 'Ryan', link: 'https://www.reddy.world'}, // Add more credits as needed
  ];

  constructor() {
    super();
  }

  static get styles() {
    return [langCSS, css`
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
      }

      button {
        width: 66%;
        height: 2em;
      }

      .iframe-container {
        width: 100%;
        height: 750px;
        border: none;
        border-radius: 8px;
        box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
        background-color: rgba(0, 0, 0, 0.1) !important; /////////// DOESNT WORK SOMEHOW
      }

      .credit-box {
        width: 100%;
        padding: 10px;
        background: var(--color-light);
        color: var(--color-dark);
        border-radius: 8px;
        box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
        margin-top: 20px;
        font-size: 0.9em;
        line-height: 1.6em;
        text-align: center;
      }

    `];
  }

  get sortedCredits() {
    return [...this.credits].sort((a, b) => a.name.localeCompare(b.name));
  }

  firstUpdated(changedProperties: any) {
    let titleEvent = new CustomEvent('title-change', {
      detail: {
        message: 'Ral Contrast Checker'
      }
    });
    console.log('dispatching event:' + titleEvent.detail.message)
    this.dispatchEvent(titleEvent);
  }

  render() {

    return html`
      <head>
        <meta charset="UTF-8">
        <meta name="description"
              content="A RAL color based contrast checker, for use in fysical accessiblity designing processes.">
        <meta title="RAL CONTRAST CHECKER">
        <title>RAL CONTRAST CHECKER</title>
      </head>
      <body>
      <main>
        <div>
          <!--          <span lang="nl">Nederlandse span</span>-->
          <!--          <br>-->

          <!--          <span lang="en">Engelse span</span>-->
          <div>
            <iframe
              src="/ralcontrast/index.html"
              class="iframe-container"
            ></iframe>
          </div>
          <div class="credit-box">
            <h3>Credits:</h3>
            <p>This project was created as a team assignment for Stichting Accessibility by students from Hogeschool
              Utrecht in 2023:</p>
            ${this.sortedCredits.map(credit => html`
              <p><a href=${credit.link} target="_blank">${credit.name}</a></p>
            `)}
            <p>&copy; ${new Date().getFullYear()} Stichting Accessibility. All rights reserved.</p>
          </div>
        </div>
      </main>
      </body>
    `;
  }
}
