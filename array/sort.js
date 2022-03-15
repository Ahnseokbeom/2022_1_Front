// 오름차순 정렬(Number형이어도 String으로 출력됨)
let a = [3,1,6,2,4,8,10,5,11,7,9];
a.sort();
console.log(a);

// 오름차순 정렬
let b = [3,1,6,2,4,8,10,5,11,7,9];
b.sort(compareNumber);
console.log(b);

function compareNumber(i, j){
    return i-j;
}

// 내림차순 정렬
let c = [3,1,6,2,4,8,10,5,11,7,9];
c.sort(comparenumber);
console.log(c);

function comparenumber(i, j){
    return j-i;
}
