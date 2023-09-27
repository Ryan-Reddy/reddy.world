import {Router} from '@vaadin/router';

// (login/account not in use)
// import './components/account-info';
// import './components/login';
// import './components/new-account';
// import './components/reset-password';

import './components/home';
import './components/readme';
import './components/support';
import './components/friends';
import './components/portfolio';
import './components/bio';
import './components/cvCustomRyan';
import './components/contact';
import './components/one-third';
// admin:
import './components/openai/openai';
import './components/livestream';
import './components/ral-contrast';
import './components/global/not-found';
import './components/global/lang-picker';
import './components/blackjack/blackjack';

const app = document.querySelector('#app');
export const router = new Router(app);

// noinspection JSIgnoredPromiseFromCall
router.setRoutes([{
  name: 'ral-contrast-element', // doet niks impliciet
  path: '/ral-contrast-checker', component: 'ral-contrast-element',
}, {
  name: 'open-ai-element', // doet niks impliciet
  path: '/openai', component: 'open-ai-element',
}, {
  name: 'one-third-element', // doet niks impliciet
  path: '/one-third', component: 'one-third-element',
}, {
  name: 'stream-element', // doet niks impliciet
  path: '/stream', component: 'stream-element',
}, {
  name: 'lang-picker-element', // doet niks impliciet
  path: '/lang', component: 'lang-picker-element',
}, {
  name: 'contact-element', // doet niks impliciet
  path: '/contact', component: 'contact-element',
}, {
  name: 'mail-element', // doet niks impliciet
  path: '/mail', component: // 'mail-element'
    '',
}, {
  name: 'bio-element', // doet niks impliciet
  path: '/bio', component: 'bio-element',
}, {
  name: 'login-element', // doet niks impliciet
  path: '/login', component: 'login-element',
}, {
  name: 'reset-password-element', // doet niks impliciet
  path: '/reset-password', component: 'reset-password-element',
}, {
  name: 'support-element', // doet niks impliciet
  path: '/support', component: 'support-element',
}, {
  name: 'new-account-element', // doet niks impliciet
  path: '/new-account', component: 'new-account-element',
}, {
  name: 'readme-element', // doet niks impliciet
  path: '/readme', component: 'readme-element',
}, {
  name: 'account-info-element', // doet niks impliciet
  path: '/account', component: 'account-info-element',
}, {
  name: 'friends-element', // doet niks impliciet
  path: '/friends', component: 'friends-element',
}, {
  name: 'cv-linkedin-element', // doet niks impliciet
  path: '/cv', component: 'cv-linkedin-element',
}, {
  name: 'portfolio-element', // doet niks impliciet
  path: '/portfolio', component: 'portfolio-element',
}, {
  name: 'blackjack-element', // doet niks impliciet
  path: '/blackjack', component: 'blackjack-element',
},

  ////////////////////////////////////////////////////////////////////////
  //    THE CATCH ALL:                                                  //
  ////////////////////////////////////////////////////////////////////////

  {
    name: 'home-page-element-catchall', // doet niks impliciet
    path: '/',                  // standaard landingspage
    component: 'home-page-element',
  }, {
    name: 'not-found-element', // doet niks impliciet
    path: '(.*)',           // 404 must be last in this file
    component: 'not-found-element',
  },
]);
