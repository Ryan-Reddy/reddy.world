import {css, html, LitElement} from 'lit';
import {customElement, property} from 'lit/decorators.js';


/**
 * An example element.
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */
@customElement('menu-nav-element')
export class MenuNav extends LitElement {
  @property() naamGebruiker = 'Hans Fumphriehd';
  // @property() kpnLogo = '/public/branding/kpn-logo2-jpeg.jpg';
  @property() siteLogo = 'unicorn-break-chains.jpg';
  @property() currentPage: string = '';
  @property() _logoBarClickedLink = 'mailto:klugook@gmail.com?subject=Hello fellow wanderer!';

  constructor() {
    super();
    this.onLoad();
  }

  static get styles() {
    return css`
      * {
        margin: 0;
        padding: 0;
        // box-sizing: border-box;
        text-decoration: none;
      }

      body {
        font-size: 1em;
        opacity: 1;
      }

      .entire_menu_bar {
        height: 8em;
        position: relative;
        overflow: hidden;
        padding: 1rem 1.5rem;

        display: flex;
        justify-content: space-between;
        align-items: center;
      }

      .ingelogd_als {
        width: 176px;
        position: relative;
        left: 1em;
        font-family: Fira Code,serif;
        font-size: 12px;
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

      .nav-logo {
        object-fit: cover;
        height: 5em;
        opacity: 1;
        position: absolute;
        right: 2em;
        overflow: hidden;
        padding: 0 2em;
      }

      .nav-logo:hover {
        height: 7.5em;
        transition: var(--transitionInSeconds);
      }

      #check {
        display: none;
      }

      #check:checked ~ ul {
        left: 0;
      }

      @media (max-width: 952px) {
            .entire_menu_bar {
          height: 100%;
          font-size: 1vw;

      }
        .nav-logo {
          height: 100%;
          // padding-left: 50px;
        }

        nav ul li a {
          display: inline-flex;
          // line-height: 8em;
          // margin: 0 1em;
        }
      }

      @media (max-width: 858px) {
        .checkbtn {
          display: block;
        }

        u: {
          position: fixed;
          width: 100%;
          // height: 100vh;
          // top: 80px;
          // left: -100%;
          text-align: center;
          transition: var(--transitionInSeconds);
        } nav ul li {
          // display: block;
        } nav ul li a {
          font-size: 20px;
        };

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

  script() {
    let script = document.createElement('script');
    script.onload = this.onLoad.bind(this);
    script.src = 'https://cdn.apple-mapkit.com/mk/5.x.x/mapkit.js';
    return script;
  }

  onLoad() {
    // alert('loaded nav-menu');
  }

  render() {
    // TODO create response menu with: https://www.codingnepalweb.com/responsive-dropdown-menu-bar-html-css/
    return html`
      <body id="bodyofmenubar">
      <!--      <a href="#" class="ingelogd_als">ingelogd als ${this.naamGebruiker}</a>-->
      <div class="entire_menu_bar">
        <img
          @click=${this.logoClicked}
          href="#"
          src="${this.siteLogo}"
          alt="Unicorn gold crown breaking free from a golden chain by whyn lewis flower oil on panel"
          class="nav-logo"
        />
        <nav>
          <input type="checkbox" id="check"/>
          <label for="check">
            <i class="fas fa-bars"></i>
          </label>
          <ul>
            <li><a class="nav-button" href="home" id="home">Home</a></li>
            <li><a class="nav-button" href="account" id="account">Account</a></li>
            <li><a class="nav-button" href="support" id="support">Support</a></li>
            <li>
              <a class="nav-button" href="#" id="Uitloggen">Uitloggen</a>
            </li>
          </ul>
        </nav>
      </div>
      </body>
    `;
  }

  _clickMenu(e: Event) {
    console.log('_dispatchPageLink()');
    // @ts-ignore
    const id = e.target.id;
    console.log('id= ' + id);

    const hasChanged = this.currentPage !== id;

    if (hasChanged) {
      this.currentPage = id;
      window.open(id);

      //notify parent:
      // this.dispatchEvent(new Event('page-chosen'));
    }
  }

  logoClicked() {
    window.open(this._logoBarClickedLink);
  }
}