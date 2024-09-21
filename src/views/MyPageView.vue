<template>
	<div class="mypage-bg">
		<div class="bg-white h-[48px]">header위치</div>
		<AppButton btnText="닫기"></AppButton>
	</div>
</template>

<script setup>
import AppButton from '@/components/common/AppButton.vue';
import { ref } from 'vue';
</script>

<style lang="scss" scoped>
.mypage-bg {
	background-image: url('/myPage/myPageBg.png');
}
</style>
