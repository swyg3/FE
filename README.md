
//개발완료후 배포신청

//package.json에 빌드 스크립트를 추가해서, 빌드 시 자동으로 Tailwind CSS를 컴파일할 수 있다
//"scripts": {
  "build": "npx tailwindcss -i ./src/assets/main.css -o ./src/output.css && npm run other-build-commands"
}
//이렇게 하면 npm run build 명령어를 실행할 때 Tailwind CSS 파일도 같이 빌드된다.


## 기술스택

- 언어 : html, css, javascript
- UI프레임워크 : vue.js
- CSS프레임워크 : tailwind CSS
- 빌드도구 : vite
- 상태관리 : Vuex
- 라우터 : vue router
- HTTP클라이언트 : Axios
- 형상관리 : Git, ESLint
- 코드포맷터  : Prettier
- 패키지관리자 : npm



## 푸쉬하기전 아래 tailwind명령어로 tailwind클래스가 포함된 새로운 파일 생성해야 된다.
(사실 빌드전에만 해주면 된다)

- npx tailwindcss -i ./src/assets/main.css -o ./src/output.css







# 아직안한부분
-env환경파일설정 + gitignore파일에 정의
-localStorage모듈정의
-http요청 처리 로직 정의
-모달
-스피너



# 설정한부분
-필요한 기본적인 package 설치
-eslint, prettier설정
-tailwind 파일 정의
-store설정
-router설정
-main.js구성
-app.vue정의



## 깃규칙

1. main, dev브랜치에서 분기화해서 각각 dev, 본인브랜치 생성
2. 커밋메시지는 아래와 같은 예시로 작성해주세요

[create]:  새 파일이나 기능을 추가하는경우
[update]: 수정하는 경우
[delete]: 파일이나 기능 제거하는 경우

2-1. 변경사항을 구체적으로 작성(변경된이유 + 변경된 내용)
2-2. 기능별로 커밋해주세요
2-3. 푸쉬는 그날 작업을 다마치고 해주세요

ex)
[update]: 로그인 양식 단순화필요로 인해 불필요한 필드를 제거하고 레이아웃을 개선 

3. 본인브랜치에서만 작업하기!!
4. 그날 작업하기전 본인브랜치, dev브랜치, main브랜치 pull하고 작업하기
4-1. 그날 작업이 끝난뒤  본인브랜치로 push후 pull request하고 메시지남기기
-merge는 제가 하겠습니다.

5. 작업중 풀을땡겨야될경우 하던작업까지 커밋하고 풀땡기기
5-1. 그때 커밋메시지는  WIP: 작업 중 커밋

* Work In Pregress
(아직 완성되지 않았거나 진행중에 커밋을 의미)


## 컨벤션규칙
- 컴포넌트 이름은 파스칼케이스, 명확한 이름으로 짓기
- 여러곳에서 재사용되는 카드, 버튼과 같은 컴포넌트는 "App", "V" 접두어 사용
- 페이지에서 한번만 사용되는 헤더, 사이드바, 푸터와 같은 컴포넌트는 "The" 접두어 사용
- 자식요소가 없는 컴포넌트는 셀프 클로징 태그를 사용 <MyComponent />
- 전역컴포넌트사용은 케밥케이스 사용
- 공통컴포넌트는 common폴더에 배치
- 개별컴포넌트는 views폴더에 배치








