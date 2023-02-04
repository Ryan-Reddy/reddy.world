import {css} from 'lit';

export default css `
  div[lang] {
    display: none;
  }

  div[lang].lang-match {
    display: block;
  }
`;
