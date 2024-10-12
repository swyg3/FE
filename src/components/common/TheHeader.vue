<template>
	<div class="bg-white text-base header-container">
		<!--뒤로가기-->
		<button @click="$router.go(-1)" class="btn-style">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="24"
				height="24"
				viewBox="0 0 24 24"
				fill="none"
			>
				<path
					d="M3.55 12L10.9 19.35C11.15 19.6 11.2708 19.8917 11.2625 20.225C11.2542 20.5583 11.125 20.85 10.875 21.1C10.625 21.35 10.3333 21.475 10 21.475C9.66667 21.475 9.375 21.35 9.125 21.1L1.425 13.425C1.225 13.225 1.075 13 0.975001 12.75C0.875001 12.5 0.825001 12.25 0.825001 12C0.825001 11.75 0.875001 11.5 0.975001 11.25C1.075 11 1.225 10.775 1.425 10.575L9.125 2.87499C9.375 2.62499 9.67083 2.50415 10.0125 2.51249C10.3542 2.52082 10.65 2.64999 10.9 2.89999C11.15 3.14999 11.275 3.44165 11.275 3.77499C11.275 4.10832 11.15 4.39999 10.9 4.64999L3.55 12Z"
					fill="#1D1D1D"
				/>
			</svg>
		</button>
		<!--가운데 텍스트-->
		<p class="text-style">
			{{ text }}
		</p>
		<!--왼쪽 검색 아이콘-->
		<button
			v-if="!showSearchIcon"
			class="search-style"
			@click="() => router.push('/search')"
		>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="24"
				height="24"
				viewBox="0 0 24 24"
				fill="none"
			>
				<path
					d="M21 20.025C21 19.7417 20.9083 19.5083 20.725 19.325L17.0731 15.6731L15.6731 17.0731L19.325 20.725C19.5083 20.9084 19.7417 21 20.025 21C20.3083 21 20.5417 20.9084 20.725 20.725C20.9083 20.5417 21 20.3084 21 20.025Z"
					fill="#1D1D1D"
				/>
				<path
					fill-rule="evenodd"
					clip-rule="evenodd"
					d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58167 15.4183 3 11 3C6.58172 3 3 6.58167 3 11C3 15.4183 6.58172 19 11 19ZM11 17C14.3137 17 17 14.3137 17 11C17 7.68628 14.3137 5 11 5C7.6863 5 5 7.68628 5 11C5 14.3137 7.6863 17 11 17Z"
					fill="#1D1D1D"
				/>
			</svg>
		</button>
	</div>
</template>

<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();

const props = defineProps({
	text: {
		type: String,
		required: true,
	},
	showSearchIcon: {
		type: Boolean,
		required: true,
	},
});
</script>

<style lang="scss" scoped>
.header-container {
	display: flex;
	height: 48px;
	width: 375px;
	padding: 12px 16px;
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
.search-style {
	top: 50%;
	right: 0%;
	transform: translate(-50%, -50%);
	position: absolute;
}
</style>
