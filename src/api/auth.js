import http from '@/api/http.js';

export const socialLoginApi = (provider, code, userType) =>
	http.get(
		`/api/auth/login-oauth/${provider}/callback?code=${encodeURIComponent(code)}&userType=${userType}`,
	);

export const signOutApi = () => http.post('/api/auth/logout');

export const cancelMembershipApi = payload =>
	http.delete(`/api/users/deactivate/${payload}`);
