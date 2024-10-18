import { createRouter, createWebHistory } from 'vue-router';
import SignIn from '@/views/SignIn.vue';
import Landing from '@/views/LandingView.vue';
import MainPage from '@/views/MainPageView.vue';
import Explore from '@/views/ExploreView.vue';
import Category from '@/views/CategoryView.vue';
import Details from '@/views/DetailsView.vue';
import OrderDetails from '@/views/OrderDetailsView.vue';
import Receipt from '@/views/ReceiptView.vue';
import MyPage from '@/views/MyPageView.vue';
import AddressBook from '@/views/AddressBookView.vue';
import AddressSearch from '@/views/AddressSearchView.vue';
import OrderList from '@/views/OrderListView.vue';
import Notification from '@/views/NotificationView.vue';
import Search from '@/views/SearchView.vue';
import SearchResult from '@/views/SearchResultView.vue';
import OrderCancel from '@/views/OrderCancleView.vue';

const router = createRouter({
	history: createWebHistory('/'),
	routes: [
		{
			path: '/',
			name: 'SignIn',
			component: SignIn,
		},
		{
			path: '/landing',
			name: 'Landing',
			component: Landing,
		},
		{
			path: '/main',
			name: 'Main',
			component: MainPage,
		},
		{
			path: '/explore',
			name: 'Explore',
			component: Explore,
		},
		{
			path: '/category/:category/:sortBy',
			name: 'Category',
			component: Category,
		},
		{
			path: '/details/:name/:id',
			name: 'Details',
			component: Details,
			props: true,
		},
		{
			path: '/orderdetails/:name/:id/:quantity',
			name: 'OrderDetails',
			component: OrderDetails,
			props: true,
		},
		{
			path: '/receipt/:orderId',
			name: 'Receipt',
			component: Receipt,
			props: true,
		},
		{
			path: '/orderList',
			name: 'OrderList',
			component: OrderList,
		},
		{
			path: '/myPage',
			name: 'MyPage',
			component: MyPage,
		},
		{
			path: '/addressBook',
			name: 'AddressBook',
			component: AddressBook,
		},
		{
			path: '/notification',
			name: 'Notification',
			component: Notification,
		},
		{
			path: '/search',
			name: 'Search',
			component: Search,
		},
		{
			path: '/searchResult/:searchTerm/:sortBy',
			name: 'SearchResult',
			component: SearchResult,
			props: true,
		},
		{
			path: '/orderCancel',
			name: 'OrderCancel',
			component: OrderCancel,
		},
	],
	scrollBehavior(to, from, savedPosition) {
		// savedPosition이 있으면 (뒤로 가기 또는 앞으로 가기) 그 위치로 스크롤
		if (savedPosition) {
			return savedPosition;
		} else {
			// 항상 페이지 최상단으로 스크롤
			return { top: 0 };
		}
	},
});

router.beforeEach((to, from, next) => {
	next();
});
router.afterEach(() => {});

export default router;
