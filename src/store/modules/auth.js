import { getItem, setItem, clear } from '@/utils/localStorage.js';
import { socialLoginApi } from '@/api/auth';

export default {
	namespaced: true,
	state: {},
	getters: {},
	mutations: {},
	actions: {
		// async socialLogin(context) {
		// 	const response = await socialLoginApi();
		// 	console.log('Response', response);
		// },
		async socialLogin(context, payload) {
			console.log('payload', payload);

			const { provider, code, userType } = payload;

			const response = await socialLoginApi(provider, code, userType);
			console.log('Response', response);
		},
	},
};
