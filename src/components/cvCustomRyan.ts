import {css, html, LitElement} from 'lit';
import {customElement, query} from 'lit/decorators.js';
import mainCSS from '../css/mainCSS';
import langCSS from '../css/langCSS';


/**
 * An example element.
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */
@customElement('cv-linkedin-element')
export class CVElement extends LitElement {
  @query('#bio') bioSection!: HTMLElement;
  @query('#experience') experienceSection!: HTMLElement;
  @query('#education') educationSection!: HTMLElement;
  @query('#skills') skillsSection!: HTMLElement;

  // Function to handle smooth scrolling
  scrollToSection(section: HTMLElement) {
    if (section) {
      section.scrollIntoView({behavior: 'smooth', block: 'start'});
    }
  }

  constructor() {
    super();
  }

  static get styles() {
    return [
      langCSS,
      mainCSS,
      css`
        #cv {
          display: flex;
          justify-content: center;
          //align-items: center; /* Optional: Center vertically as well */
          //height: 100vh; /* Optional: This centers content vertically within the viewport */
          width: 100vw;
          list-style-type: none;
          padding: 1rem;

          fr {
            width: 100%;
          }
        }

        li, ul {
          padding: 0;
          //margin-left: 1rem;
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

        #bio {
          width: 80%;
          font-family: Arial, sans-serif;
          margin: 20px 0;
          padding: 20px;
          border-radius: 20px;
          position: relative;
          background: linear-gradient(90deg, rgba(49, 27, 128, 0.45) 50%, rgba(49, 27, 128, 0.26) 50%);
          background-size: 200% 100%;
          transition: background-position 0.3s ease;
          overflow: hidden;
          display: inline-block;
        }

        #bio:hover {
          background-position: -100% 0;
        }

        /* Style the text inside the bio */

        #bio p {
          font-size: 0.625rem;
          font-style: italic;
          color: white;
        }

        /* Style the quote underline */

        #bio::after {
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

        #bio:hover::after {
          width: 100%;
          right: 0;
        }

        /* Style the experience section */

        #experience {
          width: 80%;
        }

        /* Style the list within the experience section */

        #experience-list {
          display: grid;
          grid-template-columns: 1fr;
        }

        /* Style the skills section */

        #skills {
          padding: 1rem;
        }

        /* Style the grid within the skills section */

        #skillsGrid {
          display: grid;
          grid-template-columns: 1fr 1fr 1fr 1fr;
          padding: 1rem;
        }

        body {
          margin: 0;
          padding: 0;
          background: rgb(230, 230, 230);

          color: rgb(50, 50, 50);
          font-family: 'Open Sans', sans-serif;
          font-size: 112.5%;
          line-height: 1.6em;
        }

        /* ================ The Timeline ================ */
        /* Reset some default styles for better alignment */

        ul.timeline {
          list-style-type: none;
          padding: 0;
          margin: 0;
        }

        body {
          margin: 0;
          padding: 0;
          background: rgb(230, 230, 230);

          color: rgb(50, 50, 50);
          font-family: 'Open Sans', sans-serif;
          font-size: 112.5%;
          line-height: 1.6em;
      }

      .timeline {
        position: relative;
        width: 660px;
        //width: 100%;
        margin: 0 auto;
        margin-top: 20px;
        padding: 1em 0;
        list-style-type: none;
      }

      .timeline:before {
        position: absolute;
        left: 50%;
        top: 0;
        content: ' ';
        display: block;
        width: 6px;
        height: 100%;
        margin-left: -3px;
        background: rgb(80, 80, 80);
        background: -moz-linear-gradient(top, rgba(80, 80, 80, 0) 0%, rgb(80, 80, 80) 8%, rgb(80, 80, 80) 92%, rgba(80, 80, 80, 0) 100%);
        background: -webkit-gradient(linear, left top, left bottom, color-stop(0%, rgba(30, 87, 153, 1)), color-stop(100%, rgba(125, 185, 232, 1)));
        background: -webkit-linear-gradient(top, rgba(80, 80, 80, 0) 0%, rgb(80, 80, 80) 8%, rgb(80, 80, 80) 92%, rgba(80, 80, 80, 0) 100%);
        background: -o-linear-gradient(top, rgba(80, 80, 80, 0) 0%, rgb(80, 80, 80) 8%, rgb(80, 80, 80) 92%, rgba(80, 80, 80, 0) 100%);
        background: -ms-linear-gradient(top, rgba(80, 80, 80, 0) 0%, rgb(80, 80, 80) 8%, rgb(80, 80, 80) 92%, rgba(80, 80, 80, 0) 100%);
        background: linear-gradient(to bottom, rgba(80, 80, 80, 0) 0%, rgb(80, 80, 80) 8%, rgb(80, 80, 80) 92%, rgba(80, 80, 80, 0) 100%);

        z-index: 5;
      }

      .timeline li {
        padding: 1em 0;
      }

      .timeline li:after {
        content: "";
        display: block;
        height: 0;
        clear: both;
        visibility: hidden;
      }

      .direction-l {
        position: relative;
        width: 300px;
        float: left;
        text-align: right;
      }

      .direction-r {
        position: relative;
        width: 300px;
        float: right;
      }

      .flag-wrapper {
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
      }

      .flag {
        width: 100%;

        //position: relative;
        display: inline;
        background: rgb(248, 248, 248, 0.12);
        padding: 6px 10px;
        border-radius: 5px;

        font-weight: 600;
        text-align: left;
      }

      .direction-l .flag {
        -webkit-box-shadow: -1px 1px 1px rgba(0, 0, 0, 0.15), 0 0 1px rgba(0, 0, 0, 0.15);
        -moz-box-shadow: -1px 1px 1px rgba(0, 0, 0, 0.15), 0 0 1px rgba(0, 0, 0, 0.15);
        box-shadow: -1px 1px 1px rgba(0, 0, 0, 0.15), 0 0 1px rgba(0, 0, 0, 0.15);
      }

      .direction-r .flag {
        -webkit-box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.15), 0 0 1px rgba(0, 0, 0, 0.15);
        -moz-box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.15), 0 0 1px rgba(0, 0, 0, 0.15);
        box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.15), 0 0 1px rgba(0, 0, 0, 0.15);
      }

      .direction-l .flag:before,
      .direction-r .flag:before {
        position: absolute;
        top: 50%;
        right: -40px;
        content: ' ';
        display: block;
        width: 12px;
        height: 12px;
        margin-top: -10px;
        background: #fff;
        border-radius: 10px;
        border: 4px solid rgb(255, 80, 80);
        z-index: 10;
      }

      .direction-r .flag:before {
        left: -40px;
      }

      .direction-l .flag:after {
        content: "";
        position: absolute;
        left: 100%;
        top: 50%;
        height: 0;
        width: 0;
        margin-top: -8px;
        border: solid transparent;
        border-left-color: rgb(248, 248, 248);
        border-width: 8px;
        pointer-events: none;
      }

      .direction-r .flag:after {
        content: "";
        position: absolute;
        right: 100%;
        top: 50%;
        height: 0;
        width: 0;
        margin-top: -8px;
        border: solid transparent;
        border-right-color: rgb(248, 248, 248);
        border-width: 8px;
        pointer-events: none;
      }

      .time-wrapper {
        display: inline;

        line-height: 1em;
        font-size: 0.66666em;
        color: rgb(250, 80, 80);
        vertical-align: middle;
      }

      .direction-l .time-wrapper {
        float: left;
      }

      .direction-r .time-wrapper {
        float: right;
      }

      .time {
        display: inline-block;
        padding: 4px 6px;
        background: rgb(248, 248, 248);
      }

      .desc {
        margin: 1em 0.75em 0 0;

        font-size: 0.77777em;
        font-style: italic;
        line-height: 1.5em;
      }

      .direction-r .desc {
        margin: 1em 0 0 0.75em;
      }

      /* ================ Timeline Media Queries ================ */

      @media screen and (max-width: 660px) {

        .timeline {
          width: 100%;
          padding: 4em 0 1em 0;
        }

        .timeline li {
          padding: 2em 0;
        }

        .direction-l,
        .direction-r {
          float: none;
          width: 100%;

          text-align: center;
        }

        .flag-wrapper {
          text-align: center;
        }

        .flag {
          background: rgb(245, 245, 245, 0.12);
          z-index: 15;
        }

        .direction-l .flag:before,
        .direction-r .flag:before {
          position: absolute;
          top: -30px;
          left: 50%;
          content: ' ';
          display: block;
          width: 12px;
          height: 12px;
          margin-left: -9px;
          background: #fff;
          border-radius: 10px;
          border: 4px solid rgb(255, 80, 80);
          z-index: 10;
        }

        .direction-l .flag:after,
        .direction-r .flag:after {
          content: "";
          position: absolute;
          left: 50%;
          top: -8px;
          height: 0;
          width: 0;
          margin-left: -8px;
          border: solid transparent;
          border-bottom-color: rgb(255, 255, 255);
          border-width: 8px;
          pointer-events: none;
        }

        .time-wrapper {
          display: block;
          position: relative;
          margin: 4px 0 0 0;
          z-index: 14;
        }

        .direction-l .time-wrapper {
          float: none;
        }

        .direction-r .time-wrapper {
          float: none;
        }

        .desc {
          position: relative;
          margin: 1em 0 0 0;
          padding: 1em;
          background: rgb(245, 245, 245, 0.12);
          -webkit-box-shadow: 0 0 1px rgba(0, 0, 0, 0.20);
          -moz-box-shadow: 0 0 1px rgba(0, 0, 0, 0.20);
          box-shadow: 0 0 1px rgba(0, 0, 0, 0.20);

          z-index: 15;
        }

        .direction-l .desc,
        .direction-r .desc {
          position: relative;
          margin: 1em 1em 0 1em;
          padding: 1em;

          z-index: 15;
        }

      }

        @media screen and (max-width: 660px) {

          .direction-l .desc,
          .direction-r .desc {
            margin: 1em 4em 0 4em;
          }

        }


        @media (max-width: 952px) {
          /* Adjust styles for smaller screens */
          skillsgrid {
            grid-template-columns: 1fr;
          }

          #experience {
            padding: 1rem;
          }

          /* Set maximum width for list items */
          li {
            max-width: 100vw;
          }
        }
      `];
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
      <div id="cv">
        <header>
          <h1 hidden>C.V.</h1>
        </header>
        <main>
          <h1>Ryan van Lil-Reddy</h1>
          <nav>

            <ul>
              <li><a @click=${() => this.scrollToSection(this.bioSection)}>Bio</a></li>
              <li><a @click=${() => this.scrollToSection(this.experienceSection)}>Experience</a></li>
              <li><a @click=${() => this.scrollToSection(this.educationSection)}>Education</a></li>
              <li><a @click=${() => this.scrollToSection(this.skillsSection)}>Skills</a></li>
            </ul>
          </nav>

          <hr>

          <div id="bio">
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

          <div id="experience">
            <h2>Experience</h2>
            <ul class="timeline">
              <!-- Experience Item 1 -->
              <li>
                <div class="direction-r">
                  <div class="flag-wrapper">
                    <span class="flag">Tom Crown: Youtube</span>
                    <span class="time-wrapper"><span class="time">2020 - 2022</span>
                  </div>
                  <div class="desc">
                    Video Editing, content creation, image design, moderation, audience management.
                  </div>
                </div>
              </li>

              <!-- Experience Item 2 -->
              <li>
                <div class="direction-l">
                  <div class="flag-wrapper">
                    <span class="flag">House of Gentle Frequencies</span>
                    <span class="time-wrapper"><span class="time">2020 - 2022</span>
                  </div>
                  <div class="desc">
                    Safe house for the advocacy of women's health, in the broadest sense.
                  </div>
                </div>
              </li>
              <li>
                <div class="direction-r">
                  <div class="flag-wrapper">
                    <span class="flag">Tea and Dragons</span>
                    <span class="time-wrapper"><span class="time">2022 - present</span>
                  </div>
                  <div class="desc">
                    Business-to-business sales of craft lemonades in the Benelux area.
                  </div>
                </div>
              </li>
              <li>
                <div class="direction-l">
                  <div class="flag-wrapper">
                      <span class="flag">A.F.F.</span>
                      <span class="time-wrapper"><span class="time">2020 - 2021</span>
                    </div>
                    <div class="desc">
                      Business-to-business sales of craft lemonades in the Benelux area.
                    </div>
                  </div>
                </li>

                <!-- Experience Item 3 -->
                <li>
                  <div class="direction-r">
                    <div class="flag-wrapper">
                      <span class="flag">ReddyMaekers</span>
                      <span class="time-wrapper"><span class="time">2014 - 2019</span>
                    </div>
                    <div class="desc">
                      Festival/filmset decors and props, and other customized building assignments/brand activations.
                    </div>
                  </div>
                </li>

                <!-- Experience Item 4 -->
                <li>
                  <div class="direction-l">
                    <div class="flag-wrapper">
                      <span class="flag">Studio Nepco</span>
                      <span class="time-wrapper"><span class="time">2015 - 2018</span>
                    </div>
                    <div class="desc">
                      Pattern design, Foam Modulation, painting, Robotics, Sewing, Film/theatre Production, Acting.
                    </div>
                  </div>
                </li>

                <!-- Experience Item 5 -->
                <li>
                  <div class="direction-r">
                    <div class="flag-wrapper">
                      <span class="flag">Ryan Reddy</span>
                      <span class="time-wrapper"><span class="time">2015 - 2017</span>
                    </div>
                    <div class="desc">
                      Fabrication and design of decors, props, costumes, and special effects.
                      Also theater, performance, and just free experimentation.
                    </div>
                  </div>
                </li>

                <!-- Experience Item 6 -->
                <li>
                  <div class="direction-l">
                    <div class="flag-wrapper">
                      <span class="flag">Laarman Lab</span>
                      <span class="time-wrapper"><span class="time">2014 - 2015</span>
                    </div>
                    <div class="desc">
                      Cutting-edge technique, combined with old lore crafts.
                      CAD design, 3D manufacturing techniques.
                      The renowned Joris Laarman furniture is shown in galleries and museums all over the world.
                    </div>
                  </div>
                </li>

                <!-- Experience Item 7 -->
                <li>
                  <div class="direction-r">
                    <div class="flag-wrapper">
                      <span class="flag">Pepperminds</span>
                      <span class="time-wrapper"><span class="time">2009 - 2011</span>
                    </div>
                    <div class="desc">
                      Door-to-door sales,
                      coaching and training new staff, management.
                    </div>
                  </div>
                </li>
            </ul>
          </div>

          <hr>

          <div id="education">
            <h2>Education</h2>
            <ul class="timeline" id="experience-list">
              <!-- Education Item 1 -->
              <li>
                <div class="direction-l">
                  <div class="flag-wrapper">
                    <span class="flag">Utrecht University of Applied Sciences</span>
                    <span class="time-wrapper"><span class="time">2021 - 2025</span>
                  </div>
                  <div class="desc">
                    Bachelor of Applied Science - BASc, Software Development
                  </div>
                </div>
              </li>

              <!-- Education Item 2 -->
              <li>
                <div class="direction-r">
                  <div class="flag-wrapper">
                    <span class="flag">Hout- en Meubileringscollege</span>
                    <span class="time-wrapper"><span class="time">2013 - 2017</span>
                  </div>
                  <div class="desc">
                    Higher Vocational College, Furniture Design and Manufacturing
                  </div>
                </div>
              </li>

              <!-- Education Item 3 -->
              <li>
                <div class="direction-l">
                  <div class="flag-wrapper">
                    <span class="flag">Eerste Christelijke Lyceum Haarlem</span>
                    <span class="time-wrapper"><span class="time">2004 - 2009</span>
                  </div>
                  <div class="desc">
                    HAVO Nature+Technique, Nature, Physics, Technology, Art
                  </div>
                </div>
              </li>
            </ul>
          </div>

          <hr>

          <div id="skills">
            <h2>Skills</h2>
            <div id="skillsgrid">
              <!-- Skills Items -->
              <div class="computer-skills">
                <h3>Computer Skills</h3>
                <div class="skill-badge">
                  <span class="skill-name">Frameworks <br>&nbsp;&nbsp;&nbsp;(e.g., JUnit, Cucumber)</span>
                </div>
                <div class="skill-badge">
                  <span class="skill-name">Object-Oriented Programming <br>&nbsp;&nbsp;&nbsp;(OOP)</span>
                </div>
                <div class="skill-badge">
                  <span class="skill-name">CAD DESIGN <br>&nbsp;&nbsp;&nbsp;(3D Modeling, Rhino 3D)</span>
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
          </div>
        </main>
      </div>
    `;
  }
}
