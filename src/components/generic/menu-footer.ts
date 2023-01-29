import {css, html, LitElement} from 'lit';
import {customElement, property, query} from 'lit/decorators.js';

/**
 * An example element.
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */
@customElement('footer-menu')
export class MenuFooter extends LitElement {
  @property() _contactClicked = 'mailto:ryanreddy@hotmail.com?subject=Hello friend!';
  @query('a', true) _input!: HTMLInputElement;

  constructor() {
    super();
  }

  static get styles() {
    return css`
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      text-decoration: none;
      justify-content: space-between;

      overflow: hidden;
      float: right;

      display: flex;
      align-items: center;

      body {
        font-family: Montserrat;
        color: white;
        font-size: 1em;
        opacity: 1;
      }

      input {
        width: 176px;
        position: relative;
        left: 1em;
        font-family: Fira Code;
        font-size: 12px;
        opacity: 1;
        text-align: left;
      }

      nav ul {
        float: right;
      }

      nav ul li {
        display: inline-block;
        margin: 0 5px;
      }

      nav ul li a {
        color: var(--wit);
        border-radius: 3px;
        text-transform: uppercase;
        padding: 5px;
      }

      a.active, a:hover {
        background: var(--silver);
        transition: var(--transitionInSeconds);
        color: var(--zwart);
      }

      .nav-button {
        opacity: 1;
        text-align: center;
      }

      li {
        list-style: none;
      }

      #check {
        display: none;
      }

      @media (max-width: 952px) {
        input {
          max-width: 100%;
          height: auto;
          width: auto \\9; /* ie8 */
        }

        .nav-logo {
          height: 3em;
          padding-left: 50px;
        }

        nav ul li a {
          display: inline-block;
        }

      }

      @media (max-width: 858px) {
        .checkbtn {
          display: block;
        }

        u {
          position: fixed;
          width: 100%;
          height: 100vh;
          top: 80px;
          left: -100%;
          text-align: center;
          transition: all .5s;
        }

        nav ul li {
          //display: block;
        }

        a:hover, a.active {
          background: none;
        }

        #check:checked {
          left: 0;
        }
      }

      @media (prefers-color-scheme: light) {
        footer, nav ul li a {
          color: var(--zwart);
          background-color: var(--wit);
          border-color: var(--wit);
        }

        a.active, a:hover {
          background: var(--gold);
          transition: var(--transitionInSeconds);
          color: var(--zwart);
        }
      }
    `;
  }

  render() {
    return html`
      <nav>
        <ul>
          <li><a class="nav-button" href="https://github.com/Ryan-Reddy" id="github-button"
                 aria-label="github">Github</a></li>
          <li><a class="nav-button" href="friends" id="friends-button" aria-label="Friends">Friends</a></li>
          <li><a class="nav-button" href="cv" id="portfolio-button" aria-label="Friends">Portfolio</a></li>
          <li><a class="nav-button" href="readme" id="readme-button" aria-label="Readme">Readme</a></li>
          <li><a class="nav-button" href="support" id="support-button" aria-label="Support">Support</a></li>
          <li><a class="nav-button" href="${this._contactClicked}" id="contact-button" aria-label="Contact">Contact</a>
          </li>
        </ul>
      </nav>
    `;
  }


}
