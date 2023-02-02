import { css } from 'lit-element';

export default css `

  main [lang='en']::before {
    content: '(from index.css; In English) ';
  }

  main [lang='nl']::before {
    content: '(from index.css; In het Nederlands) ';
  }

`;
