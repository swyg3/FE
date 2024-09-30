<template>
	<div
		v-if="visible"
		class="absolute h-full top-0 w-full z-50 bg-opacity-50 bg-gray-900"
		@click="closeSheet"
	>
		<div class="bottomSheet" @click.stop>
			<!-- 이용약관 -->
			<div v-if="type === 'Terms'" class="p-3 text-[#555]">
				<div class="pt-3 pb-6 text-lgB text-center text-[#1D1D1D]">
					이용약관
				</div>
				<div class="pb-6">
					<div class="font-semibold">제 1조 (목적)</div>
					<div>
						이 약관은 문코에서 제공하는 음식 마감 할인 서비스의 <br />
						이용과 관련하여, 서비스 제공자와 이용자의 권리, 의무, <br />
						책임 사항을 규정함을 목적으로 합니다.
					</div>
				</div>
				<div class="pb-6">
					<div class="font-semibold">제 2조 (용어 정의)</div>
					<div>
						<span class="font-semibold">1. "서비스"</span>란 문코에서 제공하는
						모든 음식 할인 정보를 제공하는 플랫폼을 의미합니다.
					</div>
					<div>
						<span class="font-semibold">2. "이용자"</span>란 본 약관에 따라
						서비스를 이용하는 회원을 의미합니다.
					</div>
					<div>
						<span class="font-semibold">3. "회원"</span>이란 본 서비스에
						개인정보를 제공하고 회원가입을 한 자를 의미합니다.
					</div>
				</div>
				<div>
					<div class="font-semibold">제 3조 (약관의 효력 및 변경)</div>
					<div>
						<span class="font-semibold">1.</span> 본 약관은 서비스 화면에
						게시하거나 기타 방법으로 공지함으로써 효력이 발생합니다.
					</div>
					<div>
						<span class="font-semibold">2.</span> 당사는 필요 시 약관을 변경할
						수 있으며, 변경된 약관은 최소 7일 전에 공지됩니다. 이용자가 변경된
						약관에 동의하지 않을 경우, 서비스 이용을 중단하고 탈퇴할 수
						있습니다.
					</div>
					<div>
						<span class="font-semibold">3.</span> 이용자가 약관이 변경된 후에도
						서비스를 계속 이용할 경우, 변경된 약관에 동의한 것으로 간주합니다
					</div>
				</div>
				<AppButton
					btnText="닫기"
					class="my-5"
					@click="closeBottomSheet"
				></AppButton>
			</div>
			<!-- 개인정보처리방침 -->
			<div v-if="type === 'PrivacyPolicy'" class="p-3 text-[#555]">
				<div class="pt-3 pb-6 text-lgB text-center text-[#1D1D1D]">
					개인정보 처리방침
				</div>
				<div class="pb-6">
					<div class="font-semibold">제 1조 (개인정보의 수집 항목 및 방법)</div>
					<div>
						<div class="font-semibold">1. 수집항목</div>
						문코는 서비스 제공을 위해 아래와 같은 개인정보를 수집합니다:
						<div>• 서비스 이용 시: 위치 정보, 결제 정보</div>
						<div>• 회원가입 시: 이름, 이메일 주소, 전화번호</div>
						<div>• 자동 수집 정보: IP 주소, 쿠키, 방문 기록, 이용 기록 등</div>
					</div>
					<div>
						<div class="font-semibold">2. 수집 방법</div>
						<div>
							• 홈페이지, 모바일 앱, 서면 양식, 이메일, 전화, 고객센터 문의 등
						</div>
						<div>• 쿠키 및 로그 분석 툴을 통해 자동 수집</div>
					</div>
				</div>
				<div>
					<div class="font-semibold">제 2조 (개인정보의 수집 및 이용 목적)</div>
					<div>문코는 수집한 개인정보를 다음의 목적을 위해 사용합니다:</div>
					<div>
						<span class="font-semibold">1.</span>
						회원 관리: 회원 가입 의사 확인, 본인 식별 및 인증, 부정 이용 방지
					</div>
					<div>
						<span class="font-semibold">2.</span>
						서비스 제공: 음식 할인 정보 제공, 주문 및 결제 서비스, 서비스 이용
						관련 고객 지원
					</div>
					<div>
						<span class="font-semibold">3.</span>
						마케팅 및 광고: 신규 서비스 및 맞춤형 광고 제공, 이벤트 정보 제공
						(이용자 동의 시)
					</div>
				</div>
				<AppButton
					btnText="닫기"
					class="my-5"
					@click="closeBottomSheet"
				></AppButton>
			</div>
		</div>
	</div>
</template>

<script setup>
import { useStore } from 'vuex';

const store = useStore();
const props = defineProps(['visible', 'type']);
console.log('props', props);

const closeSheet = () => {
	store.state.isVisible = false;
};

const closeBottomSheet = () => {
	store.state.isVisible = false;
};
</script>

<style lang="scss" scoped>
.bottomSheet {
	position: absolute;
	bottom: 0;
	width: 100%;
	background-color: #ffffff;
	border-radius: 26px 26px 0px 0px;
	background: var(--White, #fff);
	z-index: 12;
}
</style>
