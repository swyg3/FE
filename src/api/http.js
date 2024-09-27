import axios from 'axios';
// import store from '@/store';
// import router from '@/router';

console.log(
	'import.meta.env.VITE_APP_API_URL',
	import.meta.env.VITE_APP_API_URL,
);

const TIMEOUT = 1000 * 60;

const instance = axios.create({
	baseURL: import.meta.env.VITE_APP_API_URL,
	timeout: TIMEOUT,
	headers: {
		'Content-type': 'application/json',
		'Cache-Control': 'no-cache',
	},
});

// instance.interceptors.request.use(function (config: Nullable) {
//   if (
//     store.getters['auth/getAccessToken'] !== null &&
//     store.getters['auth/getAccessToken'] !== ''
//   ) {

//     config['headers'] = {
//       authorization: `Bearer ${store.getters['auth/getAccessToken']}`,
//       refresh: store.getters['auth/getRefreshToken']
//     }
//   }

//   return config
// })

// instance.interceptors.response.use(
//   (response: any) => {

//     store.commit('SET_ERROR_COUNT', 0)

//     return response
//   },
//   async (error) => {
//     const errorRes = error.response
//     const originalRequest = error.config

//     store.state.errorCount += 1

//     if (
//       store.state.errorCount < 3 &&
//       errorRes.status === 401 &&
//       store.getters['auth/getRefreshToken'] !== undefined &&
//       store.getters['auth/getRefreshToken'] !== ''
//     ) {

//       try {
//         const res = await instance.post('api/auth/refresh')
//         if (res.status === 200) {

//           store.commit('auth/SET_ACCESS_TOKEN', {
//             token: res.data.accessToken,
//             expireAt: res.data.accessExpiresIn
//           })

//           originalRequest.headers.Authorization = `Bearer ${res.data.accessToken}`
//           return axios(originalRequest)
//         }
//       } catch (err) {

//         store.commit('auth/SET_CLEAR_TOKEN')

//         router.push('/')
//       }
//     }

//     if (errorRes.status === 401) {

//       store.commit('auth/SET_CLEAR_TOKEN')
//       router.push('/')
//     }

//     return Promise.reject(error)
//   }
// )

export default instance;
