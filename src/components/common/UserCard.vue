<template>
	<div class="mr-1.5 mainpage-userCard">
		<img src="/mainPage/mainLeaf.svg" class="w-6 h-4 mx-auto mb-1" />
		<p>문코를 통해</p>
		<p class="text-baseB">{{ foodCount }}의 음식을</p>
		<p>구출했어요!</p>
	</div>
</template>
<script>
export default {
	props: {
		foodCount: {
			type: String,
			default: '0',
		},
	},
};
</script>
<style>
.mainpage-userCard {
	width: 168px;
	height: 124px;
	background-color: white;
	border-radius: 10px;
	border: 2px solid var(--Point, #1cb08c);
	display: grid;
	align-content: center;
}
</style>
