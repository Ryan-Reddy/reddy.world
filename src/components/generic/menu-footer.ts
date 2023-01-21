import {css, html, LitElement} from 'lit';
import {customElement} from 'lit/decorators.js';

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
      }

      body {
        font-family: Montserrat;
        color: white;
        font-size: 1em;
        opacity: 1;
      }


      footer {
        /*width: 100%;*/
        /*height: 8em;*/
        /*bottom: 0;*/
        /*position: fixed;*/
        padding: 1rem 1.5rem;

        overflow: hidden;
        display: flex;
        justify-content: space-between;
        align-items: center;

        position: relative;
        /* negative value of footer height */
        height: 180px;

        background-color: var(--zwart);
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
        margin-right: 8em;
        padding-right: 8em;
      }

      nav ul li {
        display: inline-block;
        line-height: 8em;
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
                font-size: 10vw;
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
          line-height: 3em;
          margin: 0 1em;
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
      <footer>
        <nav>
          <ul
            @click=${this._clickMenu}
            id="nope">
            <li>
              <a class="nav-button" href="login" id="Login">Log in</a>
            </li>
            <li>
              <a class="nav-button" href="support" id="Support">Support</a>
            </li>
            <li>
              <a class="nav-button" href="readme" id="Readme">Readme</a>
            </li>
            <li>
              <a class="friends-button" href="friends" id="friends-button">Friends</a>
            </li>
            <li>
              <a class="nav-button" href="#" id="Logout">Log out</a>
            </li>
          </ul>
        </nav>
      </footer>
    `;
  }

  _clickMenu(e: Event) {
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
    //     this.dispatchEvent(new Event('page-chosen'));
    //   }
  }
}
