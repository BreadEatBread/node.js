const fs = require('fs');
let [a, b, c] = fs.readFileSync('/dev/stdin').toString().split('\n');
let mul = parseInt(a) * parseInt(b) * parseInt(c);
let counting = new Array(10);
counting.fill(0);
while (mul) {
  counting[mul % 10]++;
  mul /= 10;
  mul = Math.floor(mul);
}
for (let count of counting) {
  console.log(count);
}
