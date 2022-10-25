const condition = Math.random() < 0.5; //true = resolve / false = reject
const promise = new Promise((resolve, reject) => {
  if (condition) {
    resolve('성공');
  }else{
    reject('실패');
  }
});

promise
  .then((message) => {
    return new Promise((resolve) => {
      resolve(message);
    });
  })
  .then((message2) => {
    console.log('console.log가 먼저 있어서 얘부터 출력');
    return new Promise((resolve) => {
      resolve(message2);
    });
  })
  .then(console.log)
  .catch(console.error);
