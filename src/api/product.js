import http from '@/api/http.js';

// 카테고리, 정렬에 따른 상품 리스트 가져오기 api
export const fetchProductApi = (category, sortBy, count) =>
	http.get(
		`/api/products/category?category=${category}&sortBy=${sortBy}&order=desc&limit=${count}`,
	);
// 상품 상세 정보 가져오기 api
export const getProductDetailAPi = id => http.get(`/api/products/get/${id}`);
// 주문하기 api
export const orderProductApi = orderData => http.post('/api/order', orderData);
// 검색 api
export const searchApi = (word, sortBy) =>
	http.get(
		`/api/products/search?searchTerm=${word}&sortBy=${sortBy}&order=desc&limit=100`,
	);
// 영수증 가져오기 api
export const getReceiptApi = orderId => http.get(`/api/order/${orderId}`);
// 주문 리스트 가져오기 api
export const orderListApi = () => http.get('/api/order');
// 주문 내역 삭제하기 api
export const deleteOrderApi = orderId => http.delete(`/api/order/${orderId}`);
// 상품 상세 페이지 경로
export const goToproductDetailPageUrl = (name, id) => `/details/${name}/${id}`;
// 카테고리, 정렬기준 변경에 따른 페이지 경로
export const goTocategoryPageUrl = (category, sortBy) =>
	`/category/${category}/${sortBy}`;
// 영수증 경로
export const goToReceiptUrl = order => `/receipt/${order}`;
// 검색 결과 경로
export const goToSearchResult = (word, sortBy) =>
	`/searchResult/${word}/${sortBy}`;
export const categoryOption = [
	{
		label: '전체',
		value: 'ALL',
		img: '/category/All.png',
		route: '/category/ALL/distanceDiscountScore',
	},
	{
		label: '한식',
		value: 'KOREAN',
		img: '/category/koreanFood.png',
		route: '/category/KOREAN/distanceDiscountScore',
	},
	{
		label: '일식',
		value: 'JAPANESE',
		img: '/category/japaneseFood.png',
		route: '/category/JAPANESE/distanceDiscountScore',
	},
	{
		label: '중식',
		value: 'CHINESE',
		img: '/category/chineseFood.png',
		route: '/category/CHINESE/distanceDiscountScore',
	},
	{
		label: '분식',
		value: 'SNACK',
		img: '/category/snackFood.png',
		route: '/category/SNACK/distanceDiscountScore',
	},
	{
		value: 'WESTERN',
		label: '양식',
		img: '/category/westernFood.png',
		route: '/category/WESTERN/distanceDiscountScore',
	},
	{
		label: '디저트',
		value: 'DESSERT',
		img: '/category/dessert.png',
		route: '/category/DESSERT/distanceDiscountScore',
	},
];
export const sortByOption = [
	{ label: '문코 추천 순', value: 'distanceDiscountScore' },
	{ label: '가까운 순', value: 'distance' },
	{ label: '할인율 높은 순', value: 'discountRate' },
];
export const checkBoxLabel = [
	'개인 용기를 가져갈래요',
	'개인 장바구니를 가져갈래요',
	'일회용 수저는 필요 없어요',
];
