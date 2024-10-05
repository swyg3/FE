import '@/output.css';
import '@/assets/main.css';

import { createApp } from 'vue';
import App from '@/App.vue';
import store from '@/store';
import router from '@/router';
import GoogleLogin from 'vue3-google-login';
import BottomSheet from '@/components/common/AppBottomSheet.vue';
import Modal from '@/components/Modal/index.vue';
import AppButton from '@/components/common/AppButton.vue';
import Spinner from '@/components/common/AppSpinner.vue';
import TheHeader from '@/components/common/TheHeader.vue';

const app = createApp(App);

app.component('BottomSheet', BottomSheet);
app.component('Modal', Modal);
app.component('AppButton', AppButton);
app.component('Spinner', Spinner);
app.component('TheHeader', TheHeader);

app.use(store);
app.use(router);
app.use(GoogleLogin, {
	clientId: import.meta.env.VITE_APP_GOOGLE_KEY,
});

router.isReady().then(() => {
	app.mount('#app');
});
