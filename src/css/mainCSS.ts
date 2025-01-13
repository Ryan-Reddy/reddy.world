import {css} from 'lit';

export default css`
  :root {
    font-family: "Adobe Garamond Pro", Garamond, Inter, Avenir, Helvetica, Arial, sans-serif;
    /*font-family: "Helvetica Neue", Helvetica, sans-serif, "Helvetica Roman", Icons;*/


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
    --transitionInSeconds: all 0.6s ease;
    --logoTransitionInSeconds: 0.8s;
    --be_here_now_blue: #301987;


    --background-dark: #1e1e1e; /* softer black */
    --background-light: #f4f4f4; /* soft white */

    --border: 2px solid var(--gold);
    // Light mode colours
    --light-mode-color: black;
    --light-mode-background: white;

    // Dark mode colours
    --color-dark-mode: white;
    --background-dark-mode: black;
  }

  * {
    text-decoration: none;
  }

  main {
    //height: 100vh;
    display: flex;
    flex-direction: column;
  }

  body {
    width: 100%;
    height: 100%;
    margin: 0; /* some weird margin: 8px; is inherited from somewhere */
  }

  p {
    //padding: 1rem;
    width: 100%;
    line-height: 1.5em;
  }

  h1 {
    margin-top: 2rem;
    margin-bottom: 0.5rem;

  }

  h2 {
    margin-top: 1rem;
    margin-bottom: 0.3rem;

  }

  h3 {
    margin-top: .5rem;
    margin-bottom: 0.2rem;
  }

  p {
    margin: 0.5rem
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
    border: 1.5rem solid white !important;
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
    text-align: center;
  }

  a {
    color: var(--zwart);
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
      background-color: var(--light-mode-background);
    }

    table {
      color: var(--light-mode-color);
      background-color: var(--light-mode-background);
    }

    :root .header_bar {
      color: var(--light-mode-color);
      background-color: var(--light-mode-background);
    }

    nav ul li a {
      //color: var(--zwart) !important;
      color: var(--light_mode_color);
      background-color: var(--light-mode-background);
    }

    nav ul li a.active, a:hover {
      transition: var(--transitionInSeconds);
      color: var(--zwart) !important;
    }
  }

  @media (prefers-color-scheme: dark) {
    :root {
      color: var(--wit);
      background-color: var(--background-dark);
    }

    main {
      color: var(--wit);
      background-color: var(--background-dark);
    }

    table {
      color: var(--wit);
      background-color: var(--background-dark);
    }

    :root .header_bar {
      color: var(--wit);
      background-color: var(--background-dark);
    }

    a {
      color: var(--wit);
      background-color: var(--background-dark);
    }

    nav ul li a {
      color: var(--wit);
      background-color: var(--background-dark);
    }

    nav ul li a.active, a:hover {
      background: var(--silver);
      transition: var(--transitionInSeconds);
      color: var(--zwart) !important;
    }
  }
`;
