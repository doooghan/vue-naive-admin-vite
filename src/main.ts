import { createApp } from 'vue';
import App from './App.vue';
import 'uno.css';
import '@/styles/index.scss';

import { router } from '@/router';

createApp(App).use(router).mount('#app');
