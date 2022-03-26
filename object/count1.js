const max = 1000, min = 1;
let count = [];

for(let i = 0;i<100;i++){
    let a = Math.floor(Math.random()*(max-min+1)+min);
    if(typeof count[a] == "undefined"){
        count[a] = 1;
    }else count[a] += 1;
}

for(i = 0;i<count.length;i++){
    if(count[i] >= 2) 
        console.log("%d %d",i,count[i]);
}
console.log("length = ",count.length);