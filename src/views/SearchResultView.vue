<template>
	<div>
		<TheHeader :text="'검색결과'" showSearchIcon="false"></TheHeader>
		<div class="category-bg">
			<SearchBar @click="router.push('/search')"></SearchBar>
			<div class="px-4 py-[13px] flex text-sm text-bodyBlack justify-between">
				<p class="">총 {{ searchList.length }}개</p>
				<div class="flex">
					<button @click="openSortModal">{{ currentSort }}</button>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="24"
						height="24"
						viewBox="0 0 24 24"
						fill="none"
					>
						<path
							d="M12 14.975C11.8667 14.975 11.7417 14.9542 11.625 14.9125C11.5083 14.8708 11.4 14.8 11.3 14.7L6.7 10.1C6.51667 9.91665 6.425 9.68332 6.425 9.39999C6.425 9.11665 6.51667 8.88332 6.7 8.69999C6.88333 8.51665 7.11667 8.42499 7.4 8.42499C7.68333 8.42499 7.91667 8.51665 8.1 8.69999L12 12.6L15.9 8.69999C16.0833 8.51665 16.3167 8.42499 16.6 8.42499C16.8833 8.42499 17.1167 8.51665 17.3 8.69999C17.4833 8.88332 17.575 9.11665 17.575 9.39999C17.575 9.68332 17.4833 9.91665 17.3 10.1L12.7 14.7C12.6 14.8 12.4917 14.8708 12.375 14.9125C12.2583 14.9542 12.1333 14.975 12 14.975Z"
							fill="#555555"
						/>
					</svg>
				</div>
			</div>
			<div class="px-4 grid grid-cols-2 gap-[7px]">
				<CategoryItemCard
					v-for="(product, index) in searchList"
					:key="index"
					:product="product"
					@click="goToDetailPage(product)"
				/>
			</div>
		</div>
		<CategorySortModal
			@changeSort="changeSort"
			ref="sortModal"
			class="absolute"
		></CategorySortModal>
	</div>
</template>

<script setup>
import TheHeader from '@/components/common/TheHeader.vue';
import CategoryItemCard from '@/components/common/CategoryItemCard.vue';
import http from '@/api/http.js';
import CategorySortModal from '@/components/Modal/categorySortModal.vue';
import SearchBar from '@/components/common/SearchBar.vue';
import { useRoute, useRouter } from 'vue-router';
import { computed, onMounted, ref, watch } from 'vue';

const route = useRoute();
const router = useRouter();
const currentSort = ref('문코 추천 순'); // 기본 정렬 기준
const category = ref('ALL'); // 기본 카테고리
const sortBy = ref('distanceDiscountScore'); // 기본 정렬 방식
const sortModal = ref(null);
const encodeSearchTerm = ref('');
const searchTerm = ref('');
const searchList = ref([]);

onMounted(() => {
	// URL에서 카테고리와 정렬 방식 가져오기
	category.value = route.params.category || 'ALL';
	sortBy.value = route.params.sort || 'distanceDiscountScore';
	// 초기 데이터 요청
	searchTerm.value = route.params.searchTerm;
	console.log('mounted searchterm', searchTerm.value);
	fetchSearchResults(searchTerm);
});

// api 연동하여 상품 가져오기
// const fetchSearchResults = () => {
// 	const { category, sortBy } = route.params;
// 	const apiUrl = `/api/products/category?category=${category}&sortBy=${sortBy}&order=desc&limit=100`;
// 	http
// 		.get(apiUrl)
// 		.then(res => {
// 			products.value = res.data.items;
// 		})
// 		.catch(err => {
// 			console.log(err);
// 		});
// };
const fetchSearchResults = async () => {
	const { searchTerm, sortBy } = route.params;
	encodeSearchTerm.value = encodeURIComponent(searchTerm);
	try {
		const res = await http.get(
			`/api/products/search?searchTerm=${encodeSearchTerm.value}&sortBy=${sortBy}&order=desc&limit=100`,
		);
		searchList.value = res.data.data;
		console.log('lsitlist', searchList.value);
	} catch (err) {
		console.log('검색 에러 발생', err);
	}
};

const sortOptions = [
	{ label: '문코 추천 순', value: 'distanceDiscountScore' },
	{ label: '가까운 순', value: 'distance' },
	{ label: '할인율 높은 순', value: 'discountRate' },
];

// ref를 사용해 모달 열기
const openSortModal = () => {
	sortModal.value.openModal();
	console.log(sortModal.value);
};

// 정렬 기준 변경 메소드
const changeSort = option => {
	currentSort.value = option.label;
	sortBy.value = option.value;
	updateRoute(); // route 업데이트
	fetchSearchResults(); // 카테고리에 맞는 상품 재요청
};

// route 업데이트 메소드
const updateRoute = () => {
	console.log('sortby', sortBy.value);
	router.push(`/searchResult/${encodeSearchTerm.value}/${sortBy.value}`);
};

// /name/id로 라우팅
const goToDetailPage = product => {
	router.push(`/details/${product.name}/${product.productId}`);
};

// 경로 변경 시 데이터를 불러오는 watch 함수
watch(
	() => route.params, // 경로 파라미터 변경 감지
	newParams => {
		category.value = newParams.category || 'ALL';
		sortBy.value = newParams.sortBy || 'distanceDiscountScore';
		fetchSearchResults();
	},
	{ immediate: true }, // 페이지 로드 시에도 즉시 실행
);
// watch(
// 	() => route.params.sortBy,
// 	newSortBy => {
// 		currentSort.value = newSortBy || 'distanceDiscountScore'; // 파라미터 없을 경우 기본값 설정
// 	},
// 	{ immediate: true },
// );
watch(
	() => route.params.sortBy,
	newSortBy => {
		// 기본값 설정
		const defaultSortValue = 'distanceDiscountScore';
		currentSort.value = newSortBy || defaultSortValue; // 파라미터 없을 경우 기본값 설정

		// 선택된 sortBy value에 해당하는 label을 찾기
		const selectedOption = sortOptions.find(
			option => option.value === (newSortBy || defaultSortValue),
		);
		currentSort.value = selectedOption ? selectedOption.label : '문코 추천 순'; // label로 변환
	},
	{ immediate: true },
);
</script>

<style lang="scss" scoped>
.category-bg {
	width: 375px;
	min-height: 716px;
	background-image: url('/category/categoryBg.png');
	background-color: white;
	color: var(--Text, #1d1d1d);
	background-attachment: fixed;
	background-repeat: no-repeat;
	background-position: center;
}
.category-list {
	height: 48px;
	width: 375px;
	display: flex;
	font-size: 16px;
	color: #555555;
	font-weight: 500;
	line-height: 24px;
	padding: 12px 16px;
	justify-content: space-between;
	top: 48px;
	z-index: 8;
	background: white;
	position: absolute;
}
.category-list button.active {
	color: #1cb08c;
}
</style>
