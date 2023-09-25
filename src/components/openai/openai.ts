import {css, html, LitElement} from 'lit';
import {customElement, property, query} from 'lit/decorators.js';
import langCSS from "../../css/langCSS";
import mainCSS from "../../css/mainCSS";

/**
 * An example element.
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */
@customElement('open-ai-element')
export class OpenAIElement extends LitElement {
  @query('#animalInputID') animalInput!: HTMLInputElement;
  @property() result!: unknown;
  constructor() {
    super();
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

        @font-face {
          font-family: "ColfaxAI";
          src: url(https://cdn.openai.com/API/fonts/ColfaxAIRegular.woff2) format("woff2"),
          url(https://cdn.openai.com/API/fonts/ColfaxAIRegular.woff) format("woff");
          font-weight: normal;
          font-style: normal;
        }
        @font-face {
          font-family: "ColfaxAI";
          src: url(https://cdn.openai.com/API/fonts/ColfaxAIBold.woff2) format("woff2"),
          url(https://cdn.openai.com/API/fonts/ColfaxAIBold.woff) format("woff");
          font-weight: bold;
          font-style: normal;
        }

        .main,
        .main input {
          font-size: 16px;
          line-height: 24px;
          color: #353740;
          font-family: "ColfaxAI", Helvetica, sans-serif;
        }

        .main {
          display: flex;
          flex-direction: column;
          align-items: center;
          padding-top: 60px;
        }

        .main .icon {
          width: 34px;
        }

        .main h3 {
        font-size: 32px;
        line-height: 40px;
        font-weight: bold;
        color: #202123;
        margin: 16px 0 40px;
      }

      .main form {
        display: flex;
        flex-direction: column;
        width: 320px;
      }

        .main input[type="text"] {
          padding: 12px 16px;
          border: 1px solid #10a37f;
          border-radius: 4px;
          margin-bottom: 24px;
          outline-color: #10a37f;
        }

        .main ::placeholder {
          color: #8e8ea0;
          opacity: 1;
        }

        .main input[type="submit"] {
          padding: 12px 0;
          color: #fff;
          background-color: #10a37f;
          border: none;
          border-radius: 4px;
          text-align: center;
          cursor: pointer;
        }

        .main .result {
          font-weight: bold;
          margin-top: 40px;
        }
      `];
  }

  firstUpdated(changedProperties: any) {
    let titleEvent = new CustomEvent('title-change', {
      detail: {
        message: 'OpenAi',
      }
    });
    console.log('dispatching event:' + titleEvent.detail.message)
    this.dispatchEvent(titleEvent);
  }
  render() {
    return html`
      <main>
        <img src="/dog.png" class="icon" alt="dog-img"/>
        <h4>Name my pet</h4>
        <form >
          <input
            type="text"
            name="animal"
            id="animalInputID"
            placeholder="Enter an animal"
          />
          <input type="button" value="Generate names" @click=${this.onSubmit}/>
        </form>
        <div class="result"></div>
      </main>
    `;
  }

  async onSubmit(event: Event) {
    // event.preventDefault();
    console.log("input retrieved: " + this.animalInput.value);
    try {
      const response = await fetch("api/generate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ animal: this.animalInput.value }),
      });
      console.log(response.status)

      const data = await response.json();
      if (response.status !== 200) {
        throw data.error || new Error("Request failed with status"+ response.status)
      }

      this.result = data.result;
      console.log(this.result)
      // this.animalInput = '';
    } catch (error) {
      // Consider implementing your own error handling logic here
      console.error(error);
      console.error(error.message);
      console.error(error.message);
      alert(error.message);
    }
  }

}
