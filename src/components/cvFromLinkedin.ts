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
      }

      skills {
        list-style-type: georgian; /* Remove default list bullets */
        padding: 0; /* Remove default padding */
      }

    `;
  }

  firstUpdated(changedProperties: any) {
    let titleEvent = new CustomEvent('title-change', {
      detail: {
        message: 'CV'
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
          <Title>
            C.V.
          </Title>
        </header>
        <main>
          <h1>Ryan van Lil-Reddy</h1>
          <!--          <h2>bio</h2>-->
          <!--          <p>-->
          <!--            I have long searched for what I want to do to make this world a better-->
          <!--          place, I have attempted-->
          <!--          Direct-sales of good causes, Journalism, management, i’ve been a-->
          <!--          chef, sidestepped into modelling and acting, the list goes on-and-on,-->
          <!--          you can check the rest of my linkedin for more.-->
          <!--          Alan Watts once inspired me to just go and do that which really-->
          <!--          makes me happy.-->
          <!--          And warned me to do it so much, i could get really really good at it.-->
          <!--          and here I am.-->
          <!--          Currently hacking away at a bachelor of Computer Science-->
          <!--          Engineering.-->
          <!--          <p>-->

          <h2>Experience</h2>
          <skills>
            <ul>
              <li>
                <h3>Tom Crown Live Crypto Trading on Youtube</h3>
                <undertitle>Editor In Chief</undertitle>
                <timeframe>November 2020 - September 2021 (11 months)</timeframe>
                <p>
                  Globally
                  Video Editing, content creation, image design, moderation
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
                  See <a href="www.ReddyMaekers.com">www.ReddyMaekers.com</a> and <a
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
            <!-- Skill Badges - Computer Skills -->
            <div class="skill-badges computer-skills">
              <div class="skill-badge">
                <span class="skill-name">PostgreSQL</span>
              </div>
              <div class="skill-badge">
                <span class="skill-name">Cascading Style Sheets (CSS)</span>
              </div>
              <div class="skill-badge">
                <span class="skill-name">HTML</span>
              </div>
              <div class="skill-badge">
                <span class="skill-name">JavaScript</span>
              </div>
              <div class="skill-badge">
                <span class="skill-name">Java</span>
              </div>
              <div class="skill-badge">
                <span class="skill-name">Python (Programming Language)</span>
              </div>
              <div class="skill-badge">
                <span class="skill-name">3D Modeling</span>
              </div>
              <div class="skill-badge">
                <span class="skill-name">Rhino 3D</span>
              </div>
              <!-- Add more computer skills here -->
            </div>

            <!-- Skill Badges - Other Skills -->
            <div class="skill-badges other-skills">
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
              <!-- Add more other skills here -->
            </div>

            <!-- Skill Badges - Programming Languages -->
            <div class="skill-badges programming-languages">
              <div class="skill-badge">
                <span class="skill-name">PHP</span>
              </div>
              <div class="skill-badge">
                <span class="skill-name">Ruby</span>
              </div>
              <div class="skill-badge">
                <span class="skill-name">Swift</span>
              </div>
              <!-- Add more programming languages here -->
            </div>

            <!-- Skill Badges - Real-Life Languages -->
            < class="skill-badges real-life-languages">
            <div class="skill-badge">
              <span class="skill-name">English</span>
            </div>
            <div class="skill-badge">
              <span class="skill-name">Dutch</span>
            </div>
            <!-- Add more real-life languages here -->
            <ul>
          </skills>
      </div>
    `;
  }
}
