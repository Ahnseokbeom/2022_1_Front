/*
1. 한 페이지에 10명의 학생 정보를 출력한다고 할 때,
30명의 정보를 출력하려면, 3 페이지,
31명의 정보를 출력하려면, 4 페이지가 필요하다.
올림 계산을 해야 한다.
위와 같이 학생수와 페이지 크기가 각각 주어졌을 때,
페이지 수를 계산해서 출력하는 코드를 구현하시오.
 */
let studentCount = 31;
let pageSize = 10;
console.log(Math.ceil(studentCount/pageSize));

//2. 10 이상 20 이하의 정수를 임의로 30개 출력하는 코드를 구현하시오.
for(let i = 0;i<30;i++){
    console.log(Math.floor(Math.random()*11+10));
}

/*
3. (1) 빈 배열을 만든다.
(2) Math.random() 메소드를 사용하여, 1 이상 100 이하의 정수 난수를 100개 생성해서, 배열에 채운다.
(3) 배열을 오름차순으로 정렬한다.
(4) 배열을 출력한다.
 */
let arr1 =[];
for(let i = 0;i<100;i++){
    arr1[i] = Math.floor(Math.random()*100+1);
}
function so(i,j){
    return i-j;
}
console.log(arr1.sort(so));
/*
4. (1) 빈 배열을 만든다.
(2) Math.random() 메소드를 사용하여, 1 이상 100 이하의 정수 난수를 100개 생성해서, 배열에 채운다.
(3) 배열에 원소들 중에서 짝수(2의 배수)를 찾아서 모두 제거한다.
(4) 배열을 출력한다.
 */
let arr2 = [];
for(let i = 0;i<100;i++){
    arr2[i] = Math.floor(Math.random()*100+1);
    if(arr2[i]%2==0) arr2.splice(i--,1);
}
console.log(arr2);
/*
5. "When I find myself in times of trouble Mother Mary comes to me Speaking words of wisdom, let it be."
위 문자열에서 모음(aeiou)들의 위치를 출력하는 코드를 구현하시오. 
*/
let str = "When I find myself in times of trouble Mother Mary comes to me Speaking words of wisdom, let it be.";
console.log(str.indexOf('a'));
console.log(str.indexOf('e'));
console.log(str.indexOf('i'));
console.log(str.indexOf('o'));
console.log(str.indexOf('u'));

// 6. 위 문제의 문자열에서 공백을 모두 제거한 새 문자열을 만들고, 그 문자열을 출력하시오.
let str2 = str.replace(/ /g,"");
console.log(str2);
// 7. 위 문제의 문자열에서 공백을 기준으로 문자열을 쪼개서, 문자열 배열을 만들고, 그 배열을 출력하시오.
let arr3 = str.split(" ");
console.log(arr3);
/* 8. 1초 간격으로 현재 시각을 출력하는 코드를 구현하시오.
10번만 반복 호출하고 종료 되도록(clearInterval) 구현하시오.
힌트: 호출 횟수는 전역 변수로 세어야 함.
*/
/*
9. 비어있는 persons 배열을 생성한다. for 루프의 본문에서
persons 배열의 끝에 { name: "홍길동", age: 16 + i } 객체를 추가한다.
for 루프를 10번 반복한다. persons 배열을 출력한다
 */
let persons = [];
for(let i = 0;i<10;i++){
    persons.unshift({name : "홍길동", age : 16+i});
}
console.log(persons);
/*
10. personArray1.js와 동일한 방법으로 persons1 배열을 생성한다.
persons1 배열을 복제해서 persons2 배열을 생성한다.
persons2 배열을 새로 배열을 만들어서, persons1 배열의 값들을 복사. deep copy가 되도록 복제해야 한다.
즉 배열만 복제 되는 것이 아니고, 배열이 참조하는 객체들도 복제 되어야 한다. persons2 배열을 출력한다.
 */
/*
11. let persons = [ { name: "홍길동", age: 16 }, { name: "임꺽정", age: 18 }, { name: "전우치", age: 19 } ];
이 배열을 age 내림차순으로 정렬하여 출력하는 코드를 구현하라.
 */
/*
12. 위 persons 배열에서 age 최대값 사람을 찾아서 출력하는 코드를 구현하라.
reduce 메소드를 사용하여 구현하라.
 */
