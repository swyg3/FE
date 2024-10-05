<template>
	<div>
		<TheHeader></TheHeader>
		<div class="mainpage-bg">
			<div class="h-[64px]"></div>
			<!--welcome + 문구 + 카드-->
			<img
				src="/mainPage/welcome.png"
				width="194px"
				height="auto"
				class="mx-auto py-10 mainpage-welcome"
			/>
			<div class="text-lgB text-center pb-10">
				<p>어서오세요</p>
				<p class="py-2">'친환경 우주 활동가'</p>
				<p>수연님</p>
			</div>
			<div class="flex my-6 justify-center text-center">
				<UserCard></UserCard>
				<!-- <div class="mr-1.5 mainpage-userCard">
				<img src="/mainPage/mainLeaf.svg" class="w-6 h-4 mx-auto mb-1" />
				<p>문코를 통해</p>
				<p class="text-baseB">30끼의 음식을</p>
				<p>구출했어요!</p>
			</div> -->
				<div class="mainpage-userCard">
					<img src="/mainPage/mainPig.svg" class="w-6 h-4 mx-auto mb-1" />
					<p>지금까지</p>
					<p class="text-baseB">200,000원을</p>
					<p>절약했어요!</p>
				</div>
			</div>

			<!--주문했던 가게 게시글 리스트-->
			<div class="p-4">
				<p class="text-baseB">
					수연님이 주문했던 가게에서<br />
					마감할인 게시글이 올라왔어요!
				</p>
			</div>
			<div class="flex whitespace-nowrap overflow-auto px-3 noScrollBar">
				<ItemCard></ItemCard>
				<ItemCard></ItemCard>
				<ItemCard></ItemCard>
			</div>

			<!--문코 추천 리스트-->
			<div class="px-4 pt-6 pb-4 flex justify-between">
				<p class="text-baseB">문코의 추천</p>
				<div class="flex">
					<p class="text-sm">더보기</p>
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
				</div>
			</div>
			<div class="flex whitespace-nowrap overflow-auto px-3 noScrollBar">
				<ItemCard @click="$router.push('/orderDetails')"></ItemCard>
				<ItemCard></ItemCard>
				<ItemCard></ItemCard>
			</div>
			<!--뉴스레터 환경퀴즈 음식판매-->
			<div class="grid gap-1 gap-y-2 pt-14 pb-4 px-4">
				<div class="mainpage-bottomCard">
					<p class="text-baseB">문코의 달달 뉴스레터 보러가기</p>

					<p class="mainpage-bottomCard-body">
						문코는 환경오염을 해결하기 위해 만들어졌어요.<br />
						문코가 매달 전하는 세상의 환경 소식을 들어보세요.
					</p>
				</div>
				<div class="mainpage-bottomCard">
					<p class="text-baseB">환경 퀴즈 참여하기</p>
					<div class="mainpage-bottomCard-body">
						<p>
							문코는 환경오염을 해결하기 위해 만들어졌어요.<br />
							환경 퀴즈에 참여해보세요!
						</p>
					</div>
				</div>
				<div class="mainpage-bottomCard">
					<p class="text-baseB">판매자로 음식 판매하기</p>
					<div class="mainpage-bottomCard-body">
						<p>
							지금 이용하는 계정을 판매자 계정으로 바꿀 수 있어요.<br />
							문코에서 음식을 판매하고 재고를 관리하세요.
						</p>
					</div>
				</div>
			</div>
		</div>
	</div>
	<Modal
		:visible="isVisible"
		:popupType="popupType"
		:text="text"
		@gpsCancle="gpsCancle"
		@gpsConsent="gpsConsent"
	/>
</template>

<script setup>
import ItemCard from '@/components/common/ItemCard.vue';
import TheHeader from '@/components/common/TheHeader.vue';
import UserCard from '@/components/common/UserCard.vue';
import { useRouter } from 'vue-router';
import { ref } from 'vue';

const router = useRouter();

//<modal>
const isVisible = ref(true);
const popupType = ref('gps');
const text = ref('');

const gpsConsent = () => {
	console.log('동의했니?');
};

const gpsCancle = () => {
	console.log('취소했니?');

	isVisible.value = false;

	// isVisible.value = true;
	// popupType.value = 'service';
	// text.value = 'gps 동의를 안하면 이용이 어렵습니다.';
};
</script>

<style lang="scss" scoped>
.mainpage-bg {
	width: 375px;

	background-image: url('/mainPage/mainPageBg.png');
	color: var(--Text, #1d1d1d);
	background-attachment: fixed; //배경고정 스크롤
	background-repeat: no-repeat;
	background-position: center;
}
.mainpage-userCard {
	width: 168px;
	height: 124px;
	background-color: white;
	border-radius: 10px;
	border: 2px solid var(--Point, #1cb08c);
	display: grid;
	align-content: center;
}
.noScrollBar {
	//scroll bar 가리기
	/* IE and Edge */
	-ms-overflow-style: none;
	/* Firefox */
	scrollbar-width: none;
}
/* scroll bar 가리기 Chrome, Safari,Opera */
.noScrollBar::-webkit-scrollbar {
	display: none !important;
}
.mainpage-bottomCard {
	width: 343px;
	height: 104px;
	background: var(--White, #fff);
	padding: 16px;
	border-radius: 10px;
	border: 1px solid var(--Primary, #031f34);
	margin: auto;
	align-content: center;
}
.mainpage-bottomCard-body {
	font-size: 14px;
	color: #555;
	font-weight: 500;
	line-height: 22px;
}
</style>
