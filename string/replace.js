// 즉, s의 값은 변경되지 않는다. 이것을 immutable Object(바뀌지 않는 문자열)라고 한다.
let s = "hello world";
console.log(s.replace("o","O")); // hellO world
console.log(s); // hello world

/*
/정규식/g
g는, 일치하는 부분 문자열들을 전부 치환하라는 옵션이다.

/정규식/i
i는, 문자열을 비교할 때, 대소문자를 무시하라는 옵션이다.
*/
console.log(s.replace(/o/g,"O"));
console.log(s);