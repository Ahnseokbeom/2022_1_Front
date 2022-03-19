function fatory(){
    return function(msg){
        console.log(msg)
    }
}
// 방법 1
let f = fatory()
f("hello world")

// 방법 2
fatory()("hello friend")