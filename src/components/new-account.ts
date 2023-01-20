import { css, html, LitElement } from 'lit';
import { customElement, property } from 'lit-element';

/**
 * An example element.
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */
@customElement('new-account')
export class NewAccount extends LitElement {
  @property() _hiddenElement = 'hidden';
  @property() currentPage: string;
  constructor() {
    super();
  }
  // TODO: style page new-account.ts
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
      <!DOCTYPE html>
      <html lang="en">
        <head>
          <meta charset="UTF-8" />

          <title>New Account</title>
          <!-- must be uppermost imported script due to const localhost global usage -->

          <script src="https://smtpjs.com/v3/smtp.js"></script>
        </head>

        <h1 class="header">Maak een nieuw account.</h1>

        <body>
          <div id="page-container">
            <div id="content-wrap">
              <main>
                <form autocomplete="on" id="newaccount-form">
                  <ol>
                    <li>
                      <label for="naam">Naam:</label>
                      <input
                        autocomplete="naam"
                        class="inputfield"
                        id="naam"
                        name="naam"
                        placeholder="Naam"
                        type="text"
                      />
                    </li>
                    <li>
                      <div class="tooltip">
                        <!-- omschrijvende lebel van bijbehorende inputveld -->
                        <label for="email">E-mail adres:</label>
                        <input
                          autocomplete="email"
                          class="inputfield"
                          id="email"
                          name="email"
                          onclick="switchIncompleteNormaleStijl('email')"
                          placeholder="jouwnaam@voorbeeld.com"
                          required
                          type="email"
                        />

                        <!-- tooltip tekst -->
                        <span class="tooltiptext-mail"
                          >Voer een geldig email adres in, bijvoorbeeld
                          jouwnaam@voorbeeld.com.</span
                        >
                      </div>
                    </li>

                    <br />
                    <li>
                      <div class="tooltip">
                        <!-- omschrijvende lebel van bijbehorende inputveld -->
                        <label for="password">Nieuw wachtwoord:</label>
                        <input
                          autocomplete="password"
                          class="inputfield"
                          id="password"
                          name="password"
                          onclick="switchIncompleteNormaleStijl('password')"
                          placeholder="Nieuw wachtwoord"
                          required
                          type="password"
                        /><br />
                        <!-- tooltip tekst -->
                        <span class="tooltiptext-ww"
                          >Voer een combinatie in van ten minste zes cijfers,
                          letters en leestekens (zoals ! en &).</span
                        >
                      </div>
                    </li>
                  </ol>
                  <input
                    id="toggle"
                    onclick="wwZichtbaarToggle()"
                    type="checkbox"
                  />
                  <label for="toggle">Toon wachtwoord</label><br /><br />

