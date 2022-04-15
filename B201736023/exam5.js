function add(a, ...values) {
    let a1 = [a,...values];
    return a1;
}
let a = [0, 1];
add(a, 2, 3, 4, 5);
console.log(a);