/*
1) mid1.js
(1) 배열을 만든다.
(2) Math.random() 메소드를 사용하여, 1 이상 100 이하의 정수 난수를 100개 생성해서, 배열에 채운다.
(3) 배열의 원소들 중에서 1의 자리가 5 이상, 9 이하 값들을 제거한다.
(예: 5, 6, 7, 8, 9, 15, 16, 17, 18, 19, 25, 26, 27, 28, 29 ...)
(4) 배열을 출력한다.
*/
let arr1 = [];
for(let i = 0;i<100;i++){
    arr1[i] = Math.floor(Math.random()*100+1);
}
/*
2) mid2.js
(1) 배열을 만든다.
(2) Math.random() 메소드를 사용하여, 1 이상 100 이하의 정수 난수를 100개 생성해서, 배열에 채운다.
(3) 배열의 원소들을 문자열 기준으로 정렬하여 출력하시오.
(숫자 기준 정렬 순서는 2 < 11 이지만, 문자열 기준 정렬 순서는 "aa" < "b" 이고, "11" < "2" 이다)
*/
let arr2 = [];
for(let i = 0;i<100;i++){
    arr2[i] = Math.floor(Math.random()*100+1);
}
console.log(arr2.reverse());
/*
3) mid3.js
(1) 비어있는 a1 배열을 생성한다.
(2) for 문에서 배열을 생성하여 a1 배열의 원소에 대입하시오.
for 문의 실행 결과 배열의 값은 다음과 같아야 한다.
[[0, 1], [2, 3], [4, 5]]
(3) a1 배열을 깊은 복사하여 a2 배열을 생성한다.
즉 a1 배열만 복제되는 것이 아니고, 배열의 원소들도 복제되어야 한다.
a1 배열의 원소는 3 배열이다. ([0,1], [2,3], [4,5])
(4) a1[0][0] = 100; 을 실행한다.
(5) a1 배열을 출력한다.
(6) a2 배열을 출력한다.
*/
let a1 = [];
let j = 0;
for(let i = 0;i<3;i++){
    a1[i] = [j,j+1];
    j+=2;
}
let a2 = a1;
a1[0][0] = 100;
console.log(a1===a2);
console.log(a1);
console.log(a2);
/*
4) mid4.js
(1) 배열을 만든다.
(2) Math.random() 메소드를 사용하여, 1 이상 100 이하의 정수 난수를 100개 생성해서, 배열에 채운다.
(3) 배열에서 짝수의 갯수를 구해서 출력하라. (반복문 없이, 전역변수 없이, 배열의 메소드와 배열의 속성을 사용해서 구현하라.)
*/
let arr3 = [];
for(let i = 0;i<100;i++){
    arr3[i] = Math.floor(Math.random()*100+1);
}
let arr4 = arr3.filter(number => number%2==0);
console.log(arr4.length);


/*
5) mid5.js
let a = [ "hello.html", "world.js", "readme.txt" ];
a 배열의 원소는 파일명이다.
파라미터로 전달된 파일명에서 확장자 부분을 찾아서 리턴하는 getExtension(fileName) 함수를 구현하고,
a 배열의 원소들에 대해서 이 함수를 반복 호출하고 그 리턴값을 출력하라.
출력 .html .js .txt
*/
let a = [ "hello.html", "world.js", "readme.txt" ];
function getExtension(fileName){
    for(let i = 0;i<a.length;i++){
        console.log(a[i].match(/[.][a-z]{2,4}/)[0]);
    }
}
getExtension(a)

const obj = { a: 1 };
const newObj = Object.assign({}, obj);

newObj.a = 2;

console.log(obj);
console.log(newObj);
console.log(obj === newObj);