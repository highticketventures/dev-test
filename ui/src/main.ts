import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import Router from './Router.ts';

createApp(App).use(Router).mount('#app');
