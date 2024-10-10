import { createStore } from 'vuex';
import auth from './modules/auth';
import http from '@/api/http.js';

export default createStore({
	state: {
		isVisible: false,
		popupType: '',
		errorCount: 0,
		isLoading: false,
		// product info
		selectedProduct: null,
	},
	getters: {
		// 상품 정보를 가져오는 getter
		getProduct(state) {
			return state.product;
		},
	},
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
		// product info
		setSelectedProduct(state, product) {
			state.selectedProduct = product;
		},
	},
	actions: {
		// product info
		async fetchProduct({ commit }, productId) {
			// API 호출을 통해 상품 정보를 가져와서 상태를 업데이트
			const response = await http.get(`/api/products/get/${productId}`);
			commit('setProduct', response.data.data);
		},
		// updateSelectedProduct({ commit }, product) {
		// 	commit('setSelectedProduct', product);
		// },
	},
	modules: {
		auth,
	},
});
