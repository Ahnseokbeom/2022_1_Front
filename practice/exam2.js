function clone(a) {
    let b = a.slice(0);
    return b;
}
let a = [1, 2, 3];
let b = clone(a);
a[0] = 11;
console.log(a);
console.log(b);
console.log("--------------------------");
// 7. clone 함수는 파라미터 배열 a를 복제해서 만든 새 배열을 리턴한다.
// 출력 [ 11, 2, 3 ] [ 1, 2, 3 ]

function remove1(c, index) {
    c.splice(index,1);
    return a;
}
let c = [0, 1, 2, 3];
remove1(c, 2);
console.log(c);
remove1(c, 1);
console.log(c);
console.log("--------------------------");
/*
8. remove 함수는 파라미터 배열에서 index 위치의 값을 제거한다.
index 위치 뒤에 있던 값들은 한 칸씩 앞으로 당겨져야 하고, 배열의 크기는 1 감소해야 한다. 
출력 [ 0, 1, 3 ] [ 0, 3 ]
 */

function createArray(count) {
    let arr = [];
    let i = 1;
    while(arr.length!=count){
        if(i%2!=0){
            arr.push(i);
        }
        i++;
    }
    return arr;
}
console.log(createArray(4));
console.log(createArray(5));
console.log(createArray(6));
console.log("--------------------------");
/*
출력 [ 1, 3, 5, 7 ] [ 1, 3, 5, 7, 9 ] [ 1, 3, 5, 7, 9, 11 ]
9. createArray 함수는 count 크기의 배열을 생성하여 리턴한다.
이 배열에는 1 이상의 홀수가 순서대로 들어있어야 한다. 
 */
function contains(d, value) {
    let st = "false";
    for(let i = 0;i<d.length;i++){
        if(parseInt(d[i])===value){
            st = "true";
            break;
        }else{
            continue;
        }
    }
    return st;
}
let d = [1, 3, 5, 6];
console.log(contains(d, 3));
console.log(contains(d, 4));
console.log(contains(d, "3"));
console.log("--------------------------");
/*
출력 true false false 
10. contains 함수를 구현하시오.
이 함수는 파라미터 배열 a 에 value 값이 들어있는지 여부(true/false)를 리턴한다. X
 */
function remove2(e, value) {
    for(let i = 0;i<e.length;i++){
        if(e[i]==value){
            e.splice(i,1);
            break;
        }
    }
    return e;
}
let e = [1,3,5,5,3,6];
remove2(e, 3);
console.log(e);
remove2(e, 5);
console.log(e);
console.log("--------------------------");
/*
출력 [ 1, 5, 5, 3, 6 ] [ 1, 5, 3, 6 ]
11. remove 함수는 파라미터 배열에서 value 값을 찾아서 제거한다.
제거된 값의 뒤에 있던 값들은 한 칸씩 앞으로 당겨져야 하고, 배열의 크기는 1 감소해야 한다.
a 배열에 value 값이 여러 개 들어있는 경우, 제일 앞의 값 한 개만 제거한다.
 */
function sort(f) {
    f.sort();
    f.reverse();
}
let f = ["one", "two", "three", "four", "five"];
sort(f);
console.log(f);
/*
출력 [ 'two', 'three', 'one', 'four', 'five' ]
12. sort 함수는 파라미터 배열을 내림차순으로 정렬한다. */
