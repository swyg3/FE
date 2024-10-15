<template>
	<div class="h-full mypage-bg">
		<div class="text-baseB mypage-header">마이페이지</div>

		<div class="px-[16px]">
			<div class="text-lg pt-[16px]">
				<span>Lv.</span>
				<span>{{ level }}</span>
				<span class="pl-2">{{ title }}</span>
			</div>

			<div class="text-lgB">{{ getUserName }}</div>
			<div class="text-bodyBlack mypage-period-activity">
				{{ periodOfActivity }}부터
			</div>
			<div class="flex gap-1">
				<div class="mt-5 mypage-box">
					<img src="/myPage/umbrage.png" class="p-1" />
					<div class="">문코를 통해</div>
					<div class="font-bold">
						<span class="px-1">{{ orderCount || '-' }}</span>
						<span>끼의 음식을</span>
					</div>
					<div class="">구출했어요!</div>
				</div>
				<div class="mt-5 mypage-box">
					<img src="/myPage/pig.png" class="p-1" />
					<div class="">지금까지</div>
					<div class="font-bold">
						<span class="px-1">{{
							totalSavings ? totalSavings.toLocaleString() : '-'
						}}</span>
						<span>원의 금액을</span>
					</div>
					<div>절약했어요!</div>
				</div>
			</div>
		</div>
		<div class="mt-7">
			<div>
				<div class="text-baseB mypage-text-b-box">내 정보 관리</div>
				<div
					class="flex justify-between mypage-text-s-box"
					@click="() => router.push('/addressBook')"
				>
					<div>주소 관리</div>
					<div class="text-sm text-bodyBlack">{{ selectedAddress }}</div>
				</div>
			</div>
			<div>
				<div class="text-baseB mypage-text-b-box">계정 관리</div>
				<div class="mypage-text-s-box" @click="signOut">로그아웃</div>
				<div class="mypage-text-s-box" @click="cancelMembership">탈퇴하기</div>
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
		<Modal
			:visible="isVisible"
			:popupType="popupType"
			@confirm-membership="confirmMembership"
			@close-modal="closeModal"
		/>
	</div>
</template>

<script setup>
import { computed, ref, onMounted } from 'vue';
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';
import {
	signOutApi,
	cancelMembershipApi,
	fetchUserDetailsApi,
} from '@/api/auth.js';

const store = useStore();
const router = useRouter();

const isVisible = ref(false);
const popupType = ref('');

const getUserName = computed(() => store.state.auth.userName);
const selectedAddress = computed(() => store.state.auth.selectedAddress);
const userId = computed(() => store.state.auth.userId);

const level = ref(0);
const title = ref('');
const orderCount = ref(0);
const totalSavings = ref(0);
const periodOfActivity = ref('');

onMounted(() => {
	fetchUserDetails();
});

const fetchUserDetails = async () => {
	const response = await fetchUserDetailsApi(userId.value);

	if (response.data.success === true) {
		const data = response.data.data;
		console.log('data', data);

		level.value = data.level;
		title.value = data.title;
		orderCount.value = data.orderCount;
		totalSavings.value = data.totalSavings;

		const date = new Date(data.registeredAt);

		const year = date.getFullYear().toString().substring(2);

		// 원하는 형식으로 날짜를 포맷 (연도 조정 포함)
		const formattedDate = `${year}년 ${date.toLocaleDateString('ko-KR', {
			month: 'long',
			day: 'numeric',
		})}`;

		periodOfActivity.value = formattedDate;
	}
};

const openBottomSheet = contentType => {
	store.state.isVisible = true;
	store.state.popupType = contentType;
};

const signOut = async () => {
	store.commit('SET_IS_LOADING', true);
	try {
		const response = await signOutApi();

		if (response.data.success === true) {
			store.commit('auth/SET_CLEAR_TOKEN');
			router.push('/');
		}
	} catch (error) {
		alert(error);
	} finally {
		store.commit('SET_IS_LOADING', false);
	}
};

const cancelMembership = () => {
	isVisible.value = true;
	popupType.value = 'cancleMembership';
};

const confirmMembership = async () => {
	store.commit('SET_IS_LOADING', true);

	try {
		const uid = store.state.auth.userId;
		const response = await cancelMembershipApi(uid);

		if (response.data.success === true) {
			store.commit('auth/SET_CLEAR_TOKEN');
			router.push('/');
		}
	} catch (error) {
		alert(error);
	} finally {
		store.commit('SET_IS_LOADING', false);
	}
};

const closeModal = () => {
	isVisible.value = false;
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
.mypage-period-activity {
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
