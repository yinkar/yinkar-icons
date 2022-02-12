import { createApp } from 'vue';
import App from './App.vue';

import { registerSW } from 'virtual:pwa-register';

import './index.css';

const updateSW = registerSW({
    onNeedRefresh() {},
    onOfflineReady() {},
});

if (typeof window !== 'undefined') {
    import('./pwa');
}

createApp(App).mount('#app');
