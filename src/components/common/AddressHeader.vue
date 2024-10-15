<template>
	<div class="text-base address-book-header">
		<div @click="() => router.push('/addressBook')" class="flex">
			<div class="truncate">{{ selectedAddress }}</div>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="24"
				height="24"
				viewBox="0 0 24 24"
				fill="none"
			>
				<path
					d="M12 14.975C11.8667 14.975 11.7417 14.9542 11.625 14.9125C11.5083 14.8708 11.4 14.8 11.3 14.7L6.69999 10.1C6.51665 9.91665 6.42499 9.68332 6.42499 9.39999C6.42499 9.11665 6.51665 8.88332 6.69999 8.69999C6.88332 8.51665 7.11665 8.42499 7.39999 8.42499C7.68332 8.42499 7.91665 8.51665 8.09999 8.69999L12 12.6L15.9 8.69999C16.0833 8.51665 16.3167 8.42499 16.6 8.42499C16.8833 8.42499 17.1167 8.51665 17.3 8.69999C17.4833 8.88332 17.575 9.11665 17.575 9.39999C17.575 9.68332 17.4833 9.91665 17.3 10.1L12.7 14.7C12.6 14.8 12.4917 14.8708 12.375 14.9125C12.2583 14.9542 12.1333 14.975 12 14.975Z"
					fill="#1CB08C"
				/>
			</svg>
		</div>
		<button
			v-if="isRead"
			class="search-style"
			@click="() => router.push('/notification')"
		>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="24"
				height="24"
				viewBox="0 0 24 24"
				fill="none"
			>
				<path
					d="M5 19C4.71667 19 4.47917 18.9042 4.2875 18.7125C4.09583 18.5208 4 18.2833 4 18C4 17.7167 4.09583 17.4792 4.2875 17.2875C4.47917 17.0958 4.71667 17 5 17H6V10C6 8.61667 6.41667 7.3875 7.25 6.3125C8.08333 5.2375 9.16667 4.53333 10.5 4.2V3.5C10.5 3.08333 10.6458 2.72917 10.9375 2.4375C11.2292 2.14583 11.5833 2 12 2C12.4167 2 12.7708 2.14583 13.0625 2.4375C13.3542 2.72917 13.5 3.08333 13.5 3.5V4.2C14.8333 4.53333 15.9167 5.2375 16.75 6.3125C17.5833 7.3875 18 8.61667 18 10V17H19C19.2833 17 19.5208 17.0958 19.7125 17.2875C19.9042 17.4792 20 17.7167 20 18C20 18.2833 19.9042 18.5208 19.7125 18.7125C19.5208 18.9042 19.2833 19 19 19H5ZM12 22C11.45 22 10.9792 21.8042 10.5875 21.4125C10.1958 21.0208 10 20.55 10 20H14C14 20.55 13.8042 21.0208 13.4125 21.4125C13.0208 21.8042 12.55 22 12 22ZM8 17H16V10C16 8.9 15.6083 7.95833 14.825 7.175C14.0417 6.39167 13.1 6 12 6C10.9 6 9.95833 6.39167 9.175 7.175C8.39167 7.95833 8 8.9 8 10V17Z"
					fill="#1D1D1D"
				/>
				<circle cx="22" cy="2" r="2" fill="#1CB08C" />
			</svg>
		</button>
		<button v-else @click="() => router.push('/notification')">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="24"
				height="24"
				viewBox="0 0 24 24"
				fill="none"
			>
				<path
					d="M5 19C4.71667 19 4.47917 18.9042 4.2875 18.7125C4.09583 18.5208 4 18.2833 4 18C4 17.7167 4.09583 17.4792 4.2875 17.2875C4.47917 17.0958 4.71667 17 5 17H6V10C6 8.61667 6.41667 7.3875 7.25 6.3125C8.08333 5.2375 9.16667 4.53333 10.5 4.2V3.5C10.5 3.08333 10.6458 2.72917 10.9375 2.4375C11.2292 2.14583 11.5833 2 12 2C12.4167 2 12.7708 2.14583 13.0625 2.4375C13.3542 2.72917 13.5 3.08333 13.5 3.5V4.2C14.8333 4.53333 15.9167 5.2375 16.75 6.3125C17.5833 7.3875 18 8.61667 18 10V17H19C19.2833 17 19.5208 17.0958 19.7125 17.2875C19.9042 17.4792 20 17.7167 20 18C20 18.2833 19.9042 18.5208 19.7125 18.7125C19.5208 18.9042 19.2833 19 19 19H5ZM12 22C11.45 22 10.9792 21.8042 10.5875 21.4125C10.1958 21.0208 10 20.55 10 20H14C14 20.55 13.8042 21.0208 13.4125 21.4125C13.0208 21.8042 12.55 22 12 22ZM8 17H16V10C16 8.9 15.6083 7.95833 14.825 7.175C14.0417 6.39167 13.1 6 12 6C10.9 6 9.95833 6.39167 9.175 7.175C8.39167 7.95833 8 8.9 8 10V17Z"
					fill="#1D1D1D"
				/>
			</svg>
		</button>
	</div>
</template>

<script setup>
import { useRouter } from 'vue-router';
import { useStore } from 'vuex';
import http from '@/api/http.js';
import { ref, computed, onMounted } from 'vue';

const store = useStore();
const router = useRouter();

const props = defineProps({
	// isNotificationRead: {
	// 	type: Boolean,
	// 	required: true,
	// },
});

const notifications = ref([]);
const selectedAddress = computed(() => store.state.auth.selectedAddress);
const getUserId = computed(() => store.state.auth.userId);
const isRead = ref(false);

onMounted(() => {
	fetchNotifications();
});
// 알림 가져오기
const fetchNotifications = async () => {
	try {
		const res = await http.get(`/api/notifications/${getUserId.value}`);
		notifications.value = res.data.data;
		// console.log('알림', notifications.value.length);
		if (notifications.value.length) {
			isRead.value = true;
			// console.log('isread t-', Boolean(notifications.value.length));
		} else {
			isRead.value = false;
			// console.log('isread f-', Boolean(notifications.value));
		}
	} catch (error) {
		console.log('Error', error);
	}
};
</script>

<style lang="scss" scoped>
.address-book-header {
	display: flex;
	height: 48px;
	width: 375px;
	padding: 12px 16px;
	justify-content: space-between;
	align-items: center;
	top: 0;
	background-color: white;
	position: sticky;
	z-index: 10;
}

.truncate {
	width: 200px;
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
}
</style>
