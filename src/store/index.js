import { createStore } from 'vuex';
import auth from './modules/auth';

export default createStore({
	state: {
		isVisible: false,
		popupType: '',
		errorCount: 0,
		isLoading: false,
	},
	getters: {},
	mutations: {
		SET_ERROR_COUNT(state) {
			state.errorCount += 1;
		},
		RESET_ERROR_COUNT(state) {
			state.errorCount = 0;
		},
		SET_IS_LOADING(state, loading) {
			state.isLoading = loading;
		},
	},
	actions: {},
	modules: {
		auth,
	},
});
