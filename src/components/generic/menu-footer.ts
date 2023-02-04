import {css, html, LitElement} from 'lit';
import {customElement, property, query, queryAll} from 'lit/decorators.js';
import langCSS from "../../css/langCSS";

/**
 * An example element.
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */
@customElement('footer-menu')
export class MenuFooter extends LitElement {
  @property() _contactClickedEnglish = 'mailto:ryanreddy@hotmail.com?subject=Hello friend!';
  @property() _contactClickedDutch = 'mailto:ryanreddy@hotmail.com?subject=Hallo vriend!';
  @query('a', true) _input!: HTMLInputElement;
  @property() _language: string;
  @queryAll('[lang]') _containers!: NodeListOf<HTMLElement>
  @property() staticNode: NodeListOf<Element>;

  constructor() {
    super();
    this._language = navigator.language;
  }

  static get styles() {
    return [
      langCSS,
      css`
        nav {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
          text-decoration: none;
          justify-content: space-between;

          float: right;

          display: flex;
          align-items: center;
        }

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
          overflow: hidden;

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
          text-decoration: none;

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

        }

        @media (max-width: 858px) {
          display: inline-block;

          .checkbtn {
            display: inline-block;
          }

          u {
            position: fixed;
            width: auto;
            height: 100vh;
            top: 80px;
            //left: -100%;
            text-align: center;
            transition: all .5s;

          }

          nav ul li a {
            font-size: 4vw;

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
      `
    ];
  }

  render() {
    return html`

      <nav>
        <div lang="en">
          <ul>
            <li><a class="nav-button" href="https://github.com/Ryan-Reddy" id="github-button"
                   aria-label="github">Github</a></li>
            <li><a class="nav-button" data-key="nav-btn-friends" href="friends" id="friends-button"
                   aria-label="Friends">Friends</a></li>
            <li><a class="nav-button" data-key="nav-btn-readme" href="readme" id="readme-button" aria-label="Readme">Readme</a>
            </li>
            <li><a class="nav-button" data-key="nav-btn-friends" href="support" id="support-button"
                   aria-label="Support">Support</a></li>
            <li><a class="nav-button" href="${this._contactClickedEnglish}" id="contact-button" aria-label="Contact">Contact</a>
            </li>
          </ul>
        </div>

        <div lang="nl">
          <ul>
            <li><a class="nav-button" href="https://github.com/Ryan-Reddy" id="github-button"
                   aria-label="github">Github</a></li>
            <li><a class="nav-button" data-key="nav-btn-friends" href="friends" id="friends-button"
                   aria-label="Vrienden">Vrienden</a></li>
            <li><a class="nav-button" data-key="nav-btn-readme" href="readme" id="readme-button" aria-label="Leesmij">Leesmij</a>
            </li>
            <li><a class="nav-button" data-key="nav-btn-friends" href="support" id="support-button"
                   aria-label="Support">Support</a></li>
            <li><a class="nav-button" href="${this._contactClickedEnglish}" id="contact-button" aria-label="Contact">Contact</a>
            </li>
          </ul>
        </div>

      </nav>
    `;
  }

  connectedCallback() {
    super.connectedCallback()
    this._addLangMatch_classname()
  }

  firstUpdated() {
    let navigatorlanguage = sessionStorage.getItem('lang');
    if (navigatorlanguage == null) navigatorlanguage = navigator.language;
    this.staticNode = this.renderRoot.querySelectorAll("[lang=" + navigatorlanguage + "]");
    console.log(this.staticNode)
    let element: (value: Element, key: number, parent: NodeListOf<Element>) => void;
    this.staticNode.forEach(value => {
      console.log(value)
      value.className = "lang-match"
    })
  }

  _addLangMatch_classname() {
    console.log(this._language)
    console.log(this._containers)
    Array.prototype.forEach.call(this._containers, function (node) {
        console.log('adding class lang-match to ' + node)
        node.className = 'lang-match';
      }
    )
  }
}
