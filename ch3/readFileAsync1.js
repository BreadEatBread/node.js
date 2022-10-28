const fs = require('fs').promises; // 모듈을 변수처럼 사용하기 위해 선언

(async () => {
  try{
  let data = await fs.readFile('./readme2.txt');
  console.log(data);
  console.log(data.toString());
  data = await fs.readFile('./readme2.txt');
  console.log(data);
  console.log(data.toString());
  } catch (err) {
    console.error(err);
  }
})();
