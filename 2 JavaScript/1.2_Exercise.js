//Task 1

let finalResult;

let evenOddResult;

// Add your code here
const a = 4;
const b = 8;
const c = 9;
const d = 5;
const a_and_b = a + b;
const c_subtract_d = c - d;
finalResult = a_and_b * c_subtract_d;
evenOddResult = finalResult % 2;


// Don't edit the code below here!

section.innerHTML = ' ';
const para1 = document.createElement('p');
const finalResultCheck = finalResult === 48 ? `Yes, well done!` : `No, it is ${ finalResult }`;
para1.textContent = `Is the finalResult 48? ${ finalResultCheck }`;
const para2 = document.createElement('p');
const evenOddResultCheck = evenOddResult === 0 ? 'The final result is even!' : 'The final result is odd. Hrm.';
para2.textContent = evenOddResultCheck;

section.appendChild(para1);
section.appendChild(para2);
    

//Task 2

// Final result should be 4633.33
// Add/update your code here

let result = 7 + 13 / 9 + 7;
let result2 = 100 / 2 * 6;

result *= result2;
let finalResult2 = (result).toFixed(2);

let finalNumber = 0;
if (typeof finalResult === "string")
  finalNumber = +finalResult;


// Don't edit the code below here!

section.innerHTML = ' ';
const para10 = document.createElement('p');
para10.textContent = `Your finalResult is ${ finalResult }`;
const para20 = document.createElement('p');
const finalNumberCheck = isNaN(finalNumber) === false ? 'finalNumber is a number type. Well done!' : `Ooops! finalNumber is not a number.`;
para20.textContent = finalNumberCheck;

section.appendChild(para10);
section.appendChild(para20);


//Task 3

// Statement 1: The elephant weighs less than the mouse
const eleWeight = 1000;
const mouseWeight = 2;

// Statement 2: The Ostrich is taller than the duck
const ostrichHeight = 2;
const duckHeight = 0.3;

// Statement 3: The two passwords match
const pwd1 = 'stromboli';
const pwd2 = 'stROmBoLi';

// Add your code here
weightComparison = eleWeight < mouseWeight;
heightComparison = ostrichHeight > duckHeight;
pwdMatch = pwd1 === pwd2;

// Don't edit the code below here!

section.innerHTML = ' ';
const para100 = document.createElement('p');
const para200 = document.createElement('p');
const para300 = document.createElement('p');

const weightTest = weightComparison ? 'True — elephants weigh less than mice!?' : 'False — of course an elephant is heavier than a mouse!';
const heightTest = heightComparison ? 'True — an ostrich is indeed taller than a duck!' : 'False — apparently a duck is taller than an ostrich!?';
const pwdTest = pwdMatch ? 'True — the passwords match.' : 'False — the passwords do not match; please check them';

para100.textContent = weightTest;
section.appendChild(para100);
para200.textContent = heightTest;
section.appendChild(para200);
para300.textContent = pwdTest;
section.appendChild(para300);