import { createApp } from 'vue'
import App from './App.vue'
import router from './router';
import useRequireSafe from './plugins/requireSafe';

import './style.css'


createApp(App).use(useRequireSafe).use(router).mount('#app')
