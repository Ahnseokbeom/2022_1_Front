let a = [1,"a",2,3,"four",5,6,"c","d",7];
let b = []
for(let i = 0;i<a.length;i++){
    if(typeof(a[i])==='number'){
        b.push(a[i]);
    }
}
console.log(b);