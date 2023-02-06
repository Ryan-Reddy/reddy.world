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
  @property() _supportClicked = 'mailto:ryanreddy@hotmail.com?subject=Hello friend! I wish to speak to you!';

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
          <h1>Hi, I’m Ryan Reddy.</h1>
          <p>I’m a software developer, from Amsterdam in the Netherlands.
            I started coding when I was 8 when I built a Harry Potter based Hogwarts website.</p>

          <p>Since then, I have toyed with automation of theatre and club special effects,
            and have started a study in Computer Science Engineering in Utrecht.</p>

          <p>Beyond programming, I have a keen interest in everything, I love learning.
            I have run multiple companies, among which;</p>
          <ul>
            <li><a href="https://reddymaekersproductions.wordpress.com/">- a decor company</a></li>
            <li><a href="https://www.facebook.com/HouseofGentleFrequencies/">- Hosted a space for women's health</a>
            </li>
            <li><a href="https://amsterdamsefrisdrankfabriek.nl/">- Produced soda's</a></li>
            <li><a href="http://resethealthbar.nl/">- Managed a foodstand</a></li>
          </ul>
          <p>But I always keep returning to product design, and have found my love for coding is the strongest.</p>

          <p>Take a look at my <a href="cv">CV</a> for more details about my professional accomplishments.</p>

          <a>You can email me at <a href="${this._supportClicked}">contact</a>.
        </div>
      </main>
      </body>
    `;
  }

  _contact() {
    window.open(this._supportClicked);
  }
}
