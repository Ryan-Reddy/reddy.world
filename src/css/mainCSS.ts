import {css} from 'lit';

export default css`
  :root {
    font-family: "Adobe Garamond Pro", Garamond, Inter, Avenir, Helvetica, Arial, sans-serif;
    /*font-family: "Helvetica Neue", Helvetica, sans-serif, "Helvetica Roman", Icons;*/
    font-size: 27.2px;
    line-height: 1.3;
    font-weight: 500;
    color-scheme: light dark;
    color: rgba(255, 255, 255, 0.87);
    background-color: #242424;
    font-synthesis: none;
    text-rendering: optimizeLegibility;
    -moz-osx-font-smoothing: grayscale;

    --gold: #876618;
    --groen: #398718;
    --blauw: #00aaff;
    --wit: #fff;
    --silver: #81a3a7;
    --zwart: #000;
    --warning-red: red;
    --fullwidth: 100%;
    --transitionInSeconds: 0.6s;
    --logoTransitionInSeconds: 0.8s;
    --be_here_now_blue: #301987;

    // Light mode colours
    --light_mode_color: --zwart;
    --light-mode-background: --wit;

    // Dark mode colours
    --color-dark-mode: --wit;
    --background-dark-mode: --zwart;
  }

  * {
    text-decoration: none;
  }

  main {
    height: 100vh;
    width: 100%;
    line-height: normal;
    display: inline-flex !important;
    flex-direction: column; /* Stack items vertically */
    justify-content: center; /* Center items horizontally */
  }

  body {
    width: 100%;
    height: 100%;
    margin: 0; /* some weird margin: 8px; is inherited from somewhere */
  }

  h1 {
    margin-top: 1rem;
  }

  h2 {
    margin-top: .8em;
  }

  h3 {
    margin-top: .5em;
    text-align: left;
  }
  hr {
    margin-top: 2rem;
    margin-bottom: 2rem;
    width: 100%;
  }

  img {
    width: auto;
    max-height: 50svh;
    max-width: 90% !important;
    padding: 0 !important;
    margin-left: auto !important;
    margin-right: auto !important;
    border: 1.5rem solid moccasin !important;
    //border: var(--border) !important;
    -webkit-filter: sepia(7%); /* Safari 6.0 - 9.0 */
    filter: sepia(7%);
    display: block !important;
    margin-bottom: 3rem !important;
  }

  ul {
    list-style-type: none;
  }

  li {
    position: relative;
    padding: 1rem;
  }

  a {
    color: var(--color-dark-mode);
    border-radius: 8px;
    text-transform: uppercase;
    text-decoration: none;
    letter-spacing: .25em;
    display: inline-block;
    padding: 15px;
    position: relative;
  }

  a:hover::after {
    width: 100%;
    right: 0;
  }

  a::after {
    /*background: none repeat scroll 0 0 transparent;*/
    bottom: 0;
    content: "";
    display: block;
    height: 4px;
    right: 0;
    position: absolute;
    background: linear-gradient(to left, #f69ec4, #f9dd94 100%);
    transition: width .5s ease 0s, right .5s ease 0s;
    width: 0;
  }

  @media (max-width: 952px) {
    *, *::before, *::after {
      box-sizing: border-box;
    }

    main {
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      text-align: center; // This centers inline or inline-block content
      line-height: normal;
    }

    body {
      margin: 0;
      height: 100vh; /* use viewport height to make it full-screen height */

      display: inline !important; /* turns on flexbox layout */
      justify-content: center !important; /* center horizontally */
    }

    ul {
      justify-content: center;
      align-items: center;
      margin-left: 0;
    }

    footer-menu {
      width: 100%;
      font-size: 2.1rem;
      line-height: 1.3rem;
      letter-spacing: 2px;
    }

    .dropdown-menu {
      margin-left: 0 !important;
    }

    img {
      border: 5px solid moccasin !important;
      padding: 3px !important;
      margin: 10px;
    }

    li {
      padding: 0;
    }

    a {
      margin: .5rem;
    }
  }

  @media (prefers-color-scheme: light) {
    :root {
      color: var(--light-mode-color);
      background-color: var(--light-mode-background);
    }

    main {
      color: var(--light-mode-color);
    }

    table {
      color: var(--zwart);
      background: var(--wit);
    }

    :root .header_bar {
      color: var(--zwart);
      background-color: var(--wit);
    }

    nav ul li a {
      //color: var(--zwart) !important;
      background-color: var(--wit);
      border-bottom-color: var(--gold);
    }

    nav ul li a.active, a:hover {
      transition: var(--transitionInSeconds);
      color: var(--zwart) !important;
    }
  }

  @media (prefers-color-scheme: dark) {
    :root {
      color: var(--wit);
      background-color: var(--zwart);
    }

    main {
      color: var(--wit);
      background-color: var(--zwart);
    }

    table {
      color: var(--wit);
      background: var(--zwart);
    }

    :root .header_bar {
      color: var(--wit);
      background-color: var(--zwart);
    }

    nav ul li a {
      color: var(--wit);
      background-color: var(--zwart);
    }

    nav ul li a.active, a:hover {
      background: var(--silver);
      transition: var(--transitionInSeconds);
      color: var(--zwart) !important;
    }
  }
`;
