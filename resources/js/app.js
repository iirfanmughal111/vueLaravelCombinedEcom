import './bootstrap';
import { createApp,h } from 'vue';
import router from './router/index.js';
import vuetify from './plugins/vuetify.js';

import MainLayout from './components/MainLayout.vue';
const app = createApp({
    render: ()=>h(MainLayout)
});

app.use(router);
app.use(vuetify);
app.mount('#app');
