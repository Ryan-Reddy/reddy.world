import { css } from 'lit-element';

export default css `
  div[lang] {
    display: none;
  }

  div[lang].lang-match {
    display: block;
  }
`;
