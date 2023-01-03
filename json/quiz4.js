const json = `{
    "users": [{
        "firstName": "Ray",
        "lastName": "Villalobos"
    },
    {
        "firstName": "John",
        "lastName": "Jones"
    },
    {
        "firstName": "Ashley",
        "lastName": "Allen"
    }
]
}`;

let quiz4 = JSON.parse(json);
let quiz4_map = quiz4.users.map((item) => `${item.firstName} ${item.lastName}`);
// console.log(quiz4_map);
quiz4_map.forEach((element) => {
  console.log(element);
});
