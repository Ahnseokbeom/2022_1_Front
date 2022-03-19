function outterFunc(){
    print("hello");
    function print(msg){
        console.log(msg);
    }
}
outterFunc();
// print()는 호출 불가

function outerFunc(){
    function print(msg){
        console.log(msg)
    }
    print("world")
}
outerFunc();
// 함수 내의 속한 함수를 선언할 때에는 함수 안이면 어디든 사용이 가능하다
