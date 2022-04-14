let a = ["c:/temp/guide.hwp",
"c:/pj/frontend/chap05/substring1.js",
"homework.docx"]

for(let i = 0;i<a.length;i++){
    console.log(a[i].match(/[a-z]*[1-9]*[.][a-z]*/)[0]);
}