// import {css, html, LitElement} from 'lit';
// import {customElement, property} from 'lit/decorators.js';
// import { Configuration, OpenAIApi } from "openai";
//
// const configuration = new Configuration({
//   apiKey: process.env.OPENAI_API_KEY,
// });
// const openai = new OpenAIApi(configuration);
//
// /**
//  * An example element.
//  *
//  * @slot - This element has a slot
//  * @csspart button - The button
//  */
// @customElement('open-ai-element')
// export class OpenAIElement extends LitElement {
//
//   constructor() {
//     super();
//     this._clickForSupport();
//   }
//   firstUpdated(changedProperties: any) {
//     let titleEvent = new CustomEvent('title-change', {
//       detail: {
//         message: 'OpenAi'
//       }
//     });
//     console.log('dispatching event:' + titleEvent.detail.message)
//     this.dispatchEvent(titleEvent);
//   }
//
//   static get styles() {
//     return css`
//       * {
//         margin: 0;
//         padding: 0;
//         box-sizing: border-box;
//         text-decoration: none;
//       }
//
//       .hidden {
//         display: none;
//         pointer-events: none;
//         color: var(--grijs);
//         background-color: var(--grijs);
//       }
//
//       button {
//         width: 66%;
//         height: 2em;
//       }
//     `;
//   }
//
//   render() {
//     return html`
//       <meta name="description" content="Ryan Reddy's world.">
//       <meta title="Support page">
//       <body>
//       <main>
//
//           <img src="/Have-you-tried-turning-it-off-and-on-again.jpg"
//                alt="Hello IT... Have you tried turning it off and on again?"/>
//         <input>
//         <openAi
//
//       </main>
//       </body>
//     `;
//   }
//
//   async _clickForSupport (req: undefined, res: { status: (arg0: number) => { (): any; new(): any; json: { (arg0: { result: any; }): void; new(): any; }; }; } | undefined) {
//   console.log(openai);
//     const response = await openai.createImage({
//       prompt: "a white siamese cat",
//       n: 1,
//       size: "1024x1024",
//     });
//     res.status(200).json({ result: image.data.choices[0].text });
//     let image_url = response.data.data[0].url;
//     console.log(image_url)
//   }
//
//   generatePrompt(title: any) {
//     return `${title} in the style of high-quality food photography`;
//   }
// }
