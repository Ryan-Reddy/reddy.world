import { css } from 'lit-element';

export default css `

  //TODO read from
  //  https://stackoverflow.com/questions/64469775/hide-a-div-when-html-lang-is-detected
  //  implement https://developer.mozilla.org/en-US/docs/Web/API/Navigator/language
  //
  [lang='en']::before {
    content: '(from index.css; In English) ';
  }

  [lang='nl']::before {
    content: '(from index.css; In het Nederlands) ';
  }

  div div:not([lang^='en']) {
    display: none;
  }

  [lang^='en'] {
    color: green;
  }

`;
