import http from '@/api/http.js';

export const socialLoginApi = (provider, code, userType) => {
	console.log('11');
	// console.log('socialLoginApi', provider, code, userType);

	return http.get(
		`/api/auth/login-oauth/${provider}/callback?code=${encodeURIComponent(code)}&userType=${userType}`,
	);

	// return http.get('/api');
};
