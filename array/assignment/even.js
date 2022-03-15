// 출력 시 2의 배수가 남긴할텐데 남는 이유를 생각해보시오
let a = [];
for(let i = 0;i<100;i++){
    a[i] = Math.floor(Math.random()*100+1);
}
for(i = a.length;i>0;i--){
    if(a[i]%2==0){
        a.splice(i,1);
    }
}
console.log(a);