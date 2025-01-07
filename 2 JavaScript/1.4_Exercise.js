Task 1

// Add your code here
const myArray = ["Alex", "Chris", "Mike"];
myArray[0] = "Alex 2";
myArray[1] = "Chris 3";
myArray.push("Dave");

// Don't edit the code below here!

section.innerHTML = ' ';
let para1 = document.createElement('p');
para1.textContent = `Array: ${ myArray }`;

section.appendChild(para1);
    
    
Task 2


// Add your code here

let myString = 'Ryu+Ken+Chun-Li+Cammy+Guile+Sakura+Sagat+Juri';
const myArray = myString.split("+");
const arrayLength = myArray.length;
const lastItem = myArray.at(-1);

// Don't edit the code below here!

section.innerHTML = ' ';
let para1 = document.createElement('p');
para1.textContent = `Array: ${ myArray }`;

let para2 = document.createElement('p');
para2.textContent = `The length of the array is ${ arrayLength }.`;

let para3 = document.createElement('p');
para3.textContent = `The last item in the array is "${ lastItem }".`;

section.appendChild(para1);
section.appendChild(para2);
section.appendChild(para3);
    

Task 3

let myArray = [ "Ryu", "Ken", "Chun-Li", "Cammy", "Guile", "Sakura", "Sagat", "Juri" ];

// Add your code here
myArray.splice(myArray.length-1, 1);
myArray.splice(myArray.length, 0, "Test1");
myArray.push("Test2");

const myString = myArray.join("-");

// Don't edit the code below here!

section.innerHTML = ' ';

let para1 = document.createElement('p');
para1.textContent = myString;

section.appendChild(para1);
    

Task 4

const birds = [ "Parrots", "Falcons", "Eagles", "Emus", "Caracaras", "Egrets" ];

// Add your code here
birds.splice(birds.indexOf("Eagles"), 1);
const eBirds = [];
for (const bird of birds)
  if (bird.startsWith("E"))
    eBirds.push(bird);

// Don't edit the code below here!

section.innerHTML = ' ';

const para1 = document.createElement('p');
para1.textContent = eBirds;

section.appendChild(para1);
