import http from '@/api/http.js';

export const socialLoginApi = (provider, code, userType) => {
	return http.get(
		`/api/auth/login-oauth/${provider}/callback?code=${encodeURIComponent(code)}&userType=${userType}`,
	);
};

export const signOutApi = () => {
	console.log('로그아웃');

	return http.post('/api/auth/logout');
};
