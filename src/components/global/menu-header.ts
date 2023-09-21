import {css, html, LitElement} from 'lit';
import {customElement, property, query} from 'lit/decorators.js';

/**
 * An example element.
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */
@customElement('header-menu')
export class MenuHeader extends LitElement {
  @property() naamGebruiker = 'Hans Fumphriehd';
  @property() siteLogo = 'be_here_now/be_here_now-no_outside-SCALED.png';
  // @property() siteLogo = 'be_here_now/be_here_now-color_corrected.png';
  @property() siteLogoDescription = 'Be Here Now. - Ram Dass';
  @property() currentPage: string = '';
  @property() _logoBarClickedLink = 'mailto:ryan@reddy.world?subject=Hello, I am here now!';
  @query('.dropdown-menu-div') _dropDownMenuDiv!: HTMLDivElement;
  @query('.dropdown-menu-items') _dropdownMenuItems!: HTMLUListElement;

  constructor() {
    super();
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

      .header_bar {
        position: relative;
        overflow: hidden;

        display: flex;
        justify-content: space-between;
        align-items: center;
        min-height: 5.25rem;
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
        line-height: 1.5rem;
        margin: 1rem;

      }

      nav ul li a {
        color: var(--wit);
        border-radius: 8px;
        text-transform: uppercase;
        padding: 1rem;
        padding-bottom: 0.75rem; /* Adjust the margin-bottom value as needed */

      }

      a.active, a:hover {
        background: var(--silver);
        transition: var(--transitionInSeconds);
        color: var(--zwart);
      }

      div #smallmenuicon {
        display: none;
      }

      .dropdown-menu-label {
        visibility: hidden;
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
        transition: var(--logoTransitionInSeconds);
      }

      .nav-logo:hover {
        height: 12em;
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
        width: 50%; /* 100% = Full width (cover the whole page) */
        height: 100%; /* Full height (cover the whole page) */
        top: 0;
        left: 3em;
        right: 0;
        bottom: 0;
        background-color: rgba(0, 0, 0, 0.5); /* Black background with opacity */
        z-index: 2; /* Specify a stack order in case you're using a different order for other elements */
      }

      @media (max-width: 952px) {
        //.nav-logo {
        //  height: 3em;
        //  padding-left: 50px;
        //}
        .header_bar {
          //position: relative;
          //overflow: hidden;
          //
          //display: flex;
          //justify-content: space-between;
          //align-items: center;
          min-height: 1.5rem;
        }

        .dropdown-menu-label {
          visibility: visible;
        }

        div #smallmenuicon {
          display: inline-block;
        }

        .nav-logo {
          height: 100%;
          //display: none;
          padding-right: 0;
        }

        .nav-logo:hover {
          height: 150%;
        }

        nav ul li {
          height: auto;
        }

        nav ul li a {
          display: none;
          // line-height: 8em;
          // margin: 0 1em;
        }

        .nav-button-dropdown {
          display: flex;
          //line-height: 4em;
          //margin: 0 1em;
          //padding: 0 100px;
        }
      }

      @media (max-width: 858px) {
        .checkbtn {
          display: block;
        }

        nav ul li {
          display: block;
        }

        nav ul li a {
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

        #smallmenuicon {
          -webkit-filter: invert(0%);
          filter: invert(0%);
        }
      }

    `;
  }

  render() {
    // create response menu with: https://www.codingnepalweb.com/responsive-dropdown-menu-bar-html-css/
    return html`
      <body id="bodyofmenubar">
      <div class="header_bar">
        <img
          @click=${this.logoClicked}
          src="${this.siteLogo}"
          alt="${this.siteLogoDescription}"
          class="nav-logo"
        />
        <nav>

          <ul name="top-nav-menu">
            <li><a class="nav-button" href="home" id="home">Home</a></li>
            <li><a class="nav-button" href="about" id="about">About</a></li>
            <li><a class="nav-button" href="cv" id="cv">CV</a></li>
            <!--            <li><lang-element></lang-element></li> lang picked from browser lang-->
          </ul>

          <div id='smallmenuicon'>
            <img src="icons/three-bars_32.png" width="32"
                 alt="three-bars img"
                 type="button"
                 class="dropdown-menu-label"
                 aria-haspopup="true"
                 aria-owns="language-menu"
                 aria-label="Current language is English. Choose your preferred language."
                 @click="${this._showDropDown}">
          </div>

          <div class="dropdown-menu-div" @mouseleave="${this._hideDropDown}"
          >
            <ul
              id="language-menu"
              class="dropdown-menu-items right show"
              aria-expanded="true"
              role="menu"
              @click="${this._hideDropDown}">
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
