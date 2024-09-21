<template>
	<div class="signin-bg">
		<div class="flex flex-col space-y-4 signin-btn-container">
			<button
				type="button"
				class="bg-[#FEE500] text-[#1D1D1D] signin-btn"
				@click="kakaoSignIn"
			>
				<img src="/signIn/kakaoIcon.png" />
				<span>카카오로 시작하기</span>
			</button>
			<google-login :callback="googleOnSuccess" :onError="googleoOnError">
				<button
					type="button"
					class="bg-[#FFF] border border-[var(--Primary,#031F34)] signin-btn"
				>
					<img src="/signIn/googleIcon.png" />
					<span>구글로 시작하기</span>
				</button>
			</google-login>
		</div>
	</div>
</template>

<script setup>
import { useStore } from 'vuex';

const store = useStore();

const kakaoSignIn = async () => {
	if (!Kakao.isInitialized()) {
		console.log('초기화안됨');
		Kakao.init(import.meta.env.VITE_APP_KAKAO_KEY);
	}

	Kakao.Auth.login({
		success: function (authObj) {
			console.log('성공', authObj);

			store.dispatch('auth/socialLogin', {
				authObj,
				social: 'kakao',
			});
		},
		fail: function (err) {
			console.log(err);
		},
	});
};

const googleOnSuccess = async authObj => {
	console.log('구글로그인 성공', authObj);

	store.dispatch('auth/socialLogin', {
		authObj,
		social: 'google',
	});
};

const googleoOnError = error => {
	alert('구글로그인이 실패하였습니다', error);
};
</script>

<style lang="scss" scoped>
.signin-bg {
	height: 100%;
	background-image: url('/signIn/signInBg.png');
}

.signin-btn-container {
	position: fixed;
	bottom: 4cm;
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
