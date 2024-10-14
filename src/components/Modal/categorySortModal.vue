<!-- <template>
	<div v-if="isModalOpen" class="modal-overlay" @click.self="closeModal">
		<div class="modal">
			<p class="text-center text-sm py-[17px]">정렬 기준</p>
			<ul>
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
<script setup>
import { ref, defineProps } from 'vue';
import { defineExpose } from 'vue';

// Props 정의
const props = defineProps({
	currentSort: {
		type: String,
		required: true,
	},
});

const emit = defineEmits(['changSort']);

// 반응형 데이터 정의
const isModalOpen = ref(false);
const sortOptions = [
	{ label: '문코 추천 순', value: 'distanceDiscountScore' },
	{ label: '가까운 순', value: 'distance' },
	{ label: '할인율 높은 순', value: 'discountRate' },
];
const selectedSort = ref('distanceDiscountScore'); // 기본 선택된 정렬 기준

// 모달 열기 메소드
const openModal = () => {
	isModalOpen.value = true;
	const matchingOption = sortOptions.find(
		option => option.label === props.currentSort, // props로 받은 currentSort 사용
	);
	selectedSort.value = matchingOption
		? matchingOption.value
		: sortOptions[0].value; // 기본값 설정
	closeModal();
};

// 모달 닫기 메소드
const closeModal = () => {
	isModalOpen.value = false;
};

// 정렬 기준 설정 메소드
const setSort = option => {
	selectedSort.value = option.value; // 선택된 정렬 기준 업데이트
	emit('changeSort', option); // 정렬 기준을 부모 컴포넌트에 전달
	closeModal(); // 정렬 기준을 선택하면 모달을 닫음
};
defineExpose({ openModal });
</script>

