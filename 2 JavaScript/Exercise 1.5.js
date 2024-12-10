Task 1

let season = 'summer';
let response;

// Add your code here
response = season.includes("summer") ? "summer" : "test";


// Don't edit the code below here!

const section = document.querySelector('.preview');
section.innerHTML = ' ';
let para1 = document.createElement('p');
para1.textContent = response;
section.appendChild(para1);


Task 2

let response;
let score = 75;
let machineActive = false;

// Add your code here
if (!machineActive)
  response = "Machine is not active. Activate it first.";
else {
  if (0 <= score && score <= 19)
    response = "That was a terrible score — total fail!";
  else if (20 <= score && score <= 39)
    response = "You know some things, but it\'s a pretty bad score. Needs improvement.";
  else if (40 <= score && score <= 69)
    response = "You did a passable job, not bad!";
else if (70 <= score && score <= 89)
    response = "That\'s a great score, you really know your stuff.";
else if (90 <= score && score <= 100)
    response = "What an amazing score! Did you cheat? Are you for real?";
else
  response = "Invalid score value!";
}

// Don't edit the code below here!

section.innerHTML = ' ';
let para1 = document.createElement('p');
let para2 = document.createElement('p');

para1.textContent = `Your score is ${ score }`;
para2.textContent = response;

section.appendChild(para1);
section.appendChild(para2);


Task 3


let machineActive = true;
let pwd = 'cheese';

let machineResult;
let pwdResult;

// Add your code here
machineResult = machineActive ? "Machine turned on" : "Machine turned off. Turn on first";
if (machineActive) {
  pwdResult = (pwd == "cheese") ? "Login was successful" : "Login failed";
}

// Don't edit the code below here!

section.innerHTML = ' ';
let para1 = document.createElement('p');
let para2 = document.createElement('p');

para1.textContent = machineResult;
para2.textContent = pwdResult;

section.appendChild(para1);
section.appendChild(para2);
