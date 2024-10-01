<template>
	<div class="item-card-list noScrollBar">
		<div class="item-card">
			<img src="/landingPage/card01.jpg" class="item-card-img" />
			<div class="remaining">2개 남음</div>
		</div>
		<div class="pt-2 pb-6">
			<p class="text-base color-black">소금 끄네들로</p>
			<div class="flex">
				<p class="text-base text-[#1CB08C] pr-1">80%</p>
				<p class="text-baseB">2,000원</p>
			</div>
			<p class="text-sm text-disabledTextGray line-through">10,000원</p>
			<div class="pt-1 text-sm text-bodyBlack">
				<p>오후 9:00 마감 · <span>1.4km</span></p>
			</div>
		</div>
	</div>
</template>
<script setup></script>
<style lang="scss" scoped>
.item-card {
	width: 168px;
	height: 216px;
	position: relative;
}
.item-card-img {
	width: 168px;
	height: 216px;
	background-color: white;
	border-radius: 6px;
	border: 1px solid var(--Primary, #031f34);
	object-fit: cover;
}
.remaining {
	position: absolute;
	right: 8px;
	bottom: 8px;
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
</style>
