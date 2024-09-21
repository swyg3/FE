<template>
	<div
		:class="[
			$route.name === 'SignIn' ? 'bg-hoverWhite' : 'bg-primary',
			$route.name !== 'Randing' ? 'app-background' : '',
		]"
	>
		<div :class="{ 'app-container': $route.name !== 'Randing' }">
			<router-view></router-view>
		</div>
	</div>
</template>

<script setup></script>

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
}
</style>
