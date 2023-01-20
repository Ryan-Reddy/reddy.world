import { css, html, LitElement } from 'lit';
import { customElement, property } from 'lit-element';

/**
 * An example element.
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */
@customElement('reset-password')
export class ResetPassword extends LitElement {
  @property() _hiddenElement = 'hidden';
  @property() currentPage: string;
  constructor() {
    super();
  }
  // TODO: style page reset-password.ts
  static get styles() {
    return css`
      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        text-decoration: none;
      }

      .hidden {
        display: none;
        pointer-events: none;
        color: lightgrey;
        foreground-color: var(--kpn-grijs);
        background-color: var(--kpn-grijs);
        required: invalid;
      }
      button {
        width: 66%;
        height: 2em;
      }
    `;
  }

  render() {
    return html`
      <h1 class="header">Account zoeken.</h1>

      <body>
        <div id="page-container">
          <div id="content-wrap">
            <main>
              <p>
                Voer je e-mailadres in om je account wachtwoord te resetten.
              </p>
              <form id="resetAccount">
                <label for="email">E-mail adres:</label
                ><input
                  class="inputfield"
                  id="email"
                  name="email"
                  type="email"
                /><br /><br />

                <a href="../login/index.html">
                  <button>Annuleren</button>
                </a>
                <!--  onclick="stuurWachtwoordReset()"  -->
                <input
                  id="stuurEmailMetWachtwoordReset"
                  onclick="stuurWachtwoordReset()"
                  type="button"
                  value="Stuur mij een resetmail."
                />
              </form>
              <span id="feedbackspan"></span>
              <hr />
              <br />
              <a href="../new-account/index.html">
                <button>Nieuw account creëren</button>
              </a>
            </main>
          </div>
          <footer id="footer"></footer>
        </div>
      </body>
    `;
  }

  // /** Deze functie controleert het nieuwe wachtwoord, en geeft deze
  //  * aan de backend via een fetch PATCH. De backend regelt dan verder de wijzigingen.
  //  * Vervolgens geeft deze functie weer feedback aan de gebruiker.
  //  */
  // async function wijzigWachtwoord() {
  //   const feedbackspan = document.getElementById('postresponse');
  //   const ww1 = document.getElementById('password').value;
  //   const ww2 = document.getElementById('password2').value;
  //   if (ww1.length < 6 || ww2.length < 6) {
  //     console.log('wachtwoord te kort');
  //     feedbackspan.innerHTML = '<p color=red>Uw wachtwoord is te kort!</p>';
  //   }
  //   if (ww1 != ww2) {
  //     console.log('wachtwoorden verschillen');
  //     feedbackspan.innerHTML = '<p>Uw wachtwoorden komen niet overeen, controleer nogmaals</p>';
  //   }
  //   if (ww1 === ww2 && ww1.length >= 6 && ww2.length >= 6) {
  //     const jsonRequestBody = {};
  //     const formData = new FormData(document.querySelector('#wijzigWachtwoord'));
  //     formData.forEach((value, key) => (jsonRequestBody[key] = value));
  //     console.log(`with data: ${jsonRequestBody.toString()}`);
  //
  //     const fetchOptions = {
  //       method: 'PATCH',
  //       body: JSON.stringify(jsonRequestBody),
  //       headers: {
  //         Authorization: `Bearer ${sessionStorage.JWT}`, Accept: 'application/json', 'Content-Type': 'application/json',
  //       },
  //     };
  //     await fetch(`${localhost}restservices/account-reset/wijzig-wachtwoord/`, fetchOptions) // een POST naar dit adres maakt een nieuw acc.
  //       .then(async (response) => {
  //         if (response.ok) {
  //           const feedback = 'Accountinfo wijzigen is gelukt!';
  //           feedbackspan.innerText = feedback;
  //           return feedback;
  //         }
  //         feedbackspan.innerText = 'bent u ingelogd?';
  //         throw 'er ging iets mis';
  //         // als het niet response 200 is dan is er iets mis gegaan.
  //       })
  //       .catch((error) => {
  //         console.log(error);
  //       });
  //   } else {
  //     console.log('whoops ... have you tried turning it on and off again?');
  //   }
  // }
  //
  // /** Deze functie togglet de zichtbaarheid van het wachtwoord heen en weer.
  //  *   @Function wwZichtbaarToggle()
  //  *   @returns void
  //  */
  // function wwZichtbaarToggle() {
  //   const passwordElement = document.getElementById('password');
  //   const passwordElement2 = document.getElementById('password2');
  //   const typeAttribute = passwordElement.getAttribute('type');
  //
  //   // Switch het type van 'password' <=> 'text' en vice versa
  //   passwordElement.setAttribute(
  //     'type',
  //     typeAttribute === 'password' ? 'text' : 'password',
  //   );
  //   passwordElement2.setAttribute(
  //     'type',
  //     typeAttribute === 'password' ? 'text' : 'password',
  //   );
  // }

  /////////////////
  ///console.log('loading reset-account-send-mail.js');
  //
  // // -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
  // // |    reset input<email> account:                                               |
  // // -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
  // /** pakt email van het formulier en fetch POST deze data naar de backend
  //  * @returns {Promise<void>}
  //  */
  // function stuurWachtwoordReset() {
  //   console.log('stuurEmailMetWachtwoordReset()');
  //   const jsonRequestBody = {};
  //
  //   const formData = new FormData(document.querySelector('#resetAccount'));
  //   formData.forEach((value, key) => (jsonRequestBody[key] = value));
  //
  //   const fetchOptions = {
  //     method: 'POST', body: JSON.stringify(jsonRequestBody), headers: {
  //       Accept: 'application/json', 'Content-Type': 'application/json',
  //     },
  //   };
  //   const feedbackspan = document.getElementById('feedbackspan');
  //   // LETOP als fetch niet werkt door missende localhost,
  //   // check dat de HTTP file themeManager.js importeert als eerste.
  //   // eslint-disable-next-line no-undef
  //   fetch(`${localhost}restservices/account-reset/`, fetchOptions) // POST, maakt een nieuw acc.
  //     .then((response) => {
  //       if (response.status === 200) { // er is een account gevonden !
  //         const feedback = response.json();
  //         console.log('Er is een email gestuurd naar uw account.');
  //         feedbackspan.innerText = 'Als er een account bestaat met die gegevens is er een email gestuurd naar u.';
  //       }
  //       if (response.status === 204) { // no content
  //         const feedback = 'Als er een account bestaat met die gegevens is er een email gestuurd naar u.';
  //         console.log(feedback);
  //         feedbackspan.innerText = feedback;
  //       }
  //     })
  //     .catch((err) => {
  //       const feedback = `Error: ${err}`;
  //       console.log(feedback);
  //       feedbackspan.innerText = feedback;
  //     });
  // }
}
