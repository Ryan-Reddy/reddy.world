import {css, html, LitElement} from 'lit';
import {customElement, property, state} from 'lit/decorators.js';
import {ContactFormDTO} from "../data/ContactFormDTO";
import {firebaseService} from "../services/firebaseService";

import '@vaadin/grid';
import { gridRowDetailsRenderer } from '@vaadin/grid/lit.js';
import type { GridActiveItemChangedEvent } from '@vaadin/grid';
import '@vaadin/form-layout';
import '@vaadin/text-field';

/**
 * An example element.
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */
@customElement('mail-element')
export class MailElement extends LitElement {
  @state() private detailsOpenedItem: ContactFormDTO[] = [];
  @state() private selectedMessage: any[] | undefined;
  @state() private items: any[] = [];
  @property() _mailsMap: ContactFormDTO[] = [];

  constructor() {
    super();
  }

  async firstUpdated(changedProperties: any) {
    this.setTitle();
    await this.fillTableWithMails();
  }

  private setTitle() {
    let titleEvent = new CustomEvent('title-change', {
      detail: {
        message: 'All Mails'
      }
    });
    console.log('dispatching event:' + titleEvent.detail.message)
    this.dispatchEvent(titleEvent);
  }

  private async fillTableWithMails() {
    const allDocs = await firebaseService.getAllDocs()
    let items = [];

    for (let [id, value] of allDocs) {
      items.push({
        id: id,
        date: new Date(value.date).toLocaleString('nl'),
        replyTo: value.replyTo,
        name: value.name,
        subject: value.subject,
        message: value.message,
      })
    }
    // @ts-ignore
    this._mailsMap = items; // set grid items
  }

  static get styles() {
    return css`
      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        text-decoration: none;
      }

      main {
        color: var(--wit);
        /* These edit the vaadin grid colors: */
        background-color: var(--red);
        margin: 3vh;
        --lumo-base-color: var(--zwart);
        --lumo-body-text-color: var(--wit);
      }


      .full {
        width: 100%;
        height: 100%;
        overflow: auto;
      }

      H1 {
        padding-top: 1em;
        font-size: 2em;
        padding-bottom: 0.5em;
      }

      header p {
        font-size: 1em;
      }

      .tablecontainer {
        height: 70vh;
        overflow: auto;
        width: 90%;
        margin-left: auto;
        margin-right: auto;
        padding-top: 10px;
      }

      table {
        background: var(--zwart);
      }

      th {
        padding: 0.6em;
        border-bottom: 1px dotted #ddd;
        border-collapse: collapse;
      }

      .columnHeads {
        background: var(--groen);
        cursor: pointer;
      }

      @media (max-width: 858px) {
        .hiddensmolscreen {
          display: none;
        }
      }
      @media (prefers-color-scheme: light) {
        :root {
          color: var(--zwart);
          background-color: var(--wit);
        }

        table {
          background: var(--wit);
          border: 1px solid var(--zwart);
          border-color: var(--wit);
        }

        th {
          border-bottom: 1px dotted var(--zwart);
        }
      }
    `;
  }

  render() {
    return html`
      <meta name="description" content="Ryan Reddy's world.">
      <meta title="All mails page">
      <body>
      <main>

        <hr/>
<!--            //https://vaadin.com/docs/latest/components/grid/#item-details-->
<!-- grid too SLOW?????                https://vaadin.com/blog/using-the-right-r-->
        <div class="tablecontainer">
          <vaadin-grid
            theme="row-stripes"
            .items="${this._mailsMap}"
            .detailsOpenedItem="${this.detailsOpenedItem}"
            @active-item-changed="${(e: GridActiveItemChangedEvent<ContactFormDTO>) => {
              const item = e.detail.value;
              this.detailsOpenedItem = item ? [item] : [];
            }}"
          >

            <vaadin-grid-column path="id" auto-width flex-grow="0"></vaadin-grid-column>
            <vaadin-grid-column path="date" auto-width flex-grow="0"></vaadin-grid-column>
            <vaadin-grid-column path="replyTo" auto-width></vaadin-grid-column>
            <vaadin-grid-column path="name" auto-width></vaadin-grid-column>
            <vaadin-grid-column path="subject" auto-width flex-grow="1.1"></vaadin-grid-column>
            <vaadin-grid-column path="message.text"></vaadin-grid-column>
          </vaadin-grid>
        </div>
        <p>Selected row:
          ${JSON.stringify(this.detailsOpenedItem)}
          <br>
          ${JSON.stringify(this.selectedMessage)}
        </p>
        <button>Edit geselecteerde rij</button>
        <button>Exporteren als..</button>

        <button onclick="print()">Print...</button>
      </main>
      </body>
    `;
  }
}
