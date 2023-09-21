import {Router} from '@vaadin/router';

import './components/account-info';
import './components/home-page';
import './components/login';
import './components/new-account';
import './components/readme';
import './components/reset-password';
import './components/support';
import './components/friends';
import './components/portfolio';
import './components/about';
import './components/cvFromLinkedin';
import './components/contact';
// admin:
import './components/all-mails';
import './components/openai';
import './components/livestream';
import './components/art';
import './components/ral-contrast';
import './components/global/not-found';
import './components/global/lang-picker';

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
  path: '/mail', component: 'mail-element',
}, {
  name: 'about-element', // doet niks impliciet
  path: '/about', component: 'about-element',
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
},

  ////////////////////////////////////////////////////////////////////////
  //    THE CATCH ALL:                                                  //
  ////////////////////////////////////////////////////////////////////////

  {
    name: 'home-page-element', // doet niks impliciet
    path: '/home', component: 'home-page-element',
  }, {
    name: 'home-page-element-catchall', // doet niks impliciet
    path: '/',                  // standaard landingspage
    component: 'home-page-element',
  }, {
    name: 'not-found-element', // doet niks impliciet
    path: '(.*)',           // 404 must be last in this file
    component: 'not-found-element',
  },]);
