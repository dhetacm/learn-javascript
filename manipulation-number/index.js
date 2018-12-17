console.log("Manipulation : Number");

var number_a = 4;
var number_b = 9;
var negative_number = -3;
var big_number = 500000;

var addition_a = number_a + number_b;
var addition_b = number_a + negative_number;
var reduction_a = number_b - number_a;
var reduction_b = number_b - negative_number;
var multiply_a = number_a * number_b;
var multiply_b = number_b * negative_number;
var multiply_c = number_a * big_number;
var division_a = number_b / number_a;
var division_b = number_b / negative_number;
var division_c = number_a / big_number;
var modulo_a = number_b % number_a;
var modulo_b = big_number % number_b;
var modulo_c = number_a % negative_number;
var number_add_word = big_number + " Horses in the stable";

console.log("Addition");
console.log(`4 + 9 = ${addition_a}`);
console.log(`4 + (-3) = ${addition_b}`);
console.log(`500.000 + "Horses in the stable" = ${number_add_word}`);

console.log("Reduction");
console.log(`9 - 4 = ${reduction_a}`);
console.log(`9 - (-3) = ${reduction_b}`);

console.log("Multiply");
console.log(`4 * 9 = ${multiply_a}`);
console.log(`9 * -3 = ${multiply_b}`);
console.log(`4 * 500.000 = ${multiply_c}`);

console.log("Division");
console.log(`9 / 4 = ${division_a}`);
console.log(`9 / -3 = ${division_b}`);
console.log(`4 / 500.000 = ${division_c}`);

console.log("Modulo");
console.log(`9 % 4 = ${modulo_a}`);
console.log(`500.000 % 9 = ${modulo_b}`);
console.log(`4 % -3 = ${modulo_c}`);

var number_array = [3, -6, "105", 73, "24"];
console.log(`An array of number = ${number_array}`);

var array_push = number_array.push("ancalagon", false, 16);
console.log(`Let give some items = ${number_array}`);

var array_pop = number_array.pop();
console.log(`Wait! Too much! Delete one ! = ${number_array}`);
