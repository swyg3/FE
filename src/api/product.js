import http from '@/api/http.js';

// 카테고리, 정렬에 따른 상품 리스트 가져오기 api
export const fetchProductApi = (category, sortBy) =>
	http.get(
		`/api/products/category?category=${category}&sortBy=${sortBy}&order=desc&limit=100`,
	);
// 상품 상세 정보 가져오기 api
export const getProductDetailAPi = id => http.get(`/api/products/get/${id}`);
// 주문하기 api
export const orderProductApi = orderData => http.post('/api/order', orderData);
// 상품 상세 페이지 경로
export const goToproductDetailPageUrl = (name, id) => `/details/${name}/${id}`;
// 카테고리, 정렬기준 변경에 따른 페이지 경로
export const goTocategoryPageUrl = (category, sortBy) =>
	`/category/${category}/${sortBy}`;
// 영수증 경로
export const goToReceiptUrl = order => `/receipt/${order}`;
// 주문 리스트 가져오기 api
export const orderListApi = () => http.get('/api/order');
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
