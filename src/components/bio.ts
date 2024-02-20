import {css, html, LitElement} from 'lit';
import {customElement, property} from 'lit/decorators.js';
import langCSS from "../css/langCSS";
import mainCSS from "../css/mainCSS";

/**
 * An example element.
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */
@customElement('bio-element')
export class BioElement extends LitElement {
  @property() _contact = 'mailto:ryan@reddy.world?subject=Hello friend! I wish to speak to you!';

  constructor() {
    super();
  }

  static get styles() {
    return [langCSS, mainCSS, css`
      :host {
        max-width: 1280px;
        height: 100vh;
        margin: 0 auto;
        padding: 2rem;
        text-align: center;
      }

      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        text-decoration: none;
        text-align: center;
      }

      //.hidden {
      //  display: none;
      //  pointer-events: none;
      //  color: var(--silver);
      //  background-color: var(--silver);
      //}

      button {
        width: 66%;
        height: 2em;
      }

      ul {
        list-style: none;
        margin-left: 7vw;
        align-content: space-evenly;
      }

      p {
        //padding: 1rem;
        width: 100%;
      }



      li {
        text-align: left;
        //margin-left: 5rem;
        margin-top: 0.5rem;

        fr {
          margin-bottom: 1rem;
          margin-top: 1rem;
        }

        @media (max-width: 952px) {
          main {
            margin: 1rem;
          }

          ul {
            list-style: none;
            margin-left: 0;
            align-content: space-evenly;
          }
          #bio {
            text-align: center; /* Center the text horizontally */
            max-width: 800px; /* Adjust this value as needed */
            margin: 0 auto; /* Center the container horizontally */
            padding: 1rem;
          }
        },
    `];
  }

  firstUpdated(changedProperties: any) {
    let titleEvent = new CustomEvent('title-change', {
      detail: {
        message: 'Ryan Reddy Biography'
      }
    });
    this.dispatchEvent(titleEvent);
  }

  render() {
    return html`
      <link rel="preload" href="ryan_images/IMG_6869-color-cropped.png" as="image">
      <meta name="description" content="About Ryan Reddy.">
      <meta name="title" content="Ryan Reddy Biography">
      <title>Ryan Reddy Biography</title>


      <div id="bio">
        <div id="titlebox">
          <h1 class="header">Ryan Reddy</h1>
          <p class="undertitle">Artist,
            <br>Product Designer
            <br> and Computer Science Engineer.</p>
        </div>


        <picture>
          <!-- WebP format for browsers that support it -->
          <source srcset="/ryan_images/IMG_6869-scaled.webp" type="image/webp">

          <!-- Fallback PNG image for browsers that do not support WebP -->
          <img src="/ryan_images/IMG_6869.png" class="landingImage"
               alt="Ryan Reddy profile image, black and white, straw hat">
        </picture>
        <br>
        <hr>
        <h2>Bio</h2>
        <p>I'm a software developer based in Amsterdam, Netherlands.<br>
          Welcome to reddy.world, where I specialize in web <br>
          development that combines innovation with design excellence. <br>
          My background encompasses website building, art, design, special effects, and computer science engineering.
          <br>
          I create websites that not only look impressive but also perform exceptionally well. <br>
          <br>
          I prioritize the perfect balance between artistic creativity and technical precision. <br>
          With extensive project management experience in various industries, <br>
          I consistently deliver on time and within budget. <br>
          My goal is to
          provide you with a distinctive website that represents your brand and outshines the competition.</p>

        <hr>
        <h2>Side ventures</h2>

        <p>Beyond my dedication to programming, my interests are as diverse as my
          professional journey. <br>
          I've ventured into several entrepreneurial endeavors,
          including:</p>
        <ul>
          <li>
            <h3>
              <a href="https://nepco.nl/">Theater Costumes:</a>
            </h3>
            <p>
            Bringing characters to
            life on stage with unique and captivating costumes.
            </p>

          </li>
          <li>
            <h3>
              <a href="https://reddymaekersproductions.wordpress.com/">Decor and Props</a>
            </h3>
            <p>
            Crafting immersive environments and captivating props for various creative
            projects.
            </p>
          </li>
          <li>
            <h3>
              <a href="https://www.facebook.com/HouseofGentleFrequencies/">
                Women's Health
                Advocacy
              </a></h3>
            <p>
              Hosting a platform dedicated to women's health, where
              knowledge and support meet.
            </p>
          </li>
          <li>
            <h3>
              <a href="https://amsterdamsefrisdrankfabriek.nl/">Artisanal Soda
                Production</a>
            </h3>
            <p>
              Creating delightful, handcrafted sodas that tickle the taste
              buds.
            </p>
          </li>
          <li>
            <h3>
              <a href="http://resethealthbar.nl/">
                Food Stand Management</a>
            </h3>
            <p>
              Serving up
              culinary delights to satisfy hungry appetites.
            </p>
          </li>
        </ul>
        <p>
          <br>
          Amidst this colorful array of experiences, I always come back to my
          true passion:
          <br><br>
          Making life better for everyone.
          <br>
          My lust for improving the human experience is the driving force behind all my work.</p>
        <hr>
        <h2>Be here, now.</h2>
        <p>If you're interested in delving deeper, please explore my <br>
          <a href="cv">CV</a> <br>
          for a comprehensive overview of my accomplishments.
          <br>

          For inquiries, potential collaborations, <br>
          or even just a friendly chat, <br>
          don't hesitate to reach out to me at <a
            href="${this._contact}">ryan@reddy.world</a>.<br>
        </p>
      </div>
    `;
  }
}
