function add(a, ...values) {
    let a1 = [...values];
    return a.concat(a1);

}
let a = [0, 1];
add(a, 2, 3, 4, 5);
let num = [2,3,4,5];
console.log(a);
console.log(a.concat(...num));