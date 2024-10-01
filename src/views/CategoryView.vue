<template>
	<div>
		<TheHeader></TheHeader>
		<div class="category-list">
			<button>전체</button>
			<button>한식</button>
			<button>일식</button>
			<button>중식</button>
			<button>분식</button>
			<button>양식</button>
			<button>디저트</button>
		</div>
		<div class="h-[48px]"></div>
		<hr class="w-full bg-disabledGray" />
		<div class="category-bg">
			<div class="h-[48px]"></div>
			<!--category item card list-->
			<div class="px-4 py-[13px] flex text-sm text-bodyBlack justify-between">
				<p class="">총 20개</p>
				<div class="flex">
					<p class="pr-1">할인순</p>
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
			<div class="">
				<div class="px-4 flex justify-between">
					<CategoryItemCard></CategoryItemCard>
					<CategoryItemCard></CategoryItemCard>
				</div>
				<div class="px-4 flex justify-between">
					<CategoryItemCard></CategoryItemCard>
					<CategoryItemCard></CategoryItemCard>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup>
import TheHeader from '@/components/common/TheHeader.vue';
import CategoryItemCard from '@/components/common/CategoryItemCard.vue';
</script>

<style lang="scss" scoped>
.category-bg {
	width: 375px;
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
</style>
