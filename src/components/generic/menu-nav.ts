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
  @property() siteLogo = 'unicorn-break-chains.jpg';
  @property() currentPage: string = '';
  @property() _logoBarClickedLink = 'mailto:ryan@reddy.world?subject=Hello I licked the unicorn!';

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
        position: relative;
        overflow: hidden;

        display: flex;
        justify-content: space-between;
        align-items: center;
      }

      .ingelogd_als {
        width: 176px;
        position: relative;
        left: 1em;
        font-family: Fira Code, serif;
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
          // top: 80px;
          // left: -100%;
          text-align: center;
        } nav ul li {
          display: block;
        } nav ul li a {
          font-size: 4vw;
        }
      ;

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
          <ul name="top-nav-menu">
            <li><a class="nav-button" href="home" id="home">Home</a></li>
            <li><a class="nav-button" href="cv" id="cv">CV</a></li>
<!--            <li><lang-element></lang-element></li> lang picked from browser lang-->
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
