import {css, html, LitElement} from 'lit';
import {customElement, property, state} from 'lit/decorators.js';
import {ContactFormDTO} from "../data/ContactFormDTO";
import {firebaseService} from "../services/firebaseService";

import type {GridActiveItemChangedEvent} from '@vaadin/grid';
import '@vaadin/vaadin'

/**
 * An example element.
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */
@customElement('mail-element')
export class MailElement extends LitElement {
  @state() private selectedItems: ContactFormDTO[] | undefined;
  @property() _mailsMap: unknown;
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
    `;
  }
  render() {
    return html`
      <meta name="description" content="Ryan Reddy's world.">
      <meta title="All mails page">
      <body>
      <main>

        <hr/>
        <div class="tablecontainer">
          <vaadin-grid
            .items="${this._mailsMap}"
            .selectedItems="${this.selectedItems}"
            @active-item-changed="${(e: GridActiveItemChangedEvent<ContactFormDTO>) => {
              const item = e.detail.value;
              this.selectedItems = item ? [item] : [];
              console.log(this.selectedItems)
            }}"
            theme="wrap-cell-content"
            all-rows-visible
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
          ${JSON.stringify(this.selectedItems)}
          ${this.selectedItems}</p>
        <button>Edit geselecteerde rij</button>
        <button>Exporteren als..</button>

        <button onclick="print()">Print...</button>
      </main>
      </body>
    `;
  }
}
