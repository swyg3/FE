<template>
	<div class="bg-white text-black pb-8">
		<TheHeader></TheHeader>
		<!--상품정보-->
		<div>
			<p class="text-baseB px-4 pt-4 pb-2">주문 상품</p>
			<div class="flex pl-4">
				<img scr="/randingPage/card01.jpg" alt="FoodImg" class="order-img" />
				<div class="pt-2 pl-4 pb-[22]">
					<p class="text-baseB pb-0.5">범수의 연어 베이글</p>
					<P class="text-base">2개</P>
				</div>
			</div>
			<!--결제금액-->
			<div class="pay-box text-base">
				<div class="flex justify-between pb-2">
					<p>상품가</p>
					<p>20,000원</p>
				</div>
				<div class="flex justify-between">
					<p>상품 할인</p>
					<p>- 10,000원</p>
				</div>
				<hr class="w-[310px] bg-disabledGray my-3" />
				<div class="flex justify-between text-baseB">
					<p>결제금액</p>
					<p>10,000원</p>
				</div>
			</div>
		</div>
		<hr class="w-full bg-disabledGray" />
		<!--환경 지키기-->
		<div class="pt-4 pb-6 pl-4">
			<p class="text-baseB pb-2">환경 지키기</p>
			<div class="text-base text-bodyBlack">
				<label for="check1" class="flex pb-2">
					<input type="checkbox" id="check1" class="checkbox" />
					<p class="pl-2 text-base">개인 용기를 가져갈래요</p>
				</label>
				<label for="check1" class="flex pb-2">
					<input type="checkbox" id="check1" class="checkbox" />
					<p class="pl-2 text-base">개인 용기를 가져갈래요</p>
				</label>
				<label for="check1" class="flex">
					<input type="checkbox" id="check1" class="checkbox" />
					<p class="pl-2 text-base">개인 용기를 가져갈래요</p>
				</label>
			</div>
		</div>
		<hr class="w-full bg-disabledGray" />
		<!--픽업시간-->
		<div class="pt-4 pb-6 pl-4">
			<p class="text-baseB pb-2">픽업시간</p>
			<div class="text-baseB time-box">오후 6:00</div>
		</div>
		<hr class="w-full bg-disabledGray" />
		<!--결제-->
		<div class="pt-4 pb-6 pl-4">
			<p class="text-baseB pb-2">결제</p>
			<p class="text-base text-bodyBlack pb-2">
				픽업시간에 꼭 가게에 방문해 현장결제 해주세요!<br />
				사장님이 기다리고 있어요 :-)
			</p>
			<div>
				<label for="radio1" class="flex">
					<input type="radio" id="radio1" />
					<p class="pl-2 text-base text-disabledTextGray">현장결제</p>
				</label>
			</div>
		</div>
		<button @click="$router.push('/orderDetails')" class="order-btn">주문하기</button>
	</div>
</template>

<script setup>
import TheHeader from '@/components/common/TheHeader.vue';
</script>

<style lang="scss" scoped>
.order-img {
	width: 80px;
	height: 80px;
	border-radius: 6px;
	border: 1px solid var(--Border_, #C6C6C6);
	object-fit: cover;
}
.pay-box {
	width: 342px;
	height: 137px;
	border-radius: 10px;
	border: 1px solid var(--Border_, #C6C6C6);
	background: var(--White, #FFF);
	padding: 16px;
	margin: 16px 17px 24px 16px;
}
input {
	width: 20px;
	height: 20px;
	accent-color: #1CB08C;
	color: white;
}
.time-box {
	width: 80px;
	height: 30px;
	padding: 3px 6px;
	border-radius: 6px;
	border: 1px solid var(--Primary, #031F34);
	background: var(--Point, #1CB08C);
	align-items: center;
	display: flex;
	color: white;
}
.order-btn {
    width: 342px;
    height: 48px;
    border-radius: 10px;
    background: var(--Point, #1CB08C);
    padding: 12px 84px;
    margin: 0 auto;
    color: white;
    text-align: center;
    display: block;
}
</style>
