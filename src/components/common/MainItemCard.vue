<template>
	<div class="item-card">
		<div class="relative">
			<img :src="fullImageUrl(product.productImageUrl)" class="item-card-img" />
			<div class="remaining">{{ product.availableStock }}개 남음</div>
		</div>
		<div class="py-2 px-3">
			<p class="text-smB color-black pb-0.5">{{ product.name }}</p>
			<div class="text-sm text-bodyBlack">
				<p class="distance-text-style">
					오후 9:00 마감 ·
					<span>{{ distanceAdjustCalc(product.distance) }}km</span>
				</p>
				<p>{{ formatNumber(product.discountedPrice) }}원</p>
			</div>
		</div>
	</div>
</template>
<script setup>
const props = defineProps({
	product: {
		type: Object,
		required: true,
	},
});

// 이미지 경로 변환
const fullImageUrl = imagePath => {
	const baseUrl = import.meta.env.VITE_APP_API_URL;
	return `${baseUrl}${imagePath}`;
};

// 거리 소수점 계산
const distanceAdjustCalc = number => {
	const adjustDistance = number / 100;
	return parseFloat(adjustDistance.toFixed(1));
};

// 숫자 포맷 (천단위 , 삽입)
const formatNumber = number => {
	return new Intl.NumberFormat().format(number);
};
</script>

<style lang="scss" scoped>
.item-card {
	width: 168px;
	height: 182px;
	border-radius: 10px;
	border: 1px solid var(--Border_, #c6c6c6);
	background: var(--White, #fff);
	margin-left: 4px;
	margin-right: 4px;
}
.item-card-img {
	width: 168px;
	height: 96px;
	background-color: white;
	border-radius: 10px 10px 0 0;
	object-fit: cover;
}
.remaining {
	position: absolute;
	right: 4px;
	bottom: 4px;
	width: 66px;
	height: 24px;
	align-items: center;
	display: flex;
	justify-content: center;
	font-size: 14px;
	font-weight: 500;
	line-height: 22px;
	color: var(--Point, #1cb08c);
	background: var(--20, #d2efe8);
	border-radius: 4px;
	padding: 4px 2px;
}
.distance-text-style {
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
}
</style>
