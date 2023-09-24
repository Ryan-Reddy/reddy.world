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
  firstUpdated(changedProperties: any) {
    let titleEvent = new CustomEvent('title-change', {
      detail: {
        message: 'CV'
      }
    });
    console.log('dispatching event:' + titleEvent.detail.message)
    this.dispatchEvent(titleEvent);
  }
  static get styles() {
    return css`
      #cv {
        width: 100vw;
      }

      #iframe-cv {
        height: 750px;
        width: 100%;
      }

    `;
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
          I have long searched for what I want to do to make this world a better
          place, I have attempted
          Direct-sales of good causes, Journalism, management, i’ve been a
          chef, sidestepped into modelling and acting, the list goes on-and-on,
          you can check the rest of my linkedin for more.
          Alan Watts once inspired me to just go and do that which really
          makes me happy.
          And warned me to do it so much, i could get really really good at it.
          and here I am.
          Currently hacking away at a bachelor of Computer Science
          Engineering.
      </div>
    `;
  }
}
