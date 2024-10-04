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
					@click="searchAddress"
				/>
			</div>
		</div>
		<div class="mt-5 flex justify-center">
			<div class="current-locaiton-box border">
				<div>아이콘</div>
				<div>현재위치로 찾기</div>
			</div>
		</div>
	</div>
</template>

<script setup>
import { useRouter } from 'vue-router';
import { ref } from 'vue';
import http from '@/api/http.js';
const router = useRouter();

const enteredAddress = ref('');
const searchedAddress = ref('');

const searchAddress = async () => {
	new daum.Postcode({
		oncomplete: function (data) {
			enteredAddress.value = data.address;
			console.log('enteredAddress', enteredAddress.value);
			//주소저장해주는 api 호출
			//응답값받아오면   addressBook으로 넘겨서  주소리스트 받아오고
			//bool값이  true인게  기본주소임 그거 아이콘이랑 배경색클래스 바인딩해주고
			//현재위치는 서비스준비중으로 해두고
			//기본주소를 바꾸고 싶을떄   클릭하면 주소고유아디넘겨주면 주소리스트 bool값이 바뀌고 나는
			//주소리스트를 다시 받아와서 보여줌
			//그리고 기본주소는  스토어 저장해두기
		},
		onsearch: function (data) {
			// 검색 결과가 반환될 때의 처리
			searchedAddress.value = data.q; // Daum API의 주소 검색 결과
			console.log('data1', data);
			console.log('searchedAddress', searchedAddress.value);
		},
	}).open();
};

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
