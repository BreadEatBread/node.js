const words = ['spray', 'limit', 'elite', 'exuberant', 'descruction', 'present'];

const result = words.filter((word) => word.length > 6);

console.log(result);

const fruits = ['Apple', 'Banana', 'Grapes', 'Mango', 'Orange'];

const filterItems = (query) => fruits.filter(
  (el) => el.toLowerCase().includes(query.toLowerCase())
);

console.log(filterItems('ap'));
console.log(filterItems('an'));
