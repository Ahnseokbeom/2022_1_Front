let arr = []
for(let i = 0;i<10;i++){
    arr[i] = Math.floor(Math.random()*5+5);
}
arr.sort();
console.log(arr);