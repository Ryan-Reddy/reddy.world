import {css, html, LitElement} from 'lit';
import {customElement, query} from 'lit/decorators.js';

/**
 * An example element.
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */
@customElement('footer-menu')
export class MenuFooter extends LitElement {
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
        justify-content: space-between;

        overflow: hidden;
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
      a {
                /* font-size: 10vw;*/
      }

            input {
        max-width: 100%;
        height: auto;
        width: auto\\9; /* ie8 */
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

        footer {
          /*width: 100%;*/
          height: 100%;
          /*bottom: 0;*/
          /*position: fixed;*/
          margin-top: 100%;


          position: relative;
          /* negative value of footer height makes it possible for menu to show on mobile*/
          height: -180px;


          background-color: var(--zwart);
          opacity: 1;
        }

        u: {
          position: fixed;
          width: 100%;
          height: 100vh;
          top: 80px;
          left: -100%;
          text-align: center;
          transition: all .5s;
        } nav ul li {
          display: block;

          a:hover, a.active {
            background: none;
          }

          #check:checked ~ ul {
            left: 0;
          }
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
  @query('a', true) _input!: HTMLInputElement;

  render() {
    return html`
        <nav>
          <ul @click="${this._clickMenu}">
<!--            <li><a class="nav-button" href="login" id="Login" value="Log in"">Log in</a></li>-->
            <li><a class="nav-button" href="cv" id="cv-button" value="CV">CV</a></li>
            <li><a class="nav-button" href="friends" id="friends-button" value="Friends">Friends</a></li>
            <li><a class="nav-button" href="readme" id="readme-button" value="Readme">Readme</a></li>
            <li><a class="nav-button" href="support" id="support-button" value="Support">Support</a></li>
<!--            <li><a class="nav-button" href="#" id="Logout" value="Log out">Log out</a></li>-->
          </ul>
        </nav>
    `;
  }

  _clickMenu() {
    const name = this._input.value.trim();
    if (name) {
      const options = {
        detail: {name},
        bubbles: true,
        composed: true
      };
      this.dispatchEvent(new CustomEvent('pageChoice', options));

      console.log('_dispatchPageLink() need to write funcion clickmenu in menu-footer');
      //   // @ts-ignore
      //   const id = e.target.id;
      //   console.log('id= ' + id);
      //
      //   const hasChanged = this.currentPage !== id;
      //
      //   if (hasChanged) {
      //     this.currentPage = id;
      //
      //     //notify parent:
      this.dispatchEvent(new Event('page-chosen'));
      //   }
    }
  }
}
