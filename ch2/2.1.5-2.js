const candyMachine = {
  status: {
    name: "node",
    count: 5,
  },
  getCandy(n = 1) {
    this.status.count -= n;
    return this.status.count;
  },
};
const {
  getCandy,
  status: { count },
} = candyMachine;
// getCandy = getCandy.bind(candyMachine);

console.log({ count });
console.log(getCandy.call(candyMachine, 2)); // 가변 파라미터
// console.log(getCandy.apply(candyMachine, [2])); // 파라미터 배열
