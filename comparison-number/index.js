var num1 = 5;
var num2 = 37;
var num3 = -21;
var num4 = 0.4;

console.log(`Number 1 = ${num1}`);
console.log(`Number 2 = ${num2}`);
console.log(`Number 3 = ${num3}`);
console.log(`Number 4 = ${num4}`);

console.log("Comparing the numbers with 3");

function testNum(a) {
  if (a > 3) {
    return "Greater Than";
  } else {
    return "Less than";
  }
}
console.log("Comparing the numbers with 3");
console.log(testNum(`${num1}`));
console.log(testNum(`${num2}`));
console.log(testNum(`${num3}`));
console.log(testNum(`${num4}`));
