import {css, html, LitElement} from 'lit';
import {customElement, query} from 'lit/decorators.js';
import mainCSS from '../../css/langCSS';
import langCSS from '../../css/mainCSS';


/**
 * An example element.
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */
@customElement('blackjack-element')
export class CVElement extends LitElement {
  // @query('#bio') bioSection!: HTMLElement;

  constructor() {
    super();
  }

  static get styles() {
    return [langCSS, mainCSS, css`
      body {
        font-family: Arial, sans-serif;
        background-color: #2c3e50;
        color: white;
        text-align: center;
      }

      .game-container {
        display: flex;
        justify-content: space-around;
        margin-top: 50px;
      }

      .cards {
        display: flex;
        width: 100%;
        padding: 0.5rem;
      }

      img {
        max-height: 10rem;
        border: .5rem solid rgb(246, 246, 220) !important;
      }

      .card {
        border: 1px solid white;
        padding: 10px 15px;
        margin: 5px;
        border-radius: 5px;
        background-color: #e74c3c;
      }

      button {
        margin-top: 20px;
        padding: 10px 20px;
        background-color: #3498db;
        border: none;
        border-radius: 5px;
        color: white;
        cursor: pointer;
        transition: background-color 0.3s ease;
      }

      button:hover {
        background-color: #2980b9;
      }


      @media screen and (max-width: 660px) {
      }

      @media (max-width: 952px) {
      }
    `];
  }

  // Function to handle smooth scrolling
  scrollToSection(section: HTMLElement) {
    if (section) {
      section.scrollIntoView({behavior: 'smooth', block: 'start'});
    }
  }

  firstUpdated(changedProperties: any) {
    let titleEvent = new CustomEvent('title-change', {
      detail: {
        message: 'C.V. Ryan van Lil-Reddy'
      }
    });
    this.dispatchEvent(titleEvent);
  }

  render() {
    return html`
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Blackjack Game</title>
        <link rel="stylesheet" href="styles.css">
      </head>
      <body>
      <div class="game-container">
        <div class="dealer">
          <h2>Dealer's Hand</h2>
          <div class="cards" id="dealerCards">
            <img src="blackjack/cards/ace_of_diamonds.png">
            <img src="blackjack/cards/zzz_closed_card.png">
          </div>
        </div>

        <div class="player">
          <h2>Your Hand</h2>
          <div class="cards" id="playerCards">
            <img src="blackjack/cards/2_of_clubs.png">
            <img src="blackjack/cards/ace_of_diamonds.png">
          </div>

          <button id="hitBtn">Hit</button>
          <button id="standBtn">Stand</button>
        </div>


      </div>
      <script src="script.js"></script>
      </body>
      </html>
    `;
  }
}
