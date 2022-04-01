function doSomething(a, b, c) {
    return Math.max(a,b,c);
}
console.log(doSomething(3, 1, 2));
console.log(doSomething(1, 2, 3));
console.log(doSomething(1, 3, 2));
// 1.출력 3 / 3 / 3 최대값 출력

function countNumber(a) {

}
console.log(countNumber([1, 2, 3]));
console.log(countNumber(["1", 2, 3]));
console.log(countNumber(["1", 2, 3, 4, true]));
// 2 .출력 3 / 2 / 3 numbertype 수 출력

function createArray(count, min, max) {
    let a = [];
    for(let i = 0;i<count;i++){
        a[i] = Math.floor(Math.random()*(max-min))+min;
    }
    return a;
}
console.log(createArray(4, 11, 15));
console.log(createArray(5, 21, 25));
console.log(createArray(6, 31, 35));
// 3 .min 이상 max 이하 수 뽑아내기

function sum(a) {

}
console.log(sum([1, 2, 3, 4]));
console.log(sum([3, 4, 5]));
console.log(sum([20, 21]));
// 4. 배열에 들어간 수들의 합계 출력 10 / 12 / 41

function sum(a) {

}
console.log(sum(["1", "2", "3", "4"]));
console.log(sum(["3", "4", "5"]));
console.log(sum(["20", "21"]));
// 5. 문자열을 숫자로 변환해서 합계 출력 10 / 12 / 41
function insert(a, index, value) {

}
let a = [1, 2, 3];
insert(a, 2, 33)
console.log(a)
insert(a, 1, 22)
console.log(a)
insert(a, 0, 11)
console.log(a)
/*
// 6. insert 함수는, 파라미터 a 배열의 index 위치에 value 값을 삽입한다.
index 위치와 그 뒤에 있던 값들은 한 칸씩 뒤로 밀려야 하고, 배열의 크기는 1 증가해야 한다.
출력 [1,2,33,3] / [ 1, 22, 2, 33, 3 ] / [ 11, 1, 22, 2, 33, 3 ] 
 */