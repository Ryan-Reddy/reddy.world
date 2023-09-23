import {css, html, LitElement} from "lit";
import {customElement, property, query} from "lit/decorators.js";
import "/css/mainCSS.css";

@customElement("one-third-element")
export class OneThirdElement extends LitElement {
  // Declare the interval property as a static property
  static interval: NodeJS.Timeout;
  @property() _hiddenElement = "hidden";
  @property() _shadowRoot!: ShadowRoot;
  @query("#name") _name!: any;
  @query("#email") _email!: any;
  @query("#subject") _subject!: any;
  @query("#message") _message!: any;
  @query("#countup1") private countUpContainer!: HTMLDivElement;
  @query("#countdown1") private countDownContainer!: HTMLDivElement;

  constructor() {
    super();
    // Month Day, Year Hour:Minute:Second, id-of-element-container
    this.countUpFromTime("Sep 29, 1991 12:55:00", "countup1"); // ****** Corrected for leap years +8
  }

  static get styles() {
    return css`
      main {
        min-width: 550px !important;
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
        border: 10px;
        border-radius: 5px;
        padding: 10px 20px;
        cursor: pointer;
        transition: background 0.3s ease;
      }

      a {
        text-decoration: underline;
      }

      a.active,
      a:hover {
        background: var(--silver);
        transition: var(--transitionInSeconds);
        //color: #8e8e8e !important
      }

      .countup {
        text-align: center;
        margin: 120px;
        margin-top: 20px;
        margin-bottom: 0;
      }

      //DATE COUNT UP TIMER
      .countup .timeel {
        display: inline-block;
        padding: 10px;
        background: #151515;
        margin: 0;
        color: white;
        min-width: 2.6rem;
        margin-left: 13px;
        border-radius: 10px 0 0 10px;
      }

      .countup span[class*="timeRef"] {
        border-radius: 0 10px 10px 0;
        margin-left: 0;
        background: #e8c152;
        color: black;
      }

      hr {
        margin-top: 2rem;
        margin-bottom: 2rem;
        width: 100%;
      }

      @media (max-width: 952px) {
        main {
          min-width: 0 !important; /* Remove min-width for main */
        }

        .invitation {
          max-width: 90%; /* Adjust the max-width for scaling */
          padding: 20px;
          border-radius: 10px;
          box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
          text-align: center;
          margin-bottom: 20px;
        }

        #centered_image {
          width: 100%;
          max-width: 100% !important;
          margin-left: auto;
          margin-right: auto;
          display: block; /* This helps with centering block-level elements like images */
        }

        img {
          max-width: 80% !important;
        }

        .countup span {
          display: block;
        }
      }

      @media (prefers-color-scheme: light) {
        .invitation a.button {
          color: var(--zwart);
        }

        footer,
        nav ul li a {
          color: var(--zwart);
          background-color: var(--wit);
          border-color: var(--wit);
        }

        a.active,
        a:hover {
          color: var(--wit);
          transition: var(--transitionInSeconds);
        }
      }
    `;
  }

  countUpFromTime(countFrom: string, id: string) {
    const countFromDate = new Date(countFrom).getTime();
    const now = new Date();
    const timeDifference = now.getTime() - countFromDate;

    const secondsInADay = 60 * 60 * 1000 * 24;
    const secondsInAHour = 60 * 60 * 1000;

    let days = Math.floor(timeDifference / secondsInADay);
    let years = Math.floor(days / 365);
    if (years > 1) {
      days = days - years * 365;
    }
    let hours = Math.floor((timeDifference % secondsInADay) / secondsInAHour);
    let mins = Math.floor(((timeDifference % secondsInADay) % secondsInAHour) / (60 * 1000));
    let secs = Math.floor((((timeDifference % secondsInADay) % secondsInAHour) % (60 * 1000)) / 1000);

    if (this.countUpContainer) {
      this.countUpContainer.querySelector(".years")!.textContent = years.toString();
      this.countUpContainer.querySelector(".days")!.textContent = days.toString();
      this.countUpContainer.querySelector(".hours")!.textContent = hours.toString();
      this.countUpContainer.querySelector(".minutes")!.textContent = mins.toString();
      this.countUpContainer.querySelector(".seconds")!.textContent = secs.toString();
    }

    // if (this.countDownContainer) {
    //   this.countDownContainer.querySelector(".years")!.textContent =
    //     (33 - years).toString();
    //   this.countDownContainer.querySelector(".days")!.textContent =
    //     (7 - days).toString();
    //   this.countDownContainer.querySelector(".hours")!.textContent =
    //     (24 - hours).toString();
    //   this.countDownContainer.querySelector(".minutes")!.textContent =
    //     (60 - mins).toString();
    //   this.countDownContainer.querySelector(".seconds")!.textContent =
    //     (60 - secs).toString();
    // }

    clearTimeout(OneThirdElement.interval); // Use the static property
    OneThirdElement.interval = setTimeout(() => {
      this.countUpFromTime(countFrom, id); // Call the method on the instance
    }, 1000);
  }

