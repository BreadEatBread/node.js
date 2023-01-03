const json = `{
    "name": "식빵",
    "family": "웰시코기",
    "age": 1,
    "weight": 2.14
}`;

let obj = JSON.parse(json);
console.log(obj);
obj.age+=1;
console.log(JSON.stringify(obj, null, 2));
