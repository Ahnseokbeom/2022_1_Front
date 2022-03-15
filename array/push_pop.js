// push
let a = [];
for(let i = 0;i<5;i++){
    a.push(i);
}

// pop
let b = [1,3,5,7];
while(b.length>0){
    let value = b.pop();
    console.log("pop value = %d, array[%s]",value,b.toString());
}
