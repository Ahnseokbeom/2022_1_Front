/*
파일 확장자 출력 : .hwp / .js / .docx
파일명 출력 : guide.hwp / substring1.js / homework.docx
파일 이름 부분만 출력 : guide / substring1 / homework
*/ 
let a = ["c:/temp/guide.hwp", "c:/pj/frontend/chap05/substring1.js", "homework.docx"]
// 파일 확장자 출력
let a1 = a[0].match(/[.][a-z]{2,4}/)
let a2 = a[1].match(/[.][a-z]{2,4}/)
let a3 = a[2].match(/[.][a-z]{2,4}/)
console.log(a1[0])
console.log(a2[0])
console.log(a3[0])
console.log()

// 파일명 출력
a1 = a[0].match(/[a-z]{5,10}[.][a-z]{2,4}/)
a2 = a[1].match(/[a-z]{5,10}.[.][a-z]{2,4}/)
a3 = a[2].match(/[a-z]{5,10}[.][a-z]{2,4}/)
console.log(a1[0])
console.log(a2[0])
console.log(a3[0])
console.log()

// 파일 이름 부분만 출력
a1 = a[0].match(/[a-z]{5,10}/)
a2 = a[1].match(/[a-z]{9,10}./)
a3 = a[2].match(/[a-z]{5,10}/)
console.log(a1[0])
console.log(a2[0])
console.log(a3[0])


