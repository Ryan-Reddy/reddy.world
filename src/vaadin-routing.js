import { Router } from '@vaadin/router';

import './components/account-info';
import './components/home-page';
import './components/login';
import './components/menu-footer';
import './components/menu-nav';
import './components/new-account';
import './components/not-found';
import './components/not-found';
import './components/readme';
import './components/reset-password';
import './components/support';


const app = document.querySelector('#app');
export const router = new Router(app);

// noinspection JSIgnoredPromiseFromCall
router.setRoutes([
  {
    name: 'login', // doet niks impliciet
    path: '/login',
    component: 'login',
  },
  {
    name: 'reset-password', // doet niks impliciet
    path: '/reset-password',
    component: 'reset-password',
  },
  {
    name: 'support', // doet niks impliciet
    path: '/support',
    component: 'support',
  },
  {
    name: 'new-account', // doet niks impliciet
    path: '/new-account',
    component: 'new-account',
  },
  {
    name: 'readme', // doet niks impliciet
    path: '/readme',
    component: 'readme',
  },
  {
    name: 'reset-password', // doet niks impliciet
    path: '/reset-password',
    component: 'reset-password',
  },
  {
    name: 'account-info', // doet niks impliciet
    path: '/account-info',
    component: 'account-info',
  },
  {
    name: 'readme', // doet niks impliciet
    path: '/readme',
    component: 'readme',
  },
  {
    name: '404-catchall', // doet niks impliciet
    path: '(.*)',           // 404 must be last in this file
    component: 'not-found',
  },
]);
