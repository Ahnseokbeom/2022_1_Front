// substring(slice와 유사) - 하지만 음수를 사용할 수 없음
let s = "abcdefg";
console.log(s.substring(2,4));
console.log(s.substring(2));
console.log(s.substring(s.length-3));


// substr(시작위치, 문자열 길이)
// 즉, substr(2,2)라고 선언하면 두번째인덱스부터 2개를 뽑아내는 것과 같다.
console.log(s.substr(2,2));
console.log(s.substr(2));
console.log(s.substr(-3)); 