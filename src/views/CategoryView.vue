<template>
	<div>
		<div>
			<TheHeader :text="selectedCategory()" :showSearchIcon="true"></TheHeader>
			<div class="category-list">
				<CategoryListButton
					v-for="(cat, index) in simpleCategory"
					:key="index"
					:categoryLabel="cat.label"
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
						<button @click="openSortModal">{{ selectedSort() }}</button>
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
		<!--sortModal로 자식에서 가져오기-->
		<CategorySortModal
			@sortByChanged="changeSortBy"
			:sortBy="sortBy"
			ref="sortModal"
			class="absolute"
		></CategorySortModal>
	</div>
</template>

<script setup>
import TheHeader from '@/components/common/TheHeader.vue';
import CategoryItemCard from '@/components/common/CategoryItemCard.vue';
import {
	categoryOption,
	sortByOption,
	fetchProductApi,
	goToproductDetailPageUrl,
	goTocategoryPageUrl,
} from '@/api/product.js';
import CategorySortModal from '@/components/Modal/categorySortModal.vue';
import CategoryListButton from '@/components/common/CategoryListButton.vue';
import { useRoute, useRouter } from 'vue-router';
import { onMounted, ref } from 'vue';
import { useStore } from 'vuex';

const route = useRoute();
const router = useRouter();
const store = useStore();
const currentSort = ref('문코 추천 순'); // 기본 정렬 기준
const category = ref(route.params.category || 'ALL'); // 기본 카테고리
const sortBy = ref(route.params.sortBy || 'distanceDiscountScore'); // 기본 정렬 방식
const sortModal = ref(null); // 자식에서 가져오기(categorysortmodal)
const products = ref([]);
const simpleCategory = categoryOption.map(({ label, value }) => ({
	label,
	value,
}));

onMounted(() => {
	fetchCategoryProducts();
});

// 선택된 카테고리로 label 변경
const selectedCategory = () => {
	const selectecedCategoryValue = simpleCategory.find(
		option => option.value === category.value,
	);
	return selectecedCategoryValue ? selectecedCategoryValue.label : '전체';
};
// 선택된 정렬방식으로 label 변경
const selectedSort = () => {
	const selectecedSortValue = sortByOption.find(
		option => option.value === sortBy.value,
	);
	return selectecedSortValue ? selectecedSortValue.label : '문코 추천 순';
};
// 상품 리스트 가져오기
const fetchCategoryProducts = async () => {
	try {
		const response = await fetchProductApi(category.value, sortBy.value, 100);
		products.value = response.data.items;
	} catch (error) {
		console.log('Error', error);
	} finally {
		store.commit('SET_IS_LOADING', false);
	}
};

// 카테고리 버튼 컴포넌트에서 선택된 카테고리 값 받아서 업데이트 
const changeCategory = newCategory => {
	category.value = newCategory;
	updateRoute();
	fetchCategoryProducts();
	// location.reload(); // 강제 새로고침
};

// 정렬 기준 변경
const changeSortBy = option => {
	currentSort.value = option.label;
	sortBy.value = option.value;
	updateRoute(); // route 업데이트
	fetchCategoryProducts(); // 카테고리에 맞는 상품 재요청
};

// url 업데이트
const updateRoute = () => {
	router.push(goTocategoryPageUrl(category.value, sortBy.value));
};

// 상품 상세 페이지로 이동
const goToDetailPage = product => {
	router.push(goToproductDetailPageUrl(product.name, product.productId));
};

// ref를 사용해 모달 열기
const openSortModal = () => {
	sortModal.value.openModal();
};
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
