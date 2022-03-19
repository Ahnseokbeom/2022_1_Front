// let id = setTimeout(callback,delay,[arg1],[arg2]...)
function printTime(msg){
    console.log(msg, new Date());
}
setTimeout(printTime, "1000","1초 후");
setTimeout(printTime, "2000","2초 후");
setTimeout(printTime, "3000","3초 후");
// 취소할 때 clearTimeout(function)

