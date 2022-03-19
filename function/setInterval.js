// 1초 후를 무한 반복 출력 취소하려면 터미널 창에서 Ctrl + C 입력
// 방법 1
function printTime(msg){
    console.log(msg, new Date());
}
setInterval(printTime, 1000, "1초 후");

// 방법 2
setInterval(function(msg){
    console.log(msg, new Date());
}, 1000, "1초 후");

// 방법 3
setInterval((msg) => console.log(msg, new Date()), 1000, "1초 후");