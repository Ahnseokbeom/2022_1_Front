function clone(a) {
    let b = a.slice(0);
    return b;
}
let a = [1, 2, 3];
let b = clone(a);
a[0] = 11;
console.log(a);
console.log(b);
// 7. clone 함수는 파라미터 배열 a를 복제해서 만든 새 배열을 리턴한다.
// 출력 [ 11, 2, 3 ] [ 1, 2, 3 ]

function remove(a, index) {
    a.splice(index,1);
    return a;
}
let a = [0, 1, 2, 3];
remove(a, 2);
console.log(a);
remove(a, 1);
console.log(a);
/*
8. remove 함수는 파라미터 배열에서 index 위치의 값을 제거한다.
index 위치 뒤에 있던 값들은 한 칸씩 앞으로 당겨져야 하고, 배열의 크기는 1 감소해야 한다. 
출력 [ 0, 1, 3 ] [ 0, 3 ]
 */

function createArray(count) {
    let c = [];
    let i = 1;
    while(c.length!=count){
        if(i%2!=0){
            c.push(i);
        }
        i++;
    }
    return c;
}
console.log(createArray(4));
console.log(createArray(5));
console.log(createArray(6));
/*
출력 [ 1, 3, 5, 7 ] [ 1, 3, 5, 7, 9 ] [ 1, 3, 5, 7, 9, 11 ]
9. createArray 함수는 count 크기의 배열을 생성하여 리턴한다.
이 배열에는 1 이상의 홀수가 순서대로 들어있어야 한다. 
 */
function contains(a, value) {
    let st = "false";
    for(let i = 0;i<a.length;i++){
        console.log(a[i]);
        if(parseInt(a[i])===value){
            st = "true";
            break;
        }else{
            continue;
        }
    }
    return st;
}
let a = [1, 3, 5, 6];
console.log(contains(a, 3));
console.log(contains(a, 4));
console.log(contains(a, "3"));
/*
출력 true false false 
10. contains 함수를 구현하시오.
이 함수는 파라미터 배열 a 에 value 값이 들어있는지 여부(true/false)를 리턴한다. X
 */
function remove(a, value) {
    for(let i = 0;i<a.length;i++){
        if(a[i]==value){
            a.splice(i,1);
            break;
        }
    }
    return a;
}
let a = [1,3,5,5,3,6];
remove(a, 3);
console.log(a);
remove(a, 5);
console.log(a);
/*
출력 [ 1, 5, 5, 3, 6 ] [ 1, 5, 3, 6 ]
11. remove 함수는 파라미터 배열에서 value 값을 찾아서 제거한다.
제거된 값의 뒤에 있던 값들은 한 칸씩 앞으로 당겨져야 하고, 배열의 크기는 1 감소해야 한다.
a 배열에 value 값이 여러 개 들어있는 경우, 제일 앞의 값 한 개만 제거한다.
 */
function sort(a) {
    a.sort();
    a.reverse();
}
let a = ["one", "two", "three", "four", "five"];
sort(a);
console.log(a);
/*
출력 [ 'two', 'three', 'one', 'four', 'five' ]
12. sort 함수는 파라미터 배열을 내림차순으로 정렬한다. */
