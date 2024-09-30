import { createRouter, createWebHistory } from 'vue-router';
import SignIn from '@/views/SignIn.vue';
import Landing from '@/views/LandingView.vue';
import MainPage from '@/views/MainPageView.vue';
import Explore from '@/views/ExploreView.vue';
import Category from '@/views/CategoryView.vue';
import Details from '@/views/DetailsView.vue';
import OrderDetails from '@/views/OrderDetailsView.vue';
import MyPage from '@/views/MyPageView.vue';

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
			path: '/mainPage',
			name: 'MainPage',
			component: MainPage,
		},
		{
			path: '/explore',
			name: 'Explore',
			component: Explore,
		},
		{
			path: '/category',
			name: 'Category',
			component: Category,
		},
		{
			path: '/details',
			name: 'Details',
			component: Details,
		},
		{
			path: '/orderDetails',
			name: 'OrderDetails',
			component: OrderDetails,
		},
		{
			path: '/myPage',
			name: 'MyPage',
			component: MyPage,
		},
	],
});

router.beforeEach((to, from, next) => {
	next();
});
router.afterEach(() => {});

export default router;
