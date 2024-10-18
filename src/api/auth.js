import http from '@/api/http.js';

//로그인,회원가입
export const socialLoginApi = (provider, code, userType) =>
	http.get(
		`/api/auth/login-oauth/${provider}/callback?code=${encodeURIComponent(code)}&userType=${userType}`,
	);
//로그아웃
export const signOutApi = () => http.post('/api/auth/logout');
//회원탈퇴
export const cancelMembershipApi = payload =>
	http.delete(`/api/users/deactivate/${payload}`);
//gps동의
export const gpsConsentApi = payload => {
	console.log('payload', payload);
	return http.put(`/api/locations/first/address/insert`, payload);
};

export const saveAddressApi = payload =>
	http.post('/api/locations/address/insert', payload);

export const getAddressBookApi = () =>
	http.get('/api/locations/address/getall');

export const setCurrentApi = payload =>
	http.patch(`/api/locations/setcurrent?id=${encodeURIComponent(payload)}`);

export const fetchUserDetailsApi = userId =>
	http.get(`/api/user-activities/level-title/${userId}`);

export const fetchProductCountApi = () => {
	console.log('api');

	return http.get('/api/user-activities/product-count');
};
export const getNotificationApi = userId =>
	http.get(`/api/notifications/${userId}`);
export const readNotificationApi = (userId, messageId) =>
	http.patch(`/api/notifications/${userId}/read/${messageId}`);
export const deleteAllNotificationApi = userId =>
	http.delete(`/api/notifications/${userId}`);
