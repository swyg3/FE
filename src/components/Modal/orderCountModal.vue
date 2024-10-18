<template>
	<div v-if="isModalOpen" class="modal-overlay" @click.self="closeModal">
		<div class="modal">
			<div class="count-box">
				<p class="pb-3 baseB">수량</p>
				<div class="flex justify-between">
					<div class="quantity-selector">
						<button @click="decreaseQuantity">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="24"
								height="24"
								viewBox="0 0 24 24"
								fill="none"
								class="quantity-btn"
							>
								<path
									d="M6 13C5.71667 13 5.47917 12.9042 5.2875 12.7125C5.09583 12.5208 5 12.2833 5 12C5 11.7167 5.09583 11.4792 5.2875 11.2875C5.47917 11.0958 5.71667 11 6 11H18C18.2833 11 18.5208 11.0958 18.7125 11.2875C18.9042 11.4792 19 11.7167 19 12C19 12.2833 18.9042 12.5208 18.7125 12.7125C18.5208 12.9042 18.2833 13 18 13H6Z"
									fill="#1D1D1D"
								/>
							</svg>
						</button>
						<span class="quantity">{{ formatNumber(quantity) }}</span>
						<button @click="increaseQuantity(product)">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="24"
								height="24"
								viewBox="0 0 24 24"
								fill="none"
								class="quantity-btn"
							>
								<path
									d="M11 13H6C5.71667 13 5.47917 12.9042 5.2875 12.7125C5.09583 12.5208 5 12.2833 5 12C5 11.7167 5.09583 11.4792 5.2875 11.2875C5.47917 11.0958 5.71667 11 6 11H11V6C11 5.71667 11.0958 5.47917 11.2875 5.2875C11.4792 5.09583 11.7167 5 12 5C12.2833 5 12.5208 5.09583 12.7125 5.2875C12.9042 5.47917 13 5.71667 13 6V11H18C18.2833 11 18.5208 11.0958 18.7125 11.2875C18.9042 11.4792 19 11.7167 19 12C19 12.2833 18.9042 12.5208 18.7125 12.7125C18.5208 12.9042 18.2833 13 18 13H13V18C13 18.2833 12.9042 18.5208 12.7125 18.7125C12.5208 18.9042 12.2833 19 12 19C11.7167 19 11.4792 18.9042 11.2875 18.7125C11.0958 18.5208 11 18.2833 11 18V13Z"
									fill="#1D1D1D"
								/>
							</svg>
						</button>
					</div>
					<p>{{ formatNumber(product.discountedPrice) }}원</p>
				</div>
			</div>
			<div class="pt-12 pb-4 flex justify-between text-lgB">
				<p>합계</p>
				<p>
					{{ formatNumber(product.discountedPrice * quantity)
					}}<span class="text-base">원</span>
				</p>
			</div>
			<p class="text-sm text-center pb-2 text-bodyBlack">
				환경을 위해 용기와 장바구니를<br />
				챙겨 가게에 방문하시는 건 어떠실까요?
			</p>
			<button @click="goToOrderDetails" class="order-btn">주문하기</button>
		</div>
	</div>
</template>
<script setup>
import { computed, defineEmits, ref } from 'vue';
import { useRouter } from 'vue-router';
import { useStore } from 'vuex';

// DetailsView에서 product를 props로 받음
const props = defineProps({
	product: {
		type: Object,
		required: true,
	},
});
const isModalOpen = ref(true);

// 부모에게 닫기 이벤트를 전달하는 emit 설정
const emit = defineEmits(['close']);
// 라우터 사용
const router = useRouter();
// store
// const store = useStore();
// const product = computed(() => store.state.product);

// 초기 수량
const quantity = ref(1);

// 부모에게 'close' 이벤트 전달 함수
const closeModal = () => {
	emit('close');
};

// 수량 관리
const decreaseQuantity = () => {
	if (quantity.value > 1) {
		quantity.value--;
	}
};
const increaseQuantity = product => {
	if (quantity.value < product.availableStock) {
		quantity.value++;
	}
};

// 주문 상세 페이지로 이동
const goToOrderDetails = () => {
	// 부모로부터 받은 product 데이터를 이용해 라우팅, 파라미터로 quantity 값 전달
	// router.push(
	// 	`/orderdetails/${product.value.name}/${product.value.productId}/${quantity.value}`,
	// );
	// closeModal(); // 주문 후 모달 닫기
	router.push(
		`/orderdetails/${props.product.name}/${props.product.productId}/${quantity.value}`,
	);
	closeModal(); // 모달 닫기
};

// 숫자 포맷 (천단위 , 삽입)
const formatNumber = number => {
	return new Intl.NumberFormat().format(number);
};
</script>
<style lang="scss" scoped>
.modal-overlay {
	display: absolute;
	left: 0;
	top: 0;
	width: 375px;
	height: 100%;
	background-color: rgba(0, 0, 0, 0.5); /* 반투명 검정색 배경 */
	display: flex;
	justify-content: center; /* 수평 중앙 정렬 */
	align-items: flex-end; /* 하단 정렬 */
	z-index: 3000; /* 다른 요소 위에 위치 */
	color: var(--Text, #1d1d1d);
}
.modal {
	width: 100%;
	height: 346px;
	position: absolute;
	bottom: 0;
	left: 0;
	z-index: 2000;
	background-color: white;
	border-radius: 26px 26px 0px 0px;
	padding: 16px;
	color: var(--Text, #1d1d1d);
}
.count-box {
	background: var(--White_hover, #f2f2f2);
	width: 342px;
	height: 100px;
	padding: 16px;
	border-radius: 10px;
	border: 1px solid var(--disabled-border, #f2f2f2);
	font-size: 16px;
	font-weight: 700;
	line-height: 24px;
	font-family: Pretendard;
}
.quantity-selector {
	width: 88px;
	height: 32px;
	padding: 4px;
	background: var(--White, #fff);
	border-radius: 30px;
	border: 1px solid var(--disabled-border, #e4e4e4);
	display: flex;
	justify-content: space-between;
	font-size: 16px;
	font-weight: 700;
}
.quantity-btn {
	width: 24px;
	height: 24px;
}
.order-btn {
	width: 343px;
	height: 48px;
	border-radius: 10px;
	background: var(--Point, #1cb08c);
	padding: 12px 84px;
	margin: 0 auto;
	color: white;
	text-align: center;
	font-size: 16px;
	font-weight: 700;
	line-height: 24px;
	font-family: Pretendard;
}
</style>
