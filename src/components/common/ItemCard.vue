<template>
	<div class="item-card">
		<img src="/mainPage/mainPageBg.png" class="item-card-img" />
		<div class="py-2 px-3 text-sm">
			<p class="text-smB">치킨 타코 2개</p>
			<p>오후 9:00 마감 <span class="text-xs">0.2km</span></p>
			<p>3,000원</p>
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
	border-radius: 10px;
}
</style>
