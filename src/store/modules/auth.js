import { getItem, setItem, clear } from '@/utils/localStorage.js';
import { socialLoginApi } from '@/api/auth';
import router from '@/router';

export default {
	namespaced: true,
	state: {
		userEmail: getItem('userEmail') || '',
		userId: getItem('userId') || '',
		userType: getItem('userType') || '',
		accessToken: getItem('accessToken') || '',
		accessExpireAt: getItem('accessExpireAt') || 0,
		refreshToken: getItem('refreshToken') || '',
		refreshExpireAt: getItem('refreshExpireAt') || 0,
	},
	getters: {},
	mutations: {
		SET_CLEAR_TOKEN(state) {
			state.userEmail = '';
			state.userId = '';
			state.userType = '';
			state.accessToken = '';
			state.accessExpireAt = 0;
			state.refreshToken = '';
			state.refreshExpireAt = 0;

			setItem('userEmail', '');
			setItem('userId', '');
			setItem('userType', '');
			setItem('accessToken', '');
			setItem('accessExpireAt', '');
			setItem('refreshToken', '');
			setItem('refreshExpireAt', 0);
		},
		SET_USER_EMAIL(state, userEmail) {
			state.userEmail = userEmail;

			setItem('userEmail', userEmail);
		},
		SET_USER_ID(state, userId) {
			state.userId = userId;

			setItem('userId', userId);
		},
		SET_USER_TYPE(state, userType) {
			state.userType = userType;

			setItem('userType', userType);
		},
		SET_ACCESS_TOKEN(state, accessToken) {
			console.log('accessToekn', accessToken);
			const currentDate = new Date().getTime() / 1000;
			const { token, expiresIn } = accessToken;

			state.accessToken = token;
			state.accessExpireAt = currentDate + expiresIn;

			setItem('accessToken', token);
			setItem('accessExpireAt', currentDate + expiresIn);
		},
		SET_REFRESH_TOKEN(state, refreshToken) {
			const currentDate = new Date().getTime() / 1000;
			const { token, expiresIn } = refreshToken;

			state.refreshToken = token;
			state.refreshExpireAt = currentDate + expiresIn;

			setItem('refreshToken', token);
			setItem('refreshExpireAt', currentDate + expiresIn);
		},
	},
	actions: {
		async socialLogin(context, payload) {
			try {
				const { provider, code, userType } = payload;

				const response = await socialLoginApi(provider, code, userType);
				console.log('Response', response);

				if (response && response.data && response.data.success === true) {
					const data = response.data.data;
					context.commit('SET_USER_EMAIL', data.email);
					context.commit('SET_ACCESS_TOKEN', data.tokens.access);
					context.commit('SET_REFRESH_TOKEN', data.tokens.refresh);
					context.commit('SET_USER_ID', data.userId);
					context.commit('SET_USER_TYPE', data.userType);

					router.push('/' + import.meta.env.VITE_APP_FIRST_URL);
				}
			} catch (error) {
				console.log('에러', error);
				alert(error);
			}
		},
	},
};
