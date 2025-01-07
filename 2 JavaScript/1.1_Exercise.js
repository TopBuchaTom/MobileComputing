//Task 1

// Add your code here

let myName;
myName = "Alex";
let myAge = 21;

// Don't edit the code below here!

section.innerHTML = ' ';
const para1 = document.createElement('p');
para1.textContent = myName;
const para2 = document.createElement('p');
para2.textContent = myAge;
section.appendChild(para1);
section.appendChild(para2);
    

//Task 2

// Add your code here

let myName2 = 'Paul';
myName2 = "Alex";

// Don't edit the code below here!

section.innerHTML = ' ';
const para = document.createElement('p');
para.textContent = myName2;
section.appendChild(para);


//Task 3

// Add your code here

let myName3 = 'Default';
myName = 'Chris';

let myAge3 = 42;

// Don't edit the code below here!

section.innerHTML = ' ';
const para1 = document.createElement('p');
const para2 = document.createElement('p');
para1.textContent = myName3;
para2.textContent = `In 20 years, I will be ${myAge3 + 20}`;
section.appendChild(para1);
section.appendChild(para2);