import { getItem, setItem, clear } from '@/utils/localStorage.js';
import { socialLoginApi } from '@/api/auth';

export default {
	namespaced: true,
	state: {},
	getters: {},
	mutations: {},
	actions: {
		async socialLogin(context, payload) {
			console.log('payload', payload);

			const response = await socialLoginApi(payload);
		},
	},
};
