<template>
	<div class="item-card">
		<div class="relative">
			<img src="/landingPage/card01.jpg" class="item-card-img" />
			<div class="remaining">50개 남음</div>
		</div>
		<div class="py-2 px-3">
			<p class="text-smB color-black pb-0.5">치킨 타코 2개</p>
			<div class="text-sm text-bodyBlack">
				<p>오후 9:00 마감 · <span>0.2km</span></p>
				<p>3,000원</p>
			</div>
		</div>
	</div>
</template>
<script setup></script>
<style lang="scss" scoped>
.item-card {
	width: 168px;
	height: 180px;
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
</style>