                  <!--    <input id="send_json" onclick="formulierCheck()" type="button" value="Registreren&#45;&#45; incl wachtwoordchecksend json"/>-->
                  <!--        <input id="send_formdata" onclick="sendFormData()" type="button" value="Registreren&#45;&#45;send formdata" />-->
                  <span id="postresponse"></span>
                </form>
                <input
                  id="createAccButton"
                  onclick="formulierCheck()"
                  type="button"
                  value="Creëer een account"
                />
                <input
                  id="wachtwoordvergeten"
                  onclick="window.location.assign('../home/index.html')"
                  type="button"
                  value="Wachtwoord vergeten"
                />
              </main>
            </div>
            <footer id="footer"></footer>
          </div>
        </body>
      </html>
    `;
  }
  // /** Deze functie controleert of een email echt een email is
  //  *   @Function checkEmailIsEchtEmail
  //  *   @returns boolean
  //  */
  // function checkEmailIsEchtEmail(email) {
  //   const res =
  //     /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  //   return res.test(String(email).toLowerCase());
  // }
  //
  // /** Deze functie controleert of het wachtwoord correct is;
  //  * rules:
  //  * -password is ten minste 6 tekens lang
  //  * - email is echt
  //  * Zo ja dan regelt deze dat de data bij de backend komt,
  //  * die dit opslaat en de gebruiker hiervan een bevestiging stuurt.
  //  * De gebruiker krijgt in de nieuwAccount pagina, ook gelijk een melding of dit gelukt is of niet.
  //  *
  //  * @Function wachtwoordCheck
  //  * @returns boolean
  //  */
  // function formulierCheck() {
  //   // Bind pagina elementen aan const
  //   const ww = document.getElementById('password').value;
  //   const email = document.getElementById('email').value;
  //   const emailElement = document.getElementById('email');
  //   const passwordElement = document.getElementById('password');
  //   emailElement.addEventListener(
  //     'mouseover',
  //     function () {
  //       emailElement.style.backgroundColor = '#ccc';
  //     },
  //     false
  //   );
  //
  //   // check of de email een email format heeft, geeft boolean terug
  //   const emailEcht = checkEmailIsEchtEmail(email);
  //
  //   console.log('Start formulierCheck().');
  //   // reset alle css waarschuwingen
  //   passwordElement.classList.replace('formIncomplete', 'inputfield');
  //   emailElement.classList.replace('formIncomplete', 'inputfield');
  //
  //   if (emailEcht === false) {
  //     console.log('Email is incorrect geformuleerd.');
  //     emailElement.classList.replace('inputfield', 'formIncomplete');
  //     alert('Uw email klopt niet, \r\n voer aub een geldig e-mail adres in.');
  //   }
  //   if (ww.length < 6) {
  //     console.log('WW is incompleet');
  //     passwordElement.classList.replace('inputfield', 'formIncomplete');
  //     alert(
  //       'Uw wachtwoord is niet veilig genoeg. \r\n' +
  //         'Voer een combinatie in van ten minste zes cijfers, letters en leestekens (zoals ! en &).'
  //     );
  //   }
  //
  //   if (ww.length > 5 && emailEcht === true) {
  //     // sendEmail(email); // EmailService > Backend verplaatst
  //     alert(      'Uw account is aangemaakt, u ontvangt van ons een email met daarin een bevestigingslink. Om uw account te kunnen gebruiken, moet u bevestigen dat uw opgegeven e-mailadres geldig is, door klikken op de bevestigingslink die in uw e-mail is verzonden.\nAls u op de bevestigingslink klikt, wordt u doorgestuurd naar de inlogpagina van uw account. Typ uw inloggegevens en klik op Inloggen om je account te activeren.'    );
  //
  //     sendNewAccount();
  //   }
  // }
  //
  // /**
  //  * Deze functie vervangt normale sendForm, met een eigen SendNewAccount Fetch
  //  * @param event dit is het klikken op de button
  //  * @returns {Promise<void>} retourneert de status of het gelukt is.
  //  */
  // async function sendNewAccount(event) {
  //   const element = document.querySelector('#postresponse'); // response span in de newAccountPagina
  //   const jsonRequestBody = {};
  //
  //   const formData = new FormData(document.querySelector('#newaccount-form'));
  //   formData.forEach((value, key) => (jsonRequestBody[key] = value));
  //
  //   const fetchOptions = {
  //     method: 'POST',
  //     body: JSON.stringify(jsonRequestBody),
  //     headers: {
  //       Accept: 'application/json',
  //       'Content-Type': 'application/json',
  //     },
  //   };
  //   // LETOP als fetch niet werkt door missende localhost,
  //   // check dat de HTTP file themeManager.js importeert als eerste.
  //   // eslint-disable-next-line no-undef
  //   await fetch(`${localhost}restservices/accounts/`, fetchOptions) // een POST naar dit adres maakt een nieuw acc.
  //     .then((response) => {
  //       if (response.status === 200) {
  //         // als er een nieuw account gecreeerd is dan inloggen
  //         open(`${localhost}/login`, '_self'); // als deze klaar is open de log in pagina
  //         const message = 'Welkom! je nieuwe account is aangemaakt';
  //         alert(message);
  //         element.innerHTML = message;
  //         throw message;
  //       }
  //       if (response.status === 409) {
  //         // als 409 bestond er al een account met dit email adres
  //         const message =
  //           "Er bestaat waarschijnlijk al een account met dit email, of er ging iets anders mis. Als u uw wachtwoord vergeten bent kunt u hieronder klikken op 'Wachtwoord vergeten'.";
  //         element.innerHTML = message;
  //         throw message;
  //       }
  //     })
  //     .catch((err) => {
  //       element.innerHTML = "ERROR, zie de console.";
  //       console.log('Error: ', err);
  //     });
  // }
  //
  // /** Deze functie zorgt ervoor dat het klikken op een invoerveld hem weer een normale stijl geeft
  //  * @Function terugNaarNormaleStijl()
  //  * @param id:String
  //  * @returns null
  //  */
  // function switchIncompleteNormaleStijl(id) {
  //   const fromIdElement = document.getElementById('id');
  //   fromIdElement.classList.toggle('inputfield');
  // }
  //
  // /** Deze functie togglet de zichtbaarheid van het wachtwoord heen en weer
  //  *   @Function wwZichtbaarToggle()
  //  *   @returns void
  //  */
  // function wwZichtbaarToggle() {
  //   const passwordElement = document.getElementById('password');
  //   const typeAttribute = passwordElement.getAttribute('type');
  //
  //   // Switch het type van 'password' <=> 'text' en vice versa
  //   passwordElement.setAttribute(
  //     'type',
  //     typeAttribute === 'password' ? 'text' : 'password'
  //   );
  // }
  //
}
