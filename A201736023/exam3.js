let a = ["c:/temp/guide.hwp",
        "c:/Pj/frontend/chap05/substring1.js",
        "homework.docx"];
for(let i = 0;i<a.length;i++){
    console.log(a[i].match(/[.][a-z,A_Z]{2,4}/)[0]);
}