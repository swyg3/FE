<template>
	<div class="signin-bg">
		<div class="flex flex-col space-y-4 signin-btn-container">
			<button
				type="button"
				class="bg-[#FEE500] text-[#1D1D1D] signin-btn"
				@click="a"
			>
				<img src="/signIn/kakaoIcon.png" />
				<span>카카오로 시작하기</span>
			</button>
			<!-- <google-login :callback="googleOnSuccess" :onError="googleoOnError">
				<button
					type="button"
					class="bg-[#FFF] border border-[var(--Primary,#031F34)] signin-btn"
				>
					<img src="/signIn/googleIcon.png" />
					<span>구글로 시작하기</span>
				</button>
			</google-login> -->
			<button
				type="button"
				class="bg-[#FFF] border border-[var(--Primary,#031F34)] signin-btn"
				@click="googleSignIn"
			>
				<img src="/signIn/googleIcon.png" />
				<span>구글로 시작하기</span>
			</button>
		</div>
	</div>
</template>

<script setup>
import { onMounted } from 'vue';
import { useStore } from 'vuex';

const store = useStore();

onMounted(() => {
	// handleCallback();
});

const a = () => {
	store.dispatch('auth/socialLogin');
};

const kakaoSignIn = async () => {
	if (!Kakao.isInitialized()) {
		Kakao.init(import.meta.env.VITE_APP_KAKAO_KEY);
	}

	Kakao.Auth.authorize({
		redirectUri: 'https://swypmooncofe.vercel.app',
	});
};

const googleSignIn = async () => {
	const clientId = import.meta.env.VITE_APP_GOOGLE_KEY;

	const redirectUri = 'https://swypmooncofe.vercel.app';

	const googleAuthUrl = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${clientId}&redirect_uri=${redirectUri}&response_type=code&scope=email profile`;

	window.location.href = googleAuthUrl;
};

// 인증 코드 처리
const handleCallback = async () => {
	const urlParams = new URLSearchParams(window.location.search);

	const code = urlParams.get('code'); // 인증 코드 추출
	console.log('code', code);

	if (code) {
		const provider = window.location.href.includes('google')
			? 'google'
			: 'kakao';
		console.log(`${provider} 인증 코드:`, code);

		store.dispatch('auth/socialLogin', {
			provider,
			code,
			userType: 'user',
		});
	} else {
		console.error('인증 코드가 없습니다.');
	}
};

// const handleKakaoCallback = async () => {
// 	// URL에서 인증 코드 추출
// 	const urlParams = new URLSearchParams(window.location.search);
// 	const code = urlParams.get('code'); // 카카오로부터 전달된 인증 코드
// 	console.log('code', code);

// 	if (code) {
// 		store.dispatch('auth/socialLogin', {
// 			provider: 'kakao',
// 			code,
// 			userType: 'user',
// 		});
// 	} else {
// 		console.error('No authorization code found');
// 	}
// };

// const googleOnSuccess = async authObj => {
// 	console.log('구글로그인 성공', authObj);

// 	store.dispatch('auth/socialLogin', {
// 		provider: 'google',
// 		code: authObj.code,
// 		userType: 'user',
// 	});
// };

// const googleoOnError = error => {
// 	alert('구글로그인이 실패하였습니다', error);
// };
</script>

<style lang="scss" scoped>
.signin-bg {
	height: 100%;
	position: relative;
	background-image: url('/signIn/signInBg.png');
}

.signin-btn-container {
	position: absolute;
	bottom: 3cm;
	left: 50%;
	transform: translateX(-50%);
}

.signin-btn {
	display: flex;
	width: 342px;
	height: 48px;
	padding: 12px 84px;
	justify-content: center;
	align-items: center;
	border-radius: 10px;
	font-weight: 500;
	gap: 8px;
}
</style>
