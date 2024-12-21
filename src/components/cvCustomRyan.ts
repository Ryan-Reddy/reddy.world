import {css, html, LitElement} from 'lit';
import {customElement, query, state} from 'lit/decorators.js';
import mainCSS from '../css/mainCSS';
import langCSS from '../css/langCSS';
import WordCloud from 'wordcloud';


/* @ts-ignore */
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

  @query('#computer-skills') computerSkillsContainer!: HTMLElement;
  @query('#skills-container') container: HTMLElement | undefined;

  @state() skills: {
    categories: Array<{ name: string; skills: Array<{ name: string; percentage?: string | number }> }>
  } | null = null;


  constructor() {
    super();
    console.log('constructing')
  }

  static get styles() {
    return [
      langCSS,
      mainCSS,
      css`
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
          //height: 100vh; /* Full viewport height */
          display: flex;
          justify-content: center;
          align-items: center; /* Adjust if you want vertical positioning */

        }

        nav ul li {
          justify-content: center; /* Centers the entire <ul> inside the <nav> */
          align-items: center; /* Centers vertically (optional if you want vertical alignment) */

        }

        #cv {
          display: flex;
          flex-direction: column;
        }

        #columns {
          display: flex;
          gap: 20px; /* Space between columns */
          overflow: hidden; /* Avoid content overflow */
        }

        #left-column, #right-column {
          flex-grow: 0;
          max-width: 50vw; /* Ensure the column doesnt cover the screen */
          min-height: 100%; /* Ensure the left column occupies the full height */
        }

        #left-column {
          flex: 2; /* Larger column for experience/education */
        }

        #right-column {
          flex: 1; /* Smaller column for skills */
        }

        .main-divs {
          //width: 48%; /* Two columns side-by-side */
          box-sizing: border-box;
          flex-direction: column;
          align-items: center;

          display: flex;
        }

        h2 {
          text-align: center;
          margin: 0 0 1.2em 0;

        }

        li, ul {
          padding: 0;
          width: 45vw; /* +- half WIDTH OF PAGE */
          /*height: 100vh; /* Full height of the viewport */

          list-style: none; /* Remove default bullet points if needed */
          position: relative; /* Ensure the list item can contain positioned children */
        }

        a {
          margin: 0;
        }

        .desc {
          max-width: 30vw;
          margin-left: -15em;

          opacity: 0;
          max-height: 0;
          overflow: hidden;
          visibility: hidden;
          transition: opacity 0.4s cubic-bezier(0.23, 1, 0.32, 1), /* Ease out opacity for smooth fade-in */ max-height 0.4s ease, /* Smooth vertical expansion */ transform 0.4s cubic-bezier(0.23, 1, 0.32, 1); /* Use a spring-like easing curve */
        }

        .direction-r .desc {
          margin-left: 15em;
        }

        .direction-l .desc {
        //  margin-left: 15em;
        }

        li:hover .desc {
          padding-bottom: 1em;

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
          /*font-size: 0.66666em;*/
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

        li {
          position: relative; /* Ensure li can contain absolutely positioned elements */
        }

        li:hover .time-wrapper {
          opacity: 1;
          max-height: 100px; /* Adjust this to suit your content */
          visibility: visible;
          transform: translateX(-35px); /* Animate into its natural position */
        }

        li.active .time-wrapper {
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
          /*box-sizing: border-box;*/
          /*width: 100%;*/
          /*max-width: 80%;*/
        }

        #skillsGrid {
          grid-template-columns: 1fr 1fr 1fr 1fr;
          padding: 1rem;
        }

        .skill-badge {

          color: var(--zwart);
          border: var(--background-light);

          position: relative;
          display: inline-block;
          width: 100%; /* Allow it to fill available space */
          /*max-width: 250px; /* Adjust if necessary */
          margin: 5px;
          padding: 10px;

          border-radius: 5px;
          /*box-sizing: border-box;*/
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
          display: flex;
          flex-direction: column; /* Ensure items stack vertically */
          list-style-type: none;
          padding: 0;
        }

        .timeline {
          /*position: relative;*/
          /*width: 660px;*/


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
          width: 15vw;
          height: 60px;

          background: rgb(248, 248, 248, 0.12);
          padding: 5px;
          border-radius: 5px;
          font-weight: 600;
          text-align: left;
          margin-bottom: 1.5em;
        }

        /* ================ direction-l & -r flag ================ */

        .direction-l {
          float: left;
          text-align: right;
        }

        .direction-r {
          width: 50vw;
        (makes column half screen) padding-left: 0.75 em;

        }

        .direction-l .flag {
          margin-left: -15em;

          box-shadow: -1px 1px 1px rgba(0, 0, 0, 0.15), 0 0 1px rgba(0, 0, 0, 0.15);
        }

        .direction-r .flag {
          margin-left: 20em;

          box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.15), 0 0 1px rgba(0, 0, 0, 0.15);
        }

        //
        ///* Ball */
        //
        //.direction-l .flag:before, .direction-r .flag:before {
        //  content: ' ';
        //  position: absolute;
        //  top: 30px; /* Adjust as needed to control vertical placement */
        //  right: 0%; /* Horizontally center along the page's centerline */
        //  transform: translateY(-50%); /* Offset to ensure perfect vertical alignment */
        //
        //  /*right: -40px;*/
        //  display: block;
        //  width: 12px;
        //  height: 12px;
        //  /*margin-top: -10px;*/
        //  background: #fff;
        //  border-radius: 10px;
        //  border: 4px solid var(--gold);
        //  z-index: 10;
        //}
        //
        //.direction-r .flag:before {
        //  left: -40px;
        //  top: 15px;
        //}
        //
        ///* Arrow */
        //
        //.direction-l .flag:after, .direction-r .flag:after {
        //  left: 40px;
        //
        //  content: "";
        //  position: absolute;
        //  top: 50%;
        //  height: 0;
        //  width: 0;
        //  margin-top: -8px;
        //  border: solid transparent;
        //  pointer-events: none;
        //}
        //
        //.direction-l .flag:after {
        //
        //  border-left-color: rgb(248, 248, 248);
        //  border-width: 8px;
        //}
        //
        //.direction-r .flag:after {
        //
        //  border-right-color: rgb(248, 248, 248);
        //  border-width: 8px;
        //}


        /* General Styling */

        #skills-container {
          margin: 20px;
        }

        .skills-category, .timeline {
          flex: 1; /* Equal width */
          margin: 0 10px; /* Add spacing */
        }

        .skills-category ul {
          list-style: none;
          padding: 0;
        }

        .skills-category li {
          display: flex;
          justify-content: space-between;
          align-items: center;
          /*padding: 5px 0;*/
        }

        .stars {
          font-size: 1.2em;
          color: gold;
        }


        h3 {
          font-size: 1.2em;
          margin-bottom: 10px;
        }

        ul {

          list-style: none;
          padding: 0;
        }

        li {
          width: auto; /* Allow natural sizing */
          margin: 0 auto; /* Center elements horizontally */

          font-size: 1em;
          /*display: flex;*/
          align-items: center;
          justify-content: space-between;
        }

        /* Progress Display */

        .progress-display {
          display: flex;
          gap: 4px;
        }

        .progress-ball {
          width: 10px;
          height: 10px;
          border-radius: 50%;
          background-color: lightgray;
          display: inline-block;
        }

        .progress-ball.filled {
          background-color: #4caf50; /* Green for filled progress */
        }

        .progress-ball.empty {
          background-color: lightgray; /* Gray for empty progress */
        }

        /* Placeholder for No Data */

        .no-data {
          font-size: 0.8em;
          color: gray;
        }


        .skill-badge {
          display: flex;
          align-items: center;
          margin: 5px 0;
        }

        .skill-name {
          margin-right: 10px;
        }

        .skill-rating {
          display: flex;
        }

        .skill-rating .ball {
          width: 10px;
          height: 10px;
          border-radius: 50%;
          margin-right: 3px;
        }


        /* MEDIA MOBILE */
        @media (max-width: 768px) {

          main {
            padding: 0;
            display: flex;
          }

          #columns {
            flex-direction: column;
            width: 100vw;
          }

          #left-column, #right-column {
            max-width: 100%; /* Let each column take up the full width on mobile */
            width: 100%;
          }

          .main-divs {
            width: 100vw; /* Full-width for smaller screens */
          }

          .container {
            flex-direction: column; /* Stack on smaller screens */
          }

          .timeline {
            //overflow-x: auto; /* Adds horizontal scrolling */
            //flex-direction: row;
          }

          .timeline-item {
            min-width: 100%; /* Ensure each timeline item takes up full width */
          }
          body {
            font-size: 100%; /* Adjust font size for better readability on small screens */
          }

          /* Adjust list widths for mobile */
          li, ul {
            width: 100%; /* Make the list items take up the full width on mobile */
          }
          .direction-l .flag {
            margin-left: 0em;
      }
          .flag {
            width: 30vw;
            height: 60px;
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


  // Called when the component is first rendered (connected)
  connectedCallback() {
    super.connectedCallback();
    this.addEventListeners(); // This will run when the element is added to the DOM
  }

  // Add event listeners for DOM elements
  private addEventListeners() {
    // Wait for DOMContentLoaded (even though Lit does it already)
    document.addEventListener('DOMContentLoaded', () => {
      const listItems = this.shadowRoot?.querySelectorAll('li'); // Using shadow DOM if you're using LitElement

      listItems?.forEach(item => {
        item.addEventListener('click', (event: MouseEvent) => {
          // Only toggle on mobile (e.g., <= 768px)
          if (window.innerWidth <= 768) {
            event.preventDefault(); // Prevent default action (link navigation)

            // Toggle the 'active' class to show or hide the time-wrapper
            const timeWrapper = item.querySelector('.time-wrapper');
            if (timeWrapper) {
              item.classList.toggle('active');
            }
          }
        });
      });
    });
  }
  scrollToSection(section: HTMLElement) {
    if (section) {
      section.scrollIntoView({behavior: 'smooth', block: 'start'});
    }
  }


  firstUpdated() {
    const titleEvent = new CustomEvent('title-change', {
      detail: {message: 'C.V. Ryan van Lil-Reddy'},
    });
    this.dispatchEvent(titleEvent);
    this.loadSkills(); /* Load skills when the component is first updated*/
  }


  async loadSkills() {
    try {
      const response = await fetch('skills.json');
      this.skills = await response.json();
      console.log('Skills loaded:', this.skills); /* Debugging*/
    } catch (error) {
      console.error('Error loading skills:', error);
    }
  }


/* Helper to Render Progress as Stars or Circles*/
  renderVisualProgress(percentage: string | number | undefined) {
    if (!percentage || typeof percentage !== 'number') {
      return html`<span class="no-data">No data</span>`;
    }

    const filled = Math.round(percentage / 10); /* Convert to a scale of 10*/
    const empty = 10 - filled;

    return html`
      ${Array(filled)
        .fill(0)
        .map(() => html`<span class="progress-ball filled"></span>`)}
      ${Array(empty)
        .fill(0)
        .map(() => html`<span class="progress-ball empty"></span>`)}
    `;
  }

  renderStars(percentage: string | number | undefined): string {
    if (typeof percentage !== 'number') return '☆ ☆ ☆ ☆ ☆'; // Default to empty stars
    const filledStars = Math.round(percentage / 20); // Calculate the number of filled stars
    return '★ '.repeat(filledStars) + '☆ '.repeat(5 - filledStars); // Combine filled and empty stars
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
          <div id="columns">
            <div class="left-column">

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
                        I organised and managed all the people and materials needed for our gatherings of musicians and
                        artists.
                      </div>
                    </div>
                  </li>

                  <!-- Experience Item -->
                  <li>
                    <div class="direction-l">
                      <div class="flag-wrapper">
                        <a href="https://amsterdamsefrisdrankfabriek.nl/" class="flag">A.F.F.</a>
                        <span class="time-wrapper"><span class="time">2020 - 2021</span></span>
                        <!-- Fixed closing tags -->
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

                        <span class="time-wrapper"><span class="time">2014 - 2019</span></span>
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
                        <span class="time-wrapper"><span class="time">2015 - 2018</span></span>
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
            </div>
            <div id="right-column">
              <div id="main-divs" id="skills">


                <h2>Skills</h2>
                <div id="skills-container">
                  ${this.skills?.categories
                    ? this.skills.categories.map(
                      (category) => html`
                        <div class="skills-category">
                          <h3>${category.name}</h3>
                          <ul>
                            ${category.skills.map(
                              (skill) => html`
                                <li>
                                  <span>${skill.name}</span>
                                  <span class="stars">
      ${this.renderStars(skill.percentage)}
      </span>
                                </li>
                              `
                            )}
                          </ul>
                        </div>
                      `
                    )
                    : html`<p>Loading skills...</p>`}
                </div>

              </div>
              <hr>
              <h3>Projects</h3>
              <a
                class="nav-button"
                href="/ral-contrast-checker"
                id="contrast-checker-button"
                aria-label="art"
              >RAL-contrast</a
              >
              <hr>
            </div>
          </div>
          <hr>
    `;
  }
}




