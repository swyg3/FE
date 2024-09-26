<template>
	<div class="item-card">
		<div class="relative">
			<img src="/randingPage/card01.jpg" class="item-card-img" />

			<div class="remaining">2개 남음</div>
		</div>
		<div class="py-2 px-3">
			<p class="text-smB color-[#1D1D1D] pb-0.5">치킨 타코 2개</p>
			<p class="body-text">
				오후 9:00 마감 · <span class="body-text">0.2km</span>
			</p>
			<p class="body-text">3,000원</p>
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
	width: 100%;
	height: 96px;
	background-color: white;
	border-radius: 10px 10px 0 0;
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
.body-text {
	font-size: 14px;
	font-style: normal;
	font-weight: 500;
	line-height: 22px;
	color: var(--Text_body, #555);
}
</style>
