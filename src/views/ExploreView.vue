<template>
	<TheHeader></TheHeader>
	<div class="explore-bg">
		<SearchBar></SearchBar>
		<div
			class="min-w-[500px] flex px-2 py-4 whitespace-nowrap overflow-x-auto noScrollBar"
		>
			<div class="px-2">
				<div class="category-all">ALL</div>
				<p class="category-text">전체</p>
			</div>
			<div class="px-2">
				<img src="/category/koreanFood.png" class="category-img" />
				<p class="category-text">한식</p>
			</div>
			<div class="px-2">
				<img src="/category/japaneseFood.png" class="category-img" />
				<p class="category-text">일식</p>
			</div>
			<div class="px-2">
				<img src="/category/chineseFood.png" class="category-img" />
				<p class="category-text">중식</p>
			</div>

			<div class="px-2">
				<img src="/category/snackFood.png" class="category-img" />
				<p class="category-text">분식</p>
			</div>
			<div class="px-2">
				<img src="/category/westernFood.png" class="category-img" />
				<p class="category-text">양식</p>
			</div>
			<div class="px-2">
				<img src="/category/dessert.png" class="category-img" />
				<p class="category-text">디저트</p>
			</div>
		</div>
		<hr class="w-full bg-disabledGray" />
		<!--문코 추천 리스트-->
		<div class="px-4 py-4 flex justify-between">
			<p class="text-baseB">문코의 추천</p>
			<div class="flex">
				<p class="text-sm">전체보기</p>
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
			<ItemCard></ItemCard>
			<ItemCard></ItemCard>
			<ItemCard></ItemCard>
		</div>
		<!--가까운 가게 리스트-->
		<div class="px-4 pt-6 pb-4 flex justify-between">
			<p class="text-baseB">가까운 가게</p>
			<div class="flex">
				<p class="text-sm">전체보기</p>
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
			<ItemCard></ItemCard>
			<ItemCard></ItemCard>
			<ItemCard></ItemCard>
		</div>
		<!--할인이 큰 가게 리스트-->
		<div class="px-4 pt-6 pb-4 flex justify-between">
			<p class="text-baseB">할인이 큰 가게</p>
			<div class="flex">
				<p class="text-sm">전체보기</p>
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
			<ItemCard></ItemCard>
			<ItemCard></ItemCard>
			<ItemCard></ItemCard>
		</div>
	</div>
	<TheFooter></TheFooter>
</template>

<script setup>
import ItemCard from '@/components/common/ItemCard.vue';
import SearchBar from '@/components/common/SearchBar.vue';
import TheFooter from '@/components/common/TheFooter.vue';
import TheHeader from '@/components/common/TheHeader.vue';
</script>

<style lang="scss" scoped>
.explore-bg {
	width: 375px;
	height: 716px;
	background-image: url('/mainPage/mainPageBg.png');
	background-color: white;
	color: var(--Text, #1d1d1d);
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
.category-img {
	width: 52px;
	height: 52px;
}
.item-card-list {
	height: 181px;
	display: flex;
	white-space: nowrap;
	overflow-x: auto;
	padding: 0 12px;
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
