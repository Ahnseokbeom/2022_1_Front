let b = [1,2,3]
let a = [];
for(let i = 0;i<3;i++){
    a[i] = b;
}
console.log(a);
a[0][0] = 10;
console.log(a);