<template>
	<div class="bg-white">
		<div class="text-baseB address-book-header">
			<img
				src="/addressBook/arrow_left.png"
				class="pl-4 absolute left-0"
				@click="goBack"
			/>
			<div>주소검색</div>
		</div>
		<!-- 검색창 -->
		<div class="flex justify-center mt-5">
			<div class="search-box">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="24"
					height="24"
					viewBox="0 0 24 24"
					fill="none"
				>
					<path
						d="M21 20.025C21 19.7417 20.9083 19.5083 20.725 19.325L17.0731 15.6731L15.6731 17.0731L19.325 20.725C19.5083 20.9084 19.7417 21 20.025 21C20.3083 21 20.5417 20.9084 20.725 20.725C20.9083 20.5417 21 20.3084 21 20.025Z"
						fill="#BEBEBE"
					/>
					<path
						fill-rule="evenodd"
						clip-rule="evenodd"
						d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58167 15.4183 3 11 3C6.58172 3 3 6.58167 3 11C3 15.4183 6.58172 19 11 19ZM11 17C14.3137 17 17 14.3137 17 11C17 7.68628 14.3137 5 11 5C7.6863 5 5 7.68628 5 11C5 14.3137 7.6863 17 11 17Z"
						fill="#BEBEBE"
					/>
				</svg>
				<input
					type="text"
					class="p-1 w-[250px]"
					placeholder="지번, 도로명, 건물명으로 검색하세요."
				/>
			</div>
		</div>
		<!-- <div class="mt-5 flex justify-center">
			<div class="current-locaiton-box border">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="22"
					height="22"
					viewBox="0 0 22 22"
					fill="none"
					class="mr-2"
				>
					<path
						d="M9.99999 21.9498V19.9498C7.91665 19.7165 6.12915 18.854 4.63749 17.3623C3.14582 15.8706 2.28332 14.0831 2.04999 11.9998H0.0499878V9.9998H2.04999C2.28332 7.91647 3.14582 6.12897 4.63749 4.6373C6.12915 3.14564 7.91665 2.28314 9.99999 2.0498V0.0498047H12V2.0498C14.0833 2.28314 15.8708 3.14564 17.3625 4.6373C18.8542 6.12897 19.7167 7.91647 19.95 9.9998H21.95V11.9998H19.95C19.7167 14.0831 18.8542 15.8706 17.3625 17.3623C15.8708 18.854 14.0833 19.7165 12 19.9498V21.9498H9.99999ZM11 17.9998C12.9333 17.9998 14.5833 17.3165 15.95 15.9498C17.3167 14.5831 18 12.9331 18 10.9998C18 9.06647 17.3167 7.41647 15.95 6.0498C14.5833 4.68314 12.9333 3.9998 11 3.9998C9.06665 3.9998 7.41665 4.68314 6.04999 6.0498C4.68332 7.41647 3.99999 9.06647 3.99999 10.9998C3.99999 12.9331 4.68332 14.5831 6.04999 15.9498C7.41665 17.3165 9.06665 17.9998 11 17.9998ZM11 14.9998C9.89999 14.9998 8.95832 14.6081 8.17499 13.8248C7.39165 13.0415 6.99999 12.0998 6.99999 10.9998C6.99999 9.89981 7.39165 8.95814 8.17499 8.1748C8.95832 7.39147 9.89999 6.9998 11 6.9998C12.1 6.9998 13.0417 7.39147 13.825 8.1748C14.6083 8.95814 15 9.89981 15 10.9998C15 12.0998 14.6083 13.0415 13.825 13.8248C13.0417 14.6081 12.1 14.9998 11 14.9998ZM11 12.9998C11.55 12.9998 12.0208 12.804 12.4125 12.4123C12.8042 12.0206 13 11.5498 13 10.9998C13 10.4498 12.8042 9.97897 12.4125 9.58731C12.0208 9.19564 11.55 8.9998 11 8.9998C10.45 8.9998 9.97915 9.19564 9.58749 9.58731C9.19582 9.97897 8.99999 10.4498 8.99999 10.9998C8.99999 11.5498 9.19582 12.0206 9.58749 12.4123C9.97915 12.804 10.45 12.9998 11 12.9998Z"
						fill="#031F34"
					/>
				</svg>
				<div>현재위치로 찾기</div>
			</div>
		</div> -->
	</div>
</template>

<script setup>
import { useRouter } from 'vue-router';
import { useStore } from 'vuex';
import { onMounted, ref } from 'vue';
import { saveAddressApi } from '@/api/auth.js';

const router = useRouter();
const store = useStore();

onMounted(() => {
	// searchAddress();
});

const goBack = () => {
	router.go(-1);
};
</script>

<style lang="scss" scoped>
.address-book-header {
	display: flex;
	justify-content: center;
	align-items: center;
	height: 48px;
	position: sticky;
	top: 0;
	background-color: white;
	z-index: 10;
}

.search-box {
	display: flex;
	width: 342px;
	height: 48px;
	padding: 9px 13px 9px 16px;
	align-items: center;
	gap: 8px;
	flex-shrink: 0;
	border-radius: 10px;
	border: 1px solid var(--Primary, #031f34);
	background: var(--White, #fff);
}

.current-locaiton-box {
	width: 342px;
	height: 40px;
	display: flex;
	justify-content: center;
	align-items: center;
	border-radius: 6px;
}
</style>
