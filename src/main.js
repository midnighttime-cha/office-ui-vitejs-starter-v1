import { createApp } from 'vue';
import App from './App.vue';

import router from './router.js';
import "./assets/css/theme.css";
import "./assets/css/style.css";

let app = createApp(App)

app
  .use(router)
  .mount('#app');
