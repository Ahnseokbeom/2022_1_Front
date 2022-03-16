let s = "hello world";
// charAt - 문자열의 한 부분만 출력 / charCodeAt - 문자의 아스키 코드 출력
for(let i = 0;i<s.length;i++){
    console.log("%s %s %d",s[i],s.charAt(i),s.charCodeAt(i));
}
console.log();
let st = "안녕하세요";
for(i = 0;i<st.length;i++){
    console.log("%s %s %d",st[i],st.charAt(i),st.charCodeAt(i));
}