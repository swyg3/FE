<template>
	<div class="bg-white">
		<div class="text-baseB address-book-header">
			<button @click="goBack" class="pl-4 absolute left-0">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="24"
					height="24"
					viewBox="0 0 24 24"
					fill="none"
				>
					<path
						d="M3.54995 12L10.9 19.35C11.15 19.6 11.2708 19.8917 11.2625 20.225C11.2541 20.5583 11.125 20.85 10.875 21.1C10.625 21.35 10.3333 21.475 9.99995 21.475C9.66662 21.475 9.37495 21.35 9.12495 21.1L1.42495 13.425C1.22495 13.225 1.07495 13 0.974951 12.75C0.874951 12.5 0.824951 12.25 0.824951 12C0.824951 11.75 0.874951 11.5 0.974951 11.25C1.07495 11 1.22495 10.775 1.42495 10.575L9.12495 2.87499C9.37495 2.62499 9.67078 2.50415 10.0125 2.51249C10.3541 2.52082 10.65 2.64999 10.9 2.89999C11.15 3.14999 11.275 3.44165 11.275 3.77499C11.275 4.10832 11.15 4.39999 10.9 4.64999L3.54995 12Z"
						fill="#1D1D1D"
					/>
				</svg>
			</button>
			<div>주소관리</div>
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
		<div class="mt-5">
			<div
				v-for="(individualAddress, index) in addressBook"
				:key="index"
				class="flex p-3 items-center address-individual-box"
				:class="{
					'bg-[#d2efe8]': individualAddress.isCurrent,
					'bg-white': !individualAddress.isCurrent,
				}"
				@click="clickIndividualAddress(individualAddress.locationId)"
			>
				<svg
					v-if="individualAddress.isCurrent"
					xmlns="http://www.w3.org/2000/svg"
					width="24"
					height="24"
					viewBox="0 0 24 24"
					fill="none"
				>
					<path
						d="M7 14V20C7 20.2833 6.90417 20.5208 6.7125 20.7125C6.52083 20.9042 6.28333 21 6 21C5.71667 21 5.47917 20.9042 5.2875 20.7125C5.09583 20.5208 5 20.2833 5 20V5C5 4.71667 5.09583 4.47917 5.2875 4.2875C5.47917 4.09583 5.71667 4 6 4H13.175C13.4083 4 13.6167 4.075 13.8 4.225C13.9833 4.375 14.1 4.56667 14.15 4.8L14.4 6H19C19.2833 6 19.5208 6.09583 19.7125 6.2875C19.9042 6.47917 20 6.71667 20 7V15C20 15.2833 19.9042 15.5208 19.7125 15.7125C19.5208 15.9042 19.2833 16 19 16H13.825C13.5917 16 13.3833 15.925 13.2 15.775C13.0167 15.625 12.9 15.4333 12.85 15.2L12.6 14H7Z"
						fill="#1CB08C"
					/>
				</svg>
				<svg
					v-else
					xmlns="http://www.w3.org/2000/svg"
					width="24"
					height="24"
					viewBox="0 0 24 24"
					fill="none"
				>
					<path
						d="M12 19.35C14.0333 17.4833 15.5417 15.7875 16.525 14.2625C17.5083 12.7375 18 11.3833 18 10.2C18 8.38333 17.4208 6.89583 16.2625 5.7375C15.1042 4.57917 13.6833 4 12 4C10.3167 4 8.89583 4.57917 7.7375 5.7375C6.57917 6.89583 6 8.38333 6 10.2C6 11.3833 6.49167 12.7375 7.475 14.2625C8.45833 15.7875 9.96667 17.4833 12 19.35ZM12 21.325C11.7667 21.325 11.5333 21.2833 11.3 21.2C11.0667 21.1167 10.8583 20.9917 10.675 20.825C9.59167 19.825 8.63333 18.85 7.8 17.9C6.96667 16.95 6.27083 16.0292 5.7125 15.1375C5.15417 14.2458 4.72917 13.3875 4.4375 12.5625C4.14583 11.7375 4 10.95 4 10.2C4 7.7 4.80417 5.70833 6.4125 4.225C8.02083 2.74167 9.88333 2 12 2C14.1167 2 15.9792 2.74167 17.5875 4.225C19.1958 5.70833 20 7.7 20 10.2C20 10.95 19.8542 11.7375 19.5625 12.5625C19.2708 13.3875 18.8458 14.2458 18.2875 15.1375C17.7292 16.0292 17.0333 16.95 16.2 17.9C15.3667 18.85 14.4083 19.825 13.325 20.825C13.1417 20.9917 12.9333 21.1167 12.7 21.2C12.4667 21.2833 12.2333 21.325 12 21.325ZM12 12C12.55 12 13.0208 11.8042 13.4125 11.4125C13.8042 11.0208 14 10.55 14 10C14 9.45 13.8042 8.97917 13.4125 8.5875C13.0208 8.19583 12.55 8 12 8C11.45 8 10.9792 8.19583 10.5875 8.5875C10.1958 8.97917 10 9.45 10 10C10 10.55 10.1958 11.0208 10.5875 11.4125C10.9792 11.8042 11.45 12 12 12Z"
						fill="#1D1D1D"
					/>
				</svg>
				<div class="pl-2">
					<div class="text-baseB">
						{{ individualAddress.searchTerm }}
					</div>
					<div class="text-base text-bodyBlack">
						{{ decodeURIComponent(individualAddress.roadAddress) }}
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import { useRouter } from 'vue-router';
import { useStore } from 'vuex';
import {
	getAddressBookApi,
	setCurrentApi,
	saveAddressApi,
} from '@/api/auth.js';

