const fs = require("fs");
// 표준 입력을 파일에서 바이트 데이터를 읽듯이 가져와서
// 바이트를 문자열로 바꾼다.
let input = fs.readFileSync("/dev/stdin").toString();
const n = Number(input); // 입력 값을 숫자 n으로 받는다.

for (let i = 1; i <= n; i++) {
  let output = ""; // output에 i개의 *을 출력
  output += "*".repeat(i);
  console.log(output); // 한 줄씩 출력 (개행문자 자동 출력)
}
