<template>
	<div class="text-black">
		<!--header-->
		<div class="header-container">
			<button @click="$router.go(-1)" class="btn-style">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="24"
					height="24"
					viewBox="0 0 24 24"
					fill="none"
				>
					<path
						d="M12 13.3998L7.09999 18.2998C6.91665 18.4831 6.68332 18.5748 6.39999 18.5748C6.11665 18.5748 5.88332 18.4831 5.69999 18.2998C5.51665 18.1165 5.42499 17.8831 5.42499 17.5998C5.42499 17.3165 5.51665 17.0831 5.69999 16.8998L10.6 11.9998L5.69999 7.0998C5.51665 6.91647 5.42499 6.68314 5.42499 6.3998C5.42499 6.11647 5.51665 5.88314 5.69999 5.6998C5.88332 5.51647 6.11665 5.4248 6.39999 5.4248C6.68332 5.4248 6.91665 5.51647 7.09999 5.6998L12 10.5998L16.9 5.6998C17.0833 5.51647 17.3167 5.4248 17.6 5.4248C17.8833 5.4248 18.1167 5.51647 18.3 5.6998C18.4833 5.88314 18.575 6.11647 18.575 6.3998C18.575 6.68314 18.4833 6.91647 18.3 7.0998L13.4 11.9998L18.3 16.8998C18.4833 17.0831 18.575 17.3165 18.575 17.5998C18.575 17.8831 18.4833 18.1165 18.3 18.2998C18.1167 18.4831 17.8833 18.5748 17.6 18.5748C17.3167 18.5748 17.0833 18.4831 16.9 18.2998L12 13.3998Z"
						fill="#1D1D1D"
					/>
				</svg>
			</button>
			<p class="text-style">알림</p>
		</div>
		<!--body-->
		<div class="w-full min-h-[764px] bg-white">
			<div v-if="notifications.length > 0">
				<div @click="deleteAllNotification(getUserId)" class="delete-box">
					전체 삭제
				</div>

				<div
					v-for="(noti, index) in notifications"
					:key="index"
					@click="isNotiRead(noti)"
					class="border-b border-[#E4E4E4]"
				>
					<div
						class="p-4"
						:class="{ 'bg-[#D2EFE8]': !noti.isRead, 'bg-white': noti.isRead }"
					>
						<div class="flex justify-between text-bodyBlack text-sm pb-1">
							<p>{{ noti.type }}</p>
							<p>{{ noti.createdAt }}</p>
						</div>
						<div class="text-start test-base">{{ noti.message }}</div>
					</div>
				</div>
			</div>
			<div v-else>
				<div class="text-center test-base p-12">알림이 없습니다.</div>
			</div>
		</div>
	</div>
</template>
<script setup>
import { computed, onMounted, ref } from 'vue';
import { useStore } from 'vuex';
import http from '@/api/http.js';

const store = useStore();
const getUserId = computed(() => store.state.auth.userId);
const notifications = ref([]);
const notificationCount = ref([]);

onMounted(() => {
	fetchNotifications(getUserId);
});

const fetchNotifications = async getUserId => {
	if (!getUserId.value) {
		console.log('User ID가 설정되지 않았습니다.');
		return;
	}
	try {
		const res = await http.get(`/api/notifications/${getUserId.value}`);
		notifications.value = res.data.data;
		notificationCount.value = notifications.value.length;
	} catch (error) {
		console.log('Error', error);
	} finally {
		store.commit('SET_IS_LOADING', false);
	}
};

// 알림 선택 시 읽음 처리
const isNotiRead = async noti => {
	try {
		const res = await http.patch(
			`/api/notifications/${getUserId.value}/read/${noti.messageId}`,
		);
		await fetchNotifications(getUserId);
	} catch (error) {
		console.log('Error', error);
	} finally {
		store.commit('SET_IS_LOADING', false);
	}
};

// 알림 전체 삭제
const deleteAllNotification = async () => {
	try {
		const res = await http.delete(`/api/notifications/${getUserId.value}`);
		await fetchNotifications(getUserId);
	} catch (error) {
		console.log('Error', error);
	} finally {
		store.commit('SET_IS_LOADING', false);
	}
};
</script>
<style lang="scss" scoped>
.header-container {
	display: flex;
	height: 48px;
	width: 375px;
	padding: 12px 16px;
	align-items: center;
	top: 0;
	background-color: white;
	position: sticky;
	z-index: 10;
}
.text-style {
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	position: absolute;
	font-size: 16px;
	font-weight: 700;
}
.delete-box {
	font-size: 14px;
	font-weight: 500;
	color: #555555;
	padding: 4px 16px;
	text-align: end;
}
</style>
