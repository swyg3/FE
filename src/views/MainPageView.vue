<template>
	<div>
		<AddressHeader></AddressHeader>
		<div class="mainpage-bg">
			<!--welcome + 문구 + 카드-->
			<img
				src="/mainPage/welcome.png"
				width="194px"
				height="auto"
				class="mx-auto py-10 mainpage-welcome"
			/>
			<div class="text-lgB text-center pb-10">
				<p>어서오세요</p>
				<div class="font-bold text-lg py-[7px]">
					<span>Lv.</span>
					<span>{{ level }}</span>
					<span class="pl-2">{{ title }}</span>
				</div>
				<p>{{ getUserName }}</p>
			</div>
			<div class="flex gap-1 my-6 justify-center text-center">
				<!-- <UserCard></UserCard> -->
				<div class="mainpage-userCard">
					<img src="/mainPage/mainLeaf.svg" class="w-6 h-4 mx-auto mb-1" />
					<p>문코를 통해</p>
					<p class="text-baseB">{{ orderCount || '-' }}끼의 음식을</p>
					<p>구출했어요!</p>
				</div>
				<div class="mainpage-userCard">
					<img src="/mainPage/mainPig.svg" class="w-6 h-4 mx-auto mb-1" />
					<p>지금까지</p>
					<p class="px-1 text-baseB">
						{{ totalSavings ? totalSavings.toLocaleString() : '-' }}원의 금액을
					</p>
					<p>절약했어요!</p>
				</div>
			</div>

			<!--주문했던 가게 게시글 리스트-->
			<div v-if="orderList">
				<div class="p-4">
					<p class="text-baseB">
						{{ getUserName }}님이 주문했던 가게에서<br />
						마감할인 게시글이 올라왔어요!
					</p>
				</div>
				<div class="flex whitespace-nowrap overflow-auto px-3 noScrollBar">
					<MainItemCard
						v-for="(product, index) in nearestProducts"
						:key="index"
						:product="product"
						@click="goToDetailPage(product)"
					/>
				</div>
			</div>

			<!--문코 추천 리스트-->
			<div class="px-4 pt-6 pb-4 flex justify-between">
				<p class="text-baseB">문코의 추천</p>
				<div class="flex">
					<button class="text-sm" @click="router.push('/explore')">
						더보기
					</button>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="24"
						height="24"
						viewBox="0 0 24 24"
						fill="none"
					>
						<path
							d="M12.6 12L8.69999 8.10005C8.51665 7.91672 8.42499 7.68338 8.42499 7.40005C8.42499 7.11672 8.51665 6.88338 8.69999 6.70005C8.88332 6.51672 9.11665 6.42505 9.39999 6.42505C9.68332 6.42505 9.91665 6.51672 10.1 6.70005L14.7 11.3C14.8 11.4 14.8708 11.5084 14.9125 11.625C14.9542 11.7417 14.975 11.8667 14.975 12C14.975 12.1334 14.9542 12.2584 14.9125 12.375C14.8708 12.4917 14.8 12.6 14.7 12.7L10.1 17.3C9.91665 17.4834 9.68332 17.575 9.39999 17.575C9.11665 17.575 8.88332 17.4834 8.69999 17.3C8.51665 17.1167 8.42499 16.8834 8.42499 16.6C8.42499 16.3167 8.51665 16.0834 8.69999 15.9L12.6 12Z"
							fill="#1D1D1D"
						/>
					</svg>
				</div>
			</div>
			<div class="flex whitespace-nowrap overflow-auto px-3 noScrollBar">
				<MainItemCard
					v-for="(product, index) in products"
					:key="index"
					:product="product"
					@click="goToDetailPage(product)"
				/>
			</div>
			<!--뉴스레터 환경퀴즈 음식판매-->
			<div class="grid gap-1 gap-y-2 pt-14 pb-8 px-4">
				<div @click="noContents" class="mainpage-bottomCard">
					<p class="text-baseB">문코의 달달 뉴스레터 보러가기</p>

					<p class="mainpage-bottomCard-body">
						문코는 환경오염을 해결하기 위해 만들어졌어요.<br />
						문코가 매달 전하는 세상의 환경 소식을 들어보세요.
					</p>
				</div>
				<div @click="noContents" class="mainpage-bottomCard">
					<p class="text-baseB">환경 퀴즈 참여하기</p>
					<div class="mainpage-bottomCard-body">
						<p>
							문코는 환경오염을 해결하기 위해 만들어졌어요.<br />
							환경 퀴즈에 참여해보세요!
						</p>
					</div>
				</div>
			</div>
		</div>
		<Modal
			:visible="isVisible"
			:popupType="popupType"
			:text="text"
			@gpsCancle="gpsCancle"
			@gpsConsent="gpsConsent"
			@close-modal="closeModal"
			@active="isActive"
		/>
	</div>
</template>

<script setup>
import { useRouter } from 'vue-router';
import { useStore } from 'vuex';
import { ref, onMounted, computed } from 'vue';
import { gpsConsentApi, fetchUserDetailsApi } from '@/api/auth.js';
import {
	fetchProductApi,
	goToproductDetailPageUrl,
	orderListApi,
} from '@/api/product.js';
import MainItemCard from '@/components/common/MainItemCard.vue';
import AddressHeader from '@/components/common/AddressHeader.vue';

