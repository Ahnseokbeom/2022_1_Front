function createArray() {
    let arr = new Array(3);
    for(let i = 0;i<arr.length;i++){
        arr[i] = new Array(3);
        arr[i] = [1,2,3];
    }
    return arr;
}
let a = createArray();
console.log(a);
a[0][0] = 10;
console.log(a);
console.log("--------------------------");
//출력 [ [ 1, 2, 3 ], [ 1, 2, 3 ], [ 1, 2, 3 ] ] [ [ 10, 2, 3 ], [ 1, 2, 3 ], [ 1, 2, 3 ] ]
// function CreateArray() {}
// let b = CreateArray();
// console.log(b);
// b[0][0] = 10;
// console.log(b);
// console.log("--------------------------");
// 출력 [ [ 1, 2, 3 ], [ 1, 2, 3 ], [ 1, 2, 3 ] ] [ [ 10, 2, 3 ], [ 10, 2, 3 ], [ 10, 2, 3 ] ] X

function remove(c, value) {
    for(let i = 0;i<c.length;i++){
        if(c[i]===value){
            c.splice(i--,1);
        }
    }
}
let c = [1,3,5,5,3,6];
remove(c, 3);
console.log(c);
remove(c, 5);
console.log(c);
console.log("--------------------------");
/*
출력 [ 1, 5, 5, 6 ] [ 1, 6 ]

remove 함수는 파라미터 배열에서 value 값을 찾아서 제거한다.
제거된 값의 뒤에 있던 값들은 한 칸씩 앞으로 당겨져야 하고, 배열의 크기는 1 감소해야 한다.
a 배열에 value 값이 여러 개 들어있는 경우, 전부 제거한다.
 */
function even1(d) {
    for(let i = 0;i<d.length;i++){
        if(d[i]%2!=0){
            d.splice(i--,1);
        }
    }
}
let d = [1,2,3,3,4,5,5,5,6];
even1(d);
console.log(d);
console.log("--------------------------");
/*
출력 [ 2, 4, 6 ]
even 함수는 파라미터 배열에서 홀수를 모두 제거한다.
 */
function even2(e) {
    let arr = [];
    for(let i = 0;i<e.length;i++){
        if(e[i]%2==0){
            arr.push(e[i]);
        }
    }
    return arr;
}
let e = [1,2,3,3,4,5,5,5,6];
console.log(even2(e));
console.log("--------------------------");
/*
출력 [ 2, 4, 6 ]

even 함수는 파라미터 배열에서 짝수만 골라서 만든 새 배열을 리턴한다.
파라미터 배열은 변경되지 않는다.
 */
function path(s, index) {
    return s.split("/")[index];
}
let s = "c:/pj/frontend/chap05/substring1.js";
for (let index = 0; index <= 4; ++index) 
    console.log(path(s, index));
/*
출력
c: 
pj
frontend
chap05
substring1.js

path 함수는 파라미터 s 문자열에서 / 문자를 구분 문자로하여 index 위치의 부분 문자열을 리턴한다.
 */ 
