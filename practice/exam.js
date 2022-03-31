function doSomething(a, b, c) {
    return Math.max(a,b,c);
}
console.log(doSomething(3, 1, 2));
console.log(doSomething(1, 2, 3));
console.log(doSomething(1, 3, 2));
//출력 3 / 3 / 3 최대값 출력

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
// min 이상 max 이하 수 뽑아내기