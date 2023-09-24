import {css, html, LitElement} from 'lit';
import {customElement} from 'lit/decorators.js';

/**
 * An example element.
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */
@customElement('cv-linkedin-element')
export class CVElement extends LitElement {

  constructor() {
    super();
  }

  static get styles() {
    return css`
      #cv {
        width: 100vw;
        list-style-type: none; /* Remove default list bullets */
        padding: 1rem; /* Remove default padding */

      }

      li, ul {
        padding: 0;
      }

      undertitle {
        italic: true;
      }

      bio {
        width: 80%;
      }

      experience {
        width: 80%;
      }

      #experience-list {
        display: grid;
        grid-template-columns: 1fr;

        li {
          width: 80%;
        }
      }


      skills {
        padding: 1rem;

      }

      #skillsGrid {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr;
        padding: 1rem;

      }

      @media (max-width: 952px) {
        skillsgrid {
          grid-template-columns: 1fr;
        }

        experience {
          padding: 1rem;
        }

        li {
          max-width: 100vw;
        }
      }

    `;
  }

  firstUpdated(changedProperties: any) {
    let titleEvent = new CustomEvent('title-change', {
      detail: {
        message: 'C.V. Ryan van Lil-Reddy'
      }
    });
    console.log('dispatching event:' + titleEvent.detail.message)
    this.dispatchEvent(titleEvent);
  }

