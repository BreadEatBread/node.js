const json = `{
    "size": 0,
    "values": [1, 2, 3, 4]
}`;

let quiz3 = JSON.parse(json);
quiz3['size'] = quiz3['values'].length;
console.log(quiz3['size']);
console.log(quiz3);
