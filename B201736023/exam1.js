let a = [1,"a",2,"c",4,"d",5,"e","f",6,7];
let num = 0;
let str = 0;
for(let i = 0;i<a.length;i++){
    if(typeof(a[i])==='number'){
        num++;
    }else if(typeof(a[i])==='string'){
        str++;
    }
}
console.log("number : "+num+" "+"string : "+str);