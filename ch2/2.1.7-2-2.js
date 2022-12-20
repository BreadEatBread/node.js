const now = Date.now();
const promise = new Promise((resolve, reject) => {
    if(now % 2 === 0){
        resolve('짝수');
    }else {
        reject('홀수');
    }
});
promise
.then((message) => {
    return new Promise((resolve) => {
        resolve(message);
    });
})
.then((message2) => {
    console.log('메서드 체이닝');
    return Promise.resolve(message2);
})
.then(console.log)
.catch(console.error);
