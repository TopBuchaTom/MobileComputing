Task 1

const section = document.querySelector('section');

let para1 = document.createElement('p');
let para2 = document.createElement('p');
let motherInfo = 'The mother cats are called ';
let kittenInfo;
const requestURL = 'https://mdn.github.io/learning-area/javascript/oojs/tasks/json/sample.json';

fetch(requestURL)
  .then(response => response.text())
  .then(text => displayCatInfo(text))

function displayCatInfo(catString) {
  let total = 0;
  let male = 0;

// Add your code here
 const cats = JSON.parse(catString);
  for (let i=0; i<cats.length; i++) {
     const cat = cats[i];
     const separator = (i < cats.length-1)
       ? ((i < cats.length - 2) ? ", " : " and ")
       : ""
     motherInfo += `${cat.name}${separator}`;
     for (const kitten of cat.kittens) {
       if (kitten.gender == "m") male++;
       total++;
     }
  }
  motherInfo += ".";
  kittenInfo = `male: ${male}, total: ${total}`

// Don't edit the code below here!

  para1.textContent = motherInfo;
  para2.textContent = kittenInfo;
}

section.appendChild(para1);
section.appendChild(para2);
