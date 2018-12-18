console.log("Manipulation : String");

const sentenceA = "Today is a beautiful day.";
const sentenceB = "I met my old friend in a coffeshop.";
const sentenceC = sentenceA + " " + sentenceB;
const sentenceD = `${sentenceA} ${sentenceB}`;
var str = "hello world!";

console.log(`Sentence A : ${sentenceA}`);
console.log(`Sentence B : ${sentenceB}`);
console.log(`When sentenceA + " "+ sentenceB it become : ${sentenceC}`);
console.log(`When ${sentenceA} meet ${sentenceB} it become : ${sentenceD}`);
console.log(`Uppercase sentence A : ${sentenceA.toUpperCase()}`);
console.log(`Uppercase sentence B : ${sentenceB.toUpperCase()}`);
