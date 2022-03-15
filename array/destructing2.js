// swap
let a = 3, b = 4;
a = 5;
b = 6;
console.log(a,b);
let temp = a;
a = b;
b = temp;
console.log(a,b);


a = 3, b = 4;
[a,b] = [5,6];
console.log(a,b);
[a,b] = [b,a];
console.log(a,b);
