const json = `{
  "users": [
    {
      "id": 1,
      "name": "홍길동",
      "joined": "2020-04-28",
      "verified": true
    },
    {
      "id": 2,
      "name": "백소저",
      "joined": "2022-01-12",
      "verified": false
    }
  ]
}`;
let obj = JSON.parse(json);
console.log(obj.users[0].joined);

console.log(obj.users.map((user)=>user.name));
console.log(obj.users.filter((user)=>user.verified));
