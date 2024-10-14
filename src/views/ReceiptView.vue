<template>
	<div class="receipt-bg text-black">
		<div class="receipt-paper">
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
					<!-- <p class="text-body text-base> {{ order.memo[0] ? 'O' : 'X' }}</p>
					<p class="text-body text-base>개인 장바구니 {{ order.memo[1] ? 'O' : 'X' }}<p/>
					<p class="text-body text-base>일회용 수저 {{ order.memo[2] ? 'O' : 'X' }}</p> -->
					<!--주문쪽 확인 후 위의 코드로 변경하기 -->
					<div class="flex">
						<p class="pr-2">개인 용기</p>
						<p
							v-if="Array.isArray(order.memo) && order.memo.includes('check1')"
							class="text-body text-base"
						>
							o
						</p>
						<p v-else class="text-body text-base">x</p>
					</div>
					<div class="flex">
						<p class="pr-2">개인 장바구니</p>
						<p
							v-if="Array.isArray(order.memo) && order.memo.includes('check2')"
							class="text-body text-base"
						>
							o
						</p>
						<p v-else class="text-body text-base">x</p>
					</div>
					<div class="flex">
						<p class="pr-2">일회용 수저</p>
						<p
							v-if="Array.isArray(order.memo) && order.memo.includes('check3')"
							class="text-body text-base"
						>
							o
						</p>
						<p v-else class="text-body text-base">x</p>
					</div>
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
</template>
<script setup>
import { onMounted, ref } from 'vue';
import { useRouter } from 'vue-router';
import http from '@/api/http.js';

const props = defineProps({
	orderId: {
		type: String,
		required: true,
	},
});

const router = useRouter();
const order = ref([]);
const product = ref([]);
onMounted(() => {
	fetchOrderReceipts();
});

const fetchOrderReceipts = async () => {
	try {
		const res = await http.get(`/api/order/${props.orderId}`);
		if (res.data.success) {
			order.value = res.data.orders[0];
			product.value = res.data.orderItemsInfo;
			console.log(order.value);
		} else {
			console.error('주문 목록을 가져오는 데 실패했습니다:', res.data.message);
		}
	} catch (err) {
		console.log(err);
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
.receipt-bg {
	width: 375px;
	background-image: url('/category/categoryBg.png');
	color: var(--Text, #1d1d1d);
	background-attachment: fixed;
	background-repeat: no-repeat;
	background-position: center;
	padding: 32px 0;
}
.receipt-paper {
	width: 326px;
	height: 596px;
	border: 1px solid var(--Primary, #031f34);
	margin: 32px auto;
	background: var(--White, #fff);
	padding: 16px;
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
.table-border {
	padding-right: 8px;
	border-top: 1px solid #e4e4e4;
}
</style>
