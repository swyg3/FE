<template>
	<div class="min-w-[1366px] text-[#031F34] mx-auto">
		<header class="bg-[#031F34] text-center grid content-between">
			<!--헤더 로고-->
			<div class="text-center">
				<img
					src="/randingPage/randingHeaderLogo.png"
					alt="MooncoLogo"
					width="304"
					height="124"
					class="mx-auto pb-[100px]"
				/>
			</div>
			<!--달 위-->
			<div
				class="w-[1000px] h-[500px] mx-auto pt-20 pb-8 bg-moonYellow rounded-t-[1000px] grid content-between"
			>
				<div class="leading-[90px]">
					<p class="text-[40px] font-semibold">문코에서</p>
					<h1 class="text-[60px] font-black">
						세상에 버려질 <br />
						음식 구출하기
					</h1>
				</div>
				<div>
					<button
						class="w-[240px] h-[58px] bg-[#1CB08C] rounded-[10px] text-[20px] text-white font-black"
					>
						문코 시작하기
					</button>
				</div>
			</div>
		</header>

		<main class="bg-[#F2F2F2]">
			<!--달 아래 + 이유 1-->
			<div
				class="w-[1000px] h-[500px] mx-auto pt-20 pb-16 bg-moonYellow rounded-b-[500px] grid content-between"
			>
				<h2 class="text-[48px] font-bold leading-[90px]">
					<span class="text-[#1CB08C]">문코</span>여야 하는 이유
				</h2>
				<div class="main-card">
					<img
						src="/randingPage/main01.png"
						alt="MooncoMain01"
						class="rounded-[20px] h-[230px]"
					/>
					<div class="pl-20 my-auto">
						<h3 class="main-card-title">
							가치 소비로 <span class="text-[#1CB08C]">환경</span> 지키기
						</h3>
						<p class="main-card-body">
							오늘이 지나면 버려지는 음식을 구매하고 <br />
							음식물 쓰레기를 줄여 환경을 지키세요
						</p>
					</div>
				</div>
			</div>
			<!--이유2 + 이유3-->
			<div class="w-[1000px] mx-auto">
				<div class="main-card pb-16">
					<div class="my-auto pl-20">
						<h3 class="main-card-title">
							마감할인으로 <span class="text-[#1CB08C]">지갑</span> 지키기
						</h3>
						<p class="main-card-body">
							마감할인 가격으로 판매되는 음식을<br />
							저렴한 가격에 구매하고 지갑을 지키세요
						</p>
					</div>
					<img
						src="/randingPage/main02.png"
						alt="MooncoMain02"
						class="rounded-[20px] h-[230px] ml-auto"
					/>
				</div>
				<div class="main-card pb-16">
					<img
						src="/randingPage/main03.png"
						alt="MooncoMain03"
						class="rounded-[20px] h-[230px]"
					/>
					<div class="my-auto pl-20">
						<h3 class="main-card-title">
							새로운 도전의 <span class="text-[#1CB08C]">재미</span>
						</h3>
						<p class="main-card-body">
							문코에 올라오는 새로운 동네의 카페와 음식점을 발견하고<br />
							부담 없이 새로운 음식에 도전해 보세요
						</p>
					</div>
				</div>
			</div>
		</main>

		<!--카드 리스트-->
		<article class="text-center grid content-between">
			<div class="w-[1000px] py-20 flex justify-between mx-auto">
				<div>
					<img
						src="/randingPage/card01.jpg"
						alt="Card01"
						class="article-card"
					/>
					<div>
						<p class="article-card-title">
							마감할인으로<br />
							음식 구매하기
						</p>
						<p class="article-card-body">
							문코에서 음식을 저렴하게 구매하고<br />
							환경과 지갑을 지키세요
						</p>
					</div>
				</div>
				<div>
					<img
						src="/randingPage/card02.jpg"
						alt="Card02"
						class="article-card"
					/>
					<div>
						<p class="article-card-title">
							사장님으로<br />
							마감할인 음식 판매하기
						</p>
						<p class="article-card-body">
							버려지는 음식점 재고를<br />
							문코에서 판매하고 매출을 올리세요
						</p>
					</div>
				</div>
				<div>
					<img
						src="/randingPage/card03.jpg"
						alt="Card03"
						class="article-card"
					/>
					<div>
						<p class="article-card-title">
							문코<br />
							스토리 보러가기
						</p>
						<p class="article-card-body">
							문코는 음식물 쓰레기로 인한 환경오염을<br />
							해결하기 위해 만들어졌어요.<br />
							문코의 이야기를 들어보세요.
						</p>
					</div>
				</div>
			</div>
			<div class="py-20">
				<p class="text-[34px] font-black leading-[51px] p-[20px]">
					문코에서 세상에 버려질 음식 구출하기
				</p>
				<button
					class="w-[260px] h-[64px] bg-[#1CB08C] rounded-[10px] text-[24px] text-white"
				>
					문코 시작하기
				</button>
			</div>
		</article>

		<footer class="h-[440px] bg-[#031F34]">
			<img
				src="/randingPage/randingFooterLogo.png"
				alt="MooncoLogo"
				class="mx-auto h-[440px]"
			/>
		</footer>
	</div>
</template>
<script></script>
<style>
.main-card {
	display: grid;
	grid-template-columns: repeat(2, minmax(0, 1fr));
}
.main-card-title {
	font-size: 34px;
	font-weight: 900;
	line-height: 70px;
}
.main-card-body {
	font-size: 16px;
	font-weight: 700;
	line-height: 30px;
}
.article-card {
	width: 300px;
	height: 200px;
	border-radius: 20px;
}
.article-card-title {
	font-size: 30px;
	font-weight: 900;
	line-height: 51px;
	padding: 30px 0;
}
.article-card-body {
	font-size: 16px;
	font-weight: 700;
	line-height: 36px;
}
</style>
