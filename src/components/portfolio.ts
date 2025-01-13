import { css, html, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';
import langCSS from "../css/langCSS";
import mainCSS from "../css/mainCSS";

/**
 * Portfolio element showcasing projects.
 *
 * @slot - This element has a slot
 */
@customElement('portfolio-element')
export class PortfolioElement extends LitElement {
  constructor() {
    super();
  }

  firstUpdated(changedProperties: any) {
    let titleEvent = new CustomEvent('title-change', {
      detail: {
        message: 'Portfolio'
      }
    });
    this.dispatchEvent(titleEvent);
  }

  static get styles() {
    return [
      langCSS,
      mainCSS,
      css`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
          text-decoration: none;
        }

        .hidden {
          display: none;
          pointer-events: none;
          color: lightgrey;
          background-color: var(--silver);
        }

        button {
          width: 66%;
          height: 2em;
        }

        ul {
          padding: 10px;
          margin: 20px auto;
          list-style: none;
        }

        li {
          margin: 10px 0;
        }

        //a {
        //  color: var(--primary-color, blue);
        //  font-weight: bold;
        //}

        a:hover {
          text-decoration: underline;
        }
      `,
    ];
  }

  render() {
    return html`
      <head>
        <meta charset="UTF-8" />
        <meta name="description" content="Ryan Reddy's portfolio." />
        <meta title="Portfolio" />
        <title>Portfolio</title>
      </head>

      <div>
        <h1>Portfolio</h1>

        <hr />

        <h2>Software Projects</h2>
        <ul>
          <li>
            <strong>Wanderzeit:</strong>
            <p>
              A walking app for hosting or joining walks, focusing on clean, user-friendly design.
            </p>
            <p>
              <a href="https://wanderzeit.nl/" class="nav-button" aria-label="Wanderzeit Project">View Project</a>
<!--              https://hu-sd-v3inno-fe-2024.github.io/teamopdracht-trailblazers/-->
            </p>
          </li>
          <li>
            <strong>RAL Contrast Checker:</strong>
            <p>
              A tool for designers and architects to evaluate RAL color contrasts for accessibility.
            </p>
            <p>
              <a href="/ral-contrast-checker" class="nav-button" aria-label="RAL Contrast Checker">View Project</a>
            </p>
          </li>
          <li>
            <strong>Archive Trawler:</strong>
            <p>
              A search tool that integrates multiple APIs into one interface with exportable results.
            </p>
            <p>
              <a href="/archive-trawler" class="nav-button" aria-label="Archive Trawler Project">View Project</a>
            </p>
          </li>
          <li>
            <strong>KPN Mobility Dashboard:</strong>
            <p>
              A dashboard app for visualizing and collecting CO2 mobility data of employees.
            </p>
            <p>
              <a href="https://kpn-vs-co2.web.app/" class="nav-button" aria-label="KPN Mobility Dashboard">View Project</a>
              <br>
              <strong>Demo:</strong> Login: ryan@reddy.world | Password: password
            </p>
          </li>
        </ul>

        <hr />

        <h2>Art</h2>
        <p>These are design and art companies I have managed and contributed to:</p>
        <ul>
          <li><a href="http://www.nepco.nl/" target="_blank">Costumes for Theatre</a></li>
          <li><a href="http://www.reddymaekersproductions.wordpress.com/" target="_blank">Decor/Props for Film and Events</a></li>
          <li><a href="http://www.ryanvanlil.wordpress.com" target="_blank">My old Portfolio</a></li>
        </ul>

      </div>
    `;
  }
}
