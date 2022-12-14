import assert from 'assert'; // 조건이 false 면 오류 발생

class Queue {
constructor(max) {
  this.array = new Array(max);
  this.length = max;
  this.size = 0;
  this.front = -1;
  this.rear = -1;
}

  add(value) {
    assert(this.size < this.length, 'The queue is full.');    
    this.size += 1;
    this.rear = (this.rear + 1) % this.length;
    this.array[this.rear] = value;
  }

  delete() {
    assert(this.size > 0, 'The queue is empty');
    this.size -= 1;
    this.front = (this.front + 1) % this.length;
    return this.array[this.front];
  }
};

let queue1 = new Queue(3);
queue1.add(4);
queue1.add(6);
queue1.add(1);
let data = queue1.delete();
console.log(data); //4
queue1.add(9);
console.log(queue1.delete()); //6
console.log(queue1.delete()); //1
console.log(queue1.delete()); //9

if (queue1.size > 0) {
  console.log(queue1.delete());
} else {
  console.warn("The queue is empty.");
}

export default Queue; // import Queue from './Queue.mjs';
