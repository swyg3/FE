<template>
	<div class="min-h-[812px]">
		<TheHeader text="주문하기" :showSearchIcon="false"></TheHeader>
		<div class="bg-white text-black pb-[80px]">
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
				<!--checkbox screenreader대비(role="checkbox")-->
				<div class="text-base text-bodyBlack">
					<!--checkbox1-->
					<label
						for="check1"
						class="flex pb-2"
						@click="checkbox(0)"
						role="checkbox"
					>
						<svg
							v-if="checkList[0]"
							xmlns="http://www.w3.org/2000/svg"
							class="checkbox-size"
							viewBox="0 0 24 24"
							fill="none"
						>
							<path
								d="M10.6 13.4L8.45 11.25C8.26667 11.0667 8.03333 10.975 7.75 10.975C7.46667 10.975 7.23333 11.0667 7.05 11.25C6.86667 11.4333 6.775 11.6667 6.775 11.95C6.775 12.2333 6.86667 12.4667 7.05 12.65L9.9 15.5C10.1 15.7 10.3333 15.8 10.6 15.8C10.8667 15.8 11.1 15.7 11.3 15.5L16.95 9.85C17.1333 9.66667 17.225 9.43333 17.225 9.15C17.225 8.86667 17.1333 8.63333 16.95 8.45C16.7667 8.26667 16.5333 8.175 16.25 8.175C15.9667 8.175 15.7333 8.26667 15.55 8.45L10.6 13.4ZM5 21C4.45 21 3.97917 20.8042 3.5875 20.4125C3.19583 20.0208 3 19.55 3 19V5C3 4.45 3.19583 3.97917 3.5875 3.5875C3.97917 3.19583 4.45 3 5 3H19C19.55 3 20.0208 3.19583 20.4125 3.5875C20.8042 3.97917 21 4.45 21 5V19C21 19.55 20.8042 20.0208 20.4125 20.4125C20.0208 20.8042 19.55 21 19 21H5Z"
								fill="#1CB08C"
							/>
						</svg>
						<svg
							v-else
							xmlns="http://www.w3.org/2000/svg"
							class="checkbox-size"
							viewBox="0 0 24 24"
							fill="none"
						>
							<path
								d="M5 21C4.45 21 3.97917 20.8042 3.5875 20.4125C3.19583 20.0208 3 19.55 3 19V5C3 4.45 3.19583 3.97917 3.5875 3.5875C3.97917 3.19583 4.45 3 5 3H19C19.55 3 20.0208 3.19583 20.4125 3.5875C20.8042 3.97917 21 4.45 21 5V19C21 19.55 20.8042 20.0208 20.4125 20.4125C20.0208 20.8042 19.55 21 19 21H5ZM5 19H19V5H5V19Z"
								fill="#1CB08C"
							/>
						</svg>
						<p class="pl-2 text-base">개인 용기를 가져갈래요</p>
					</label>
					<!--checkbox2-->
					<label
						for="check2"
						class="flex pb-2"
						@click="checkbox(1)"
						role="checkbox"
					>
						<svg
							v-if="checkList[1]"
							xmlns="http://www.w3.org/2000/svg"
							class="checkbox-size"
							viewBox="0 0 24 24"
							fill="none"
						>
							<path
								d="M10.6 13.4L8.45 11.25C8.26667 11.0667 8.03333 10.975 7.75 10.975C7.46667 10.975 7.23333 11.0667 7.05 11.25C6.86667 11.4333 6.775 11.6667 6.775 11.95C6.775 12.2333 6.86667 12.4667 7.05 12.65L9.9 15.5C10.1 15.7 10.3333 15.8 10.6 15.8C10.8667 15.8 11.1 15.7 11.3 15.5L16.95 9.85C17.1333 9.66667 17.225 9.43333 17.225 9.15C17.225 8.86667 17.1333 8.63333 16.95 8.45C16.7667 8.26667 16.5333 8.175 16.25 8.175C15.9667 8.175 15.7333 8.26667 15.55 8.45L10.6 13.4ZM5 21C4.45 21 3.97917 20.8042 3.5875 20.4125C3.19583 20.0208 3 19.55 3 19V5C3 4.45 3.19583 3.97917 3.5875 3.5875C3.97917 3.19583 4.45 3 5 3H19C19.55 3 20.0208 3.19583 20.4125 3.5875C20.8042 3.97917 21 4.45 21 5V19C21 19.55 20.8042 20.0208 20.4125 20.4125C20.0208 20.8042 19.55 21 19 21H5Z"
								fill="#1CB08C"
							/>
						</svg>
						<svg
							v-else
							xmlns="http://www.w3.org/2000/svg"
							class="checkbox-size"
							viewBox="0 0 24 24"
							fill="none"
						>
							<path
								d="M5 21C4.45 21 3.97917 20.8042 3.5875 20.4125C3.19583 20.0208 3 19.55 3 19V5C3 4.45 3.19583 3.97917 3.5875 3.5875C3.97917 3.19583 4.45 3 5 3H19C19.55 3 20.0208 3.19583 20.4125 3.5875C20.8042 3.97917 21 4.45 21 5V19C21 19.55 20.8042 20.0208 20.4125 20.4125C20.0208 20.8042 19.55 21 19 21H5ZM5 19H19V5H5V19Z"
								fill="#1CB08C"
							/>
						</svg>
						<p class="pl-2 text-base">개인 장바구니를 가져갈래요</p>
					</label>
					<!--checkbox3-->
					<label for="check3" class="flex" @click="checkbox(2)" role="checkbox">
						<svg
							v-if="checkList[2]"
							xmlns="http://www.w3.org/2000/svg"
							class="checkbox-size"
							viewBox="0 0 24 24"
							fill="none"
						>
							<path
								d="M10.6 13.4L8.45 11.25C8.26667 11.0667 8.03333 10.975 7.75 10.975C7.46667 10.975 7.23333 11.0667 7.05 11.25C6.86667 11.4333 6.775 11.6667 6.775 11.95C6.775 12.2333 6.86667 12.4667 7.05 12.65L9.9 15.5C10.1 15.7 10.3333 15.8 10.6 15.8C10.8667 15.8 11.1 15.7 11.3 15.5L16.95 9.85C17.1333 9.66667 17.225 9.43333 17.225 9.15C17.225 8.86667 17.1333 8.63333 16.95 8.45C16.7667 8.26667 16.5333 8.175 16.25 8.175C15.9667 8.175 15.7333 8.26667 15.55 8.45L10.6 13.4ZM5 21C4.45 21 3.97917 20.8042 3.5875 20.4125C3.19583 20.0208 3 19.55 3 19V5C3 4.45 3.19583 3.97917 3.5875 3.5875C3.97917 3.19583 4.45 3 5 3H19C19.55 3 20.0208 3.19583 20.4125 3.5875C20.8042 3.97917 21 4.45 21 5V19C21 19.55 20.8042 20.0208 20.4125 20.4125C20.0208 20.8042 19.55 21 19 21H5Z"
								fill="#1CB08C"
							/>
						</svg>
						<svg
							v-else
							xmlns="http://www.w3.org/2000/svg"
							class="checkbox-size"
							viewBox="0 0 24 24"
							fill="none"
						>
							<path
								d="M5 21C4.45 21 3.97917 20.8042 3.5875 20.4125C3.19583 20.0208 3 19.55 3 19V5C3 4.45 3.19583 3.97917 3.5875 3.5875C3.97917 3.19583 4.45 3 5 3H19C19.55 3 20.0208 3.19583 20.4125 3.5875C20.8042 3.97917 21 4.45 21 5V19C21 19.55 20.8042 20.0208 20.4125 20.4125C20.0208 20.8042 19.55 21 19 21H5ZM5 19H19V5H5V19Z"
								fill="#1CB08C"
							/>
						</svg>
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
			<div class="pt-4 pb-6">
				<p class="text-baseB pb-2 pl-4">픽업시간</p>
				<div class="flex category-scroll noScrollBar px-4">
					<PickUpTimeButton
						:currentTime="currentTime"
						@updatePickUpTime="setPickUpTime"
					></PickUpTimeButton>
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
				<button @click="createOrder" class="order-btn">
					{{ formatNumber(product.discountedPrice * quantity) }}원 주문하기
				</button>
			</div>
		</div>
	</div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import PickUpTimeButton from '@/components/common/PickUpTimeButton.vue';
