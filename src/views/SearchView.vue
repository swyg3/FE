<template>
	<div>
		<TheHeader :text="'검색하기'" showSearchIcon="False"></TheHeader>
		<div class="explore-bg">
			<!-- search 이벤트 받음-->
			<SearchBar @search="handleSearch"></SearchBar>
			<div class="p-4">
				<div v-if="searchresultText">
					<div v-for="(product, index) in products" :key="index">
						{{ product.name }}
					</div>
				</div>
				<div v-else class="pb-6">
					<p>검색 결과가 없습니다.</p>
				</div>
				<div class="">
					<p class="text-baseB pb-6">최근 검색</p>
					<div v-if="searchHistory">
						<div
							v-for="(history, index) in searchHistory"
							:key="index"
							class="flex items-center justify-between pb-4"
						>
							<div class="flex column gap-2">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="20"
									height="20"
									viewBox="0 0 20 20"
									fill="none"
									class="my-auto"
								>
									<path
										d="M10.75 9.375V5.75C10.75 5.5375 10.6785 5.35937 10.5356 5.21562C10.3927 5.07187 10.2156 5 10.0044 5C9.79313 5 9.61458 5.07187 9.46875 5.21562C9.32292 5.35937 9.25 5.5375 9.25 5.75V9.6875C9.25 9.79861 9.27083 9.89931 9.3125 9.98958C9.35417 10.0799 9.40972 10.1597 9.47917 10.2292L12.2677 13.0177C12.4226 13.1726 12.6007 13.2465 12.8021 13.2396C13.0035 13.2326 13.1806 13.1528 13.3333 13C13.4861 12.8472 13.5625 12.6701 13.5625 12.4688C13.5625 12.2674 13.4837 12.0885 13.3263 11.9323L10.75 9.375ZM10 18C8.8975 18 7.86146 17.7917 6.89188 17.375C5.92229 16.9583 5.07292 16.3854 4.34375 15.6562C3.61458 14.9271 3.04167 14.0767 2.625 13.105C2.20833 12.1333 2 11.0951 2 9.99042C2 8.88569 2.20833 7.84722 2.625 6.875C3.04167 5.90278 3.61458 5.05556 4.34375 4.33333C5.07292 3.61111 5.92333 3.04167 6.895 2.625C7.86667 2.20833 8.90486 2 10.0096 2C11.1143 2 12.1528 2.21 13.1252 2.63C14.0974 3.05 14.9432 3.62 15.6625 4.34C16.3817 5.06 16.951 5.90667 17.3706 6.88C17.7902 7.85333 18 8.89333 18 10C18 11.1025 17.7917 12.1385 17.375 13.1081C16.9583 14.0777 16.3889 14.9271 15.6667 15.6562C14.9444 16.3854 14.0963 16.9583 13.1223 17.375C12.1483 17.7917 11.1075 18 10 18ZM10.01 16.5C11.8082 16.5 13.3394 15.8646 14.6038 14.5938C15.8679 13.3229 16.5 11.7883 16.5 9.99C16.5 8.19181 15.8679 6.66056 14.6038 5.39625C13.3394 4.13208 11.8082 3.5 10.01 3.5C8.21167 3.5 6.67708 4.13208 5.40625 5.39625C4.13542 6.66056 3.5 8.19181 3.5 9.99C3.5 11.7883 4.13542 13.3229 5.40625 14.5938C6.67708 15.8646 8.21167 16.5 10.01 16.5Z"
										fill="#BEBEBE"
									/>
								</svg>
								<div
									@click="handleSearch(history)"
									class="text-base text-bodyBlack"
								>
									{{ history }}
								</div>
							</div>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="20"
								height="20"
								viewBox="0 0 24 24"
								fill="none"
								@click="deleteSearchHistory(index)"
							>
								<path
									d="M12 13.3998L7.09999 18.2998C6.91665 18.4831 6.68332 18.5748 6.39999 18.5748C6.11665 18.5748 5.88332 18.4831 5.69999 18.2998C5.51665 18.1165 5.42499 17.8831 5.42499 17.5998C5.42499 17.3165 5.51665 17.0831 5.69999 16.8998L10.6 11.9998L5.69999 7.0998C5.51665 6.91647 5.42499 6.68314 5.42499 6.3998C5.42499 6.11647 5.51665 5.88314 5.69999 5.6998C5.88332 5.51647 6.11665 5.4248 6.39999 5.4248C6.68332 5.4248 6.91665 5.51647 7.09999 5.6998L12 10.5998L16.9 5.6998C17.0833 5.51647 17.3167 5.4248 17.6 5.4248C17.8833 5.4248 18.1167 5.51647 18.3 5.6998C18.4833 5.88314 18.575 6.11647 18.575 6.3998C18.575 6.68314 18.4833 6.91647 18.3 7.0998L13.4 11.9998L18.3 16.8998C18.4833 17.0831 18.575 17.3165 18.575 17.5998C18.575 17.8831 18.4833 18.1165 18.3 18.2998C18.1167 18.4831 17.8833 18.5748 17.6 18.5748C17.3167 18.5748 17.0833 18.4831 16.9 18.2998L12 13.3998Z"
									fill="#BEBEBE"
								/>
							</svg>
						</div>
					</div>
					<div v-else>검색 기록이 없습니다.</div>
				</div>
			</div>
		</div>
	</div>
