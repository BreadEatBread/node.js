var sayNode = function() {
  console.log('Node');
};
var es = 'ES';
var oldObject = {
  sayJS() {
    console.log('JS');
  },
  sayNode,
}; 
oldObject[es + 6] = 'Fantastic';
oldObject.sayNode();
oldObject.sayJS();
console.log(oldObject.ES6);
