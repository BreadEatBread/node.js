let queue = [];
let front = -1
let rear = -1;

function queueAdd(value) {
  rear += 1;
  queue[rear] = value;
}

function queueDelete() {
  if (rear > front){
  front += 1;
  return queue[front];
  }
  throw Error('The queue is empty.');
}

function queueLen() {
  return rear - front;
}

queueAdd(4);
queueAdd(6);
queueAdd(1);
let data = queueDelete();
console.log(data);
console.log(queueDelete());
console.log(queueDelete());

if (queueLen() > 0) {
  console.log(queueDelete());
}else{
  console.warn('The queue is empty.');
}
