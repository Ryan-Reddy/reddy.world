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
  }

  * {
    text-decoration: none;
  }

  ul {
    list-style-type: none;
  }

  li {
    position: relative;
    padding: 1rem;
  }

  a {
    color: #fff;
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


  main {
    margin: 1rem;
    line-height: normal;
    display: flex;
    flex-direction: column; /* Stack items vertically */
    justify-content: center; /* Center items horizontally */
    align-items: center; /* Center items vertically */
  }

  body {
    height: 100%;
    margin: 0; /* some weird margin: 8px; is inherited from somewhere */

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
    border: 1.5rem solid #f6f6dc !important;
    -webkit-filter: sepia(7%); /* Safari 6.0 - 9.0 */
    filter: sepia(7%);
    display: block !important;
    margin-bottom: 3rem !important;
  }

  @media (max-width: 952px) {

    main {
      /*color: var(--wit);*/
      /*background-color: var(--zwart);*/
      line-height: normal;
      //margin: 1rem;
      max-width: 100%; /* Set a maximum width */

    }

    ul {
      /* This will center the child elements horizontally */
      /*display: flex;*/
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
  }

  @media (prefers-color-scheme: light) {
    :root {
      color: var(--zwart);
      background-color: var(--wit);
    }

    main {
      color: var(--zwart);
      /* background-color: transparent; */
    }

    table {
      color: var(--wit);
      background: var(--wit);
    }

    :root .header_bar {
      color: var(--wit);
      background-color: var(--wit);
    }

    a {
      color: midnightblue;
    }

    nav ul li a {
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
