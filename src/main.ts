import { createApp } from 'vue';
import { createPinia } from 'pinia';

import './assets/index.css';
import 'iconify-icon';

import App from './App.vue';
import router from './router';

const app = createApp(App);

app.use(createPinia());
app.use(router);

// To error handling at the highest level of our app
// app.config.errorHandler = (error) => {};

app.mount('#app');
