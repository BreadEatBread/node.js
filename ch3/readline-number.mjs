import * as readline from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";

const rl = readline.createInterface({ input, output });
do {
  var answer = await rl.question("숫자 입력: ");
  const number = Number(answer);

  if (isNaN(number)) {
    console.log(`${answer}는 숫자가 아닙니다.`);
  } else {
    console.log(`${answer}는 숫자입니다.`);
  }
} while (answer !== "exit");
rl.close();
