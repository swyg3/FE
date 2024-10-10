<template>
	<div class="min-h-[812px]">
		<!--header-->
		<div class="bg-white text-base absolute header-container">
			<button onclick="history.back()" class="back-absolute-style">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="24"
					height="24"
					viewBox="0 0 24 24"
					fill="none"
				>
					<path
						d="M3.54995 12L10.9 19.35C11.15 19.6 11.2708 19.8917 11.2625 20.225C11.2541 20.5583 11.125 20.85 10.875 21.1C10.625 21.35 10.3333 21.475 9.99995 21.475C9.66662 21.475 9.37495 21.35 9.12495 21.1L1.42495 13.425C1.22495 13.225 1.07495 13 0.974951 12.75C0.874951 12.5 0.824951 12.25 0.824951 12C0.824951 11.75 0.874951 11.5 0.974951 11.25C1.07495 11 1.22495 10.775 1.42495 10.575L9.12495 2.87499C9.37495 2.62499 9.67078 2.50415 10.0125 2.51249C10.3541 2.52082 10.65 2.64999 10.9 2.89999C11.15 3.14999 11.275 3.44165 11.275 3.77499C11.275 4.10832 11.15 4.39999 10.9 4.64999L3.54995 12Z"
						fill="#1D1D1D"
					/>
				</svg>
			</button>
			<p class="mx-auto text-baseB">주문하기</p>
		</div>
		<div class="h-[48px]"></div>
		<div class="bg-white text-black pb-[80px]">
			<!--상품정보-->
			<div>
				<p class="text-baseB px-4 pt-4 pb-2">주문 상품</p>
				<div class="flex pl-4">
					<img
						:src="fullImageUrl(product.productImageUrl)"
						alt="FoodImg"
						class="order-img"
					/>
					<div class="pt-2 pl-4 pb-[22]">
						<p class="text-baseB pb-0.5">{{ product.name }}</p>
						<P class="text-base">{{ quantity }}개</P>
					</div>
				</div>
				<!--결제금액-->
				<div class="pay-box text-base">
					<div class="flex justify-between pb-2">
						<p>상품가</p>
						<p>{{ formatNumber(product.originalPrice * quantity) }}원</p>
					</div>
					<div class="flex justify-between">
						<p>상품 할인</p>
						<p>- {{ formatNumber(discount * quantity) }}원</p>
					</div>
					<hr class="w-[310px] bg-disabledGray my-3" />
					<div class="flex justify-between text-baseB">
						<p>결제금액</p>
						<p>{{ formatNumber(product.discountedPrice * quantity) }}원</p>
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
					<label for="check2" class="flex pb-2">
						<input type="checkbox" id="check2" class="checkbox" />
						<p class="pl-2 text-base">개인 장바구니를 가져갈래요</p>
					</label>
					<label for="check3" class="flex">
						<input type="checkbox" id="check3" class="checkbox" />
						<div class="w-full pr-6 flex justify-between">
							<p class="pl-2 text-base">일회용 수저는 필요 없어요</p>
							<img
								src="/mainPage/mainLeaf.png"
								class="leafShadow shadow-black"
							/>
						</div>
					</label>
				</div>
			</div>
			<hr class="w-full bg-disabledGray" />
			<!--픽업시간-->
			<div class="pt-4 pb-6 pl-4">
				<p class="text-baseB pb-2">픽업시간</p>
				<div class="flex">
					<button class="time-box">오후 1:10</button>
					<button class="time-box">오후 6:20</button>
					<button class="time-box">오후 12:30</button>
				</div>
			</div>
			<hr class="w-full bg-disabledGray" />
			<!--결제-->
			<div class="pt-4 pb-6 pl-4">
				<p class="text-baseB pb-2">결제</p>
				<p class="text-sm text-bodyBlack pb-2">
					픽업시간에 꼭 가게에 방문해 현장결제 해주세요!<br />
					사장님이 기다리고 있어요 :-)
				</p>
				<div>
					<label for="radio1" class="flex">
						<input type="radio" id="radio1" disabled="disabled" />
						<p class="pl-2 text-base text-disabledTextGray">현장결제</p>
					</label>
				</div>
			</div>
			<div class="order-btn-div">
				<button @click="$router.push('/receipt')" class="order-btn">
					{{ formatNumber(product.discountedPrice * quantity) }}원 주문하기
				</button>
			</div>
		</div>
	</div>
</template>
<script setup>
import { ref, computed, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import http from '@/api/http.js';

// props 정의
const props = defineProps({
	name: {
		type: String,
		required: true,
	},
	id: {
		type: String,
		required: true,
	},
});

// 상품 정보를 저장할 state
const product = ref({});
// 수량 정보
const quantity = ref(1);

// 라우터 사용
const route = useRoute();

// 할인된 금액 계산 (computed 사용)
const discount = computed(() => {
	return product.value.originalPrice - product.value.discountedPrice;
});

// 상품 정보 가져오기 함수
const fetchProductDetail = async () => {
	try {
		const res = await http.get(`/api/products/get/${props.id}`);
		product.value = res.data.data;
		// route.params에서 quantity 파라미터를 받아옴
		quantity.value = route.params.quantity
			? parseInt(route.params.quantity)
			: 1;
	} catch (err) {
		console.error(err);
	}
};

// 이미지 경로 변환 함수
const fullImageUrl = imagePath => {
	const baseUrl = import.meta.env.VITE_APP_API_URL;
	return `${baseUrl}${imagePath}`;
};

// 숫자 포맷 (천단위 , 삽입)
const formatNumber = number => {
	return new Intl.NumberFormat().format(number);
};

// 컴포넌트 마운트 시 상품 정보 가져오기
onMounted(() => {
	// const productId = route.params.productId;
	const productId = route.params.id; //확ㅇ닝확인확인확인 무조건.
	fetchProductDetail(productId);
});
</script>

<style lang="scss" scoped>
.header-container {
	display: flex;
	height: 48px;
	width: 375px;
	padding: 12px 16px;
	align-items: center;
	flex-shrink: 0;
	top: 0;
}
.back-absolute-style {
	position: absolute;
	left: 16px;
	top: 12px;
}
.order-img {
	width: 80px;
	height: 80px;
	border-radius: 6px;
	border: 1px solid var(--Border_, #c6c6c6);
	object-fit: cover;
}
.pay-box {
	width: 342px;
	height: 137px;
	border-radius: 10px;
	border: 1px solid var(--Border_, #c6c6c6);
	background: var(--White, #fff);
	padding: 16px;
	margin: 16px 17px 24px 16px;
}
input {
	width: 20px;
	height: 20px;
	accent-color: #1cb08c;
	color: white;
}
.leafShadow {
	width: 24px;
	height: 16px;
	filter: drop-shadow(2px 3px 3px #a0a0a0);
	margin: auto 0;
}
.time-box {
	width: 90px;
	height: 30px;
	border-radius: 6px;
	border: 1px solid var(--Primary, #031f34);
	background: var(--Point, #1cb08c);
	display: flex;
	color: white;
	justify-content: center;
	align-items: center;
	font-family: Pretendard;
	font-size: 16px;
	font-weight: 700;
	line-height: 24px;
	margin-right: 8px;
}
.order-btn-div {
	width: 343px;
	border-radius: 10px 10px 0 0;
	bottom: 0;
	left: 50%;
	transform: translate(-50%, 0);
	align-items: center;
	padding-bottom: 32px;
	background: var(--White, #fff);
	position: absolute;
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
