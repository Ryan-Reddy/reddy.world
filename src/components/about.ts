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
  constructor() { super(); }

  firstUpdated(changedProperties: any) {
    let titleEvent = new CustomEvent('title-change', {
      detail: {
        message: 'About'
      }
    });
    console.log('dispatching event:' + titleEvent.detail.message)
    this.dispatchEvent(titleEvent);
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
        color: var(--grijs);
        background-color: var(--grijs);
      }

      button {
        width: 66%;
        height: 2em;
      }

      ul {
        list-style: none;

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
          <div class="landingImage">
            <img src="ryan_images/IMG_6869.png"
                 alt="Ryan Reddy profile image, black and white, straw hat"/>
          </div>
          <p>I’m a software developer, from Amsterdam in the Netherlands.
            <br>

            I'm a passionate software developer proudly based in the vibrant city of<br>
            Amsterdam, Netherlands.<br>
            <br>
            reddy.world is my creative space, where I offer cutting-edge web development <br>
            solutions that seamlessly merge innovation with captivating visual design. My <br>
            background combines a love for coding with an artistic touch. With a diverse <br>
            skill set encompassing art, design, special effects, and computer science <br>
            engineering, I craft websites that not only catch the eye but also excel in <br>
            technical performance. <br>
            <br>
            My firm belief is in the perfect synergy of artistic creativity and technical<br>
            precision. My extensive experience in project management across various<br>
            industries enables me to consistently achieve successful outcomes. I take great<br>
            pride in my meticulous attention to detail, ensuring every project is completed<br>
            on time and within budget. My ultimate goal is to provide you with a website<br>
            that not only represents your brand but also sets you apart from the<br>
            competition.<br>
          <hr>
          <p>Beyond my dedication to programming, my interests are as diverse as my
            professional journey. <br>
            I've ventured into several entrepreneurial endeavors,
            including:</p>
          <ul>
            <li><a href="https://nepco.nl/">Theater Costumes:</a>: Bringing characters to
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
            I'm constantly excited to connect with fellow enthusiasts, creators, and
            innovators like yourself.<br>
            <br>
            Thank you for visiting reddy.world,<br> where the possibilities are endless, and
            creativity knows no bounds.<br>
          </p>
        </div>
      </main>
      </body>
    `;
  }
}
