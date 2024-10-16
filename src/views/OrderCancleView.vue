<template>
	<div>
		<div class="mainpage-bg">
			<p class="text-center text-lgB py-[289px]">주문이 취소되었습니다</p>

			<button @click="router.push('/orderList')" class="order-btn">
				주문내역으로 가기
			</button>
			<router-link
				to="/explore"
				class="pt-4 text-center text-base text-[#1CB08C] block"
			>
				탐색 페이지로 돌아가기
			</router-link>
		</div>
	</div>
</template>
<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();
</script>
<style lang="scss" scoped>
.mainpage-bg {
	width: 375px;
	height: 764px;
	background-image: url('/category/categoryBg.png');
	color: var(--Text, #1d1d1d);
	background-attachment: fixed;
	background-repeat: no-repeat;
	background-position: center;
	padding: 32px 0;
	background-color: white;
}
.order-btn {
	width: 342px;
	height: 48px;
	border-radius: 10px;
	background: var(--Point, #1cb08c);
	padding: 12px 84px;
	margin: 0 auto;
	color: white;
	text-align: center;
	display: block;
	font-size: 16px;
	font-weight: 700;
	line-height: 24px;
}
</style>
