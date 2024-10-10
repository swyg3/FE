<template>
	<div class="receipt-bg text-black">
		<div class="receipt-paper">
			<div class="py-4 text-center">
				<p class="text-baseB">영수증</p>
				<p class="text-bodyBlack text-xs">M3023D332</p>
			</div>
			<!--픽업일시 이름 위치-->
			<div class="pb-2">
				<div class="text-flex pb-2">
					<p class="text-title">픽업일시</p>
					<p class="text-body">2024-09-18 오후 8:30</p>
				</div>
				<div class="text-flex pb-2">
					<p class="text-title">가게이름</p>
					<p class="text-body">범수의 베이글 가게</p>
				</div>
				<div class="text-flex pb-2">
					<p class="text-title">가게위치</p>
					<p class="text-body">서울시 종로구 자하문로 44 청민 11층 304</p>
				</div>
			</div>
			<div class="text-flex pb-8">
				<p class="text-baseB pr-11">메모</p>
				<div>
					<p class="text-body">개인 용기</p>
					<p class="text-body">개인 장바구니</p>
					<p class="text-body">일회용 수저</p>
				</div>
			</div>
			<!--table-->
			<div>
				<table class="w-full text-base text-bodyBlack">
					<thead>
						<tr class="table-head">
							<th scope="col" class="text-left pl-2">메뉴</th>
							<th scope="col" class="text-center">수량</th>
							<th scope="col" class="text-right">금액</th>
						</tr>
					</thead>
					<tbody class="py-1 px-2">
						<tr>
							<td class="text-left pl-2">범수의 연어 베이글</td>
							<td class="text-center">2</td>
							<td class="text-right">20,000</td>
						</tr>
						<tr>
							<th scope="row" class="text-left pl-2 pt-2">할인금액</th>
							<td></td>
							<td class="text-right">- 10,000</td>
						</tr>
					</tbody>
					<tfoot>
						<tr>
							<th scope="row" colspan="2" class="text-left pl-2 pt-2">합계</th>
							<td colspan="2" class="text-right">10,000 원</td>
						</tr>
					</tfoot>
				</table>
			</div>
			<p class="pt-4 text-sm">
				픽업시간에 꼭 가게에 방문해 현장결제 해주세요! <br />사장님이 기다리고
				있어요:-)
			</p>
		</div>
	</div>
</template>
<script setup>
import { ref } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const orderData = ref(null);

// query에서 orderData를 받아옴
if (route.query.orderData) {
	orderData.value = JSON.parse(route.query.orderData);
}

// orderData가 정상적으로 받아졌는지 확인
console.log(orderData.value);
</script>
<style lang="scss" scoped>
.receipt-bg {
	width: 375px;
	background-image: url('/category/categoryBg.png');
	color: var(--Text, #1d1d1d);
	background-attachment: fixed;
	background-repeat: no-repeat;
	background-position: center;
	padding-top: 64px;
}
.receipt-paper {
	width: 326px;
	height: 596px;
	border: 1px solid var(--Primary, #031f34);
	margin: 0 auto;
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
.table-head {
}
</style>
