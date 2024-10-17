<template>
	<div v-if="isModalOpen" class="modal-overlay" @click.self="closeModal">
		<div class="modal-receipt-paper">
			<div class="py-4 text-center">
				<p class="text-baseB text-black">영수증</p>
				<p class="text-bodyBlack text-xs">
					{{ order.id }}
				</p>
			</div>
			<!--픽업일시 이름 위치-->
			<div class="pb-2">
				<div class="text-flex pb-2">
					<p class="text-title">픽업일시</p>
					<p class="text-body">{{ formatDate(order.pickupTime) }}</p>
				</div>
				<div class="text-flex pb-2">
					<p class="text-title">가게이름</p>
					<p class="text-body">{{ product.storeName }}</p>
				</div>
				<div class="text-flex pb-2">
					<p class="text-title">가게위치</p>
					<p class="text-body">{{ product.storeAddress }}</p>
				</div>
			</div>
			<div class="text-flex pb-8">
				<p class="text-baseB pr-11">메모</p>
				<div>
					<p class="text-body text-base">
						개인 용기 {{ order.memo && order.memo[0] ? 'O' : 'X' }}
					</p>
					<p class="text-body text-base">
						개인 장바구니 {{ order.memo && order.memo[1] ? 'O' : 'X' }}
					</p>
					<p class="text-body text-base">
						일회용 수저 {{ order.memo && order.memo[2] ? 'O' : 'X' }}
					</p>
				</div>
			</div>
			<!--table-->
			<div>
				<table class="w-full text-base text-bodyBlack">
					<thead class="table-border pb-1">
						<tr>
							<th scope="col" class="text-left pl-2 pt-1 pb-1">메뉴</th>
							<th scope="col" class="text-center pt-1 pb-1">수량</th>
							<th scope="col" class="text-right pr-2 pl-2 pt-1 pb-1">금액</th>
						</tr>
					</thead>
					<tbody>
						<tr class="table-border">
							<td class="text-left pl-2 pt-2">{{ product.name }}</td>
							<td class="text-center pt-2">{{ order.totalAmount }}</td>
							<td class="text-right pr-2 pt-2">
								{{ formatNumber(product.originalPrice * order.totalAmount) }}
							</td>
						</tr>
						<tr class="table-head">
							<th scope="row" class="text-left pl-2 pt-1 pb-2">할인금액</th>
							<td></td>
							<td class="text-right pr-2 pt-1 pb-2">
								-
								{{ formatNumber(product.discountedPrice * order.totalAmount) }}
							</td>
						</tr>
					</tbody>
					<tfoot class="table-border">
						<tr class="text-baseB text-black">
							<th scope="row" class="text-left pl-2 pt-2">합계</th>
							<td colspan="2" class="text-right pr-2 pt-2">
								{{ order.totalPrice }} 원
							</td>
						</tr>
					</tfoot>
				</table>
			</div>
			<p class="pt-4 text-sm text-bodyBlack">
				픽업시간에 꼭 가게에 방문해 현장결제 해주세요! <br />사장님이 기다리고
				있어요:-)
			</p>
		</div>
		<button @click="CancelOrder()" class="order-btn">주문취소하기</button>
	</div>
</template>
<script setup>
import { onMounted, ref } from 'vue';
import { useRouter } from 'vue-router';
import { getReceiptApi, deleteOrderApi } from '@/api/product.js';
import { useStore } from 'vuex';

const store = useStore();
const props = defineProps({
	orderId: {
		type: Text,
		required: true,
	},
});

//modal
const isModalOpen = ref(true);
// 부모에게 닫기 이벤트를 전달하는 emit 설정
const emit = defineEmits(['close']);
// 부모에게 'close' 이벤트 전달 함수
const closeModal = () => {
	emit('close');
};

const router = useRouter();
const order = ref([]);
const product = ref([]);
onMounted(() => {
	fetchOrderReceipts();
});

const fetchOrderReceipts = async () => {
	try {
		const res = await getReceiptApi(props.orderId);
		if (res.data.success) {
			order.value = res.data.orders[0];
			product.value = res.data.orderItemsInfo;
		} else {
			console.error('주문 목록을 가져오는 데 실패했습니다:', res.data.message);
		}
	} catch (err) {
		console.log('Error', err);
	} finally {
		store.commit('SET_IS_LOADING', false);
	}
};

const CancelOrder = async () => {
	try {
		const response = await deleteOrderApi(props.orderId);
		router.push('/orderCancel');
	} catch (error) {
		console.log('Error', error);
	} finally {
		store.commit('SET_IS_LOADING', false);
	}
};
// 날짜 포맷
const formatDate = dateString => {
	if (!dateString) {
		return ''; // dateString이 없으면 빈 문자열 반환
	}
	// "YYYY-MM-DD HH:MM:SS" 형식의 문자열을 Date 객체로 변환
	const [datePart, timePart] = dateString.split(' ');
	const [year, month, day] = datePart.split('-');
	const [hours, minutes] = timePart.split(':');

	// 오전/오후 구분
	const ampm = hours >= 12 ? '오후' : '오전';
	const formattedHours = hours % 12 || 12; // 0을 12로 변환
	const formattedMinutes = String(minutes).padStart(2, '0'); // 분을 2자리로 포맷

	// "YYYY-MM-DD 오후 5:12" 형식으로 반환
	return `${year}-${month}-${day} ${ampm} ${formattedHours}:${formattedMinutes}`;
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
.modal-receipt-paper {
	width: 326px;
	height: 596px;
	border: 1px solid var(--Primary, #031f34);
	margin-bottom: 108px;
	background: var(--White, #fff);
	padding: 16px;
	position: absolute;
	top: 13%;
	margin-bottom: 24px;
	z-index: 2000;
	color: var(--Text, #1d1d1d);
}
.order-btn {
	width: 342px;
	height: 48px;
	border-radius: 10px;
	background: var(--Point, #1cb08c);
	padding: 12px;
	position: absolute;
	color: white;
	text-align: center;
	display: block;
	font-size: 16px;
	font-weight: 700;
	line-height: 24px;
	margin: 32px auto;
}
.text-flex {
	display: flex;
}
.text-title {
	font-size: 16px;
	font-style: normal;
	font-weight: 700;
	line-height: 24px;
	padding-right: 16px;
	white-space: nowrap;
}
.text-body {
	font-size: 16px;
	font-style: normal;
	font-weight: 500;
	line-height: 24px;
	color: var(--Text_body, #555);
}
.table-border {
	padding-right: 8px;
	border-top: 1px solid #e4e4e4;
}
</style>
