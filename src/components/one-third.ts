import {css, html, LitElement} from 'lit';
import {customElement, property, query} from 'lit/decorators.js';
import '/css/mainCSS.css';

@customElement('one-third-element')
export class ContactElement extends LitElement {
  @property() _hiddenElement = 'hidden';
  @property() _shadowRoot!: ShadowRoot;
  @query('#name') _name!: any;
  @query('#email') _email!: any;
  @query('#subject') _subject!: any;
  @query('#message') _message!: any;

  constructor() {
    super();
  }

  static get styles() {
    return css`

      .paragraph {
        margin-top: 5vh;
        margin-bottom: 20vh;
      }

      .invitation {
        background-color: var(--background-color);
        padding: 20px;
        border-radius: 10px;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
        text-align: center;
        margin-bottom: 20px;
      }

      .invitation h2 {
        font-size: 24px;
        color: var(--primary-color);
      }

      .invitation p {
        font-size: 18px;
        margin-top: 10px;
      }

      .invitation a.button {
        text-decoration: none;
        display: inline-block;
        background: var(--primary-color);
        color: white;
        font-size: 2.5rem;
        border: none;
        border-radius: 5px;
        padding: 10px 20px;
        cursor: pointer;
        transition: background 0.3s ease;
      }


      a.active, a:hover {
        background: var(--silver);
        transition: var(--transitionInSeconds);
        //color: #8e8e8e !important
      }

      @media (prefers-color-scheme: light) {

        .invitation a.button {
          color: var(--zwart);
        }

        footer, nav ul li a {
          color: var(--zwart);
          background-color: var(--wit);
          border-color: var(--wit);
        }

        a.active, a:hover {
          color: var(--wit);
          transition: var(--transitionInSeconds);
        }

    `;
  }

  firstUpdated(changedProperties: any) {
    let titleEvent = new CustomEvent('title-change', {
      detail: {
        message: 'A Cosmic Celebration',
      },
    });
    console.log('dispatching event:' + titleEvent.detail.message);
    this.dispatchEvent(titleEvent);

    // Wait for DOMContentLoaded event to ensure the DOM is ready
    window.addEventListener('DOMContentLoaded', () => {
      // Log a message to verify if this code is executed

      // Scroll down 200 pixels from the top
      window.scrollTo(0, 0);
      window.scrollBy(0, 200);
    });
  }

  connectedCallback() {
    super.connectedCallback();
  }

  render() {
    return html`
      <link rel="stylesheet" href="/css/mainCSS.css">
      <meta name="description" content="Ryan Reddy cordially invites you to join him.">
      <meta title="one third ">
      <body>
      <main>
        <div class="invitation">
          <h1>A Cosmic Celebration</h1>

          <img src="cloudwalker.jpg"
               alt="long foothpath wide ridge, with green grass on top, very curvy and tricky looking. A female dances on the edge of it, clearly making her way in one direction toward the horizon. "
               loading="eager"
          />

          <div class="paragraph">
            <h2>Join me for a gathering beneath the starlit tapestry.</h2>
            <p>As the clock ticks toward my 🌌 <i>33,333rd</i> orbit, we'll come together for a celestial soirée.</p>
            <p>Save the date:
              <a
                href="https://calendar.google.com/calendar/event?action=TEMPLATE&tmeid=MDNrM3NjcmRhcHMwY2JvamoyY2JlZWUzMDAga2x1Z29va0Bt&tmsrc=klugook%40gmail.com">
                <i>December 24, 2024</i>, from <i>3:00 PM to 6:00 PM.</i></a>
            </p>
            <p>A celestial moment etched in the heavens. 🌠🌌</p>
            <p>* Born amidst the stars on <i>21-09-1991.</i></a></p>

            <a href="mailto:ryan@reddy.world?subject=RSVP for Cosmic Celebration" class="button">RSVP Now</a>

            <hr>
            <h3>Stay tuned for more details in due course.</h3>
          </div>
        </div>


        </div>


      </main>
      </body>
    `;
  }
}
