// for loop

for (let i = 0; i < 5; i++) {
    console.log("Iteration:", i);
}
// while loop
let j = 0;  
while (j < 5) {
    console.log("While Iteration:", j);
    j++;
}
// do while loop
let k = 0;  
do {
    console.log("Do While Iteration:", k);
    k++;
}while (k < 5);
// for...of loop
let str = "javascript";
let size = 0
for (let char of str) {
    console.log("Character:", char);
    size++;
}
console.log("Size of string:", size);
// for...in loop
let person = { 
    name: "John", 
    age: 30,
    occupation: "Developer",
    hobbies: ["reading", "gaming"]    
};
for (let key in person) {
    console.log("key", key, "Value:", person[key]);
}