const router = useRouter();
const store = useStore();

const isVisible = ref(false);
const popupType = ref('');
const isActive = ref(false);
const text = ref('');

const level = ref(0);
const title = ref('');
const orderCount = ref(0);
const totalSavings = ref(0);

const getUserName = computed(() => store.state.auth.userName);
const getUserId = computed(() => store.state.auth.userId);

const products = ref([]);
const nearestProducts = ref([]);
const orderList = ref('');

onMounted(() => {
	fetchUserDetails();
	fetchRecommendedProducts();
	if (store.state.auth.gpsConsent === false) {
		isVisible.value = true;
		popupType.value = 'gps';
	} else {
		// isVisible.value = true;
		// popupType.value = 'gps';
		isVisible.value = false;
	}
	fetchNearestProducts();
	fetchOrders();
});
// 콘텐츠 준비중 모달
const noContents = () => {
	isVisible.value = true;
	isActive.value = true;
	popupType.value = 'noContents';
};
// 모달 닫기
const closeModal = () => {
	isVisible.value = false;
	isActive.value = false;
};

const fetchUserDetails = async () => {
	store.commit('SET_IS_LOADING', true);
	try {
		const response = await fetchUserDetailsApi(getUserId.value);

		if (response.data.success === true) {
			const data = response.data.data;

			level.value = data.level;
			title.value = data.title;
			orderCount.value = data.orderCount;
			totalSavings.value = data.totalSavings;
		}
	} catch (error) {
		alert(error);
	} finally {
		store.commit('SET_IS_LOADING', false);
	}
};

const gpsConsent = async () => {
	store.commit('SET_IS_LOADING', true);
	try {
		if (navigator.geolocation) {
			// GPS 위치 요청
			navigator.geolocation.getCurrentPosition(
				async position => {
					// 성공 시: 위도와 경도 설정
					if (position.coords.latitude && position.coords.longitude) {
						const response = await gpsConsentApi({
							longitude: position.coords.longitude,
							latitude: position.coords.latitude,
							agree: true,
						});

						if (response.status === 200) {
							store.commit('auth/SET_GPS_CONSENT', true);
							store.commit(
								'auth/SET_SELECTED_ADDRESS',
								decodeURIComponent(response.data.roadAddress),
							);
							isVisible.value = false;
						}
					}
					store.commit('SET_IS_LOADING', false);
				},
				error => {
					switch (error.code) {
						case error.PERMISSION_DENIED:
							alert('위치 권한이 거부되었습니다.');
							break;
						case error.POSITION_UNAVAILABLE:
							alert('위치 정보를 사용할 수 없습니다.');
							break;
						case error.TIMEOUT:
							alert('위치 요청 시간이 초과되었습니다.');
							break;
						default:
							alert('알 수 없는 오류가 발생했습니다.');
					}
					store.commit('SET_IS_LOADING', false);
				},
			);
		} else {
			alert('GPS를 지원하지 않는 브라우저입니다.');
		}
	} catch (error) {
		console.log('Error', error);
		alert('error', error);
	}
};

const gpsCancle = () => {
	popupType.value = 'service';
	text.value = 'gps 동의를 안하면 이용이 어렵습니다.';
};

// 추천순 아이템 리스트 불러오기
const fetchRecommendedProducts = async () => {
	try {
		const response = await fetchProductApi('ALL', 'distanceDiscountScore', 7);
		products.value = response.data.items;
	} catch (error) {
		console.log('Error', error);
	}
};
// 거리순 아이템 리스트 불러오기
const fetchNearestProducts = async () => {
	try {
		const response = await fetchProductApi('ALL', 'distance', 7);
		nearestProducts.value = response.data.items;
	} catch (error) {
		console.log('Error', error);
	}
};
// 상품 상세페이지로
const goToDetailPage = product => {
	router.push(goToproductDetailPageUrl(product.name, product.productId));
};
// 주문 내역 있는지 확인
const fetchOrders = async () => {
	try {
		const response = await orderListApi();
		if (response.data.success) {
			orderList.value = response.data.orders.length;
		}
	} catch (error) {
		console.error('Error', error);
	}
};
</script>

<style lang="scss" scoped>
.mainpage-bg {
	width: 375px;
	background-image: url('/mainPage/mainPageBg.png');
	color: var(--Text, #1d1d1d);
	background-attachment: fixed; //배경고정 스크롤
	background-repeat: no-repeat;
	background-position: center;
}
.mainpage-userCard {
	width: 168px;
	height: 124px;
	background-color: white;
	border-radius: 10px;
	border: 2px solid var(--Point, #1cb08c);
	display: grid;
	align-content: center;
}
.noScrollBar {
	//scroll bar 가리기
	/* IE and Edge */
	-ms-overflow-style: none;
	/* Firefox */
	scrollbar-width: none;
}
/* scroll bar 가리기 Chrome, Safari,Opera */
.noScrollBar::-webkit-scrollbar {
	display: none !important;
}
.mainpage-bottomCard {
	width: 343px;
	height: 104px;
	background: var(--White, #fff);
	padding: 16px;
	border-radius: 10px;
	border: 1px solid var(--Primary, #031f34);
	margin: auto;
	align-content: center;
}
.mainpage-bottomCard-body {
	font-size: 14px;
	color: #555;
	font-weight: 500;
	line-height: 22px;
}
</style>
