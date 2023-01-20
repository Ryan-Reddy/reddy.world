import { Router } from '@vaadin/router';

import './components/account-info';
import './components/home-page';
import './components/login';
import './components/menu-footer';
import './components/new-account';
import './components/not-found';
import './components/readme';
import './components/reset-password';
import './components/support';


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
    name: 'not-found-element', // doet niks impliciet
    path: '(.*)',           // 404 must be last in this file
    component: 'not-found-element',
  },
]);
