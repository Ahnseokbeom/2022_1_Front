function add(a,b){
    return a+b;
}
let a = add(3,4);
console.log(a);

let f = add;
console.log(typeof f); // function

let b = f(3,4);
console.log(b);

let c = add();
console.log(typeof c); // number

let d = function plus(a,b){
    return a+b;
}
console.log(typeof d);
console.log(d(3,4));

