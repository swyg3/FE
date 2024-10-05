<template>
	<div v-if="isModalOpen" class="modal-overlay" @click.self="closeModal">
		<div class="modal">
			<p class="text-center text-sm py-[17px]">정렬 기준</p>
			<ul>
				<!-- <li @click="setSort('distanceDiscountScore')">문코 추천 순</li>
				<li @click="setSort('distance')">가까운 순</li>
				<li @click="setSort('discountRate')">할인율 높은 순</li> -->
				<li
					v-for="option in sortOptions"
					:key="option.value"
					@click="setSort(option)"
					:class="{ active: selectedSort === option.value }"
				>
					{{ option.label }}
				</li>
			</ul>
			<div class="modal-btn">
				<button @click="closeModal" class="btn">닫기</button>
			</div>
		</div>
	</div>
</template>
<script>
export default {
	data() {
		return {
			isModalOpen: false,
			sortOptions: [
				{ label: '문코 추천 순', value: 'distanceDiscountScore' },
				{ label: '가까운 순', value: 'distance' },
				{ label: '할인율 높은 순', value: 'discountRate' },
			],
			selectedSort: 'distanceDiscountScore', // 기본 선택된 정렬 기준
		};
	},
	methods: {
		openModal() {
			this.isModalOpen = true;
			this.selectedSort = this.sortOptions.find(
				option => option.label === this.$parent.currentSort,
			).value; // 부모에서 현재 정렬 기준을 가져와서 업데이트
		},
		closeModal() {
			this.isModalOpen = false;
		},
		setSort(option) {
			this.selectedSort = option.value; // 선택된 정렬 기준 업데이트
			this.$emit('changeSort', option); // 정렬 기준을 부모 컴포넌트에 전달
			this.closeModal(); // 정렬 기준을 선택하면 모달을 닫음
			console.log(option.value);
		},
	},
};
</script>
<style lang="scss" scoped>
.modal-overlay {
	position: fixed;
	left: 0;
	top: 0;
	width: 100%;
	height: 100%;
	background-color: rgba(0, 0, 0, 0.5); /* 반투명 검정색 배경 */
	display: flex;
	justify-content: center; /* 수평 중앙 정렬 */
	align-items: flex-end; /* 하단 정렬 */
	z-index: 1000; /* 다른 요소 위에 위치 */
	color: var(--Text, #1d1d1d);
}
.modal {
	position: fixed;
	bottom: 0;
	left: 0;
	width: 100%;
	z-index: 100;
	background-color: white;
	border-radius: 26px 26px 0px 0px;
}
li {
	padding-left: 24px;
	padding-top: 16px;
	padding-bottom: 16px;
	font-size: 16px;
	font-weight: 500;
	line-height: 24px;
}
li.active {
	color: #1cb08c;
	font-weight: 700;
}
.modal-btn {
	padding-top: 42px;
	padding-bottom: 32px;
}
.btn {
	width: 342px;
	height: 48px;
	text-align: center;
	margin: 0 auto;
}
</style>
