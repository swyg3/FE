<template>
	<div>
		<TheHeader text="검색결과" :showSearchIcon="false"></TheHeader>
		<div class="category-bg">
			<SearchBar @click="router.push('/search')"></SearchBar>
			<div class="px-4 py-[13px] flex text-sm text-bodyBlack justify-between">
				<p class="">총 {{ searchList.length }}개</p>
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
					v-for="(product, index) in searchList"
					:key="index"
					:product="product"
					@click="goToDetailPage(product)"
				/>
			</div>
		</div>
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
	sortByOption,
	searchApi,
	goToSearchResult,
	goToproductDetailPageUrl,
} from '@/api/product.js';
import CategorySortModal from '@/components/Modal/categorySortModal.vue';
import SearchBar from '@/components/common/SearchBar.vue';
import { useRoute, useRouter } from 'vue-router';
import { onMounted, ref } from 'vue';
import { useStore } from 'vuex';

const route = useRoute();
const router = useRouter();
const store = useStore();
const currentSort = ref('문코 추천 순');
const sortBy = ref(route.params.sort || 'distanceDiscountScore');
const sortModal = ref(null);
const encodeSearchTerm = ref('');
const searchTerm = ref(route.params.searchTerm);
const searchList = ref([]);

onMounted(() => {
	fetchSearchResults();
});

const fetchSearchResults = async () => {
	encodeSearchTerm.value = encodeURIComponent(searchTerm.value);
	try {
		const res = await searchApi(encodeSearchTerm.value, sortBy.value);
		searchList.value = res.data.data;
	} catch (err) {
		console.log('Error', err);
	} finally {
		store.commit('SET_IS_LOADING', false);
	}
};
// 정렬 기준 변경
const changeSortBy = option => {
	currentSort.value = option.label;
	sortBy.value = option.value;
	updateRoute();
	fetchSearchResults();
};
// 선택된 정렬방식으로 label 변경
const selectedSort = () => {
	const selectecedSortValue = sortByOption.find(
		option => option.value === sortBy.value,
	);
	return selectecedSortValue ? selectecedSortValue.label : '문코 추천 순';
};

// url 업데이트
const updateRoute = () => {
	router.push(goToSearchResult(encodeSearchTerm.value, sortBy.value));
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
