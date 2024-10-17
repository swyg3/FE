<template>
	<div>
		<AddressHeader></AddressHeader>
		<div class="explore-bg">
			<SearchBar @click="router.push('/search')"></SearchBar>
			<!-- 이미지 카테고리 리스트 -->
			<div class="category-scroll noScrollBar">
				<button
					v-for="category in categoryOption"
					:key="category.value"
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
					v-for="(product, index) in nearestProducts"
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
					v-for="(product, index) in discountRateProducts"
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
import { useRouter } from 'vue-router';
import { onMounted, ref } from 'vue';
import {
	categoryOption,
	fetchProductApi,
	goToproductDetailPageUrl,
} from '@/api/product.js';
import AddressHeader from '@/components/common/AddressHeader.vue';
import { useStore } from 'vuex';

const router = useRouter();
const store = useStore();
const products = ref([]);
const nearestProducts = ref([]);
const discountRateProducts = ref([]);

onMounted(() => {
	fetchRecommendedProducts();
	fetchNearestProducts();
	fetchDiscountrateProducts();
});

// 추천순 아이템 리스트
const fetchRecommendedProducts = async () => {
	try {
		const response = await fetchProductApi('ALL', 'distanceDiscountScore', 7);
		products.value = response.data.items;
	} catch (error) {
		console.log('Error', error);
	} finally {
		store.commit('SET_IS_LOADING', false);
	}
};
// 거리순 아이템 리스트
const fetchNearestProducts = async () => {
	try {
		const response = await fetchProductApi('ALL', 'distance', 7);
		nearestProducts.value = response.data.items;
	} catch (error) {
		console.log('Error', error);
	} finally {
		store.commit('SET_IS_LOADING', false);
	}
};
// 할인순 아이템 리스트
const fetchDiscountrateProducts = async () => {
	try {
		const response = await fetchProductApi('ALL', 'discountRate', 7);
		discountRateProducts.value = response.data.items;
	} catch (error) {
		console.log('Error', error);
	} finally {
		store.commit('SET_IS_LOADING', false);
	}
};

const goToDetailPage = product => {
	router.push(goToproductDetailPageUrl(product.name, product.productId));
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
	overflow: hidden;
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
