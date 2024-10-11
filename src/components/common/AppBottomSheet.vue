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
					<p>
						이 약관은 문코에서 제공하는 음식 마감 할인 서비스의 <br />
						이용과 관련하여, 서비스 제공자와 이용자의 권리, 의무, <br />
						책임 사항을 규정함을 목적으로 합니다.
					</p>
				</div>
				<div class="pb-6">
					<div class="font-semibold">제 2조 (용어 정의)</div>
					<ul>
						<li>
							<span class="font-semibold">1. "서비스"</span>란 문코에서 제공하는
							모든 음식 할인 정보를 제공하는 플랫폼을 의미합니다.
						</li>
						<li>
							<span class="font-semibold">2. "이용자"</span>란 본 약관에 따라
							서비스를 이용하는 회원을 의미합니다.
						</li>
						<li>
							<span class="font-semibold">3. "회원"</span>이란 본 서비스에
							개인정보를 제공하고 회원가입을 한 자를 의미합니다.
						</li>
					</ul>
				</div>
				<div class="pb-6">
					<div class="font-semibold">제 3조 (약관의 효력 및 변경)</div>
					<ul>
						<li>
							<span class="font-semibold">1.</span> 본 약관은 서비스 화면에
							게시하거나 기타 방법으로 공지함으로써 효력이 발생합니다.
						</li>
						<li>
							<span class="font-semibold">2.</span> 당사는 필요 시 약관을 변경할
							수 있으며, 변경된 약관은 최소 7일 전에 공지됩니다. 이용자가 변경된
							약관에 동의하지 않을 경우, 서비스 이용을 중단하고 탈퇴할 수
							있습니다.
						</li>
						<li>
							<span class="font-semibold">3.</span> 이용자가 약관이 변경된
							후에도 서비스를 계속 이용할 경우, 변경된 약관에 동의한 것으로
							간주합니다.
						</li>
					</ul>
				</div>
				<div class="pb-6">
					<div class="font-semibold">제 4조 (이용자 자격 및 계정)</div>
					<ul>
						<li>
							<span class="font-semibold">1.</span> 이용자는 만 14세 이상이어야
							하며, 본 약관에 동의하고 서비스를 사용할 수 있습니다.
						</li>
						<li>
							<span class="font-semibold">2.</span> 회원은 본인의 개인정보를
							정확하게 제공해야 하며, 계정 정보의 부정확성으로 발생한 문제에
							대해서는 이용자가 책임을 집니다.
						</li>
						<li>
							<span class="font-semibold">3.</span> 이용자는 언제든지 계정을
							해지할 수 있으며, 해지된 계정은 복구되지 않습니다.
						</li>
					</ul>
				</div>
				<div class="pb-6">
					<div class="font-semibold">제 5조 (서비스 제공 및 변경)</div>
					<ul>
						<li>
							<span class="font-semibold">1.</span> 문코는 음식점에서 제공하는
							마감 할인 정보를 이용자에게 제공하는 서비스입니다.
						</li>
						<li>
							<span class="font-semibold">2.</span> 당사는 서비스 운영 상의
							이유로 제공하는 서비스를 변경하거나 중단할 수 있으며, 이 경우
							이용자에게 사전에 공지합니다.
						</li>
						<li>
							<span class="font-semibold">3.</span> 서비스는 24시간 제공되나,
							시스템 점검 또는 기타 불가피한 사유로 일시 중단될 수 있습니다.
						</li>
					</ul>
				</div>
				<div class="pb-6">
					<div class="font-semibold">제 6조 (결제 및 환불 정책)</div>
					<ul>
						<li>
							<span class="font-semibold">1.</span> 본 서비스에서 제공하는
							정보는 음식점과의 직접적인 거래를 기반으로 하며, 결제는 해당
							음식점에서 이루어집니다.
						</li>
						<li>
							<span class="font-semibold">2.</span> 결제 및 환불과 관련된 사항은
							각 음식점의 정책을 따릅니다.
						</li>
						<li>
							<span class="font-semibold">3.</span> 문코는 음식점과의 거래에
							발생하는 문제에 대해 직접적인 책임을 지지 않습니다.
						</li>
					</ul>
				</div>
				<div class="pb-6">
					<div class="font-semibold">제 7조 (개인정보 처리 및 보호)</div>
					<ul>
						<li>
							<span class="font-semibold">1.</span> 당사는 이용자의 개인정보를
							안전하게 보호하며, 서비스 제공을 위해 필요한 최소한의 정보만을
							수집합니다.
						</li>
						<li>
							<span class="font-semibold">2.</span> 이용자의 개인정보는 법령에
							의하거나 이용자의 동의 없이는 제3자에게 제공되지 않습니다.
						</li>
						<li>
							<span class="font-semibold">3.</span> 이용자는 언제든지 개인정보
							열람, 수정, 삭제를 요청할 수 있습니다.
						</li>
					</ul>
				</div>
				<div class="pb-6">
					<div class="font-semibold">제 8조 (이용자의 의무)</div>
					<ul>
						<li>
							<span class="font-semibold">1.</span> 이용자는 서비스 이용 시
							법령, 약관, 서비스 안내 사항을 준수해야 합니다.
						</li>
						<li>
							<span class="font-semibold">2.</span> 타인의 정보를 도용하거나
							부정한 방법으로 서비스를 이용할 경우, 서비스 이용이 제한될 수
							있습니다.
						</li>
						<li>
							<span class="font-semibold">3.</span> 서비스 이용 중 발생하는 모든
							활동에 대한 책임은 이용자 본인에게 있으며, 타인에게 피해를 주는
							행위를 금지합니다.
						</li>
					</ul>
				</div>
				<div class="pb-6">
					<div class="font-semibold">제 9조 (서비스 제공자의 권리 및 의무)</div>
					<ul>
						<li>
							<span class="font-semibold">1.</span> 당사는 지속적이고 안정적인
							서비스를 제공하기 위해 최선을 다합니다.
						</li>
						<li>
							<span class="font-semibold">2.</span> 당사는 서비스 운영에 필요할
							경우 서비스의 전부 또는 일부를 변경하거나 중단할 권리를 가집니다.
						</li>
						<li>
							<span class="font-semibold">3.</span> 이용자가 약관을 위반하거나
							부정한 행위를 할 경우, 서비스 이용을 제한할 수 있습니다.
						</li>
					</ul>
				</div>
				<div class="pb-6">
					<div class="font-semibold">제 10조 (면책조항)</div>
					<ul>
						<li>
							<span class="font-semibold">1.</span> 당사는 천재지변, 불가항력적
							사유로 인해 서비스를 제공할 수 없는 경우 책임을 지지 않습니다.
						</li>
						<li>
							<span class="font-semibold">2.</span> 당사는 이용자가 제공하는
							정보의 신뢰성, 정확성에 대해 보증하지 않으며, 이용자가 이를
							신뢰하여 발생한 손해에 대해서는 책임지지 않습니다.
						</li>
						<li>
							<span class="font-semibold">3.</span> 당사는 이용자 간 또는
							이용자와 제3자 간의 분쟁에 개입하지 않으며, 이로 인한 손해에
							대해서도 책임지지 않습니다.
						</li>
					</ul>
				</div>
				<div class="pb-6">
					<div class="font-semibold">제 11조 (분쟁 해결)</div>
					<ul>
						<li>
							<span class="font-semibold">1.</span> 본 약관과 관련된 분쟁이
							발생할 경우, 당사와 이용자는 성실히 협의하여 해결하도록
							노력합니다.
						</li>
					</ul>
				</div>
				<div class="pb-6">
					<div class="font-semibold">제 12조 (약관의 해석)</div>
					<ul>
						<li>
							<span class="font-semibold">1.</span> 본 약관에 명시되지 않은
							사항에 대해서는 관련 법령 또는 상관례에 따릅니다.
						</li>
					</ul>
				</div>
				<div class="pb-6">
					<div class="font-semibold">부칙</div>
					<p>이 약관은 2024년 09년 29일부터 적용됩니다.</p>
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
						<div>• 회원가입 시: 이름, 이메일 주소, 전화번호</div>
						<div>• 서비스 이용 시: 위치 정보, 결제 정보</div>
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
				<div class="pb-6">
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
					<div>
						<span class="font-semibold">4.</span>
						서비스 개선 및 분석: 서비스 이용 기록 분석을 통한 서비스 품질 향상
					</div>
				</div>
				<div class="pb-6">
					<div class="font-semibold">제 3조 (개인정보의 보유 및 이용 기간)</div>
					<div>
						<span class="font-semibold">1.</span>
						개인정보 보유 기간: 이용자의 개인정보는 서비스 제공을 위한 기간 동안
						보유됩니다. <br />
						원칙적으로, 개인정보 수집 및 이용 목적이 달성되면 해당 정보를 지체
						없이 파기합니다. <br />
						다만, 법령에 의해 일정 기간 보관이 필요할 경우 해당 기간 동안 보유할
						수 있습니다.
						<div>• 회원 정보: 회원 탈퇴 시까지</div>
						<div>• 거래 정보: 5년 (전자상거래법에 의한 보관)</div>
					</div>
					<div>
						<span class="font-semibold">2.</span>
						법령에 의한 정보 보유
						<div>• 계약 또는 청약 철회 기록: 5년 (전자상거래법)</div>
						<div>• 대금 결제 및 재화 공급 기록: 5년 (전자상거래법)</div>
						<div>• 소비자 불만 또는 분쟁 처리 기록: 3년 (전자상거래법)</div>
					</div>
				</div>
				<div class="pb-6">
					<div class="font-semibold">제 4조 (개인정보의 제3자 제공)</div>
					<div>
						문코는 이용자의 개인정보를 원칙적으로 제3자에게 제공하지
						않습니다.<br />
						다만, 다음의 경우 예외로 합니다:
						<div>1. 이용자가 사전에 동의한 경우</div>
						<div>2. 법령에 의거해 수사기관 등에서 요구한 경우</div>
					</div>
				</div>
				<div class="pb-6">
					<div class="font-semibold">제 5조 (개인정보 처리 위탁)</div>
					<div>
						문코는 서비스 향상을 위해 외부에 개인정보 처리를 위탁할 수 있습니다.
						<br />
						이 경우, 사전에 이용자에게 위탁받는 자와 그 내용에 대해 공지하며,
						<br />
						개인정보가 안전하게 처리될 수 있도록 계약을 통해 관리 및
						감독합니다.<br />
					</div>
				</div>
				<div class="pb-6">
					<div class="font-semibold">제 6조 (이용자의 권리와 그 행사 방법)</div>
					<div>
						1. 이용자는 언제든지 본인의 개인정보에 대해 열람, 수정, 삭제, 처리
						정지를 요청할 수 있습니다.
					</div>
					<div>
						2. 개인정보의 열람, 수정, 삭제는 서비스 내 '개인정보 수정' 메뉴에서
						직접 할 수 있으며, 개인정보 처리 정지는 고객센터를 통해 요청할 수
						있습니다.
					</div>
					<div>
						3.이용자가 개인정보의 오류에 대한 정정을 요청한 경우, 정정이
						완료되기 전까지 해당 개인정보는 이용 또는 제공되지 않습니다.
					</div>
					<div>
						4.이용자의 요청에 따라 개인정보를 삭제 또는 처리 정지할 경우,
						서비스의 일부 또는 전부 이용이 제한될 수 있습니다.
					</div>
				</div>
				<div class="pb-6">
					<div class="font-semibold">제 7조 (개인정보의 파기 절차 및 방법)</div>
					<div>
						<div class="font-semibold">1. 파기절차</div>
						이용자가 회원 탈퇴를 하거나 개인정보의 수집 및 이용 목적이 달성된
						경우, 해당 정보를 즉시 파기합니다.<br />
						다만, 법령에 따라 보관이 필요한 경우, 해당 정보를 별도로 분리하여
						보관 후 일정 기간 후 파기합니다.
					</div>
					<div>
						<div class="font-semibold">2. 파기방법</div>
						<div>
							• 전자적 파일 형태의 개인정보: 복구할 수 없는 기술적 방법을
							사용하여 삭제
						</div>
						<div>• 종이 문서 형태의 개인정보: 분쇄하거나 소각하여 파기</div>
					</div>
				</div>
				<div class="pb-6">
					<div class="font-semibold">제 8조 (개인정보의 안전성 확보 조치)</div>
					<div>
						문코는 이용자의 개인정보를 안전하게 보호하기 위해 다음과 같은
						기술적/관리적 대책을 시행하고 있습니다:
					</div>
					<div>
						<div class="font-semibold">1. 암호화</div>
						이용자의 개인정보는 암호화된 형태로 저장 및 관리됩니다.
					</div>
					<div>
						<div class="font-semibold">2. 접근제한</div>
						<div>
							개인정보에 대한 접근 권한을 최소화하고, 중요한 데이터는 별도의
							보안 시스템을 통해 보호합니다.
						</div>
					</div>
					<div>
						<div class="font-semibold">3. 보안 프로그램 설치</div>
						<div>
							해킹이나 바이러스에 의한 정보 유출을 방지하기 위해 보안 프로그램을
							설치하고 주기적으로 점검합니다.
						</div>
					</div>
				</div>
				<AppButton
					btnText="닫기"
					class="my-5"
					@click="closeBottomSheet"
				></AppButton>
			</div>
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
		</div>
	</div>
</template>

<script setup>
import { useStore } from 'vuex';

const store = useStore();
const props = defineProps(['visible', 'type']);

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
	max-height: 640px;
	overflow-y: auto;
}
</style>
