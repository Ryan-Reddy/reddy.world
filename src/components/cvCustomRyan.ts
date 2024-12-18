import {css, html, LitElement} from 'lit';
import {customElement, query} from 'lit/decorators.js';
import mainCSS from '../css/mainCSS';
import langCSS from '../css/langCSS';
import WordCloud from 'wordcloud';

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
  @query('#word-cloud') wordCloudSection!: HTMLElement;

  constructor() {
    console.log('constructing')

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
        //padding: 1rem;
        //width: 100%;
        align-items: start;
      }

      #cv, #app {
        justify-content: center;
        width: 100%;
        list-style-type: none;
      }

      /* Style the sections */

      .main-divs {
        //padding: 1rem;
        //display: flex;
        flex-direction: column;
        align-items: center;

      }

      li, ul {
        padding: 0;
        width: 100vw; /* FUL WIDTH OF PAGE */
        //height: 100vh; /* Full height of the viewport */

        list-style: none; /* Remove default bullet points if needed */
        position: relative; /* Ensure the list item can contain positioned children */
      }

      a {
        margin: 0;
      }

      .desc {
        opacity: 0;
        max-height: 0;
        overflow: hidden;
        transform: translateY(-20px); /* Start higher for a more dramatic effect */
        visibility: hidden;
        transition: opacity 0.4s cubic-bezier(0.23, 1, 0.32, 1), /* Ease out opacity for smooth fade-in */ max-height 0.4s ease, /* Smooth vertical expansion */ transform 0.4s cubic-bezier(0.23, 1, 0.32, 1); /* Use a spring-like easing curve */
      }

      li:hover .desc {
        opacity: 1;
        max-height: 100px; /* Adjust this to suit your content */
        visibility: visible;
        transform: translateY(0); /* Animate into its natural position */
      }


      .time-wrapper {
        opacity: 0;
        visibility: hidden;

        max-width: 50px;
        display: inline;
        line-height: 1em;
        //font-size: 0.66666em;
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
        height: 60px;
      }

      li:hover .time-wrapper {
        opacity: 1;
        max-height: 100px; /* Adjust this to suit your content */
        visibility: visible;
        transform: translateX(-35px); /* Animate into its natural position */
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


      #experience { /* Add your custom styling here if needed */
      }

      #experience-list {
        grid-template-columns: 1fr;
      }

      /* ================ Skills and badges.... ================ */

      #skills {
        //box-sizing: border-box;
        //width: 100%;
        //max-width: 80%;
      }

      #skillsGrid {
        grid-template-columns: 1fr 1fr 1fr 1fr;
        padding: 1rem;
      }

      #word-cloud {
        width: 100%;
        height: 400px;
        margin: auto;
        background-color: #f9f9f9;
      }

      .skill-badge {

        color: var(--zwart);
        border: var(--background-light);

        position: relative;
        display: inline-block;
        width: 100%; /* Allow it to fill available space */
        //max-width: 250px; /* Adjust if necessary */
        margin: 5px;
        padding: 10px;

        border-radius: 5px;
        //box-sizing: border-box;
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
        //width: 660px;
        margin: 0 auto;
        margin-top: 20px;
        padding: 1em 0;
        display: block;
        z-index: 1;

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
        z-index: 0;
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

        position: relative;
        z-index: 1; /* Ensure it stays above the description */
      }

      .flag {
        width: 100%;
        height: 60px;

        display: inline;
        background: rgb(248, 248, 248, 0.12);
        padding: 10px;
        border-radius: 5px;
        font-weight: 600;
        text-align: left;
      }

      /* ================ direction-l & -r flag ================ */

      .direction-l {
        position: relative;
        width: 50vw;
        float: left;

        text-align: right;
      }

      .direction-r {
        position: relative;
        width: 50vw;
        float: right;
        margin-right: -34px; /* Ball position = 40 px - ball radius = 6px === -34px */
      }

      .direction-l .flag {
        box-shadow: -1px 1px 1px rgba(0, 0, 0, 0.15), 0 0 1px rgba(0, 0, 0, 0.15);
      }

      .direction-r .flag {
        box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.15), 0 0 1px rgba(0, 0, 0, 0.15);
      }


      /* Ball */

      .direction-l .flag:before, .direction-r .flag:before {
        content: ' ';
        position: absolute;
        top: 30px; /* Adjust as needed to control vertical placement */
        right: 0%; /* Horizontally center along the page's centerline */
        transform: translateY(-50%); /* Offset to ensure perfect vertical alignment */

        //right: -40px;
        display: block;
        width: 12px;
        height: 12px;
        //margin-top: -10px;
        background: #fff;
        border-radius: 10px;
        border: 4px solid var(--gold);
        z-index: 10;
      }

      .direction-r .flag:before {
        left: -40px;
        top: 15px;
      }

      // Arrow //

      .direction-l .flag:after, .direction-r .flag:after {
        left: 40px;

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

        border-left-color: rgb(248, 248, 248);
        border-width: 8px;
      }

      .direction-r .flag:after {

        border-right-color: rgb(248, 248, 248);
        border-width: 8px;
      }


      // MEDIA MOBILE /
      @media (max-width: 768px) {

        main {
          padding: 0;
          padding-right: 0;
        }

        .timeline {
          //flex-direction: column; /* Stacks timeline items vertically */
          overflow-x: auto; /* Adds horizontal scrolling */
          flex-direction: row;
        }

        .timeline-item {
          min-width: 100%; /* Ensure each timeline item takes up full width */
        }

        .skill-badge {
          width: 100%; /* Ensures skill badges are full width */
          margin-bottom: 10px; /* Adds spacing between items */
        }

        #skillsgrid {
          display: block; /* Switch grid to block to avoid layout overflow */
          width: 100%;
          margin-left: 70px;
        }

        #skills {
          //max-width: 80%
        }

        .computer-skills {
          width: 100%; /* Make sure skills take full width */
        }

        /* Adjusting hr to not break the layout */
        hr {
          width: 100%;
          margin: 10px 0;
        }

        // Reduce the size of elements for mobile
        .skill-name {
          font-size: 14px; /* Adjust font size for smaller screens */
        }

        .computer-skills h3 {
          font-size: 18px; /* Ensure section headers are not too big */
        }

        .skill-badge {
          width: 120%;
          padding: 8px; /* Adjust padding for smaller screens */
        }
      }

      @media (prefers-color-scheme: dark) {

        .skill-badge {
          color: var(--wit);
          border: var(--silver);
        }

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

    // console.log('firstUpdated')
    // this.updateWordCLoud();
  }

  updateWordCLoud() {
    // After the component is rendered, initialize the word cloud
    const skills: any = [
      {text: "Test Driven Design", weight: 7},
      {text: "Object-Oriented Programming", weight: 8},
      {text: "Software Architecture", weight: 6},
      {text: "CAD Design", weight: 8.5},
      {text: "Photoshop", weight: 7.5},
      {text: "WordPress", weight: 9},
      {text: "Python", weight: 6},
      {text: "Java", weight: 7.5},
      {text: "HTML, CSS", weight: 8},
      {text: "JavaScript", weight: 6.5},
      {text: "TypeScript", weight: 5.5}
    ];

    WordCloud(this.wordCloudSection, skills);

    console.log(this.wordCloudSection.innerText)

  }

  render() {
    return html`
      <div id="cv">
        <header>
          <h1 visibility="hidden">C.V.</h1>
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
              <li>
                <div class="direction-r">
                  <div class="flag-wrapper">
                    <a href="https://www.youtube.com/channel/UCiuD3eNaZ95eSXImp_eSIww" class="flag">Tom
                      Crown</a>
                    <span class="time-wrapper"><span class="time">2020 - 2022</span></span>
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
                    <a href="https://www.facebook.com/HouseofGentleFrequencies/" class="flag">House of
                      Gentle Frequencies</a>
                    <span class="time-wrapper"><span class="time">2020 - 2022</span></span>
                  </div>
                  <div class="desc">
                    Safe house for the advocacy of women's health, in the broadest sense.
                    I hosted, marketed and created and maintained B2B-relations.
                  </div>
                </div>
              </li>

              <!-- Experience Item -->
              <li>
                <div class="direction-r">
                  <div class="flag-wrapper">
                    <a href="https://www.teaanddragons.art" class="flag">Tea and Dragons</a>
                    <span class="time-wrapper"><span class="time">2022 - present</span></span>
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
                    <a href="https://amsterdamsefrisdrankfabriek.nl/" class="flag">A.F.F.</a>

                    <span class="time-wrapper"><span class="time">2020 - 2021</span>
                  </div>
                  <div class="desc">
                    B2B-sales and production of craft lemonades in the Benelux area.
                  </div>
                </div>
              </li>

              <!-- Experience Item 3 -->
              <li>
                <div class="direction-r">
                  <div class="flag-wrapper">
                    <a href="https://www.instagram.com/reddymaekers/" class="flag">ReddyMaekers</a>

                    <span class="time-wrapper"><span class="time">2014 - 2019</span>
                  </div>
                  <div class="desc">
                    Festival/filmset decors and props, and other customized building assignments/brand
                    activations.
                  </div>
                </div>
              </li>

              <!-- Experience Item 4 -->
              <li>
                <div class="direction-l">
                  <div class="flag-wrapper">
                    <a href="https://nepco.nl/" class="flag">Studio Nepco</a>

                    <span class="time-wrapper"><span class="time">2015 - 2018</span>
                  </div>
                  <div class="desc">
                    Pattern design, Foam Modulation, painting, Robotics, Sewing, Film/theatre
                    Production, Acting.
                  </div>
                </div>
              </li>

              <!-- Experience Item 5 -->
              <li>
                <div class="direction-r">
                  <div class="flag-wrapper">
                    <a href="https://www.instagram.com/ryan___reddy/" class="flag">Ryan Reddy</a>
                    <span class="time-wrapper"><span class="time">2015 - 2017</span>
                  </div>
                  <div class="desc">
                    My own art;
                    Fabrication and design of decors, props, costumes, and special effects.
                    However performance, theatre, and experience design.
                  </div>
                </div>
              </li>

              <!-- Experience Item 6 -->
              <li>
                <div class="direction-l">
                  <div class="flag-wrapper">
                    <a href="https://www.jorislaarman.com/" class="flag">Laarman Lab</a>
                    <span class="time-wrapper"><span class="time">2014 - 2015</span>
                  </div>
                  <div class="desc">
                    Cutting-edge technique, combined with old lore crafts.
                    CAD design, and modern manufacturing techniques.
                    The renowned Joris Laarman furniture is shown in galleries and museums all over the
                    world.
                  </div>
                </div>
              </li>

              <!-- Experience Item 7 -->
              <li>
                <div class="direction-r">
                  <div class="flag-wrapper">
                    <a href="https://www.pepperminds.nl/" class="flag">Pepperminds</a>
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
                    <a href="https://www.hu.nl/" class="flag">Utrecht University</a>
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
                    <a href="https://www.hmcollege.nl/" class="flag">HM College</a>

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
                    <a href="https://ecl.nl/" class="flag">ECL Haarlem</a>
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
                <div class="skill-badge" data-percentage="75"><span class="skill-name"><a
                  href="https://www.java.com/">Java</a></span>
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
                                <span class="skill-name"><a
                                  href="https://www.typescriptlang.org/docs">TypeScript</a></span>
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

              <h2>Skills</h2>
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
