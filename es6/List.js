class List {
  constructor(...args) {
    this.length = args.length;
    for (let i in args) {
      this[i] = args[i];
    }  
  }
  forEach(callback) {
    for(let i = 0; i < this.length; i++) {
      callback(this[i]);
    }
}
  map(callback) {
    return this.reduce((prev, cur) => { // 2. 이전 값과 현재값으로 다음 값을 도출하는 함수
      let result = callback(cur); // 2-1. 모든 요소에 대해서 callback 함수를 실행한 결과
      prev.push(result); // 2-2. 결과값을 계속 배열에 추가
      return prev; // 2-3. 현재 값이 추가된 배열 반환
    }, []); // 1. 빈 배열에서 시작
  }
  reduce(callback, initialValue = null) {
    //initialValue가 없으면 첫번째 요소 this[0]을 가져오고 for문을 1부터 시작
    let previousValue = initialValue ?? this[0]; 
    for (let i = initialValue? 0 : 1; i < this.length; i++) {
      // 이전 값과 현재값으로 새로운값을 도출하여 previousValue에 축적
      let currentValue = this[i];
      previousValue = callback(previousValue, currentValue);
    }
    return previousValue;
  }
  toString() {
    return this.reduce((prev, cur) => `${prev}, ${cur}`);
  }
}

let list = new List(1, 4, 9, 16); // constructor를 호출하여 인스턴스 생성
console.log(list.toString());
list.forEach((item) => console.log(item));
let roots = list.map(Math.sqrt); // 모든 요소의 제곱근으로 새로운 list 생성
console.log({ roots });
