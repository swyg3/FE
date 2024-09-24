//localStorage에서 항목을 검색합니다.
export const getItem = key => {
	const value = localStorage.getItem(key) || '';
	let res = '';
	try {
		res = JSON.parse(value);
		// 문자열을 다시 JavaScript 객체나 배열로 변환하는 데 사용됩니다.
		// 즉 JSON.parse는 문자열을 원래의 형식(객체나 배열)으로 다시 변환하는 데 사용됩니다.
	} catch (err) {
		res = value;
	}
	return res;
};
// localStorage에 항목을 저장합니다.
export const setItem = (key, val) => {
	localStorage.setItem(key, JSON.stringify(val));
	// javaScript 객체나 배열, 숫자를 문자열로 변환하는 데 사용됩니다.
	// localStorage는 문자열만 저장할 수 있기 때문에,
	// 객체나 배열을 저장하고 싶을 때는 이를 문자열 형식으로 변환해야 합니다.

	//참고로 vuex는 js객체와 배열을 직접처리할수있어 변환할 필요가 없습니다
};

//localStorage에서 특정항목을 제거합니다.
export const removeItem = key => {
	localStorage.removeItem(key);
};
// localStorage에 저장된 모든 데이터를 지웁니다.
export const clear = () => {
	localStorage.clear();
};
