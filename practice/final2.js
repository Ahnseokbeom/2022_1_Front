function getPropertyValue(obj, propertyName) { // X
    return obj.propertyName;
}
let p1 = {name: '홍길동',age: 1};
console.log(getPropertyValue(p1, "name")); // p1 객체의 name 속성값이 출력된다. 
console.log(p1.name);
console.log(getPropertyValue(p1, "age")); //p1 객체의 age 속성값이 출력된다.
let r1 = {width: 11,height: 22};
console.log(getPropertyValue(r1, "width"));// r1 객체의 width 속성값이 출력된다
console.log(getPropertyValue(r1, "height")); // r1 객체의 height 속성값이 출력된다
// 출력 : 홍길동 16 11 22
function compareIdentity(p1, p2) {
    return p1 == p2;
}
p1 = {name: '홍길동',age: 16};
let p2 = {name: '홍길동',age: 16};
let p3 = p1;
console.log(compareIdentity(p1, p2));
console.log(compareIdentity(p1, p3));
// 출력 false true
class Order {
    constructor(price, quantity, amount){
        this.quantity = quantity;
        this.price = price;
        this.amount = amount*quantity;
    }
}
let order1 = new Order("우유", 900, 3);
console.log(order1.price, order1.quantity, order1.amount);
order1.amount = 1800; // 주문 금액을 1800원으로 수정한다. 
console.log(order1.price, order1.quantity, order1.amount)
// 생성자 파라미터는 제품, 가격, 수량이다. amount 속성값은 주문 금액(가격 * 수량) 이어야 한다.
// 출력 900 3 2700 900 2 1800
function deepCopy(persons) { // X
    let per = Object.assign(persons);
    return per;
}
let persons1 = [
    {name: "홍길동",age: 16},
    {name: "임꺽정",age: 18}
];
let persons2 = deepCopy(persons1);
persons1[0].age = 20;
console.log(persons2);
// 출력 [ { name: '홍길동', age: 16 }, { name: '임꺽정', age: 18 } ]