  render() {
    return html`
      <link rel="stylesheet" href="/css/mainCSS.css">

      <div id="cv">
        <header>
          <h1 hidden>C.V.</h1>
        </header>
        <main>
          <main>
            <h1>Ryan van Lil-Reddy</h1>
            <nav>
              <ul>
                <li><a href="#experience">Experience</a></li>
                <li><a href="#skills">Skills</a></li>
              </ul>
            </nav>

            <bio>
              "Driven by a passion for making a positive impact, I've ventured through various fields—from direct sales
              to
              journalism, management, and even modeling and acting. Inspired by Alan Watts, I've embarked on a journey
              to
              pursue what truly makes me happy, leading me to excel in the world of Computer Science Engineering."
              - Ryan
            </bio>
            <hr>

            <h2>Experience</h2>
            <experience>
              <ul id="experience-list">
                <li>
                  <h3>Tom Crown Live Crypto Trading on Youtube</h3>
                  <undertitle>Bachelor Computer Science Engineering</undertitle>
                  <timeframe>September 2021 - (currently active)</timeframe>
                  <p>
                    Studying at the Hogeschool Utrecht in the Netherlands.
                  </p>
                </li>
                <li>
                  <h3>Tom Crown on Youtube</h3>
                  <undertitle>Editor In Chief</undertitle>
                  <timeframe>November 2020 - September 2021 (11 months)</timeframe>
                  <p>
                    Video Editing, content creation, image design, moderation, audience management.
                  </p>
                </li>
                <li>
                  <h3>Amsterdamse Frisdrank Fabriek</h3>
                  <undertitle>B-2-B Sales</undertitle>
                  <timeframe>June 2020 - June 2021 (1 year 1 month)</timeframe>
                  <p>
                    Amsterdam, North Holland, Netherlands
                    Business-to-business sales of craft lemonades in the Benelux area.
                  </p>
                </li>
                <li>
                  <h3>ReddyMaekers</h3>
                  <undertitle>Co-Founder, CAD Designer, Art Direction</undertitle>
                  <timeframe>September 2014 - July 2019 (4 years 11 months)</timeframe>
                  <p>
                    Netherlands
                    Festival/filmset decors and props, and other customized building assignments/brand activations.
                    See <a href="https://www.ReddyMaekers.com">www.ReddyMaekers.com</a> and <a
                    href="https://www.instagram.com/reddymaekers/">Instagram</a> for more info!
                  </p>
                </li>
                <li>
                  <h3>Studio Nepco</h3>
                  <undertitle>Art Director/Designer</undertitle>
                  <timeframe>October 2015 - September 2018 (3 years)</timeframe>
                  <p>
                    Amsterdam Area, Netherlands
                    Pattern design, Foam Modulation, painting, Robotics, Sewing, Film/theatre Production, Acting.
                  </p>
                </li>
                <li>
                  <h3>Ryan Reddy Productions</h3>
                  <undertitle>Creative Art Director, Founder</undertitle>
                  <timeframe>September 2015 - September 2017 (2 years 1 month)</timeframe>
                  <p>
                    Making things, of metals, wood, plastics, fabrics, and everything in between.
                  </p>
                </li>
                <li>
                  <h3>Joris Laarman Lab</h3>
                  <undertitle>Furniture Maker Internship</undertitle>
                  <timeframe>November 2014 - March 2015 (5 months)</timeframe>
                  <p>
                    Amsterdam Area, Netherlands
                    Cutting-edge technique, combined with old lore crafts.
                    CAD design, 3D manufacturing techniques.
                    The renowned Joris Laarman furniture is shown in galleries and museums all over the world.
                  </p>
                </li>
                <li>
                  <h3>Pepperminds</h3>
                  <undertitle>Face-to-face sales, coaching, management, Team-Captain</undertitle>
                  <timeframe>May 2009 - August 2011 (2 years 4 months)</timeframe>
                  <p>
                    Haarlem, North Holland, Netherlands
                    Education
                  </p>
                </li>
                <li>
                  <h3>Utrecht University of Applied Sciences</h3>
                  <undertitle>Bachelor of Applied Science - BASc, Software Development</undertitle>
                  <timeframe>September 2021 - August 2025</timeframe>
                </li>
                <li>
                  <h3>Hout- en Meubileringscollege</h3>
                  <undertitle>Higher Vocational College, Furniture Design and Manufacturing</undertitle>
                  <timeframe>September 2013 - July 2017</timeframe>
                </li>
                <li>
                  <h3>Eerste Christelijke Lyceum Haarlem</h3>
                  <undertitle>HAVO Nature+Technique, Nature, Physics, Technology, Art</undertitle>
                  <timeframe>2004 - 2009</timeframe>
                </li>
                <li>
                  <h3>'t Koggeschip</h3>
                  <undertitle>Primary</undertitle>
                  <timeframe>1995 - 2003</timeframe>
                </li>
              </ul>
            </experience>

            <skills>
              <h2>Skills</h2>
              <hr>
              <div id="skillsgrid">
                <div class="computer-skills">
                  <h3>Computer Skills</h3>
                  <div class="skill-badge">
                    <span class="skill-name">Frameworks (e.g., JUnit, Cucumber)</span>
                  </div>
                  <div class="skill-badge">
                    <span class="skill-name">Object-Oriented Programming (OOP)</span>
                  </div>
                  <div class="skill-badge">
                    <span class="skill-name">CAD DESIGN (3D Modeling, Rhino 3D)</span>
                  </div>
                </div>

                <div class="programming-languages">
                  <h3>Programming Languages</h3>
                  <div class="skill-badge">
                    <span class="skill-name">Python</span>
                  </div>
                  <div class="skill-badge">
                    <span class="skill-name">Java</span>
                  </div>
                  <div class="skill-badge">
                    <span class="skill-name">Html, css, javascript, typescript</span>
                  </div>
                  <div class="skill-badge">
                    <span class="skill-name">JUnit</span>
                  </div>
                  <div class="skill-badge">
                    <span class="skill-name">Cucumber</span>
                  </div>
                  <div class="skill-badge">
                    <span class="skill-name">PostgreSQL</span>
                  </div>
                </div>

                <div class="real-life-languages">
                  <h3>Real-Life Languages</h3>
                  <div class="skill-badge">
                    <span class="skill-name">English</span>
                  </div>
                  <div class="skill-badge">
                    <span class="skill-name">Dutch</span>
                  </div>
                </div>

                <div class="other-skills">
                  <h3>Other Skills</h3>
                  <div class="skill-badge">
                    <span class="skill-name">Team Leadership</span>
                  </div>
                  <div class="skill-badge">
                    <span class="skill-name">Concept Development</span>
                  </div>
                  <div class="skill-badge">
                    <span class="skill-name">Fine Woodworking</span>
                  </div>
                  <div class="skill-badge">
                    <span class="skill-name">Set Decoration</span>
                  </div>
                  <div class="skill-badge">
                    <span class="skill-name">Sewing</span>
                  </div>
                  <div class="skill-badge">
                    <span class="skill-name">Pattern Design</span>
                  </div>
                  <div class="skill-badge">
                    <span class="skill-name">Art Direction</span>
                  </div>
                  <div class="skill-badge">
                    <span class="skill-name">Photoshop</span>
                  </div>
                </div>
              </div>
            </skills>
      </div>
    `;
  }
}
