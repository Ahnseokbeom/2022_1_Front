let a = [];
for(let i = 0;i<100;i++){
    a.push(Math.floor(Math.random()*100+1));
}
a.sort(compareNumber);
console.log(a);
function compareNumber(i,j){
    return i-j;
}