<template>
	<div>
		<div class="bg-white text-baseB header-container">주문내역</div>
		<div class="h-[48px]"></div>
		<div class="mainpage-bg">
			<div class="grid-gap">
				<div v-for="order in orders" :key="order.id" class="order-list-card">
					<div class="flex justify-between">
						<div>
							<p class="text-lg">{{ order.id.slice(0, 13) }}</p>
							<p class="text-sm pb-2">{{ formatDate(order.createdAt) }}</p>
							<p class="text-base pb-1">
								{{ getOrderStatusMessage(order.status) }}
							</p>
							<p class="text-base">{{ formatNumber(order.totalPrice) }}원</p>
						</div>
						<div>
							<div class="flex justify-end pt-[1px] pb-[13px]">
								<button
									class="flex items-center text-sm"
									@click="router.push('/receipt')"
								>
									더보기

									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="24"
										height="24"
										viewBox="0 0 24 24"
										fill="none"
									>
										<path
											d="M12.6 12L8.69999 8.10005C8.51665 7.91672 8.42499 7.68338 8.42499 7.40005C8.42499 7.11672 8.51665 6.88338 8.69999 6.70005C8.88332 6.51672 9.11665 6.42505 9.39999 6.42505C9.68332 6.42505 9.91665 6.51672 10.1 6.70005L14.7 11.3C14.8 11.4 14.8708 11.5084 14.9125 11.625C14.9542 11.7417 14.975 11.8667 14.975 12C14.975 12.1334 14.9542 12.2584 14.9125 12.375C14.8708 12.4917 14.8 12.6 14.7 12.7L10.1 17.3C9.91665 17.4834 9.68332 17.575 9.39999 17.575C9.11665 17.575 8.88332 17.4834 8.69999 17.3C8.51665 17.1167 8.42499 16.8834 8.42499 16.6C8.42499 16.3167 8.51665 16.0834 8.69999 15.9L12.6 12Z"
											fill="#1D1D1D"
										/>
									</svg>
								</button>
							</div>
							<div class="bg-pointGreen w-[80px] h-[80px]">이미지</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
<script setup>
import { useRouter } from 'vue-router';
import http from '@/api/http.js';
import { onMounted, ref } from 'vue';

const router = useRouter();

// 주문 목록을 저장
const orders = ref([]);

const fetchOrders = async () => {
	try {
		const response = await http.get('/api/order');
		if (response.data.success) {
			orders.value = response.data.data;
		} else {
			console.error(
				'주문 목록을 가져오는 데 실패했습니다:',
				response.data.message,
			);
		}
	} catch (error) {
		console.error('API 요청 중 오류 발생:', error);
	}
};

// 날짜 포맷
const formatDate = dateString => {
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

// 주문 상태 메시지 반환 함수
const getOrderStatusMessage = status => {
	if (status === 'PENDING') {
		return '음식을 기다리는 중';
	} else if (status === 'COMPLETED') {
		return '픽업완료';
	}
	return '';
};

// 숫자 포맷 (천단위 , 삽입)
const formatNumber = number => {
	return new Intl.NumberFormat().format(number);
};

// 컴포넌트가 마운트되면 주문 목록을 가져옴
onMounted(() => {
	fetchOrders();
});
</script>
<style lang="scss" scoped>
.header-container {
	height: 48px;
	width: 375px;
	padding: 12px 16px;
	justify-content: space-between;
	text-align: center;
	top: 0;
	background-color: white;
	position: absolute;
	z-index: 10;
}
.mainpage-bg {
	width: 375px;
	min-height: 716px;
	background-image: url('/mainPage/mainPageBg.png');
	color: var(--Text, #1d1d1d);
	background-attachment: fixed; //배경고정 스크롤
	background-repeat: no-repeat;
	background-position: center;
	padding-bottom: 48px;
}
.grid-gap {
	display: grid;
	gap: 16px;
	padding: 16px;
}
.order-list-card {
	width: 342px;
	height: 148px;
	border-radius: 10px;
	border: 1px solid var(--Border_, #c6c6c6);
	margin: 0 auto;
	padding: 16px;
}
</style>
