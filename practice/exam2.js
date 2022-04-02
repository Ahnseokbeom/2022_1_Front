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
    a.splice(index,1," ");
    return a;
}
let a = [0, 1, 2, 3];
remove(a, 2);
console.log(a);
remove(a, 1);
console.log(a);
/*
remove 함수는 파라미터 배열에서 index 위치의 값을 제거한다.
index 위치 뒤에 있던 값들은 한 칸씩 앞으로 당겨져야 하고, 배열의 크기는 1 감소해야 한다.
출력 [ 0, 1, 3 ] [ 0, 3 ]
 */


