/*
파일 확장자 출력 : .hwp / .js / .docx
파일명 출력 : guide.hwp / substring1.js / homework.docx
파일 이름 부분만 출력 : guide / substring1 / homework
*/ 
let a = ["c:/temp/guide.hwp", "c:/pj/frontend/chap05/substring1.js", "homework.docx"]
// 파일 확장자 출력
for(let i = 0;i<a.length;i++){
    console.log(a[i].match(/[.][a-z,A-Z]{2,4}/)[0])
}
// 파일명 출력
for(i = 0;i<a.length;i++){
    console.log(a[i].match(/[0-9,a-z,A-Z]+(?=\.)[.][a-z,A-Z]{2,4}/)[0])
}
// 파일 이름 부분만 출력
for(i = 0;i<a.length;i++){
    console.log(a[i].match(/[0-9,a-z,A-Z]+(?=\.)/)[0])
}
