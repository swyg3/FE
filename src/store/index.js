import { createStore } from 'vuex';
import auth from './modules/auth';

export default createStore({
	state: {
		isVisible: false,
		popupType: '',
		errorCount: 0,
	},
	getters: {},
	mutations: {
		SET_ERROR_COUNT(state) {
			state.errorCount += 1;
		},
		RESET_ERROR_COUNT(state) {
			state.errorCount = 0;
		},
	},
	actions: {},
	modules: {
		auth,
	},
});
