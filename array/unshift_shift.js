// unshift = push / shift = pop 
// push / pop이 훨씬 빠르다.
let a = [];
for(let i = 0;i<5;i++){
    a.unshift(i);
}
console.log(a.toString());

let b = [1,3,5,7];
while(b.length>0){
    let value = b.shift();
    console.log("pop value : %d, array[%s]",value,b.toString());
}