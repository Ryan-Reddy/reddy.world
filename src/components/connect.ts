import {css, html, LitElement} from 'lit';
import {customElement} from 'lit/decorators.js';
import langCSS from '../css/langCSS';
import mainCSS from "../css/mainCSS";

/**
 * An example element.
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */
@customElement('connect-element')
export class ConnectElement extends LitElement {

  constructor() {
    super();
  }
  firstUpdated(changedProperties: any) {
    let titleEvent = new CustomEvent('title-change', {
      detail: {
        message: 'Connect'
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

        button {
          width: 66%;
          height: 2em;
        }
        .connect-box {

          display: flex; /* Use flexbox for layout */
          width: 100vw;
          align-items: center; /* Center content horizontally */

          flex-direction: row; /* Change to row layout on larger screens */
          justify-content: center; /* Center the menu horizontally */
        }
        ul {
          display: flex; /* Set the list to flexbox */
          flex-direction: row; /* Stack vertically by default */
          list-style: none; /* Remove bullet points */
          padding: 0;
        }

        li {
          margin: 0.5em 1em; /* Add spacing between items */
        }

        a {
          text-decoration: none;
          color: inherit;
        }

        @media (max-width: 768px) {
          .connect-box {
              flex-direction: column;
              width: 100vw;

          }
          li, ul {
            max-width: 100vw; /* Make the list items take up the full width on mobile */
          }
          ul {
            //display: inline-block;
            flex-direction: column; /* Stack on smaller screens */

          }
        }
      `];
  }

  render() {
    return html`

      <hr>
      <h2 lang="en">Let's Connect!</h2>
      <br>

      <div class="connect-box">
      <ul>

        <li><a href="https://www.linkedin.com/in/ryan-reddy-productions/">LinkedIn</a></li>
        <li><a href="https://github.com/Ryan-Reddy">Github</a></li>
        <li><a href="/contact">Contact Form</a></li>
      </ul>

      </div>

    `;
  }
}
