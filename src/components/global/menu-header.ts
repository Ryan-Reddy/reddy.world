import {css, html, LitElement} from 'lit';
import {customElement, property, query} from 'lit/decorators.js';
import langCSS from "../../css/langCSS";
import mainCSS from "../../css/mainCSS";

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
  @property() siteLogoWebp = 'be_here_now/be_here_now-no_outside-SCALED.webp';


  // @property() siteLogo = 'be_here_now/be_here_now-color_corrected.png';
  @property() siteLogoDescription = 'Be Here Now. - Ram Dass';
  @property() currentPage: string = '';
  @property() _logoBarClickedLink = 'mailto:ryan@reddy.world?subject=Hello, I am here now!';
  @property() _logoBarClickedLink2 = '/veranderkunde/HOME/index.html';
  @query('.dropdown-menu-div') _dropDownMenuDiv!: HTMLDivElement;
  @query('.dropdown-menu-items') _dropdownMenuItems!: HTMLUListElement;

  static get styles() {
    return [langCSS, mainCSS, css`
      * {
        //margin: 0;
        //padding: 0;
        text-decoration: none;
      }

      body {
        opacity: 1;
      }

      img {
        border: none !important;
      }

      .header_bar {
        justify-content: space-between;
        align-items: center;
        height: auto;
        padding: 2rem;
      }

      nav ul {
        float: left;
        //margin-right: 8em;
        //padding-right: 8em;
      }

      nav ul li {
        display: inline-block;
        //margin: 1rem;
        margin: 0;
        padding: 0;
        align-items: center;
      }

      nav ul li a {
        color: var(--wit);
        font-size: 4vw;
        line-height: 1.2em; /* Adjust the line-height as needed */
        border-radius: 8px;
        text-transform: uppercase;
        padding: 0.5rem 1rem; /* Adjust the padding as needed */
        margin: 0; /* Remove margin */
        display: inline-block; /* Add this to make the background color cover the entire link text */
        transition: background-color var(--transitionInSeconds); /* Add a transition for smoother hover effect */
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
        //height: 6vw;
      }

      li {
        list-style: none;
      }

      .nav-logo {
        object-fit: cover !important;
        height: 5em !important;
        opacity: 1 !important;
        position: absolute !important;
        right: 2em !important;
        padding: 1rem;
          padding-right: 1em !important;
      }

      @keyframes smoothMove {
        0% {
          transform: translateY(0) scale(1); /* Initial size and position */
        }
        100% {
          transform: translateY(1em) scale(1.6); /* Move down 1em and increase size by 20% */
        }
      }

      .nav-logo:hover {
        animation: smoothMove var(--logoTransitionInSeconds) ease; /* Use ease timing function for a smooth transition */
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
        width: 62.5%; /* 100% = Full width (cover the whole page) */
        height: 100%; /* Full height (cover the whole page) */
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: rgba(0, 0, 0, .9625); /* Black background with opacity */
        z-index: 2; /* Specify a stack order in case you're using a different order for other elements */
        margin: 0 auto; /* Center the child horizontally */
      }

      @media (max-width: 952px) {
        .header_bar {
          min-height: auto; /* Adjust the height as needed */
          justify-content: space-between;
          align-items: center;
          flex-direction: column;
        }

        nav {
          display: flex;
          align-items: center;
        }

        #smallmenuicon {
          margin-right: auto; /* pushes everything to its right */
          left: 0; /* stick to the left edge */
        }

        .dropdown-menu-label {
          visibility: visible;
        }

        div #smallmenuicon {
          display: inline-block;
        }

        nav ul[name="top-nav-menu"] {
          display: none; /* Hide the top-nav-menu */
          //float: right;
          margin-right: 2rem;
          padding-right: 2rem;
        }

        .nav-logo {
          height: 100%;
          display: none;
          padding-right: 0;
          border-width: 10px;
        }

        .nav-logo:hover {
          height: 150%;
        }

        nav ul {
          flex-direction: column; /* Stack the menu items vertically */
          align-items: center; /* Center align the menu items */
          margin: 1rem; /* Remove margin-right */
          padding: 1.5rem; /* Remove padding-right */
          float: none; /* Remove padding-right */
          font-size: 1.5rem;
        }

        nav ul li {
          height: auto;
          margin: 0; /* Remove margin */
        }

        nav ul li a {
          background-color: transparent;
          //display: block; /* Display the links as blocks */
          //line-height: 2; /* Adjust the line height as needed */
          //margin: 0rem 0; /* Add some vertical spacing */
          //padding: 2rem; /* Adjust padding as needed */
          //padding-bottom: 0.75rem; /* Adjust the margin-bottom value as needed */
        }

        .nav-button-dropdown {
          display: flex;
        }

        .checkbtn {
          display: block;
        }

        nav ul li {
          display: block;
        }
      }

      @media (prefers-color-scheme: light) {
        nav ul li a {
          color: var(--zwart);
        }

        footer, nav ul li a {
          background-color: transparent;
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

        .dropdown-menu-items {
          background-color: rgba(255, 255, 255, 0.96); /* Black background with opacity */
          border: var(--border);
        }

      }
    `];
  }

  render() {
    // create response menu with: https://www.codingnepalweb.com/responsive-dropdown-menu-bar-html-css/
    return html`
      <body id="bodyofmenubar">
      <div class="header_bar">
<!--        <a href="">-->
        <div id="logobox" @click="${this._logoClicked}">
          <picture>
            <!-- WebP format for browsers that support it -->
            <source type="image/webp" srcset="be_here_now/be_here_now-no_outside-SCALED.webp">

            <!-- Fallback PNG image for browsers that do not support WebP -->
            <img class="nav-logo" src="be_here_now/be_here_now-no_outside-SCALED.png" alt="Be Here Now. - Ram Dass">
          </picture>
        </div>

        <nav>
          <ul name="top-nav-menu">
            <!--            <li><a class="nav-button" href="/" id="home">Home</a></li>-->
            <li><a class="nav-button" href="/cv" id="cv">CV</a></li>
            <li><a class="nav-button" href="/bio" id="bio">Bio</a></li>
            <li><a class="nav-button" href="/contact" id="cv">Contact</a></li>
          </ul>

          <div id='smallmenuicon'>
            <picture>
              <source srcset="icons/three-bars_32.webp" type="image/webp">
              <img src="icons/three-bars_32.png" width="32"
                   alt="three-bars img"
                   type="button"
                   class="dropdown-menu-label"
                   aria-haspopup="true"
                   aria-owns="language-menu"
                   aria-label="Current language is English. Choose your preferred language."
                   @click="${this._showDropDown}">
            </picture>
          </div>

          <div class="dropdown-menu-div" @mouseleave="${this._hideDropDown}"
          >
            <ul
              id="language-menu"
              class="dropdown-menu-items right show"
              aria-expanded="true"
              role="menu"
              @click="${this._hideDropDown}">
              <li><a class="nav-button-dropdown" href="/bio" id="bio">Bio</a></li>
              <li><a class="nav-button-dropdown" href="/cv" id="cv">CV</a></li>
              <li><a class="nav-button" href="/portfolio" id="portfolio">Portfolio</a></li>
              <br>
              <li><a class="nav-button" href="/contact" id="cv">Contact</a></li>
              <br>
              <li><a href="https://www.linkedin.com/in/ryan-reddy-productions/">LinkedIn</a></li>
              <li><a href="https://github.com/Ryan-Reddy">Github</a></li>
            </ul>
          </div>
        </nav>
      </div>
      </body>
    `;
  }

  _logoClicked() {
    console.log('_logoClicked')
    // window.open(this._logoBarClickedLink);
    window.open(this._logoBarClickedLink2);
  }

  _showDropDown() {
    console.log('_showDropDown')
    console.log(this._dropdownMenuItems.innerText)
    this._dropdownMenuItems.style.display = 'flex';
  };

  _hideDropDown() {
    console.log('_hideDropDown')
    this._dropdownMenuItems.style.display = 'none';
  }

}
