/* 
 * Test JS 1.6 new Array Methods
 */

//var array = [2, 5, 2, 9];
//var index = array.indexOf(2, -3); // index is assigned 0
//console.log("index of 2 is ", index);
//index = array.indexOf(7); // index is assigned -1
//console.log("index of 7 is ", index);

//var array = [2, 2, 5, 9, 2];
//var index = array.lastIndexOf(7);

function isYoung(value, index, array) {
    return value < 45;
}
function doubleAge(value){
    return value * 2;
}
function ageNextYear(value){
    return ++value;
}
function print(value, index){
    console.log(index, " -> ", value);
}
function sum(previousValue, currentValue, index, array){
  return previousValue + currentValue;
}
var result = [41, 20, 17, 52, 39]
        .filter(isYoung)
        .map(ageNextYear)
        .reduce(sum, 0);
//        .forEach(print);
console.log("Sum = ", result);