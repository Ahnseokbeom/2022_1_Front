let s1 = '"hello world"';
let s2 = "'hello world'";
let s3 = "\"hello world\"";
let s4 = '\'hello world\'';
console.log(s1); // "hello world" 
console.log(s2); // 'hello world' 
console.log(s3); // "hello world"  
console.log(s4); // 'hello world'
let s = "one two one two";
console.log(s.indexOf("two",5)); // 12 이유는 one o ~ two o까지 0부터 센다
// slice(시작_위치, 끝_위치)
s = "abcdefgh";
console.log(s.slice(2, 4)); // cd
console.log(s.slice(2)); // cdefgh
console.log(s.slice(-3)); // fgh
console.log(s.substring(s.length-3)); // fgh
// replace(부분_문자열, 치환할_문자열)
s = "hello world";
console.log(s.replace('o','O')); // hellO world
console.log(s.replace(/o/g,'O')); // hellO wOrld
//function
function add1(a, b) {
    return a + b;
}
let f = add1
// 둘은 동일한 결과를 출력한다.
f = function add2(a,b){
    return a+b;
}
// callback function
function test1(f) {
    let result = f(3, 4);
    console.log(result);
}
test1(function (a, b) {
    return a + b;
});
test1(function (a, b) {
    return a * b;
});
// arrow function
test1((a, b) => { return a + b; });
test1((a, b) => { return a * b; });
// 지역 함수
function outterFunc() {
    print("hello")
    function print(msg) {
        console.log(msg)
    }
}
outterFunc() // print("world") 여기서 호출할 수 없다.
// 이름 없는 함수
f = function (msg) {
    console.log(msg)
}
f("hello");
// 둘은 동일한 결과를 출력한다.
(function (msg) {
    console.log(msg)
})("hello");