import dayjs from 'dayjs';
import { useStore } from 'vuex';
import {
	getProductDetailAPi,
	orderProductApi,
	goToReceiptUrl,
} from '@/api/product.js';

const route = useRoute();
const router = useRouter();
const store = useStore();
// 상품 정보
const product = ref({});
// 수량 정보
const quantity = ref(1);
// 환경 체크 박스 메모
const checkList = ref([false, false, false]);
// 픽업 시간
const selectedPickUpTime = ref(null);
const order = ref([]);
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
onMounted(() => {
	const productId = route.params.id;
	fetchProductDetail(productId);
});
// 상품 정보 가져오기 함수
const fetchProductDetail = async () => {
	try {
		const res = await getProductDetailAPi(props.id);
		product.value = res.data.data;
		// route.params에서 quantity 파라미터를 받아옴
		quantity.value = route.params.quantity
			? parseInt(route.params.quantity)
			: 1;
	} catch (err) {
		console.error(err);
	} finally {
		store.commit('SET_IS_LOADING', false);
	}
};
// 할인된 금액 계산
const discount = computed(() => {
	return product.value.originalPrice - product.value.discountedPrice;
});

// 이미지 경로 변환 함수
const fullImageUrl = imagePath => {
	const baseUrl = import.meta.env.VITE_APP_API_URL;
	return `${baseUrl}${imagePath}`;
};