<style lang="scss" scoped>
.modal-overlay {
	display: absolute;
	/* position: fixed; */
	left: 0;
	top: 0;
	width: 375px;
	height: 100%;
	background-color: rgba(0, 0, 0, 0.5); /* 반투명 검정색 배경 */
	display: flex;
	justify-content: center; /* 수평 중앙 정렬 */
	align-items: flex-end; /* 하단 정렬 */
	z-index: 2000; /* 다른 요소 위에 위치 */
	color: var(--Text, #1d1d1d);
}
.modal {
	width: 100%;
	position: absolute;
	bottom: 0;
	left: 0;
	z-index: 2000;
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
	background-color: white;
}
.btn {
	width: 100%;
	height: 48px;
	text-align: center;
	margin: 0 auto;
	background-color: white;
	border-radius: 10px;
	border: 1px solid var(--Border_, #c6c6c6);
}
</style> -->

<template>
	<div v-if="isModalOpen" class="modal-overlay" @click.self="closeModal">
		<div class="modal">
			<p class="text-center text-sm py-[17px]">정렬 기준</p>
			<ul>
				<li
					v-for="option in sortOptions"
					:key="option.value"
					@click="setSort(option)"
					class="flex justify-between px-6"
					:class="{ active: selectedSort === option.value }"
				>
					{{ option.label }}
					<div v-if="selectedSort === option.value">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="30"
							height="21"
							viewBox="0 0 30 21"
							fill="none"
						>
							<path
								d="M4.33672 12.6674C3.39831 12.6674 2.60362 12.4712 1.95266 12.0787C1.30192 11.6862 0.8099 11.1447 0.476813 10.4541C0.158939 9.74776 0 8.95499 0 8.07604C0 7.24418 0.14395 6.36501 0.4314 5.43897C0.719076 4.49716 1.14299 3.61821 1.7029 2.80189C2.27825 1.97004 2.98961 1.29499 3.8372 0.776993C4.7 0.258996 5.69904 0 6.8343 0C7.77294 0 8.55991 0.188361 9.19566 0.565086C9.84662 0.926036 10.3309 1.44403 10.6488 2.11908C10.9819 2.77835 11.1483 3.54757 11.1483 4.42652C11.1483 5.05447 11.0575 5.74506 10.8758 6.49851C10.7094 7.23618 10.4444 7.97409 10.0812 8.71177C9.73309 9.4339 9.28648 10.0932 8.74155 10.6896C8.19662 11.286 7.55338 11.7649 6.8116 12.1258C6.08503 12.4868 5.26014 12.6674 4.33672 12.6674ZM4.56377 10.7838C5.30555 10.7838 5.95651 10.5796 6.51643 10.1716C7.07657 9.76353 7.54589 9.24554 7.92416 8.61759C8.30265 7.97409 8.59033 7.30682 8.78696 6.61624C8.98381 5.90988 9.08213 5.25837 9.08213 4.66197C9.08213 4.04979 8.98381 3.53956 8.78696 3.13152C8.59033 2.72348 8.31015 2.4174 7.94686 2.21326C7.58358 1.99358 7.15218 1.88363 6.65266 1.88363C5.89589 1.88363 5.22994 2.08776 4.65459 2.49581C4.07947 2.88831 3.59516 3.3983 3.20145 4.02625C2.82318 4.6542 2.5355 5.31347 2.33865 6.00406C2.14202 6.69464 2.04348 7.33037 2.04348 7.91123C2.04348 8.52341 2.14202 9.04917 2.33865 9.48876C2.55072 9.91258 2.84588 10.2344 3.22416 10.4541C3.60265 10.6738 4.04927 10.7838 4.56377 10.7838ZM12.8642 3.43762C12.1072 3.43762 11.3806 3.31989 10.6844 3.08444C9.98807 2.83321 9.30691 2.4958 8.64097 2.07199C8.44411 1.94649 8.33807 1.78167 8.32309 1.57753C8.29266 1.37339 8.33058 1.17726 8.43662 0.988899C8.52744 0.800536 8.65595 0.667039 8.82261 0.588633C8.97382 0.494452 9.11778 0.494452 9.25401 0.588633C9.63228 0.839861 10.0335 1.05954 10.4574 1.2479C10.8811 1.43626 11.3429 1.57754 11.8424 1.67172C12.3267 1.7659 12.8489 1.81299 13.4091 1.81299C13.8328 1.81299 14.3096 1.78167 14.8395 1.71881C15.3844 1.6404 15.9217 1.52267 16.4516 1.36563C16.9813 1.19304 17.4429 0.99667 17.8366 0.776993C18.0031 0.667036 18.1545 0.690586 18.2907 0.847633C18.427 1.00468 18.4951 1.19304 18.4951 1.41272C18.5101 1.6324 18.427 1.79722 18.2453 1.90717C17.1704 2.50358 16.1866 2.91185 15.2936 3.13152C14.4156 3.33566 13.6057 3.43762 12.8642 3.43762ZM17.9733 12.6674C17.0349 12.6674 16.2402 12.4712 15.5892 12.0787C14.9383 11.6862 14.4465 11.1447 14.1134 10.4541C13.7955 9.74776 13.6366 8.95499 13.6366 8.07604C13.6366 7.24418 13.7803 6.36501 14.068 5.43897C14.3557 4.49716 14.7794 3.61821 15.3395 2.80189C15.9146 1.97004 16.6262 1.29499 17.4738 0.776993C18.3366 0.258996 19.3356 0 20.4709 0C21.4093 0 22.1965 0.188361 22.8322 0.565086C23.4832 0.926036 23.9675 1.44403 24.2854 2.11908C24.6185 2.77835 24.7849 3.54757 24.7849 4.42652C24.7849 5.05447 24.6941 5.74506 24.5124 6.49851C24.346 7.23618 24.081 7.97409 23.7178 8.71177C23.3697 9.4339 22.9231 10.0932 22.3781 10.6896C21.8332 11.286 21.19 11.7649 20.4482 12.1258C19.7216 12.4868 18.8967 12.6674 17.9733 12.6674ZM18.2004 10.7838C18.9421 10.7838 19.5929 10.5796 20.153 10.1716C20.7132 9.76353 21.1822 9.24554 21.5607 8.61759C21.9392 7.97409 22.2267 7.30682 22.4235 6.61624C22.6204 5.90988 22.7187 5.25837 22.7187 4.66197C22.7187 4.04979 22.6204 3.53956 22.4235 3.13152C22.2267 2.72348 21.9467 2.4174 21.5835 2.21326C21.2202 1.99358 20.7888 1.88363 20.2893 1.88363C19.5325 1.88363 18.8663 2.08776 18.2912 2.49581C17.7161 2.88831 17.2315 3.3983 16.838 4.02625C16.4595 4.6542 16.1721 5.31347 15.9752 6.00406C15.7784 6.69464 15.6801 7.33037 15.6801 7.91123C15.6801 8.52341 15.7784 9.04917 15.9752 9.48876C16.1871 9.91258 16.4822 10.2344 16.8607 10.4541C17.2392 10.6738 17.6856 10.7838 18.2004 10.7838ZM25.1836 3.29634C24.9566 3.29634 24.6993 3.25702 24.4116 3.17862C24.1242 3.08444 23.8517 2.96671 23.5942 2.82544C23.3218 2.68417 23.0872 2.53513 22.8904 2.37808C22.7541 2.26812 22.671 2.11131 22.6406 1.90717C22.6104 1.70303 22.6256 1.5069 22.686 1.31854C22.7314 1.1144 22.8073 0.965354 22.9131 0.871172C23.0191 0.776991 23.1401 0.784763 23.2764 0.894719C23.6851 1.20858 24.0408 1.41272 24.3435 1.5069C24.6464 1.5853 24.9264 1.62463 25.1836 1.62463C25.5923 1.62463 25.9633 1.54622 26.2962 1.38917C26.6445 1.21659 26.9773 1.036 27.2952 0.847633C27.6131 0.643495 27.9387 0.463134 28.2715 0.306086C28.6198 0.149039 28.9906 0.0706331 29.3841 0.0706331C29.6112 0.0706331 29.7701 0.164817 29.8609 0.35318C29.9669 0.525767 30.0124 0.729906 29.9971 0.965359C29.9822 1.18504 29.8988 1.38917 29.7474 1.57753C29.6112 1.75012 29.4145 1.83653 29.157 1.83653C28.8696 1.83653 28.5819 1.90717 28.2942 2.04844C28.0068 2.18971 27.6964 2.3623 27.3633 2.56644C27.0455 2.7548 26.7049 2.92739 26.3416 3.08444C25.9783 3.22571 25.5923 3.29634 25.1836 3.29634Z"
								fill="#031F34"
							/>
							<path
								d="M18.1008 15.634C18.4671 15.1217 18.6362 15.1099 18.8955 14.4568C19.6902 12.4554 17.5332 13.7504 18.1008 15.634ZM18.1008 15.634C18.5191 16.3463 19.4632 18.6949 18.5549 19.6367C17.7609 20.4601 15.9438 19.8722 15.4897 17.9886M18.1008 15.634C17.4914 16.4868 16.2213 17.6617 15.4897 17.9886M15.4897 17.9886C11.9704 18.9304 8.74715 15.9686 6.74817 13.8681M16.7721 17.2106C16.9967 17.41 17.4045 18.2103 17.4367 18.515"
								stroke="#031F34"
								stroke-width="0.864163"
							/>
							<path
								d="M6.01693 10.8309C6.95741 10.8309 7.71982 10.0402 7.71982 9.06497C7.71982 8.08969 6.95741 7.29907 6.01693 7.29907C5.07644 7.29907 4.31403 8.08969 4.31403 9.06497C4.31403 10.0402 5.07644 10.8309 6.01693 10.8309Z"
								fill="#1CB08C"
							/>
							<path
								d="M19.6402 10.8309C20.5806 10.8309 21.3431 10.0402 21.3431 9.06497C21.3431 8.08969 20.5806 7.29907 19.6402 7.29907C18.6997 7.29907 17.9373 8.08969 17.9373 9.06497C17.9373 10.0402 18.6997 10.8309 19.6402 10.8309Z"
								fill="#1CB08C"
							/>
						</svg>
					</div>
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
		// openModal() {
		// 	this.isModalOpen = true;
		// 	const matchingOption = this.sortOptions.find(
		// 		option => option.label === this.$parent.currentSort,
		// 	);
		// 	this.selectedSort = matchingOption
		// 		? matchingOption.value
		// 		: this.sortOptions[0].value; // 부모에서 현재 정렬 기준을 가져와서 업데이트
		// },
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
		},
	},
};
</script>
<style lang="scss" scoped>
.modal-overlay {
	display: absolute;
	/* position: fixed; */
	left: 0;
	top: 0;
	width: 375px;
	height: 100%;
	background-color: rgba(0, 0, 0, 0.5); /* 반투명 검정색 배경 */
	display: flex;
	justify-content: center; /* 수평 중앙 정렬 */
	align-items: flex-end; /* 하단 정렬 */
	z-index: 2000; /* 다른 요소 위에 위치 */
	color: var(--Text, #1d1d1d);
}
.modal {
	width: 100%;
	position: absolute;
	bottom: 0;
	left: 0;
	z-index: 2000;
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
	width: 100%;
	padding-top: 42px;
	padding-bottom: 32px;
	background-color: white;
	text-align: center;
}
.btn {
	width: 342px;
	height: 48px;
	text-align: center;
	background-color: white;
	border-radius: 10px;
	border: 1px solid var(--Border_, #c6c6c6);
	font-size: 16px;
	font-weight: 500;
	padding: 12px 84px;
}
</style>
