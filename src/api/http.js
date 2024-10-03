import axios from 'axios';
import store from '@/store';
import router from '@/router';

const TIMEOUT = 1000 * 60;

const instance = axios.create({
	// baseURL: '/api',
	timeout: TIMEOUT,
	headers: {
		'Content-type': 'application/json',
		'Cache-Control': 'no-cache',
	},
});

instance.interceptors.request.use(function (config) {
	if (
		store.state.auth.accessToken !== null &&
		store.state.auth.accessToken !== ''
	) {
		config['headers'] = {
			Authorization: `Bearer ${store.state.auth.accessToken}`,
			refresh: store.state.auth.refreshToken,
		};
	}

	return config;
});

instance.interceptors.response.use(
	response => {
		store.commit('RESET_ERROR_COUNT');

		return response;
	},
	async error => {
		const errorRes = error.response;
		const originalRequest = error.config;
		store.commit('SET_ERROR_COUNT');

		if (
			store.state.errorCount < 3 &&
			errorRes.status === 401 &&
			store.state.auth.refreshToken !== undefined &&
			store.state.auth.refreshToken !== ''
		) {
			try {
				const res = await instance.post('/api/auth/refresh-token', {
					refreshToken: store.state.auth.refreshToken,
				});

				if (res.data.success === true) {
					store.commit('auth/SET_ACCESS_TOKEN', res.data.data.access);

					originalRequest.headers.Authorization = `Bearer ${res.data.data.access.token}`;

					return instance(originalRequest);
				}
			} catch (err) {
				store.commit('auth/SET_CLEAR_TOKEN');
				router.push('/');
			}
		}
		if (errorRes.status === 401) {
			store.commit('auth/SET_CLEAR_TOKEN');
			router.push('/');
		}
		return Promise.reject(error);
	},
);

export default instance;
