import {css, html, LitElement} from 'lit';
import {customElement, query} from 'lit/decorators.js';

/**
 * An example element.
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */
@customElement('lang-element')
export class LangElement extends LitElement {
  @query('.dropdown-menu-items') _dropdownMenuItems!: HTMLUListElement;

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
      }

      .hidden {
        display: none;
        pointer-events: none;
        color: var(--silver);
        background-color: var(--silver);
      }

      button {
        //width: 20%; /* goveerned by parent */
        height: 2em;
      }

      .dropdown-menu-items {
        list-style-image: none;
        position: fixed; /* Sit on top of the page content */
        display: none; /* Hidden by default */
        width: 30%; /* 100% = Full width (cover the whole page) */
        height: 100%; /* Full height (cover the whole page) */
        top: 0;
        left: 3em;
        right: 0;
        bottom: 0;
        background-color: rgba(0, 0, 0, 0.5); /* Black background with opacity */
        z-index: 2; /* Specify a stack order in case you're using a different order for other elements */
      }
    `;
  }

  render() {
    return html`
      <link rel="stylesheet" href="/css/mainCSS.css">

      <div class="language-menu"
           @mouseleave="${this._hideDropDown}">


        <button
          id="header-language-menu"
          type="button"
          class="dropdown-menu-label"
          aria-haspopup="true"
          aria-owns="language-menu"
          aria-label="Current language is English. Choose your preferred language."
          @click="${this._showDropDown}"
        >
          Language
          <span class="fa-solid fa-language"></span>

          <span class="dropdown-arrow-down" aria-hidden="true">▼</span>
        </button>
        <ul
          id="language-menu"
          class="dropdown-menu-items right show"
          aria-expanded="true"
          role="menu">
          <li lang="en" role="menuitem">
            <a href="" title="English" value="en"
               @click="${this._languageChosen}"
            >
              <bdi>English</bdi>
            </a>
          </li>

          <li lang="nl" role="menuitem">
            <a href="" title="Dutch" value="nl"
               @click="${this._languageChosen}"
            >
              <bdi>Nederlands</bdi>
            </a>
          </li>

        </ul>
      </div>
    `;
  }

  _showDropDown() {
    console.log('_showDropDown')
    this._dropdownMenuItems.style.display = 'inline';
  };

  _hideDropDown() {
    console.log('_hideDropDown')
    this._dropdownMenuItems.style.display = 'none';
  }

  _languageChosen(e: Event) {
    const language = e.currentTarget.getAttribute('value');

    console.log('lang ' + language)
    sessionStorage.setItem('lang', language)

    // TODO make entire component tree re-render
  }

}
