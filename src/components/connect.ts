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
      `];
  }

  render() {
    return html`

      <hr>
      <h2 lang="en">Connect with me</h2>
      <br>

      <ul>

        <li><a href="https://www.linkedin.com/in/ryan-reddy-productions/">LinkedIn</a></li>
        <li><a href="https://github.com/Ryan-Reddy">Github</a></li>
        <li><a href="/contact">Contact Form</a></li>
      </ul>

    `;
  }
}
