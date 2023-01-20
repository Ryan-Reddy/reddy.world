import { css, html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';

/**
 * A Login element.
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */

@customElement('login-element')
export class Login extends LitElement {
  // @property() currentPage: string;

  constructor() {
    super();
  }

  static get styles() {
    return css`
      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        text-decoration: none;
      }
      .full {
        width: 100%;
      }

      header {
        padding-top: 1em;
        font-size: 2em;
        padding-bottom: 0.5em;
      }

      header p {
        font-size: 0.5em;
      }

      table {
        padding: 1em;
        background: var(--kpn-blauw);
      }
      label {
        /*font-size: 2em;*/
        /*visibility: hidden;*/
        display: none;
      }

      form {
        margin-top: 1em;
        padding-left: 1em;
        padding-right: 1em;
      }

      ul {
        list-style-type: none;
        margin: 0;
        padding: 0;
        overflow: hidden;
      }

      ol {
        list-style-type: none;
        margin: 0;
        padding: 0;
        overflow: hidden;
      }

      li {
        padding: 0.1em;
      }

      fieldset {
        padding-left: 1em;
        padding-right: 1em;
        font-color: var(--kpn-zwart);
      }

      #vervoerstype {
        background-color: #00c300;
      }

      .inputfield {
        width: 100%;
        padding: 0.8em 0.4px;
        /*margin: 0.1em;*/
        border: none;
        border-radius: 4px;
        background-color: var(--kpn-wit);
        color: var(--kpn-zwart);
        background-color: var(--kpn-grijs);
        vertical-align: middle;
        text-indent: 0.7em;
      }

      /*Buttons: */
      input[type='button'],
      input[type='submit'],
      input[type='reset'] {
        width: 33%;
        background-color: #00c300;
        border: none;
        color: white;
        padding: 1em 0px;
        text-decoration: none;
        margin: 4px 2px;
        cursor: pointer;
      }

      .visibility-hidden {
        display: none;
        pointer-events: none;
        color: lightgrey;
        foreground-color: var(--kpn-grijs);
        background-color: var(--kpn-grijs);
        required: invalid;
      }
    `;
  }

  render() {
    return html`
      <body>
        <div id="page-container">
          <main>
            <div id="content-wrap">
              <form id="login_account">
                <ul>
                  <li>
                    <label for="email">Email:</label>
                    <input
                      autocomplete="email"
                      class="inputfield"
                      id="email"
                      name="email"
                      required
                      type="email"
                      width="50%"
                    /><br />
                  </li>
                  <li>
                    <label for="password">Wachtwoord:</label>
                    <input
                      autocomplete="password"
                      class="inputfield"
                      id="password"
                      name="password"
                      required
                      type="password"
                    /><br /><br />
                  </li>
                  <li>
                    <input
                      id="login()_button"
                      @click=${this._login}
                      type="button"
                      value="login()_button"
                    />
                  </li>
                </ul>
              </form>
              <span id="postresponse"></span>

              <br /><br />
              <div @click=${this._clickMenu} id="nope">
                <a class="nav-button" href="#" id="password-reset"
                  >Wachtwoord vergeten</a
                >
                ||
                <a class="nav-button" href="#" id="new-account"
                  >Nieuw account creëren</a
                >
              </div>
            </div>
          </main>
        </div>
      </body>
    `;
  }

  // _login(e: Event) {
  _login() {
    console.log('login.login() neeeeds work');
  }

  _clickMenu(e: Event) {
    // @ts-ignore
    const id = e.target.id;
    console.log('id= ' + id);
    // this.currentPage = id;

    // const hasChanged = this.currentPage !== id;
    // if (hasChanged) {
    // this.currentPage = id;
    // console.log('currentPage now: ' + this.currentPage);

    //notify parent:
    this.dispatchEvent(new Event('page-chosen'));
    // }
  }
}
