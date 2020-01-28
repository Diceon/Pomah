"use strict";

/* Core */
import App from './lib/app.js';
import Router from './lib/router.js';

/* Template */
import template from './components/template.js';

/* Components */
import index from './components/index.js';
import register from './components/register.js';
import login from './components/login.js';
import about from './components/about.js';
import contacts from './components/contacts.js';

// App.use(Router);

/* Router Instance */
const router = new Router({
    mode: 'hash',
    baseUrl: '/SPA/',
    routes: [
        {
            path: '/',
            name: 'home',
            component: index
        },
        {
            path: '/register',
            name: 'register',
            component: register
        },
        {
            path: '/login',
            name: 'login',
            component: login
        },
        {
            path: '/about-us/',
            name: 'about',
            component: about
        },
        {
            path: '/contacts',
            name: 'contacts',
            component: contacts
        }
    ]
});

/* App Instance */
const app = new App({
    el: '#main',
    template: template,
    router: router
});

