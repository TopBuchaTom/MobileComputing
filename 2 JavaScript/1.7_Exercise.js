Task 1

const names = ['Chris', 'Li Kang', 'Anne', 'Francesca', 'Mustafa', 'Tina', 'Bert', 'Jada']
const para = document.createElement('p');

// Add your code here
function chooseName(arr) {
  para.innerHTML = arr[Math.floor(Math.random() * (arr.length-1))];
}

chooseName(names);

// Don't edit the code below here!

section.innerHTML = ' ';

section.appendChild(para);
    

Task 2

const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

const x = 50;
const y = 60;
const width = 100;
const height = 75;
const color = 'blue';

// Add your code here
function drawRectangle(a, b, w, h, c) {
  ctx.strokeStyle = c;
  ctx.strokeRect(a, b, w, h);
}

ctx.clearRect(0, 0, canvas.width, canvas.height);
drawRectangle(x, y, width, height, color);


Task 3

const names = ['Chris', 'Li Kang', 'Anne', 'Francesca', 'Mustafa', 'Tina', 'Bert', 'Jada']
const para = document.createElement('p');

// Add your code here
function random(min, max) {
  return Math.random() * (max - min) + min;
}

function chooseName(arr) {
  return arr[Math.floor(Math.random() * (arr.length-1))];
}

para.textContent = chooseName(names);

// Don't edit the code below here!

section.innerHTML = ' ';

section.appendChild(para);
    

Task 4

const names = ['Chris', 'Li Kang', 'Anne', 'Francesca', 'Mustafa', 'Tina', 'Bert', 'Jada'];
const para = document.createElement('p');

function isShort(name) {
  return name.length < 5;
}

// const shortNames = names.filter(isShort);
const shortNames = names.filter(name => name.length < 5);
para.textContent = shortNames;

// Don't edit the code below here!

section.innerHTML = ' ';

section.appendChild(para);
