let s = "one two three four";
let a = s.split(" ");
for(let i = 0;i<a.length;i++){
    console.log(a[i]);
}
console.log("------------------------------");
let st = "one, two,three four";
let b = st.split(/[\t ,]+/); // 탭, 콤마, 공백
for(i = 0;i<b.length;i++){
    console.log(b[i]);
}
console.log("------------------------------");
let str = "hello";
let c = str.split("");
for(i = 0;i<c.length;i++){
    console.log(c[i]);
}