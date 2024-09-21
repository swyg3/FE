<template>
	<div
		:class="[
			$route.name === 'SignIn' ? 'bg-hoverWhite' : 'bg-primary',
			$route.name !== 'Randing' ? 'app-background' : '',
		]"
	>
		<div :class="{ 'app-container': $route.name !== 'Randing' }">
			<router-view class="p-[16px] h-[764px]"></router-view>
			<Footer
				v-if="$route.name !== 'Randing' && $route.name !== 'SignIn'"
			></Footer>
		</div>
	</div>
</template>

<script setup>
import Footer from '@/components/common/TheFooter.vue';
</script>

<style lang="scss" scoped>
.app-background {
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
}

.app-container {
	width: 375px;
	height: 812px;
	overflow: auto;
}
</style>
