function countProperties(obj) { 
    return Object.keys(obj).length;
}   
let person = {
    name: '홍길동',
    age: 16,
    height: 180
}
let count = countProperties(person)
console.log(count)