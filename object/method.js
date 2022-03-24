// 방법 1
let rectangle = {
    width : 5,
    height : 7,
    area : function(){ return this.width * this.height;}
};
console.log(rectangle.area())

// 방법 2
let ractangle = {
    width : 10,
    height : 7,
};
ractangle.area = function(){
    return this.width * this.height;
}
console.log(ractangle.area());
