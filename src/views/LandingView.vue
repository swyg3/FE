<template>
	<div class="min-w-[1366px] text-primary mx-auto">
		<header class="bg-primary text-center grid content-between">
			<!--헤더 로고-->
			<div class="text-center">
				<img
					src="/landingPage/landingHeaderLogo.png"
					alt="MooncoLogo"
					class="mx-auto pb-[180px]"
				/>
			</div>
			<!--달 위-->
			<div
				class="w-[950px] h-[475px] relative mx-auto pt-20 pb-4 bg-moonYellow rounded-t-[1000px] grid"
			>
				<div>
					<img
						src="/landingPage/landingLeaf.png"
						alt="landingLeaf"
						class="w-[120px] h-[80px] absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
					/>
				</div>
				<div class="pt-8">
					<p class="text-[40px] font-semibold leading-56">문코에서</p>
					<h1 class="text-[54px] font-black leading-[80px]">
						세상에 버려질 <br />
						음식 구출하기
					</h1>
				</div>
				<div class="pt-4">
					<button
						class="w-[220px] h-[50px] bg-[#1CB08C] rounded-[10px] text-[18px] text-white font-black"
					>
						문코 시작하기
					</button>
				</div>
			</div>
		</header>

		<main class="bg-[#F2F2F2]">
			<!--달 아래 + 이유 1-->
			<div
				class="w-[950px] h-[475px] mx-auto pt-20 pb-12 bg-moonYellow rounded-b-[500px] grid content-between"
			>
				<h2 class="text-[40px] font-black leading-[90px]">
					<span class="text-[#1CB08C]">문코</span>여야 하는 이유
				</h2>
				<div class="main-card">
					<img
						src="/landingPage/main01.png"
						alt="MooncoMain01"
						class="main-card-img"
					/>
					<div class="pt-4">
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
			<div class="w-[950px] mx-auto">
				<div class="main-card pb-12">
					<div class="pl-16 pt-4">
						<h3 class="main-card-title">
							마감할인으로 <span class="text-[#1CB08C]">지갑</span> 지키기
						</h3>
						<p class="main-card-body">
							마감할인 가격으로 판매되는 음식을<br />
							저렴한 가격에 구매하고 지갑을 지키세요
						</p>
					</div>
					<img
						src="/landingPage/main02.png"
						alt="MooncoMain02"
						class="main-card-img ml-16"
					/>
				</div>
				<div class="main-card pb-28">
					<img
						src="/landingPage/main03.png"
						alt="MooncoMain03"
						class="main-card-img"
					/>
					<div class="pt-4">
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
		<article class="text-center bg-white">
			<div class="w-[1000px] px-16 py-20 grid grid-cols-3 mx-auto">
				<div>
					<img
						src="/landingPage/card01.jpg"
						alt="Card01"
						class="article-card-img"
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
						src="/landingPage/card02.jpg"
						alt="Card02"
						class="article-card-img"
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
						src="/landingPage/card03.jpg"
						alt="Card03"
						class="article-card-img"
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
			<div class="pt-20 pb-16">
				<p class="text-[32px] font-black leading-[50px] p-4">
					문코에서 세상에 버려질 음식 구출하기
				</p>
				<button
					class="w-[230px] h-[58px] bg-[#1CB08C] rounded-[10px] text-[20px] text-white font-black"
				>
					문코 시작하기
				</button>
			</div>
		</article>

		<footer class="h-[440px] bg-[#031F34]">
			<img
				src="/landingPage/landingFooterLogo.png"
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
	padding-bottom: 10px;
}
.main-card-body {
	font-size: 16px;
	font-weight: 500;
	line-height: 26px;
	color: var(--Text_body, #555);
}
.main-card-img {
	border-radius: 20px;
	width: 400px;
	height: 240px;
	border: 1px solid var(--Primary, #031f34);
}
.article-card-img {
	width: 280px;
	height: 220px;
	border-radius: 20px;
	margin: 0 auto;
	border: 1px solid var(--Primary, #031f34);
}
.article-card-title {
	font-size: 22px;
	font-weight: 900;
	line-height: 32px;
	padding-top: 26px;
	padding-bottom: 10px;
}
.article-card-body {
	font-size: 16px;
	font-weight: 400;
	line-height: 26px;
	color: var(--Text_body, #555);
}
</style>
