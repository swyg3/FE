<template>
	<div class="mypage-bg">
		<div class="text-baseB mypage-header">마이페이지</div>

		<div class="px-[16px]">
			<div class="text-lg pt-[16px]">친환경 우주활동가</div>
			<div class="text-lgB">수연님</div>
			<div class="text-bodyBlack mypage-phone">010-1111-1111</div>
			<div class="flex gap-2">
				<div class="mt-5 mypage-box">
					<img src="/myPage/umbrage.png" class="p-1" />
					<div class="">문코를 통해</div>
					<div class="font-bold">
						<span class="">30</span>
						<span class="">끼의 음식을</span>
					</div>
					<div class="">구출했어요!</div>
				</div>
				<div class="mt-5 mypage-box">
					<img src="/myPage/pig.png" class="p-1" />
					<div class="">지금까지</div>
					<div class="font-bold">
						<span class="">200,000</span>
						<span class="">원의 금액을</span>
					</div>
					<div class="">절약했어요!</div>
				</div>
			</div>
		</div>
		<div class="mt-7">
			<div>
				<div class="text-baseB mypage-text-b-box">내 정보 관리</div>
				<div class="flex justify-between mypage-text-s-box">
					<div>주소 관리</div>
					<div class="text-sm text-bodyBlack">서울시 종로구 율곡로</div>
				</div>
			</div>
			<div>
				<div class="text-baseB mypage-text-b-box">계정 관리</div>
				<div class="mypage-text-s-box" @click="signOut">로그아웃</div>
				<div class="mypage-text-s-box">탈퇴하기</div>
			</div>
			<div>
				<div class="text-baseB mypage-text-b-box">서비스 정보</div>
				<div class="flex justify-between mypage-text-s-box">
					<div>예약금 관리</div>
					<div class="text-sm text-bodyBlack">서비스가 추가될 예정이에요</div>
				</div>
				<div class="mypage-text-s-box" @click="openBottomSheet('Terms')">
					약관
				</div>
				<div
					class="mypage-text-s-box"
					@click="openBottomSheet('PrivacyPolicy')"
				>
					개인정보 처리방침
				</div>
			</div>
		</div>
	</div>
</template>

<script setup>
import { ref } from 'vue';
import { useStore } from 'vuex';
import { signOutApi } from '@/api/auth.js';

const store = useStore();

const openBottomSheet = contentType => {
	store.state.isVisible = true;
	store.state.popupType = contentType;
};

const signOut = async () => {
	console.log('로그아웃');

	const response = await signOutApi();
	console.log('response', response);

	// if(response.data.success ===true){
	// 	console.log("성공")
	// }
};
</script>

<style lang="scss" scoped>
.mypage-bg {
	background-image: url('/myPage/myPageBg.png');
	background-attachment: fixed;
	background-position: center;
}

.mypage-header {
	display: flex;
	justify-content: center;
	align-items: center;
	height: 48px;
	position: sticky;
	top: 0;
	background-color: white;
	z-index: 10;
}
.mypage-phone {
	font-size: 14px;
	font-style: normal;
	font-weight: 500;
	line-height: 22px;
}
.mypage-box {
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	height: 100%;
	width: 168px;
	height: 124px;
	flex-shrink: 0;
	border-radius: 10px;
	border: 1px solid var(--Point, #1cb08c);
	background: var(--White, #fff);
	font-size: 16px;
	font-style: normal;
	font-weight: 500;
	line-height: 24px;
}

.mypage-text-b-box {
	height: 72px;
	padding: 36px 280px 12px 16px;
	border-bottom: 2px solid #e4e4e4;
}

.mypage-text-s-box {
	height: 49px;
	padding: 12px 16px;
	border-bottom: 2px solid #e4e4e4;
}
</style>
