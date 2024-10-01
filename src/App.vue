<template>
	<div
		:class="[
			$route.name === 'SignIn' ? 'bg-hoverWhite' : 'bg-primary',
			$route.name !== 'Randing' ? 'app-background' : '',
		]"
	>
		<div :class="{ 'app-container': $route.name !== 'Randing' }">
			<router-view
				:class="{ 'router-view-content': $route.name !== 'Randing' }"
			></router-view>
			<Footer
				class="footer"
				v-if="
					$route.name !== 'Randing' &&
					$route.name !== 'SignIn' &&
					$route.name !== 'detail' &&
					$route.name !== 'orderDetails' &&
					$route.name !== 'reciept'
				"
			></Footer>
			<BottomSheet
				:visible="store.state.isVisible"
				:type="store.state.popupType"
			></BottomSheet>
		</div>
	</div>
</template>

<script setup>
import Footer from '@/components/common/TheFooter.vue';
import { ref } from 'vue';
import { useStore } from 'vuex';

const store = useStore();
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
	position: relative;
}

.router-view-content {
	height: calc(100% - 48px);
	overflow-y: scroll;
	overflow-x: hidden;

	&::-webkit-scrollbar {
		display: none;
	}

	-ms-overflow-style: none;

	scrollbar-width: none;
}

.footer {
	position: absolute;
}
</style>
