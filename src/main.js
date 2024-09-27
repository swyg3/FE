import '@/output.css';
import '@/assets/main.css';

import { createApp } from 'vue';
import App from '@/App.vue';
import store from '@/store';
import router from '@/router';
import GoogleLogin from 'vue3-google-login';
import BottomSheet from '@/components/common/AppBottomSheet.vue';

const app = createApp(App);

app.component('BottomSheet', BottomSheet);

app.use(store);
app.use(router);
app.use(GoogleLogin, {
	clientId: import.meta.env.VITE_APP_GOOGLE_KEY,
});

router.isReady().then(() => {
	app.mount('#app');
});
