import { createApp } from 'vue';
import App from './App.vue';
import 'uno.css';
import '@/styles/index.scss';

import { router } from '@/router';
import { pinia } from '@/store';

createApp(App).use(pinia).use(router).mount('#app');
