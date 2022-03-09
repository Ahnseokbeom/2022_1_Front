//1~55 사이의 3의 배수의 합을 출력
let sum = 0;
for(let i = 1;i<=55;i++){
    if(i%3==0){
        sum+=i;
    }
}
console.log(sum);