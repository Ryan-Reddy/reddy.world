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
        list-style-type: none;
        padding: 1rem;
      }

      li, ul {
        padding: 0;
        margin-left: 1rem;
      }

      .experience-title {
        margin: 0;
        margin: 0;

      }

      .undertitle {
        font-style: italic;
        margin-bottom: 1rem;
      }

      .undertitle, .timeframe, .location, .experience_description {
        margin-left: 1rem;
      }


      /* Style the bio section */

      .bio {
        width: 80%;
        font-family: Arial, sans-serif;
        margin: 20px 0;
        padding: 20px;
        border-radius: 20px;
        position: relative;
        background: linear-gradient(90deg, #311b80 50%, rgba(49, 27, 128, 0.26) 50%);
        background-size: 200% 100%;
        transition: background-position 0.3s ease;
        overflow: hidden;
        display: inline-block;
      }

      .bio:hover {
        background-position: -100% 0;
      }

      /* Style the text inside the bio */

      .bio p {
        font-size: 1.2rem;
        color: white;
      }

      /* Style the quote underline */

      .bio::after {
        content: "";
        display: block;
        height: 4px;
        background: linear-gradient(to left, #f69ec4, #f9dd94 100%);
        position: absolute;
        bottom: 0;
        right: 0;
        width: 0;
        transition: width .5s ease 0s, right .5s ease 0s;
      }

      .bio:hover::after {
        width: 100%;
        right: 0;
      }

      /* Style links within the quote */

      .bio a {
        color: #fff;
        border-radius: 8px;
        text-transform: uppercase;
        text-decoration: none;
        letter-spacing: .25em;
        padding: 15px;
        position: relative;
        display: inline-block;
      }

      .bio a:hover::after {
        width: 100%;
        right: 0;
      }

      /* Style the experience section */

      .experience {
        width: 80%;
      }

      /* Style the list within the experience section */

      #experience-list {
        display: grid;
        grid-template-columns: 1fr;
      }

      /* Style list items within the experience section */

      #experience-list li {
        width: 80%;
      }

      /* Style the skills section */

      skills {
        padding: 1rem;
      }

      /* Style the grid within the skills section */

      #skillsGrid {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr;
        padding: 1rem;
      }

      @media (max-width: 952px) {
        /* Adjust styles for smaller screens */
        skillsgrid {
          grid-template-columns: 1fr;
        }

        .experience {
          padding: 1rem;
        }

        /* Set maximum width for list items */
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

            <div class="bio">
              <p>
                "Driven by a passion for making a positive impact, <br>
                my journey has been a dynamic and transformative one. <br> <br>

                With diverse experiences spanning product design, costume creation, sales, journalism, management, <br>
                and even a venture into modeling and acting, I've cultivated a unique perspective. <br> <br>

                Inspired by the wisdom of Alan Watts, I embarked on a quest to discover true happiness, <br>
                ultimately leading me to excel in the world of Computer Science Engineering, where innovation and
                creativity thrive."
              </p>
              <p>
                "I'm Ryan, and I'm on a mission to make a difference."
              </p>
              - Ryan

            </div>
            <hr>

            <h2>Experience</h2>
            <div class="experience">
              <ul id="experience-list">
                <li>
                  <h3 class="experience-title">Tom Crown on Youtube</h3>
                  <div class="undertitle">Editor In Chief</div>
                  <div class="timeframe">November 2020 - September 2021 (11 months)</div>
                  <p class="location">
                    Remote: USA
                  </p>
                  <p class="experience_description">
                    Video Editing, content creation, image design, moderation, audience management.
                  </p>
                </li>
                <li>
                  <h3 class="experience-title">Amsterdamse Frisdrank Fabriek</h3>
                  <div class="undertitle">B-2-B Sales</div>
                  <div class="timeframe">June 2020 - June 2021 (1 year 1 month)</div>
                  <p class="location">
                    Amsterdam, North Holland, Netherlands
                  </p>
                  <p class="experience_description">
                    Business-to-business sales of craft lemonades in the Benelux area.
                  </p>
                </li>
                <li>
                  <h3 class="experience-title">ReddyMaekers</h3>
                  <div class="undertitle">Co-Founder, CAD Designer, Art Direction</div>
                  <div class="timeframe">September 2014 - July 2019 (4 years 11 months)</div>
                  <p class="location">
                    Netherlands
                  </p>
                  <p class="experience_description">
                    Festival/filmset decors and props, and other customized building assignments/brand activations.
                    See <a href="https://www.ReddyMaekers.com">www.ReddyMaekers.com</a> and <a
                    href="https://www.instagram.com/reddymaekers/">Instagram</a> for more info!
                  </p>
                </li>
                <li>
                  <h3 class="experience-title">Studio Nepco</h3>
                  <div class="undertitle">Art Director/Designer</div>
                  <div class="timeframe">October 2015 - September 2018 (3 years)</div>
                  <p class="location">
                    Amsterdam Area, Netherlands
                  </p>
                  <p class="experience_description">
                    Pattern design, Foam Modulation, painting, Robotics, Sewing, Film/theatre Production, Acting.
                  </p>
                </li>
                <li>
                  <h3 class="experience-title">Ryan Reddy Productions</h3>
                  <div class="undertitle">Creative Art Director, Founder</div>
                  <div class="timeframe">September 2015 - September 2017 (2 years 1 month)</div>
                  <p class="location">
                    Amsterdam Area, Netherlands
                  </p>
                  <p class="experience_description">
                    Making things, of metals, wood, plastics, fabrics, and everything in between.
                  </p>
                </li>
                <li>
                  <h3 class="experience-title">Joris Laarman Lab</h3>
                  <div class="undertitle">Furniture Maker Internship</div>
                  <div class="timeframe">November 2014 - March 2015 (5 months)</div>
                  <p class="location">
                    Amsterdam Area, Netherlands
                  </p>
                  <p class="experience_description">
                    Cutting-edge technique, combined with old lore crafts.
                    CAD design, 3D manufacturing techniques.
                    The renowned Joris Laarman furniture is shown in galleries and museums all over the world.
                  </p>
                </li>
                <li>
                  <h3 class="experience-title">Pepperminds</h3>
                  <div class="undertitle">Acquisition of funding for good causes</div>
                  <div class="timeframe">May 2009 - August 2011 (2 years 4 months)</div>
                  <p class="location">
                    Amsterdam Area, Netherlands
                  </p>
                  <p class="experience_description">
                    Door-to-door sales,
                    coaching and training new staff, management.
                  </p>
                </li>
                <h2>EDUCATION</h2>
                <li>
                  <h3>Utrecht University of Applied Sciences</h3>
                  <div class="undertitle">Bachelor of Applied Science - BASc, Software Development</div>
                  <div class="timeframe">September 2021 - August 2025</div>
                </li>
                <li>
                  <h3>Hout- en Meubileringscollege</h3>
                  <div class="undertitle">Higher Vocational College, Furniture Design and Manufacturing</div>
                  <div class="timeframe">September 2013 - July 2017</div>
                </li>
                <li>
                  <h3>Eerste Christelijke Lyceum Haarlem</h3>
                  <div class="undertitle">HAVO Nature+Technique, Nature, Physics, Technology, Art</div>
                  <div class="timeframe">2004 - 2009</div>
                </li>
              </ul>
            </div>

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
