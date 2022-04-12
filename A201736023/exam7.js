let ractangles = [
    {width : 4, height : 3},
    {width : 5, height : 2},
    {width : 2, height : 3}
]
console.log(ractangles.reduce((a,b) => a.width*a.height > b.width * b.height ? a:b));