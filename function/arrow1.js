// 방법 1
function test1(f){
    let result = f(3,4);
    console.log(result);
}

test1((a,b) =>{
    return a+b;
});
test1((a,b) =>{
    return a*b;
});
console.log();

// 방법 2
let add = (a,b) => a+b;
let mul = (a,b) => a*b;
test1(add);
test1(mul);
console.log();

// 방법 3
test1((a,b)=>a+b);
test1((a,b)=>a*b);
