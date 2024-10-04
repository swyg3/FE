<template>
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
			<!--category item card list-->
			<div class="px-4 py-[13px] flex text-sm text-bodyBlack justify-between">
				<p class="">총 {{ products.length }}개</p>
				<div class="flex">
					<button @click="openSortModal">{{ currentSort }}</button>
					<CategorySortModal
						@changeSort="changeSort"
						ref="sortModal"
					></CategorySortModal>
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
			<div>
				<div class="px-4 grid grid-cols-2 gap-[7px]">
					<CategoryItemCard
						v-for="(product, index) in products"
						:key="index"
						:product="product"
					/>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import TheHeader from '@/components/common/TheHeader.vue';
import CategoryItemCard from '@/components/common/CategoryItemCard.vue';
import http from '@/api/http.js';
import CategorySortModal from '@/components/Modal/categorySortModal.vue';
import CategoryListButton from '@/components/common/CategoryListButton.vue';

export default {
	components: {
		TheHeader,
		CategoryListButton,
		CategorySortModal,
		CategoryItemCard,
	},
	data() {
		return {
			products: [],
			currentSort: '문코 추천 순', // 기본 정렬 기준
			category: 'ALL', // 기본 카테고리
			sortBy: 'distanceDiscountScore', // 기본 정렬 방식
			categories: [
				{ name: '전체', value: 'ALL' },
				{ name: '한식', value: 'KOREAN' },
				{ name: '일식', value: 'JAPANESE' },
				{ name: '중식', value: 'CHINESE' },
				{ name: '분식', value: 'SNACK' },
				{ name: '양식', value: 'WESTERN' },
				{ name: '디저트', value: 'DESSERT' },
			],
		};
	},
	mounted() {
		this.fetchCategoryProducts(); // 페이지 로드 시 기본 데이터 요청
	},
	methods: {
		// 임의 위치 설정
		updateLocation() {
			const locationData = {
				longitude: 126.9779692, // 경도
				latitude: 37.5662952, // 위도
			};
			http
				.put('/api/locations/current/insert', locationData)
				.then(response => {
					console.log('Location updated successfully:', response.data);
				})
				.catch(error => {
					console.error('Error updating location:', error);
				});
		},
		// api 연동하여 상품 가져오기
		fetchCategoryProducts() {
			const apiUrl = `/api/products/category?category=${this.category}&sortBy=${this.sortBy}&order=asc&limit=8`;
			http
				.get(apiUrl)
				.then(res => {
					this.products = res.data.data;
					console.log(this.products);
					console.log(apiUrl);
				})
				.catch(err => {
					console.log(err);
				});
		},
		// 카테고리 변경 메소드
		changeCategory(newCategory) {
			this.category = newCategory; // 카테고리 값 업데이트
			this.fetchCategoryProducts(); // 새 카테고리에 맞는 상품 재요청
		},
		// 정렬 기준 변경 메소드
		openSortModal() {
			this.$refs.sortModal.openModal();
		},
		changeSort(option) {
			this.currentSort = option.label;
			this.sortBy = option.value;
			this.fetchCategoryProducts(); // 카테고리에 맞는 상품 재요청
		},
	},
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
