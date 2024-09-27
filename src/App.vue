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
				v-if="$route.name !== 'Randing' && $route.name !== 'SignIn'"
			></Footer>

			<Sheet v-model:visible="a" class="bottom-sheet">
				<div class="p-4 bg-white">
					<h3>Bottom Sheet</h3>
					<p>이건 Bottom Sheet 안에 있는 내용입니다!</p>
					<button @click="closeSheet" class="btn-secondary mt-4">닫기</button>
				</div>
			</Sheet>
		</div>
	</div>
</template>

<script setup>
import Footer from '@/components/common/TheFooter.vue';
import { Sheet } from 'bottom-sheet-vue3';
import { ref } from 'vue';

const a = ref(true);
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
	height: calc(100% - 48px); /* 푸터 높이를 제외한 영역 */
	overflow-y: scroll;
	overflow-x: hidden;

	&::-webkit-scrollbar {
		display: none;
	}

	-ms-overflow-style: none;

	scrollbar-width: none;
}

.footer {
	position: absolute; /* 절대 위치 지정 */
}

.bottom-sheet {
	position: absolute; /* app-container 내에서 하단에 고정 */
	bottom: 0;
	left: 0;
	width: 100%;
	background-color: white;
	border-radius: 10px 10px 0 0;
	box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.2);
	z-index: 1000;
	padding: 16px;
	transition: transform 0.3s ease-out;
}
</style>
