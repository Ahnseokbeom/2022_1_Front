/*
1) mid1.js
(1) 배열을 만든다.
(2) Math.random() 메소드를 사용하여, 1 이상 100 이하의 정수 난수를 100개 생성해서, 배열에 채운다.
(3) 배열의 원소의 평균을 구하고,그 평균을 소수점 아래 한 자리까지 출력하시오.
*/
let arr1 = [];
let avg = 0;
for(let i = 0;i<100;i++){
    arr1[i] = Math.floor(Math.random()*100+1);
    avg += arr1[i];
}
console.log((avg/100).toFixed(1));
/*
2) mid2.js
(1) 배열을 만든다.
(2) Math.random() 메소드를 사용하여, 1 이상 100 이하의 정수 난수를 100개 생성해서, 배열에 채운다.
(3) 배열을 내림차순으로 정렬하여 출력하시오.
*/
function num(i,j){
    return j-i;
}
let arr2 =[];
for(let i = 0;i<100;i++){
    arr2[i] = Math.floor(Math.random()*100+1);
}
console.log(arr2.sort(num));

/*
3) mid3.js
(1) 비어있는 persons1 배열을 생성한다.
(2) for 문에서 객체를 생성하여 persons1 배열의 원소에 대입하시오.
for 문의 실행 결과 배열의 값은 다음과 같아야 한다.
[{ name: "홍길동", age: 16 }, { name: "홍길동", age: 17 }, { name: "홍길동", age: 18 }]
(3) persons1 배열을 얕은 복사하여 persons2 배열을 생성한다.
(4) persons1[0].age = 20; 을 실행한다.
(5) persons1 배열을 출력한다.
(6) persons2 배열을 출력한다.
*/
let persons1 =[];
for(let i = 0;i<3;i++){
    persons1[i] = {name : "홍길동", age : i+16};
}
let persons2 = Object.assign(persons1);
persons1[0].age = 20;
console.log(persons1);
console.log(persons2);
/*
4) mid4.js
(1) sum 함수를 구현하라. sum 함수의 파라미터는 배열이다. sum 함수는 배열의 원소의 합을 리턴한다.
(2) test_sum 함수를 구현하라. test_sum 함수의 파라미터는 콜백 함수이다.
test_sum 함수는,
랜덤 값이 5개 들어있는 배열을 생성하고, 그 배열을 출력하고, (랜덤값 범위 0~10 정수)
콜백 함수를 호출하면서 그 배열을 파라미터로 전달하고,
콜백 함수의 리턴값을 출력한다.
(3) test_sum 함수를 5회 반복 호출하라.
test_sum 함수를 호출할 때, sum 함수를 파라미터로 전달하라.
*/
function sum(n){
    let num = 0;
    for(let i = 0;i<n.length;i++){
        num += n[i];
    }
    return num;
}
function test_sum(sum){

}
/*
5) mid5.js
(1) 배열을 만든다.
(2) Math.random() 메소드를 사용하여, 1 이상 100 이하의 정수 난수를 100개 생성해서, 배열에 채운다.
(3) 배열에서 짝수의 합을 구하여 출력하라. (반복문 없이, 배열의 메소드만 사용하여 구현하라)
 */
let arr3 =[];
let even =0;
for(let i = 0;i<100;i++){
    arr3[i] = Math.floor(Math.random()*100+1);
    if(arr3[i]%2==0) even += arr3[i];
}
console.log(even);