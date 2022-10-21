const fs = require("fs");

let array = fs.readFileSync("/dev/stdin").toString().split("\n");
// let mul = parseInt(a) * parseInt(b) * parseInt(c);
array = array.filter((s) => s.length).map((s) => parseInt(s));
let mul = array.reduce((prev, cur) => prev * cur, 1);

let counting = new Array(10);
counting.fill(0);
while (mul) {
  counting[mul % 10]++;
  mul /= 10;
  mul = Math.floor(mul);
}
counting.forEach((count) => console.log(count));
