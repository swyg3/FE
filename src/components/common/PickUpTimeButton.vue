<template>
	<div class="flex space-x-2">
		<button
			v-for="(slot, index) in timeSlots"
			:key="index"
			:class="[
				'time-btn',
				dayjs(selectedTime).format('HH:mm') === slot.value
					? 'time-btn-selected'
					: 'bg-white text-black',
				slot.disabled ? 'time-btn-disabled cursor-not-allowed' : '',
			]"
			@click="selectTime(slot)"
			:disabled="slot.disabled"
		>
			{{ slot.label }}
		</button>
	</div>
</template>

<script setup>
import { ref, defineEmits, nextTick } from 'vue';
import dayjs from 'dayjs';
import 'dayjs/locale/ko';

dayjs.locale('ko'); // 한국어 로케일 설정 (am -> 오전)

// Props로 부모 컴포넌트에서 전달된 현재시간
const props = defineProps({
	currentTime: {
		type: String,
		required: true,
	},
});

// 선택된 시간을 부모에게 전달
const emit = defineEmits(['updatePickUpTime']);

// 선택된 시간을 저장하는 상태
const selectedTime = ref(null);

// 시간대 목록
const timeSlots = ref([]);

// 시간대 생성 함수 (오후 6:00 ~ 오전 2:00)
const generateTimeSlots = () => {
	const startTime = dayjs().hour(20).minute(0); // 오후 6:00
	const endTime = dayjs().hour(23).minute(10); // 오후 6:00
	// const endTime = dayjs().add(1, 'day').hour(2).minute(10); // 다음 날 오전 2:00

	let time = startTime;
	while (time.isBefore(endTime)) {
		const label = time.format('A h:mm');
		timeSlots.value.push({
			label,
			value: time.format('HH:mm'),
			disabled: false,
		});
		time = time.add(30, 'minute'); // 30분씩 증가
	}
};

// 남은 시간이 10분 이하일 경우 시간 비활성화
const updateDisabledTimeSlots = () => {
	//두번째시도
	const now = dayjs(props.currentTime); // 현재시간 받아옴
	timeSlots.value.forEach(slot => {
		let slotTime = dayjs()
			.hour(parseInt(slot.value.split(':')[0]))
			.minute(parseInt(slot.value.split(':')[1]));
		// slot.value가 다음 날 시간을 포함할 경우
		if (slotTime.hour() >= 0 && slotTime.hour() < 3) {
			slotTime = slotTime.add(1, 'day'); // 다음 날 시간을 현재 날짜와 구분
		}
		// 현재 시간과의 차이 계산 (지났으면 음수, 남은 시간은 양수)
		const timeDifference = slotTime.diff(now, 'minute');
		// 지나간 시간(음수)인 경우, 또는 남은 시간이 10분 이하인 경우 비활성화
		slot.disabled = timeDifference <= 10 || timeDifference < 0;
	});
};

// 시간 선택 함수
const selectTime = slot => {
	// 부모 컴포넌트에 선택된 시간 전달
	if (!slot.disabled) {
		const now = dayjs(); // 현재 날짜
		// 현재 날짜와 선택한 시간을 결합하여 유효한 dayjs 객체 생성
		const selectedDateTime = now
			.hour(parseInt(slot.value.split(':')[0]))
			.minute(parseInt(slot.value.split(':')[1]))
			.second(0); // 선택한 시간을 포함한 날짜 생성
		selectedTime.value = selectedDateTime.toISOString(); // ISO 문자열로 변환
		emit('updatePickUpTime', selectedTime.value);
	} else {
		alert('픽업시간을 선택해주세요!');
	}
};

// 컴포넌트가 마운트 되었을 때 시간대 생성, 비활성화 상태 업데이트
generateTimeSlots();
nextTick(() => {
	updateDisabledTimeSlots();
});
</script>

<style lang="scss" scoped>
.time-btn {
	width: 90px;
	height: 30px;
	border-radius: 6px;
	border: 1px solid var(--Primary, #031f34);
	background: var(--White, #fff);
	display: flex;
	color: var(--Text_body, #555);
	justify-content: center;
	align-items: center;
	font-family: Pretendard;
	font-size: 16px;
	font-weight: 500;
	line-height: 24px;
}
.time-btn-selected {
	background: var(--Point, #1cb08c);
	color: white;
	font-weight: 700;
}
.time-btn-disabled {
	color: var(--text-disabled-ic-disabled, #bebebe);
	border: 1px solid var(--text-disabled-ic-disabled, #bebebe);
	background: var(--disabled-border, #e4e4e4);
}
</style>