// 숫자 포맷 (천단위 , 삽입)
const formatNumber = number => {
	return new Intl.NumberFormat().format(number);
};
const checkbox = item => {
	checkList.value[item] = !checkList.value[item];
};
// 현재 시간
const currentTime = ref(dayjs().format('YYYY-MM-DD HH:mm'));
console.log('현재시간', currentTime);
// 선택된 픽업 시간을 ISO 형식으로 변환하여 저장
const setPickUpTime = time => {
	selectedPickUpTime.value = dayjs(time).format('YYYY-MM-DD HH:mm:ss');
	console.log('픽업시간', selectedPickUpTime.value);
};
// 주문 생성 함수
const createOrder = async () => {
	try {
		// 주문 데이터 구조 생성
		const orderData = {
			totalAmount: quantity.value,
			totalPrice: product.value.discountedPrice * quantity.value,
			pickupTime: selectedPickUpTime.value,
			paymentMethod: 'CASH',
			status: 'PENDING',
			items: [
				{
					productId: product.value.productId,
					quantity: quantity.value,
					price: product.value.discountedPrice,
				},
			],
			memo: checkList.value,
		};
		const response = await orderProductApi(orderData);
		if (response.status === 201) {
			order.value = response.data.data.data.orderId;
			router.push(goToReceiptUrl(order.value));
		} else {
			alert('주문 중 오류가 발생했습니다. 다시 시도해주세요.');
			console.log('주문실패', orderData);
		}
	} catch (error) {
		console.error('Error', error);
		alert('주문 중 오류가 발생했습니다. 다시 시도해주세요.');
	} finally {
		store.commit('SET_IS_LOADING', false);
	}
};
</script>

<style lang="scss" scoped>
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
.checkbox-size {
	width: 24px;
	height: 24px;
}
.category-scroll {
	min-width: 375px;
	display: flex;
	white-space: nowrap;
	overflow-x: auto;
	overflow-y: hidden;
}
.noScrollBar {
	//scroll bar 가리기
	/* IE and Edge */
	-ms-overflow-style: none;
	/* Firefox */
	scrollbar-width: none;
}
/* scroll bar 가리기 Chrome, Safari,Opera */
.noScrollBar::-webkit-scrollbar {
	display: none !important;
}
</style>