const router = useRouter();
const store = useStore();

const addressBook = ref([]);
const enteredAddress = ref('');
const searchedAddress = ref('');

onMounted(() => {
	getAddressBook();
});

const getAddressBook = async () => {
	store.commit('SET_IS_LOADING', true);

	try {
		const response = await getAddressBookApi();
		console.log('getAddressBook', response);

		if (response.status === 200) {
			addressBook.value = response.data;
			console.log('addressBook.value', addressBook.value);
		}
	} catch (error) {
		alert(error);
	} finally {
		store.commit('SET_IS_LOADING', false);
	}
};

const clickIndividualAddress = async locationId => {
	try {
		store.commit('SET_IS_LOADING', true);

		const response = await setCurrentApi(locationId);

		if (response.status === 200) {
			store.commit(
				'auth/SET_SELECTED_ADDRESS',
				decodeURIComponent(response.data.roadAddress),
			);
			getAddressBook();
		}
	} catch (error) {
		alert(error);
	} finally {
		store.commit('SET_IS_LOADING', false);
	}
};

const searchAddress = () => {
	new daum.Postcode({
		oncomplete: async function (data) {
			enteredAddress.value = data.address;
			//주소저장해주는 api 호출
			//응답값받아오면   addressBook으로 넘겨서  주소리스트 받아오고
			//bool값이  true인게  기본주소임 그거 아이콘이랑 배경색클래스 바인딩해주고
			//현재위치는 서비스준비중으로 해두고
			//기본주소를 바꾸고 싶을떄   클릭하면 주소고유아디넘겨주면 주소리스트 bool값이 바뀌고 나는
			//주소리스트를 다시 받아와서 보여줌
			//그리고 기본주소는  스토어 저장해두기
			store.commit('SET_IS_LOADING', true);

			try {
				const response = await saveAddressApi({
					searchTerm: searchedAddress.value,
					roadAddress: enteredAddress.value,
				});

				if (response.status === 201) {
					getAddressBook();
				}
			} catch (error) {
				alert(error);
			} finally {
				store.commit('SET_IS_LOADING', false);
			}
		},
		onsearch: function (data) {
			// 검색 결과가 반환될 때의 처리
			searchedAddress.value = data.q; // Daum API의 주소 검색 결과
		},
	}).open();
};

const goBack = () => {
	router.push('/main');
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

.address-individual-box {
	width: 375px;
	height: 84px;
	flex-shrink: 0;
	border-bottom: 2px solid #e4e4e4;
}
</style>
