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

      .hidden {
        display: none;
        pointer-events: none;
        color: var(--silver);
        background-color: var(--silver);
      }

      button {
        width: 66%;
        height: 2em;
      }

      ul {
        list-style: none;
        margin-left: 10vw;
        align-content: space-evenly;
      }
    }

    p {
      padding-bottom: 1rem;
      padding-top: 1rem;
    }

    h1 {
      margin-bottom: 1rem;
      margin-top: 1rem;
    }

    h2 {
      text-align: left;
      margin-bottom: .8em;
      margin-top: .8em;
      margin-left: 3em;
    }

    h3 {
      text-align: left;
    }


    li {
      text-align: left;
      //margin-left: 5rem;
      margin-top: 0.5rem;


      fr {
        margin-bottom: 1rem;
        margin-top: 1rem;
      }

    ,
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
      <link rel="preload" href="ryan_images/IMG_6869-color-cropped.png" as="image">

      <link rel="stylesheet" href="css/mainCSS.css">
      <meta name="description" content="About Ryan Reddy.">
      <meta title="About me">
      <title>About me</title>

      <body>
      <main>
        <div>
          <h1>Hello, I’m Ryan Reddy.</h1>
        </div>

        <img class="landingImage" src="ryan_images/IMG_6869-color-cropped.png"
             alt="Ryan Reddy profile image, black and white, straw hat"
             loading="eager"
        />
        <br>
        <hr>
        <div>
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
              Bringing characters to
              life on stage with unique and captivating costumes.
            </li>
            <li>
              <h3>
                <a href="https://reddymaekersproductions.wordpress.com/">Decor and Props</a>
              </h3>
              Crafting immersive environments and captivating props for various creative
              projects.
            </li>
            <li>
              <h3>
                <a href="https://www.facebook.com/HouseofGentleFrequencies/">
                  Women's Health
                  Advocacy
                </a></h3>Hosting a platform dedicated to women's health, where
              knowledge and support meet.
            </li>
            <li>
              <h3>
                <a href="https://amsterdamsefrisdrankfabriek.nl/">Artisanal Soda
                  Production</a>
              </h3>Creating delightful, handcrafted sodas that tickle the taste
              buds.
            </li>
            <li>
              <h3>
                <a href="http://resethealthbar.nl/">
                  Food Stand Management</a>
              </h3>
              Serving up
              culinary delights to satisfy hungry appetites.
            </li>
          </ul>
          <p>
            <br>
            Amidst this colorful array of experiences, I allways circle back to my
            true passion:
            <br><br>
            Product Design.
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
