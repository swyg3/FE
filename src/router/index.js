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
			path: '/receipt',
			name: 'Receipt',
			component: Receipt,
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
			path: '/addressSearch',
			name: 'AddressSearch',
			component: AddressSearch,
		},
	],
});

router.beforeEach((to, from, next) => {
	next();
});
router.afterEach(() => {});

export default router;
