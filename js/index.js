// Iteration 1: Names and Input
const hacker1='Willian'
const hacker2='Beatriz'
console.log(`The driver's name is ${hacker1}` )
console.log(`The navigator's name is ${hacker2}` )
//
// Iteration 2: Conditionals

if (hacker1.length>hacker2.length){
console.log(`The driver has the longest name, it has ${hacker1.length} characters.`)
} else if (hacker2.length>hacker1.length) {
console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters`)
} else if (hacker1.length===hacker2.length){
console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`)
}
// Iteration 3: Loops
function space(str) {
let words = [];
words = str.split("\s+");
let result = "";
for ( i = 0; i < words.length; i++) {
return result += words[i].split('').join(' ');
}
}
console.log(space(hacker1).toUpperCase())

function reverseInPlace(str) {
let words = [];
words = str.split("\s+");
let result = "";
for ( i = 0; i < words.length; i++) {
return result += words[i].split('').reverse().join('');
}
}
console.log(reverseInPlace(hacker2))

const characters = [
{hacker1},
{hacker2},
];

characters.sort((a, b) => {
if (a === b) {
console.log("What?! You both have the same name?")
} 
else if(a > b) {
console.log("The driver's name goes first.")
} 
else{
console.log("Yo, the navigator goes first definitely.")
}
})
