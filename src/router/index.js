import { createRouter, createWebHistory } from 'vue-router';
import SignIn from '@/views/SignIn.vue';

const router = createRouter({
	history: createWebHistory('/'),
	routes: [
		{
			path: '/',
			name: 'SignIn',
			component: SignIn,
		},
	],
});

router.beforeEach((to, from, next) => {
	next();
});
router.afterEach(() => {});

export default router;
