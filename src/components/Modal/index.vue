<template>
	<div
		v-if="visible"
		id="popup-modal"
		class="absolute h-full top-0 w-full z-50 bg-opacity-50 bg-gray-900"
	>
		<div class="relative p-3 bg-white modalLayout">
			<!-- 조건에 따른 모달 랜더 -->

			<!-- gps -->
			<div v-if="popupType === 'gps'" class="p-4 text-center">
				<h3 class="mb-6 text-lgB">GPS 동의 (필수)</h3>
				<div class="text-base text-bodyBlack">
					서비스를 이용하기 위해 <br />
					위치 접근 권한이 필요합니다.<br />
					동의하지 않는 경우<br />
					서비스 이용이 불가합니다.<br />
				</div>
				<div
					class="flex justify-center gap-1 absolute bottom-[10px] left-0 right-0 mx-auto"
				>
					<button
						@click="gpsCancle"
						data-modal-hide="popup-modal"
						type="button"
						class="btnLayout"
					>
						취소
					</button>
					<button
						@click="gpsConsent"
						data-modal-hide="popup-modal"
						type="button"
						class="bg-[#1CB08C] text-white btnLayout"
					>
						동의
					</button>
				</div>
			</div>
			<!-- service -->
			<div v-if="popupType === 'service'" class="p-4 text-center">
				<h3 class="mb-6 text-lgB">GPS 동의 (필수)</h3>
				<div class="text-base text-bodyBlack">
					{{ text }}
				</div>
				<div
					class="flex justify-center gap-1 absolute bottom-[10px] left-0 right-0 mx-auto"
				>
					<button
						@click="gpsCancle"
						data-modal-hide="popup-modal"
						type="button"
						class="btnLayout"
					>
						취소
					</button>
					<button
						@click="gpsConsent"
						data-modal-hide="popup-modal"
						type="button"
						class="bg-[#1CB08C] text-white btnLayout"
					>
						동의
					</button>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup>
import { ref, reactive } from 'vue';
const props = defineProps(['visible', 'popupType', 'text']);

const emit = defineEmits(['gpsCancle']);

const gpsCancle = () => {
	console.log('gpsCancle');
	emit('gpsCancle');
};

const gpsConsent = () => {
	console.log('gpsConsent');
	emit('gpsConsent');
};
</script>

<style lang="scss" scoped>
.modalLayout {
	width: 310px;
	height: 282px;
	top: 265px;
	left: 33px;
	border: 1px solid #031f34;
	border-radius: 20px;
}

.btnLayout {
	width: 136px;
	height: 48px;
	border: 1px solid #c6c6c6;
	border-radius: 10px;
}
</style>
