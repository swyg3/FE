import '@/output.css';
import '@/assets/main.css';

import { createApp } from 'vue';
import App from '@/App.vue';
import store from '@/store';
import router from '@/router';
import GoogleLogin from 'vue3-google-login';
import { createBottomSheet } from 'bottom-sheet-vue3';

const app = createApp(App);

app.use(store);
app.use(router);
app.use(GoogleLogin, {
	clientId: import.meta.env.VITE_APP_GOOGLE_KEY,
});
app.use(createBottomSheet());

router.isReady().then(() => {
	app.mount('#app');
});
