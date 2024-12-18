import {css, html, LitElement} from 'lit';
import {customElement, query} from 'lit/decorators.js';
import mainCSS from '../css/mainCSS';
import langCSS from '../css/langCSS';


/**
 * A custom CV-timeline element.
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

  constructor() {
    super();
  }

  static get styles() {
    return [langCSS, mainCSS, css`
      body {
        margin: 0;
        padding: 0;
        background: rgb(230, 230, 230);
        color: rgb(50, 50, 50);
        font-family: 'Inter', 'Avenir', 'Helvetica', Arial, sans-serif;
        font-size: 112.5%;
        line-height: 1.6em;
      }

      main {
        height: 100%;
        display: flex;
        justify-content: center;
        padding: 1rem;
        width: 100%;
        align-items: center; /* To center the items horizontally inside the main */
      }

      #cv, #app {
        justify-content: center;
        width: 100%;
        list-style-type: none;
      }

      /* Style the sections */

      .main-divs {
        padding: 1rem;
        display: flex;
        flex-direction: column;
        align-items: center;
      }

      li, ul {
        padding: 0;
      }

      .experience-title {
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
        display: flex;
        flex-direction: column;
        width: fit-content;
        max-width: 80%;
        box-sizing: border-box;
        font-size: 1rem;
        padding: .5rem 3rem;
        border-radius: 20px;
        position: relative;
        background: linear-gradient(90deg, rgba(49, 27, 128, 0.45) 50%, rgba(49, 27, 128, 0.26) 50%);
        background-size: 200% 100%;
        transition: background-position 0.3s ease;
        overflow: hidden;
      }

      #bio a {
        text-transform: none;
      }

      #bio p {
        letter-spacing: normal;
        font-size: 0.825rem;
        font-style: italic;
        color: white;
      }


      /* Style the bio */

      #bio:hover {
        background-position: -100% 0;
      }

      #bio::after {
        content: "";
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

      #experience { /* Add your custom styling here if needed */
      }

      #experience-list {
        grid-template-columns: 1fr;
      }

      #skills {
        box-sizing: border-box;
        width: 100%;
        max-width: 80%;
      }

      #skillsGrid {
        grid-template-columns: 1fr 1fr 1fr 1fr;
        padding: 1rem;
      }

      /* ================ Skills and badges.... ================ */

      .skill-badge {
        position: relative;
        display: inline-block;
        width: 100%; /* Allow it to fill available space */
        //max-width: 250px; /* Adjust if necessary */
        margin: 5px;
        padding: 10px;
        background: #f0f0f0;
        border-radius: 5px;
        box-sizing: border-box;
        overflow: hidden;
        word-wrap: break-word; /* Allows long words to break onto the next line */
        overflow-wrap: break-word; /* For better support across browsers */
        transition: background 0.3s ease-in-out;

        height: auto;
      }

      .skill-name {
        position: relative;
        z-index: 1;
        color: #333;
        font-weight: bold;
        word-wrap: break-word; /* Ensure this also wraps */
        overflow-wrap: break-word; /* For compatibility */
      }

      .skill-name, .skill-name a {
        margin: 0;
        padding: 0;
      }

      /* ================ The Timeline ================ */
      /* Reset some default styles for better alignment */

      ul.timeline {
        list-style-type: none;
        padding: 0;
        margin: 0;
      }

      .timeline {
        position: relative;
        width: 660px;
        margin: 0 auto;
        margin-top: 20px;
        padding: 1em 0;
        display: block;
      }

      .timeline:before {
        position: absolute;
        left: 50%;
        top: 0;
        content: '';
        width: 6px;
        height: 100%;
        margin-left: -3px;
        background: rgb(80, 80, 80);
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

      /* ================ flag-wrapper.......... ================ */

      .flag-wrapper {
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
      }

      .flag {
        width: 100%;
        display: inline;
        background: rgb(248, 248, 248, 0.12);
        padding: 6px 10px;
        border-radius: 5px;
        font-weight: 600;
        text-align: left;
      }

      /* ================ direction-l & -r flag ================ */

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

      .direction-l .flag {
        box-shadow: -1px 1px 1px rgba(0, 0, 0, 0.15), 0 0 1px rgba(0, 0, 0, 0.15);
      }

      .direction-r .flag {
        box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.15), 0 0 1px rgba(0, 0, 0, 0.15);
      }


      .direction-l .flag:before, .direction-r .flag:before {
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
        border: 4px solid var(--gold);
        z-index: 10;
      }

      .direction-r .flag:before {
        left: -40px;
      }

      .direction-l .flag:after, .direction-r .flag:after {
        content: "";
        position: absolute;
        top: 50%;
        height: 0;
        width: 0;
        margin-top: -8px;
        border: solid transparent;
        pointer-events: none;
      }

      .direction-l .flag:after {
        left: 100%;
        border-left-color: rgb(248, 248, 248);
        border-width: 8px;
      }

      .direction-r .flag:after {
        right: 100%;
        border-right-color: rgb(248, 248, 248);
        border-width: 8px;
      }

      .time-wrapper {
        display: inline;
        line-height: 1em;
        font-size: 0.66666em;
        color: var(--gold);
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
        background: var(--be_here_now_blue);
        border: var(--border);
        border-left: none;
      }

      .desc {
        opacity: 0;
        visibility: hidden;
        position: absolute;
        top: 50%;
        left: 100%;
        transform: translateY(-50%);
      }  `];
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
      <div id="cv">
        <header>
          <h1 hidden>C.V.</h1>
        </header>
        <main>
          <nav>
            <ul>
              <li><a @click=${() => this.scrollToSection(this.experienceSection)}>Experience</a></li>
              <li><a @click=${() => this.scrollToSection(this.educationSection)}>Education</a></li>
              <li><a @click=${() => this.scrollToSection(this.skillsSection)}>Skills</a></li>
            </ul>
          </nav>
          <hr>
          <div class="main-divs" id="experience">
            <h2>Experience</h2>
            <ul class="timeline">
              <!-- Experience Item 1 -->
              <li>
                <div class="direction-r">
                  <div class="flag-wrapper">
                    <span class="flag"><a href="https://www.youtube.com/channel/UCiuD3eNaZ95eSXImp_eSIww">Tom Crown</a></span>
                    <span class="time-wrapper"><span class="time">2020 - 2022</span>
                  </div>
                  <div class="desc">
                    Video Editing, content creation, image design, moderation, community management.
                  </div>
                </div>
              </li>

              <!-- Experience Item 2 -->
              <li>
                <div class="direction-l">
                  <div class="flag-wrapper">
                    <span class="flag"><a href="https://www.facebook.com/HouseofGentleFrequencies/">House of Gentle Frequencies</a></span>
                    <span class="time-wrapper"><span class="time">2020 - 2022</span>
                  </div>
                  <div class="desc">
                    Safe house for the advocacy of women's health, in the broadest sense.
                    I hosted, marketed and creating and maintaining B2B-relations.
                  </div>
                </div>
              </li>

              <!-- Experience Item -->
              <li>
                <div class="direction-r">
                  <div class="flag-wrapper">
                    <span class="flag"><a href="https://www.teaanddragons.art">Tea and Dragons</a></span>
                    <span class="time-wrapper"><span class="time">2022 - present</span>
                  </div>
                  <div class="desc">
                    Business-to-business sales of craft lemonades in the Benelux area.
                  </div>
                </div>
              </li>

              <!-- Experience Item -->

              <li>
                <div class="direction-l">
                  <div class="flag-wrapper">
                    <span class="flag"><a href="https://amsterdamsefrisdrankfabriek.nl/">A.F.F.</a></span>
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
                    <span class="flag"><a href="https://www.instagram.com/reddymaekers/">ReddyMaekers</a></span>
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
                    <span class="flag"><a href="https://nepco.nl/">Studio Nepco</a></span>
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
                    <span class="flag"><a href="https://www.instagram.com/ryan___reddy/">Ryan Reddy</a></span>
                    <span class="time-wrapper"><span class="time">2015 - 2017</span>
                  </div>
                  <div class="desc">
                    My own art;
                    Fabrication and design of decors, props, costumes, and special effects.
                    However performance, theatre, and just free experimentation, though the list doesn't end there.
                  </div>
                </div>
              </li>

              <!-- Experience Item 6 -->
              <li>
                <div class="direction-l">
                  <div class="flag-wrapper">
                    <span class="flag"><a href="https://www.jorislaarman.com/">Laarman Lab</a></span>
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
                    <span class="flag"><a href="https://www.pepperminds.nl/">Pepperminds</a></span>
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
          <div class="main-divs" id="education">
            <h2>Education</h2>
            <ul class="timeline" id="experience-list">
              <!-- Education Item 1 -->
              <li>
                <div class="direction-l">
                  <div class="flag-wrapper">
                    <span class="flag"><a href="https://www.hu.nl/">Utrecht University</a></span>
                    <span class="time-wrapper"><span class="time">2021 - 2025</span>
                  </div>
                  <div class="desc">
                    University of Applied Science(HBO) - Computer Science Engineering
                  </div>
                </div>
              </li>

              <!-- Education Item 2 -->
              <li>
                <div class="direction-r">
                  <div class="flag-wrapper">
                    <span class="flag"><a href="https://www.hmcollege.nl/">HM College</a></span>
                    <span class="time-wrapper"><span class="time">2013- 2017</span>
                  </div>
                  <div class="desc">
                    Higher Vocational College (MBO), Furniture Design and Manufacturing
                  </div>
                </div>
              </li>

              <!-- Education Item 3 -->
              <li>
                <div class="direction-l">
                  <div class="flag-wrapper">
                    <span class="flag"><a href="https://ecl.nl/">ECL Haarlem</a></span>
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
          <div class="main-divs" id="skills">
            <h2>Skills</h2>
            <br>
            <div id="skillsgrid">
              <!-- Skills Items -->
              <div class="computer-skills">
                <h3>Computer Skills</h3>
                <div class="skill-badge" data-percentage="70">
                  <span class="skill-name"><a href="">Test Driven Design</a></span>
                </div>
                <div class="skill-badge" data-percentage="80">
                  <span class="skill-name"><a href="">Object-Oriented Programming </a></span>
                </div>
                <div class="skill-badge" data-percentage="60">
                  <span class="skill-name"><a href="">Software Architecture</a></span>
                </div>
                <div class="skill-badge" data-percentage="85">
                  <span class="skill-name"><a href="">CAD DESIGN</a></span>
                </div>
                <div class="skill-badge" data-percentage="75">
                  <span class="skill-name"><a href="">Photoshop</a></span>
                </div>
                <div class="skill-badge" data-percentage="90">
                  <span class="skill-name"><a href="">Wordpress</a></span>
                </div>

              </div>
              <hr>
              <div class="programming-languages">
                <h3>Programming Languages</h3>
                <div class="skill-badge" data-percentage="60">
                  <span class="skill-name"><a href="https://www.python.org/">Python</a></span>
                </div>
                <div class="skill-badge" data-percentage="75"><span class="skill-name"><a href="https://www.java.com/">Java</a></span>
                </div>
                <div class="skill-badge" data-percentage="80">
                  <span class="skill-name"><a
                    href="https://developer.mozilla.org/en-US/docs/Web/HTML">HTML, CSS</a></span>
                </div>
                <div class="skill-badge" data-percentage="65">
                  <span class="skill-name"><a
                    href="https://developer.mozilla.org/en-US/docs/Web/JavaScript">JavaScript</a></span>
                </div>
                <div class="skill-badge" data-percentage="55">
                  <span class="skill-name"><a href="https://www.typescriptlang.org/docs">TypeScript</a></span>
                </div>
                <div class="skill-badge" data-percentage="75">
                  <span class="skill-name"><a href="https://junit.org/">JUnit</a></span>
                </div>
                <div class="skill-badge" data-percentage="60">
                  <span class="skill-name"><a href="https://cucumber.io/">Cucumber</a></span>
                </div>
                <div class="skill-badge" data-percentage="60">
                  <span class="skill-name"><a href="https://www.postgresql.org/">PostgreSQL</a></span>
                </div>
              </div>

              <div class="real-life-languages">
                <h3>Real-Life Languages</h3>
                <ul>
                  <li>
                    <div class="skill-badge" data-percentage="native-speaker">
                      <span class="skill-name"><a>English</a></span>
                    </div>
                  </li>
                  <li>
                    <div class="skill-badge" data-percentage="native-speaker">
                      <span class="skill-name"><a>Dutch</a></span>
                    </div>
                  </li>
                </ul>
              </div>

              <div class="other-skills">
                <h3>Other Skills</h3>
                <div class="skill-badge" data-percentage="85">
                  <span class="skill-name"><a href="">Team Leadership</a></span>
                </div>
                <div class="skill-badge" data-percentage="85">
                  <span class="skill-name"><a href="">Concept Development</a></span>
                </div>
                <div class="skill-badge" data-percentage="90">
                  <span class="skill-name"><a href="">Fine Woodworking</a></span>
                </div>
                <div class="skill-badge" data-percentage="90">
                  <span class="skill-name"><a href="">Set Decoration</a></span>
                </div>
                <div class="skill-badge" data-percentage="75">
                  <span class="skill-name"><a href="">Sewing</a></span>
                </div>
                <div class="skill-badge" data-percentage="85">
                  <span class="skill-name"><a href="">Pattern Design</a></span>
                </div>
                <div class="skill-badge" data-percentage="85">
                  <span class="skill-name"><a href="">Art Direction</a></span>
                </div>
              </div>
            </div>
        </main>
      </div>
    `;
  }
}
