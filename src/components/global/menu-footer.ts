import {css, html, LitElement} from "lit";
import {customElement, property, query, queryAll} from "lit/decorators.js";
import langCSS from "../../css/langCSS";
import mainCSS from "../../css/mainCSS";

/**
 * An example element.
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */
@customElement("footer-menu")
export class MenuFooter extends LitElement {
  @query("a", true) _input!: HTMLInputElement;
  @property() _language: string | undefined;
  @queryAll("[lang]") _containers!: NodeListOf<HTMLElement>;

  constructor() {
    super();
  }

  static get styles() {
    return [
      langCSS,
      mainCSS,
      css`
        nav {
          text-decoration: none;
          justify-content: space-between;
          text-align: center; /* center the child */
          align-content: center;
          //display: flex;
          align-items: center;
          margin: 0.5rem;
          line-height: 2em; // height of buttons -> stops overlap
        }

        body {
          font-family: "Montserrat", sans-serif;
          color: white;
          opacity: 1;
        }

        input {
          width: 176px;
          //position: relative;
          left: 1em;
          font-family: "Fira Code", monospace;
          font-size: 12px;
          opacity: 1;
          text-align: left;
        }

        nav ul {
          overflow: hidden;
          align-items: center;
        }

        nav li {
          display: inline-block; // needed for the spacing on desktop of footer buttons
          margin: 0.5rem; // needed for the spacing on desktop of footer buttons
        }

        nav a {
          color: var(--wit);
          border-radius: 8px;
          text-transform: uppercase;
          padding: 0.8rem;
          text-decoration: none;
          padding-bottom: 0.4rem; /* Adjust the margin-bottom value as needed */

        }

        a.active,
        a:hover {
          background: var(--silver);
          transition: var(--transitionInSeconds);
          color: var(--zwart);
        }

        @media (max-width: 952px) {
          nav {
            float: none;
            position: absolute;
            text-align: center; /* Add this line */

            /* This will center the child elements horizontally */
            display: flex;
            justify-content: center;
            align-items: center;
          }

          nav ul {
            margin-left: auto;
            margin-right: auto;
            padding-inline-start: 0;
          }

          nav li {
            display: block;
            margin: 0.5rem; /* Adjust the margin as needed */
            line-height: 1.5em; /* Adjust the line-height as needed */
          }

          input {
            max-width: 100%;
            height: auto;
            width: auto \\9; /* ie8 */
          }
        }


        @media (max-width: 858px) {
          display: inline-block;

          u {
            position: fixed;
            width: auto;
            height: 100vh;
            top: 80px;
            //left: -100%;
            text-align: center;
            transition: all 0.5s;
          }

          nav ul li a {
            font-size: 11vw;
          }
        }

        @media (prefers-color-scheme: light) {
          footer,
          nav ul li a {
            color: var(--zwart);
            background-color: var(--wit);
            border-color: var(--wit);
          }

          a.active,
          a:hover {
            background: var(--gold);
            transition: var(--transitionInSeconds);
            color: var(--zwart);
          }
        }
      `];
  }


  render() {
    return html`
      <nav>
        <div lang="en">
          <ul>
            <li>
              <a
                class="nav-button"
                href="/ral-contrast-checker"
                id="contrast-checker-button"
                aria-label="art"
              >RAL-contrast</a
              >
            </li>
            <li>
              <a
                class="nav-button"
                data-key="nav-btn-friends"
                href="/friends"
                id="friends-button"
                aria-label="Friends"
              >Friends</a
              >
            </li>
            <li>
              <a
                class="nav-button"
                href="/contact"
                id="contact-button"
                aria-label="Contact"
              >Contact</a
              >
            </li>
          </ul>
        </div>
        <div lang="nl">
          <ul>
            <li>
              <a
                class="nav-button"
                href="/ral-contrast-checker"
                id="contrast-checker-button"
                aria-label="art"
              >RAL-contrast</a
              >
            </li>
            <li>
              <a
                class="nav-button"
                href="/portfolio"
                id="portfolio-button"
                aria-label="art"
              >Portfolio</a
              >
            </li>
            <li>
              <a
                class="nav-button"
                data-key="nav-btn-friends"
                href="/friends"
                id="friends-button"
                aria-label="Vrienden"
              >Vrienden</a
              >
            </li>
            <li>
              <a
                class="nav-button"
                href="/contact"
                id="contact-button"
                aria-label="Contact"
              >
                Contact</a
              >
            </li>
          </ul>
        </div>
      </nav>
    `;
  }

  connectedCallback() {
    super.connectedCallback();
    this._setLanguage();
  }

  firstUpdated() {
    this._setLanguage();
    this._containers.forEach((value) => {
      if (value.lang == this._language) {
        value.className = "lang-match";
      }
    });
  }

  _setLanguage() {
    this._language = navigator.language;
    this._language = this._language.split("-")[0];
    if (this._language != "nl" || "en") {
      this._language = "en"; // set default english if no other lang found
    }
  }

  protected createRenderRoot() {
    return super.createRenderRoot();
  }
}
