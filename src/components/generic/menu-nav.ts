import {css, html, LitElement} from 'lit';
import {customElement, property, query} from 'lit/decorators.js';

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

  @query('.dropdown-menu-div') _dropDownMenuDiv!: HTMLDivElement;
  @query('.dropdown-menu-items') _dropdownMenuItems!: HTMLUListElement;


  constructor() {
    super();
    this.addEventListener('onChange',this._hideDropDown)
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
      div #smallmenuicon {
        display: none;
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
      #smallmenuicon {
        -webkit-filter: invert(100%);
        filter: invert(100%);
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
      @media (max-width: 952px) {
        div #smallmenuicon {
          display: inline-block;
        }
        .nav-logo {
          //height: 100%;
          display: none;
          // padding-left: 50px;
        }
        nav ul li a {
          display: none;
          // line-height: 8em;
          // margin: 0 1em;
        }
        .nav-button-dropdown{
          display: flex;
           line-height: 4em;
           margin: 0 1em;
        }
      }

      @media (max-width: 858px) {
        .checkbtn {
          display: block;
        }

        //u: {
        //  position: fixed;
        //  width: 100%;
        //  // top: 80px;
        //  // left: -100%;
        //  text-align: center;
        //}
      nav ul li {
          display: block;
        } nav ul li a {
          //font-size: 4vw;
        };
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
        #smallmenuicon {
          -webkit-filter: invert(0%);
          filter: invert(0%);
        }
      }

    `;
  }

  script() {
    let script = document.createElement('script');
    script.onload = this.onload.bind(this);
    script.src = 'https://cdn.apple-mapkit.com/mk/5.x.x/mapkit.js';
    return script;
  }

  render() {
    // TODO create response menu with: https://www.codingnepalweb.com/responsive-dropdown-menu-bar-html-css/
    return html`
      <body id="bodyofmenubar">
      <div class="entire_menu_bar">
        <img
          @click=${this.logoClicked}
          src="${this.siteLogo}"
          alt="Unicorn gold crown breaking free from a golden chain by whyn lewis flower oil on panel"
          class="nav-logo"
        />
        <nav>
          <div id='smallmenuicon'
          >
            <img src="three-bars.png" width="40em"
                 alt="three-bars img"
                 type="button"
                 class="dropdown-menu-label"
                 aria-haspopup="true"
                 aria-owns="language-menu"
                 aria-label="Current language is English. Choose your preferred language."
                 @click="${this._showDropDown}"
            >
          </div>

          <ul name="top-nav-menu">
            <li><a class="nav-button" href="home" id="home">Home</a></li>
            <li><a class="nav-button" href="about" id="about">About</a></li>
            <li><a class="nav-button" href="cv" id="cv">CV</a></li>
            <!--            <li><lang-element></lang-element></li> lang picked from browser lang-->
          </ul>

          <div class="dropdown-menu-div"
               @mouseleave="${this._hideDropDown}"
          >

            <ul
              id="language-menu"
              class="dropdown-menu-items right show"
              aria-expanded="true"
              role="menu"
            >
              <li><a class="nav-button-dropdown" href="home" id="home">Home</a></li>
              <li><a class="nav-button-dropdown" href="about" id="about">About</a></li>
              <li><a class="nav-button-dropdown" href="cv" id="cv">CV</a></li>
            </ul>
          </div>
        </nav>
      </div>
      </body>
    `;
  }

  logoClicked() {
    window.open(this._logoBarClickedLink);
  }
  _showDropDown() {
    console.log('_showDropDown')
    console.log(this._dropdownMenuItems.innerText)
    this._dropdownMenuItems.style.display = 'inline';
  };

  _hideDropDown() {
    console.log('_hideDropDown')
    this._dropdownMenuItems.style.display = 'none';
  }

}