  firstUpdated(changedProperties: any) {
    let titleEvent = new CustomEvent("title-change", {
      detail: {
        message: "A Cosmic Celebration",
      },
    });
    console.log("dispatching event:" + titleEvent.detail.message);
    this.dispatchEvent(titleEvent);

    // Wait for DOMContentLoaded event to ensure the DOM is ready
    window.addEventListener("DOMContentLoaded", () => {
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
      <title>A Cosmic Celebration</title>
      <!-- Open Graph Protocol meta tags -->
      <meta property="og:title" content="A Cosmic Celebration">
      <meta property="og:description"
            content="Join me for a gathering beneath the starlit tapestry.
              As the clock ticks toward my 🌌 33,333rd orbit, we'll come together.">
      <meta property="og:image" content="cloudwalker.jpg">
      <meta property="og:url" content="https://reddy.world/one-third">
      <meta name="description" content="Ryan Reddy cordially invites you to join him.">
      <meta title="one third ">

      <body>
      <main>
        <div class="invitation">
          <h1>A Cosmic Celebration</h1>
          <div id="centered_image">
            <img src="cloudwalker.jpg"
                 alt="long foothpath wide ridge, with green grass on top, very curvy and tricky looking. A female dances on the edge of it, clearly making her way in one direction toward the horizon. "
                 loading="eager"
            />
          </div>
          <div class="paragraph">
            <h2>Join me in a gathering beneath the starlit tapestry.</h2>
            <p>As the clock ticks toward my 🌌 <i>33,333rd</i> orbit, we'll come together for a celestial soirée.</p>
            <p>Save the date:
              <a
                href="https://calendar.google.com/calendar/event?action=TEMPLATE&tmeid=MDNrM3NjcmRhcHMwY2JvamoyY2JlZWUzMDAga2x1Z29va0Bt&tmsrc=klugook%40gmail.com">
                <i>December 24, 2024</i>, from <i>3:00 PM to 6:00 PM.</i></a>
            </p>
            <p>A celestial moment etched in the heavens. 🌠🌌</p>
            <p>* Born amidst the stars on <i>21-09-1991.</i></a></p>

            <hr>

            <!--            // Counting clock:-->
            <div class="countup" id="countup1">
              <h3>Time I have been around: </h3>
              <span class="timeel years">00</span>
              <span class="timeel timeRefYears">years</span>
              <span class="timeel days">00</span>
              <span class="timeel timeRefDays">days</span>
              <span class="timeel hours">00</span>
              <span class="timeel timeRefHours">hours</span>
              <span class="timeel minutes">00</span>
              <span class="timeel timeRefMinutes">minutes</span>
              <span class="timeel seconds">00</span>
              <span class="timeel timeRefSeconds">seconds</span>
            </div>

            <!--            // Static time:-->
            <div class="countup" id="countup1">
              <h3>The portal opens at: </h3>
              <span class="timeel years">33</span>
              <span class="timeel timeRefYears">years</span>
              <span class="timeel days">03</span>
              <span class="timeel timeRefDays">days</span>
              <span class="timeel hours">03</span>
              <span class="timeel timeRefHours">hours</span>
              <span class="timeel minutes">03</span>
              <span class="timeel timeRefMinutes">minutes</span>
              <span class="timeel seconds">03</span>
              <span class="timeel timeRefSeconds">seconds</span>
            </div>

            <!--            // Countdown clock:-->
            <div class="countup" id="countdown1">
              <!--              <h3>The portal starts opening at: </h3>-->
              <!--              <span class="timeel years">33</span>-->
              <!--              <span class="timeel timeRefYears">years</span>-->
              <!--              <span class="timeel days">03</span>-->
              <!--              <span class="timeel timeRefDays">days</span>-->
              <!--              <span class="timeel hours">03</span>-->
              <!--              <span class="timeel timeRefHours">hours</span>-->
              <!--              <span class="timeel minutes">03</span>-->
              <!--              <span class="timeel timeRefMinutes">minutes</span>-->
              <!--              <span class="timeel seconds">03</span>-->
              <!--              <span class="timeel timeRefSeconds">seconds</span>-->
            </div>

          </div>
          <hr>

          <div>
            <div id="mc_embed_shell">
              <link href="//cdn-images.mailchimp.com/embedcode/classic-061523.css" rel="stylesheet" type="text/css">
              <div id="mc_embed_signup">
                <form
                  action="https://world.us8.list-manage.com/subscribe/post?u=431ab43581c4e5868f605646f&amp;id=2b149a018a&amp;f_id=00c011e0f0"
                  method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate"
                  target="_blank">
                  <div id="mc_embed_signup_scroll">
                    <a id="rsvp_button">
                      <h3>RSVP FORM</h3></a>
                    <p>"Note that attendance is limited, so we encourage you to RSVP early. <br>
                      Stay tuned for further updates in the near future."</p>
                    <div class="indicates-required"><span class="asterisk">*</span> Required fields</div>
                    <div class="mc-field-group"><label for="mce-EMAIL">Email Address <span
                      class="asterisk">*</span></label><input type="email" name="EMAIL" class="required email"
                                                              id="mce-EMAIL" required="" value=""
                                                              placeholder="Enter your email"></div>
                    <div class="mc-field-group"><label for="mce-FNAME">Full Name <span
                      class="asterisk">*</span></label><input type="text" name="FNAME" class="required text"
                                                              id="mce-FNAME" required="" value="" spellcheck="false"
                                                              data-ms-editor="true" placeholder="Enter your full name"
                    ></div>
                    <div class="mc-field-group"><label for="mce-LNAME">Party Size <span
                      class="asterisk">*</span></label><input type="text" name="LNAME" class="required text"
                                                              id="mce-LNAME" value="" spellcheck="false"
                                                              data-ms-editor="true" required=""
                                                              placeholder="Number of attendees"><span
                      id="mce-LNAME-HELPERTEXT" class="helper_text">Are you coming alone or with others?</span>
                    </div>
                    <div class="mc-field-group size1of2"><label for="mce-BIRTHDAY-month">Birthday </label>
                      <div class="datefield"><span class="subfield monthfield"><input class="birthday REQ_CSS"
                                                                                      type="text" pattern="[0-9]*"
                                                                                      placeholder="MM" size="2"
                                                                                      maxlength="2"
                                                                                      name="BIRTHDAY[month]"
                                                                                      id="mce-BIRTHDAY-month" value=""
                                                                                      spellcheck="false"
                                                                                      data-ms-editor="true"></span>
                        /<span class="subfield dayfield"><input class="birthday REQ_CSS" type="text" pattern="[0-9]*"
                                                                placeholder="DD" size="2" maxlength="2"
                                                                name="BIRTHDAY[day]" id="mce-BIRTHDAY-day" value=""
                                                                spellcheck="false" data-ms-editor="true"></span><span
                          class="small-meta nowrap">( MM / DD )</span></div>
                    </div>
                    <div id="mce-responses" class="clear foot">
                      <div class="response" id="mce-error-response" style="display: none;"></div>
                      <div class="response" id="mce-success-response" style="display: none;"></div>
                    </div>
                    <div aria-hidden="true" style="position: absolute; left: -5000px;">
                      <!-- Real people should not fill this in and expect good things - do not remove this or risk form
                      bot signups -->
                      <input type="text" name="b_431ab43581c4e5868f605646f_2b149a018a" tabindex="-1" value=""
                             spellcheck="false" data-ms-editor="true">
                    </div>
                    <div class="optionalParent">
                      <div class="clear foot">
                        <input type="submit" name="subscribe" id="mc-embedded-subscribe" class="button"
                               value="Submit">
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>

            <a id="rsvp_button"
               href="mailto:ryan@reddy.world?subject=RSVP for Cosmic Celebration&body=Dear Ryan,%0D%0A%0D%0AI would like to RSVP for the Cosmic Celebration on December 24, 2024, from 3:00 PM to 6:00 PM.%0D%0A%0D%0A [ ] I wish to bring a partner. %0D%0A%0D%0AThank you,%0D%0A[Your Name]">
              <h3>RSVP through e-mail</h3>
            </a>
          </div>
      </main>
      </body>
    `;
  }
}
