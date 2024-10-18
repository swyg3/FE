<template>
	<div
		:class="[
			$route.name === 'SignIn' ? 'bg-hoverWhite' : 'bg-primary',
			$route.name !== 'Landing' ? 'app-background' : '',
		]"
	>
		<div :class="{ 'app-container': $route.name !== 'Landing' }">
			<router-view
				:class="
					$route.name !== 'Landing' &&
					$route.name !== 'SignIn' &&
					$route.name !== 'Detail' &&
					$route.name !== 'OrderDetails' &&
					$route.name !== 'Receipt' &&
					$route.name !== 'Notification' &&
					$route.name !== 'AddressBook'
						? 'router-view-content'
						: 'router-view-content2'
				"
			></router-view>

			<Footer
				class="footer"
				v-if="
					$route.name !== 'Landing' &&
					$route.name !== 'SignIn' &&
					$route.name !== 'Details' &&
					$route.name !== 'OrderDetails' &&
					$route.name !== 'Receipt' &&
					$route.name !== 'Notification' &&
					$route.name !== 'AddressBook' 
				"
			></Footer>
			<BottomSheet
				:visible="store.state.isVisible"
				:type="store.state.popupType"
			></BottomSheet>
		</div>
		<Spinner v-if="isLoading"></Spinner>
	</div>
</template>

<script setup>
import Footer from '@/components/common/TheFooter.vue';
import { computed } from 'vue';
import { useStore } from 'vuex';

const store = useStore();

const isLoading = computed(() => store.state.isLoading);
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

.router-view-content2 {
	height: calc(100%);
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

.spinner {
	position: fixed; /* 또는 부모 요소에 상대적으로 위치하게 하려면 'absolute' 사용 */
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: rgba(255, 255, 255, 0.5); /* 반투명 배경 */
	z-index: 1000; /* 다른 콘텐츠 위에 보이도록 함 */
}
</style>
