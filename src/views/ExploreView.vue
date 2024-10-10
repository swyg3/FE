<template>
	<div>
		<TheHeader></TheHeader>
		<div class="h-[48px]"></div>
		<div class="explore-bg">
			<SearchBar></SearchBar>
			<div class="category-scroll noScrollBar">
				<button
					class="px-2 category-btn"
					@click="router.push('/category/ALL/distanceDiscountScore')"
				>
					<div class="category-all">ALL</div>
					<p class="category-text">전체</p>
				</button>
				<button
					v-for="category in categories"
					:key="category.name"
					class="px-2 category-btn"
					@click="router.push(category.route)"
				>
					<img :src="category.img" class="category-img" />
					<p class="category-text">{{ category.label }}</p>
				</button>
			</div>
			<hr class="w-full bg-disabledGray" />

			<!--문코 추천 리스트-->
			<div class="px-4 py-4 flex justify-between">
				<p class="text-baseB">문코의 추천</p>
				<div class="flex">
					<button
						class="text-sm"
						@click="router.push(`/category/ALL/distanceDiscountScore`)"
					>
						전체보기
					</button>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="24"
						height="24"
						viewBox="0 0 24 24"
						fill="none"
					>
						<path
							d="M12.6 12L8.69999 8.10005C8.51665 7.91672 8.42499 7.68338 8.42499 7.40005C8.42499 7.11672 8.51665 6.88338 8.69999 6.70005C8.88332 6.51672 9.11665 6.42505 9.39999 6.42505C9.68332 6.42505 9.91665 6.51672 10.1 6.70005L14.7 11.3C14.8 11.4 14.8708 11.5084 14.9125 11.625C14.9542 11.7417 14.975 11.8667 14.975 12C14.975 12.1334 14.9542 12.2584 14.9125 12.375C14.8708 12.4917 14.8 12.6 14.7 12.7L10.1 17.3C9.91665 17.4834 9.68332 17.575 9.39999 17.575C9.11665 17.575 8.88332 17.4834 8.69999 17.3C8.51665 17.1167 8.42499 16.8834 8.42499 16.6C8.42499 16.3167 8.51665 16.0834 8.69999 15.9L12.6 12Z"
							fill="#1D1D1D"
						/>
					</svg>
				</div>
			</div>
			<div class="item-card-list noScrollBar">
				<MainItemCard
					v-for="(product, index) in products"
					:key="index"
					:product="product"
					@click="goToDetailPage(product)"
				/>
			</div>
			<!--가까운 가게 리스트-->
			<div class="px-4 pt-6 pb-4 flex justify-between">
				<p class="text-baseB">가까운 가게</p>
				<div class="flex">
					<button
						class="text-sm"
						@click="router.push(`/category/ALL/distance`)"
					>
						전체보기
					</button>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="24"
						height="24"
						viewBox="0 0 24 24"
						fill="none"
					>
						<path
							d="M12.6 12L8.69999 8.10005C8.51665 7.91672 8.42499 7.68338 8.42499 7.40005C8.42499 7.11672 8.51665 6.88338 8.69999 6.70005C8.88332 6.51672 9.11665 6.42505 9.39999 6.42505C9.68332 6.42505 9.91665 6.51672 10.1 6.70005L14.7 11.3C14.8 11.4 14.8708 11.5084 14.9125 11.625C14.9542 11.7417 14.975 11.8667 14.975 12C14.975 12.1334 14.9542 12.2584 14.9125 12.375C14.8708 12.4917 14.8 12.6 14.7 12.7L10.1 17.3C9.91665 17.4834 9.68332 17.575 9.39999 17.575C9.11665 17.575 8.88332 17.4834 8.69999 17.3C8.51665 17.1167 8.42499 16.8834 8.42499 16.6C8.42499 16.3167 8.51665 16.0834 8.69999 15.9L12.6 12Z"
							fill="#1D1D1D"
						/>
					</svg>
				</div>
			</div>
			<div class="item-card-list noScrollBar">
				<MainItemCard
					v-for="(product, index) in products"
					:key="index"
					:product="product"
					@click="goToDetailPage(product)"
				/>
			</div>
			<div class="px-4 pt-6 pb-4 flex justify-between">
				<p class="text-baseB">할인이 큰 가게</p>
				<div class="flex">
					<button
						class="text-sm"
						@click="router.push(`/category/ALL/discountRate`)"
					>
						전체보기
					</button>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="24"
						height="24"
						viewBox="0 0 24 24"
						fill="none"
					>
						<path
							d="M12.6 12L8.69999 8.10005C8.51665 7.91672 8.42499 7.68338 8.42499 7.40005C8.42499 7.11672 8.51665 6.88338 8.69999 6.70005C8.88332 6.51672 9.11665 6.42505 9.39999 6.42505C9.68332 6.42505 9.91665 6.51672 10.1 6.70005L14.7 11.3C14.8 11.4 14.8708 11.5084 14.9125 11.625C14.9542 11.7417 14.975 11.8667 14.975 12C14.975 12.1334 14.9542 12.2584 14.9125 12.375C14.8708 12.4917 14.8 12.6 14.7 12.7L10.1 17.3C9.91665 17.4834 9.68332 17.575 9.39999 17.575C9.11665 17.575 8.88332 17.4834 8.69999 17.3C8.51665 17.1167 8.42499 16.8834 8.42499 16.6C8.42499 16.3167 8.51665 16.0834 8.69999 15.9L12.6 12Z"
							fill="#1D1D1D"
						/>
					</svg>
				</div>
			</div>
			<div class="item-card-list noScrollBar">
				<MainItemCard
					v-for="(product, index) in products"
					:key="index"
					:product="product"
					@click="goToDetailPage(product)"
				/>
			</div>
		</div>
	</div>
