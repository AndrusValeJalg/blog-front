import { createApp } from 'vue';
import { createRouter, createWebHashHistory } from 'vue-router';

import './style.css'
import Buefy from '@ntohq/buefy-next'
import '@ntohq/buefy-next/dist/buefy.css'

import App from './App.vue'

import Home from './pages/Home.vue'
import ToDo from './pages/ToDo.vue'

const routes = [
    { path: '/', component: Home },
    { path: '/todo', component: ToDo}
];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

const app = createApp(App);
app.use(router);
app.use(Buefy);
app.mount('#app');
