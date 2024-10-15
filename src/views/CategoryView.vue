<!-- <template>
	<div>
		<div>
			<TheHeader></TheHeader>
			<div class="category-list">
				<CategoryListButton
					v-for="(cat, index) in categories"
					:key="index"
					:categoryName="cat.name"
					:categoryValue="cat.value"
					:isActive="category === cat.value"
					@categoryChanged="changeCategory"
				/>
			</div>
			<div class="h-[48px]"></div>
			<hr class="w-full bg-disabledGray" />
			<div class="category-bg">
				<div class="h-[48px]"></div>

				<div class="px-4 py-[13px] flex text-sm text-bodyBlack justify-between">
					<p class="">총 {{ products.length }}개</p>
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
						v-for="(product, index) in products"
						:key="index"
						:product="product"
						@click="goToDetailPage(product)"
					/>
				</div>
			</div>
		</div>
		<CategorySortModal
			:currentSort="currentSort"
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
import CategoryListButton from '@/components/common/CategoryListButton.vue';
import { useRoute, useRouter } from 'vue-router';
import { onMounted, ref, watch } from 'vue';

const route = useRoute();
const router = useRouter();
const currentSort = ref('문코 추천 순'); // 기본 정렬 기준
const category = ref('ALL'); // 기본 카테고리
const sortBy = ref('distanceDiscountScore'); // 기본 정렬 방식
const sortModal = ref(null);
const products = ref([]);
const categories = ref([
	{ name: '전체', value: 'ALL' },
	{ name: '한식', value: 'KOREAN' },
	{ name: '일식', value: 'JAPANESE' },
	{ name: '중식', value: 'CHINESE' },
	{ name: '분식', value: 'SNACK' },
	{ name: '양식', value: 'WESTERN' },
	{ name: '디저트', value: 'DESSERT' },
]);

onMounted(() => {
	// URL에서 카테고리와 정렬 방식 가져오기
	category.value = route.params.category || 'ALL';
	sortBy.value = route.params.sort || 'distanceDiscountScore';
	// 초기 데이터 요청
	fetchCategoryProducts();
});

// api 연동하여 상품 가져오기
const fetchCategoryProducts = () => {
	const { category, sortBy } = route.params;
	const apiUrl = `/api/products/category?category=${category}&sortBy=${sortBy}&order=asc&limit=8`;
	http
		.get(apiUrl)
		.then(res => {
			products.value = res.data.data;
		})
		.catch(err => {
			console.log(err);
		});
};
const sortOptions = [
	{ label: '문코 추천 순', value: 'distanceDiscountScore' },
	{ label: '가까운 순', value: 'distance' },
	{ label: '할인율 높은 순', value: 'discountRate' },
];

// 카테고리 변경 메소드
const changeCategory = newCategory => {
	category.value = newCategory; // 카테고리 값 업데이트
	updateRoute(); // route 업데이트
	fetchCategoryProducts(); // 새 카테고리에 맞는 상품 재요청
};

// ref를 사용해 모달 열기
const openSortModal = () => {
	if (sortModal.value) {
		console.log('sortModal: true');
		sortModal.value.openModal();
	} else {
		console.error('sortModal is not defined or not rendered yet');
	}
};

// 정렬 기준 변경 메소드
const changeSort = option => {
	sortModal.value.openModal();
	sortBy.value = option.value;
	updateRoute(); // route 업데이트
	fetchCategoryProducts(); // 카테고리에 맞는 상품 재요청
};

// route 업데이트 메소드
const updateRoute = () => {
	router.push(`/category/${category.value}/${sortBy.value}`);
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
		fetchCategoryProducts();
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
	min-height: 715px;
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
</style> -->

<template>
	<div>
		<div>
			<TheHeader :text="selectedCategoryName" showSearchIcon:true></TheHeader>
			<div class="category-list">
				<CategoryListButton
					v-for="(cat, index) in categories"
					:key="index"
					:categoryName="cat.name"
					:categoryValue="cat.value"
					:isActive="category === cat.value"
					@categoryChanged="changeCategory"
				/>
			</div>
			<hr class="w-full bg-disabledGray" />
			<div class="category-bg">
				<div class="h-[48px]"></div>
				<!--category item card list-->
				<div class="px-4 py-[13px] flex text-sm text-bodyBlack justify-between">
					<p class="">총 {{ products.length }}개</p>
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
						v-for="(product, index) in products"
						:key="index"
						:product="product"
						@click="goToDetailPage(product)"
					/>
				</div>
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
import CategoryListButton from '@/components/common/CategoryListButton.vue';
import { useRoute, useRouter } from 'vue-router';
import { computed, onMounted, ref, watch } from 'vue';

const route = useRoute();
const router = useRouter();
const currentSort = ref('문코 추천 순'); // 기본 정렬 기준
const category = ref('ALL'); // 기본 카테고리
const sortBy = ref('distanceDiscountScore'); // 기본 정렬 방식
const sortModal = ref(null);
const products = ref([]);
const categories = ref([
	{ name: '전체', value: 'ALL' },
	{ name: '한식', value: 'KOREAN' },
	{ name: '일식', value: 'JAPANESE' },
	{ name: '중식', value: 'CHINESE' },
	{ name: '분식', value: 'SNACK' },
	{ name: '양식', value: 'WESTERN' },
	{ name: '디저트', value: 'DESSERT' },
]);

// header text
const selectedCategoryName = computed(() => {
	const selectedCategory = categories.value.find(
		cat => cat.value === category.value,
	);
	return selectedCategory ? selectedCategory.name : '전체';
});

onMounted(() => {
	// URL에서 카테고리와 정렬 방식 가져오기
	category.value = route.params.category || 'ALL';
	sortBy.value = route.params.sort || 'distanceDiscountScore';
	// 초기 데이터 요청
	fetchCategoryProducts();
});

// api 연동하여 상품 가져오기
const fetchCategoryProducts = () => {
	const { category, sortBy } = route.params;
	const apiUrl = `/api/products/category?category=${category}&sortBy=${sortBy}&order=desc&limit=100`;
	http
		.get(apiUrl)
		.then(res => {
			products.value = res.data.items;
		})
		.catch(err => {
			console.log('Error', err);
		});
};
const sortOptions = [
	{ label: '문코 추천 순', value: 'distanceDiscountScore' },
	{ label: '가까운 순', value: 'distance' },
	{ label: '할인율 높은 순', value: 'discountRate' },
];

// 카테고리 변경 메소드
const changeCategory = newCategory => {
	category.value = newCategory; // 카테고리 값 업데이트
	updateRoute(); // route 업데이트
	fetchCategoryProducts(); // 새 카테고리에 맞는 상품 재요청
};

// ref를 사용해 모달 열기
const openSortModal = () => {
	sortModal.value.openModal();
	// console.log(sortModal.value);
};

// 정렬 기준 변경 메소드
const changeSort = option => {
	currentSort.value = option.label;
	sortBy.value = option.value;
	updateRoute(); // route 업데이트
	fetchCategoryProducts(); // 카테고리에 맞는 상품 재요청
};

// route 업데이트 메소드
const updateRoute = () => {
	router.push(`/category/${category.value}/${sortBy.value}`);
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
		fetchCategoryProducts();
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
	min-height: 715px;
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