</template>
<script setup>
import { onMounted, ref } from 'vue';
import SearchBar from '@/components/common/SearchBar.vue';
import TheHeader from '@/components/common/TheHeader.vue';
import http from '@/api/http.js';
import { useRouter } from 'vue-router';

const router = useRouter();
const products = ref([]);
const searchHistory = ref([]);
const searchresultText = ref(true);
const encodeSearchTerm = ref('');

onMounted(() => {
	loadSearchHistory();
});

// localstorage 불러오기
const loadSearchHistory = () => {
	const history = JSON.parse(localStorage.getItem('searchHistory')) || [];
	searchHistory.value = history;
};
// localstorage 저장 (최신 검색어 최상단)
const saveSearchHistory = searchTerm => {
	const history = JSON.parse(localStorage.getItem('searchHistory')) || [];
	// 이미 있는 검색어 index 가져와서 제거
	const index = history.indexOf(searchTerm);
	if (index !== -1) {
		history.splice(index, 1); // 기존 검색어 삭제
	}
	// 새로운 검색어를 배열의 맨 앞에 추가
	history.unshift(searchTerm);
	localStorage.setItem('searchHistory', JSON.stringify(history));
};
// localstorage 삭제
const deleteSearchHistory = index => {
	searchHistory.value.splice(index, 1);
	// 업데이트된 검색 기록 저장
	localStorage.setItem('searchHistory', JSON.stringify(searchHistory.value));
};

const handleSearch = searchTerm => {
	saveSearchHistory(searchTerm);
	fetchSearchResults(searchTerm);
	loadSearchHistory();
};

const fetchSearchResults = async searchTerm => {
	encodeSearchTerm.value = encodeURIComponent(searchTerm);
	try {
		const res = await http.get(
			`/api/products/search?searchTerm=${encodeSearchTerm.value}&sortBy=distanceDiscountScore&order=desc&limit=100`,
		);
		products.value = res.data.data;
		if (products.value.length) {
			searchresultText.value = true;
			router.push(
				`/searchResult/${encodeSearchTerm.value}/distanceDiscountScore`,
			);
		} else {
			searchresultText.value = false;
		}
	} catch (error) {
		searchresultText.value = false;
		console.error('Error', error);
	}
};
</script>
<style lang="scss" scoped>
.explore-bg {
	width: 375px;
	min-height: 716px;
	background-image: url('/category/categoryBg.png');
	background-color: white;
	color: var(--Text, #1d1d1d);
	background-attachment: fixed;
	background-repeat: no-repeat;
	background-position: center;
}
</style>
