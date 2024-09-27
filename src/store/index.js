import { createStore } from 'vuex';
import auth from './modules/auth';

export default createStore({
	state: {
		isVisible: false,
		popupType: '',
	},
	getters: {},
	mutations: {},
	actions: {},
	modules: {
		auth,
	},
});
