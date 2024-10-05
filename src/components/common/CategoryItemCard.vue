<template>
	<div class="item-card-list noScrollBar">
		<div class="item-card">
			<img
				:src="fullImageUrl(product.productImageUrl)"
				alt="Product Image"
				class="item-card-img"
			/>
			<div class="remaining">{{ product.availableStock }}개 남음</div>
		</div>
		<div class="pt-2 pb-6">
			<p class="text-base color-black">{{ product.name }}</p>
			<div class="flex">
				<p class="text-base text-[#1CB08C] pr-1">
					{{ roundedDiscountRate(product.discountRate) }}%
				</p>
				<p class="text-baseB">
					{{ product.discountedPrice.toLocaleString() }}원
				</p>
			</div>
			<p class="text-sm text-disabledTextGray line-through">
				{{ product.originalPrice.toLocaleString() }}원
			</p>
			<div class="pt-1 text-sm text-bodyBlack">
				<p class="distance-text-style">
					오후 9:00 마감 · <span>{{ product.distance }}km</span>
				</p>
			</div>
		</div>
	</div>
</template>
<script>
export default {
	props: {
		product: {
			type: Object,
			required: true,
		},
	},
	methods: {
		// 이미지 경로 변환
		fullImageUrl(imagePath) {
			const baseUrl = import.meta.env.VITE_APP_API_URL;
			return `${baseUrl}${imagePath}`;
		},
		// 할인율 반올림 계산
		roundedDiscountRate(rate) {
			return Math.round(rate);
		},
	},
};
</script>
<style lang="scss" scoped>
.item-card {
	width: 168px;
	height: 216px;
	position: relative;
}
.item-card-img {
	width: 100%;
	height: 100%;
	background-color: white;
	border-radius: 6px;
	border: 1px solid var(--Primary, #031f34);
	object-fit: cover;
}
.remaining {
	position: absolute;
	right: 8px;
	bottom: 8px;
	width: 62px;
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
.item-card-list {
	white-space: nowrap;
	overflow-y: auto;
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
.distance-text-style {
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
}
</style>
