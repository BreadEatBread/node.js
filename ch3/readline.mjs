import * as readline from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";

const rl = readline.createInterface({ input, output });

const answer = await rl.question("What is your favorite food?");

console.log(`Oh, so your favorite food is ${answer}`);

