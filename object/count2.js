const MAX = 1000,
    MIN = 1;
let count = {};
for (let i = 0; i < 100; ++i) {
    let a = Math.floor(Math.random() * (MAX - MIN + 1) + MIN);
    // count[a] = (count[a] || 0) + 1; 가장 간결한 코드
    // count[a] = count[a] ? count[a] + 1 : 1 아래와 같은 의미
    if (typeof count[a] == "undefined") 
        count[a] = 1;
    else 
        count[a] += 1;
    }
for (let key in count) 
    if (count[key] >= 2) 
        console.log("%d %d", key, count[key]);
console.log("length = ", Object.keys(count).length)