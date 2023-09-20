import {css, html, LitElement} from 'lit';
import {customElement, property} from 'lit/decorators.js';

/**
 * An example element.
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */
@customElement('about-element')
export class SupportElement extends LitElement {
  @property() _contact = 'mailto:ryan@reddy.world?subject=Hello friend! I wish to speak to you!';

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

        text-align: center;

      }

      hr {
        margin: 1rem;
      }

      img {
        width: auto;
        max-height: 60svh;
        max-width: 90%;
      }

      .hidden {
        display: none;
        pointer-events: none;
        color: var(--grijs);
        background-color: var(--grijs);
      }

      button {
        width: 66%;
        height: 2em;
      }

      ul {
        list-style: none;
        //margin-left: 10vw;
        //align-content: space-evenly;

      }

      li {
        text-align: left;
        margin-left: 5rem;
      }

      li::before {
        content: '- ';
      }

      p {
        padding-bottom: 10px;
        padding-top: 10px;
      }
    `;
  }

  firstUpdated(changedProperties: any) {
    let titleEvent = new CustomEvent('title-change', {
      detail: {
        message: 'About'
      }
    });
    console.log('dispatching event:' + titleEvent.detail.message)
    this.dispatchEvent(titleEvent);
  }

  render() {
    return html`
      <meta name="description" content="Ryan Reddy's world.">
      <meta title="About me">
      <title>About me</title>
      <body>
      <main>
        <div>
          <h1>Hello, I’m Ryan Reddy.</h1>
          <br>
        </div>

        <img class="landingImage" src="ryan_images/IMG_6869-color-cropped.png"
             alt="Ryan Reddy profile image, black and white, straw hat"/>

        <div><br>

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
          <p>Beyond my dedication to programming, my interests are as diverse as my
            professional journey. <br>
            I've ventured into several entrepreneurial endeavors,
            including:</p>
          <ul>
            <li><a href="https://nepco.nl/">Theater Costumes:</a> Bringing characters to
              life on stage with unique and captivating costumes.
            </li>
            <li><a href="https://reddymaekersproductions.wordpress.com/">Decor and Props</a>:
              Crafting immersive environments and captivating props for various creative
              projects.
            </li>
            <li><a href="https://www.facebook.com/HouseofGentleFrequencies/">Women's Health
              Advocacy</a>: Hosting a platform dedicated to women's health, where
              knowledge and support meet.
            </li>
            <li><a href="https://amsterdamsefrisdrankfabriek.nl/">Artisanal Soda
              Production</a>: Creating delightful, handcrafted sodas that tickle the taste
              buds.
            </li>
            <li><a href="http://resethealthbar.nl/">Food Stand Management</a>: Serving up
              culinary delights to satisfy hungry appetites.
            </li>
          </ul>
          <p>Amidst this colorful array of experiences, my heart always leads me back to my
            true passion: product design.<br>
            My unwavering love for improving the way we live is the driving force behind all
            my work.</p>

          <hr>
          <p>If you're interested in delving deeper into my professional journey, please
            explore my <a href="cv">CV</a><br>
            for a comprehensive overview of my accomplishments.
            <br>

            For inquiries, potential collaborations, or even just a friendly chat, <br>
            don't hesitate to reach out to me at <a
              href="${this._contact}">ryan@reddy.world</a>.<br>

            <br>
            Thank you for visiting reddy.world,<br> where the possibilities are endless, and
            creativity knows no bounds.
          </p>
        </div>
      </main>
      </body>
    `;
  }
}
