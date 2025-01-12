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
          display: block;
      }

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
  <p>
    I'm a software developer based in Amsterdam, Netherlands.<br>
    At reddy.world, I craft innovative websites that blend artistic creativity with technical precision.<br>
    My diverse background in web development, design, special effects, and computer science ensures high-performing websites that look and function exceptionally well.<br>
    With extensive project management experience, I deliver on time and within budget, creating distinctive websites that make brands shine.<br>
  </p>

  <hr>

  <h2>Side Ventures</h2>
  <p>
    Beyond programming, I've explored poured my passion into various entrepreneurial endeavors:
    <ul>
      <li><h3><strong><a href="https://nepco.nl/">Theater Costumes</a></strong><br>Creating captivating stage characters.</h3></li>
      <li><h3><strong><a href="https://reddymaekersproductions.wordpress.com/">Decor and Props</a></strong><br>Crafting immersive environments.</h3></li>
      <li><h3><strong><a href="https://www.facebook.com/HouseofGentleFrequencies/">Women's Health Advocacy</a></strong><br>Supporting women’s well-being.</h3></li>
      <li><h3><strong><a href="https://amsterdamsefrisdrankfabriek.nl/">Artisanal Soda Production</a></strong><br>Handcrafted beverages.</h3></li>
      <li><h3><strong><a href="http://resethealthbar.nl/">Food Stand Management</a></strong><br>Delivering culinary delights.</h3></li>
    </ul>
  </p>

  <hr>

  <h2>Be Here, Now</h2>
  <p>
    Interested in my journey? Check out my <a href="cv">CV</a> for a detailed overview.<br>
    For collaborations or a friendly chat, reach out at <a href="mailto:ryan@reddy.world">ryan@reddy.world</a>.
  </p>
</div>

    `;
  }
}
