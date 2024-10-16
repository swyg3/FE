<template>
	<div class="text-black">
		<TheHeader text="알림" :showSearchIcon="false"></TheHeader>
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
