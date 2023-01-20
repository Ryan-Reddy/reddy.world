import {Router} from '@vaadin/router';

import './components/account-info';
import './components/home-page';
import './components/login';
import './components/generic/menu-footer';
import './components/new-account';
import './components/generic/not-found';
import './components/readme';
import './components/reset-password';
import './components/support';
import './components/friends';


const app = document.querySelector('#app');
export const router = new Router(app);

// noinspection JSIgnoredPromiseFromCall
router.setRoutes([
  {
    name: 'login-element', // doet niks impliciet
    path: '/login',
    component: 'login-element',
  },
  {
    name: 'reset-password-element', // doet niks impliciet
    path: '/reset-password',
    component: 'reset-password-element',
  },
  {
    name: 'support-element', // doet niks impliciet
    path: '/support',
    component: 'support-element',
  },
  {
    name: 'new-account-element', // doet niks impliciet
    path: '/new-account',
    component: 'new-account-element',
  },
  {
    name: 'readme-element', // doet niks impliciet
    path: '/readme',
    component: 'readme-element',
  },
  {
    name: 'reset-password-element', // doet niks impliciet
    path: '/reset-password',
    component: 'reset-password-element',
  },
  {
    name: 'account-info-element', // doet niks impliciet
    path: '/account-info',
    component: 'account-info-element',
  },
  {
    name: 'home-page-element', // doet niks impliciet
    path: '/home-page',
    component: 'home-page-element',
  },
  {
    name: 'home-page-element', // doet niks impliciet
    path: '/',                  // standaard landingspage
    component: 'home-page-element',
  },
  {
    name: 'friends-element', // doet niks impliciet
    path: '/friends',                  // standaard landingspage
    component: 'friends-element',
  },
  {
    name: 'not-found-element', // doet niks impliciet
    path: '(.*)',           // 404 must be last in this file
    component: 'not-found-element',
  },
]);
