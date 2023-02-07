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
          <h1>Hi, I’m Ryan Reddy.</h1>
          <br>
          <p>I’m a software developer, from Amsterdam in the Netherlands.
            <br>
            <br>
            I started coding when I was 8 when I built a "Harry Potter"-based Hogwarts website.
            <br>

          Since then, I have toyed with automation of theatre and club special effects,
            and have started a study in Computer Science Engineering in Utrecht.
          <hr>
          <p>Beyond programming, I have a keen interest in everything and I love learning.
            I have run multiple companies, among which:</p>
          <ul>
            <li><a href="https://https://nepco.nl/">Costumes for theatre</a></li>
            <li><a href="https://reddymaekersproductions.wordpress.com/">A decor/props company</a></li>
            <li><a href="https://www.facebook.com/HouseofGentleFrequencies/">Hosted a space for women's health</a></li>
            <li><a href="https://amsterdamsefrisdrankfabriek.nl/">Produced sodas</a></li>
            <li><a href="http://resethealthbar.nl/">Managed a food stand</a></li>
          </ul>
          <p>But I keep returning to product design and have found my love for coding is never-ending.</p>
          <hr>
          <p>Take a look at my <a href="cv">CV</a> for more details about my professional accomplishments.
            <br>
          <a>You can email me at <a href="${this._contact}">ryan@reddy.world</a>.
          </p>
        </div>
      </main>
      </body>
    `;
  }
}
