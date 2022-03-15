// 2차원 배열
let a = [[1, 2], [3, 4, 5], [6, 7, 8, 9]]; 
for (let i = 0; i < a.length; ++i) 
    for (let j = 0; j < a[i].length; ++j) 
        console.log(a[i][j]);

console.log("--------------------------")

// 3차원 배열
let b = [[[1, 2], [3, 4]], [[5, 6], [7, 8]], [[9, 10], [11, 12]]];
for (let i = 0; i < b.length; ++i) 
    for (let j = 0; j < b[i].length; ++j) 
        for (let k = 0; k < b[i][j].length; ++k) 
            console.log(b[i][j][k]);