</template>

<script setup>
import MainItemCard from '@/components/common/MainItemCard.vue';
import SearchBar from '@/components/common/SearchBar.vue';
import TheHeader from '@/components/common/TheHeader.vue';
import { useRouter } from 'vue-router';
import { onMounted, ref } from 'vue';
import http from '@/api/http.js';

const router = useRouter();
const products = ref([]);

// 카테고리 배열 정의
const categories = [
	{
		name: 'KOREAN',
		label: '한식',
		img: '/category/koreanFood.png',
		route: '/category/KOREAN/distanceDiscountScore',
	},
	{
		name: 'JAPANESE',
		label: '일식',
		img: '/category/japaneseFood.png',
		route: '/category/JAPANESE/distanceDiscountScore',
	},
	{
		name: 'CHINESE',
		label: '중식',
		img: '/category/chineseFood.png',
		route: '/category/CHINESE/distanceDiscountScore',
	},
	{
		name: 'SNACK',
		label: '분식',
		img: '/category/snackFood.png',
		route: '/category/SNACK/distanceDiscountScore',
	},
	{
		name: 'WESTERN',
		label: '양식',
		img: '/category/westernFood.png',
		route: '/category/WESTERN/distanceDiscountScore',
	},
	{
		name: 'DESSERT',
		label: '디저트',
		img: '/category/dessert.png',
		route: '/category/DESSERT/distanceDiscountScore',
	},
];

onMounted(() => {
	fetchRecommendedProducts();
});

// 추천순 아이템 리스트 불러오기
const fetchRecommendedProducts = async () => {
	const apiUrl = `/api/products/category?category=ALL&sortBy=distanceDiscountScore&order=asc&limit=7`;
	try {
		const res = await http.get(apiUrl);
		products.value = res.data.data;
	} catch (error) {
		console.log('에러라고짱나게하지마', error);
	}
};
const goToDetailPage = product => {
	router.push(`/details/${product.name}/${product.productId}`); // /name/id로 라우팅
};
</script>

<style lang="scss" scoped>
.explore-bg {
	width: 375px;
	min-height: 716px;
	background-image: url('/mainPage/mainPageBg.png');
	background-color: white;
	color: var(--Text, #1d1d1d);
	padding-bottom: 10px;
	background-attachment: fixed;
	background-repeat: no-repeat;
	background-position: center;
}
.category-all {
	width: 52px;
	height: 52px;
	background-color: white;
	border: 1px solid #031f34;
	border-radius: 50%;
	color: #031f34;
	font-size: 16px;
	line-height: 24px;
	font-weight: 700;
	text-align: center;
	align-content: center;
}
.category-text {
	font-size: 14px;
	line-height: 22px;
	font-weight: 500;
	text-align: center;
	padding-top: 4px;
}
.category-btn {
	min-width: 70px; /* 버튼의 최소 너비 조정 */
	display: flex;
	flex-direction: column;
	align-items: center; /* 아이콘과 텍스트를 수직으로 정렬 */
	justify-content: center; /* 중앙 정렬 */
}
.category-img {
	width: 52px;
	height: 52px;
}
.item-card-list {
	height: 183px;
	display: flex;
	white-space: nowrap;
	overflow-x: auto;
	padding: 0 12px;
}
.category-scroll {
	min-width: 375px;
	display: flex;
	padding: 16px 8px;
	white-space: nowrap;
	overflow-x: auto;
	overflow-y: hidden;
}
.noScrollBar {
	//scroll bar 가리기
	/* IE and Edge */
	-ms-overflow-style: none;
	/* Firefox */
	scrollbar-width: none;
}
/* scroll bar 가리기 Chrome, Safari,Opera */
.noScrollBar::-webkit-scrollbar {
	display: none !important;
}
</style>
