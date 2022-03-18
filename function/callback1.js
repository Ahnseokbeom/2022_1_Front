function test1(f){
    let result = f(3,4);
    console.log(result);
}

function add(a,b){
    return a+b;
}
function mul(a,b){
    return a*b;
}

test1(add);
test1(mul);

console.log();
// 위의 코드와 같은 결과가 나오는 코드
test1(function plus(a,b){
    return a+b;
})
test1(function multi(a,b){
    return a*b;
})

