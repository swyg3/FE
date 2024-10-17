import http from '@/api/http.js';

// 카테고리, 정렬 경로 이동
export const fetchProductApi = (category, sortBy) => {
	http.get(
		`/api/products/category?category=${category}&sortBy=${sortBy}&order=desc&limit=100`,
	);
};
