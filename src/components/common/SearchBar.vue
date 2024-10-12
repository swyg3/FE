<template>
	<div class="pt-4">
		<div class="search-bar">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="24"
				height="24"
				viewBox="0 0 24 24"
				fill="none"
				class="my-auto mr-2"
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
				v-model="searchQuery"
				@keyup.enter="emitSearch"
				placeholder="음식이나 가게 이름을 입력해주세요"
				class="search-bar-input"
			/>
		</div>
	</div>
</template>

<script setup>
import { ref } from 'vue';

const searchQuery = ref('');

// setup 함수의 두 번째 인자로 emit을 받아 사용
const emit = defineEmits(['search']);

// 부모 컴포넌트에 search 전달
const emitSearch = () => {
	emit('search', searchQuery.value);
	searchQuery.value = '';
};
</script>

<style lang="scss" scoped>
.search-bar {
	width: 342px;
	height: 48px;
	border: 1px solid var(--Primary, #031f34);
	border-radius: 10px;
	padding: 9px 13px 9px 16px;
	display: flex;
	margin: 0 auto;
	background: var(--White, #fff);
}
.search-bar-input {
	width: 100%;
}
.search-bar-input::placeholder {
	color: var(--text-disabled-ic-disabled, #bebebe);
}
</style>
