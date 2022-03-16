let s = "hello world";
for(let i = 0;i<s.length;i++){
    console.log(s[i]);
}

// 완성된 문자열은 변경 불가
let st = "hello world";
console.log(st[0]);
st[0] = "H";
console.log(st[0]);