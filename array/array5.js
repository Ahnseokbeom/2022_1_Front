let a = [[1,2,3],[4,5,6],[7,8,9]];
for(let i = 0;i<a.length;i++){
    for(let j = 0;j<a[i].length;j++){
        console.log(a[i][j]);
    }
}
console.log("--------------------")

let b = [];
b[0] = [1,2,3];
b[1] = [4,5,6];
b[2] = [7,8,9];
for(i = 0;i<b.length;i++){
    for(j = 0;j<b[i].length;j++){
        console.log(b[i][j]);
    }
}
console.log("--------------------")

let a1 = [1,2,3];
let a2 = [4,5,6];
let a3 = [7,8,9];
let c = [a1,a2,a3];
for(i = 0;i<c.length;i++){
    for(j = 0;j<c[i].length;j++){
        console.log(c[i][j]);
    }
}
