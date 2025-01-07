Task 1

const cat = {
  name : 'Bertie',
  breed : 'Cymric',
  color : 'white',
  greeting: function() {
    console.log('Meow!');
  }
}

// Put your code here
const catName = cat["name"];
cat.greeting();
cat.color = "black";



// Don't edit the code below here

let para1 = document.createElement('p');
let para2 = document.createElement('p');

para1.textContent = `The cat's name is ${ catName }.`;
para2.textContent = `The cat's color is ${ cat.color }.`;

section.appendChild(para1);
section.appendChild(para2);
    

Task 2

let bandInfo;

// Put your code here
const band = {
  name: "The crazy developers",
  nationality: "Developer",
  genre: "Software development",
  members: 30,
  formed: 2022,
  split: false,
  albums: [
    { name: "Grundlagen Web Development", released: 2024 },
    { name: "Full Stack Web Development", released: 2025 }
  ]
}

bandInfo = `${band.name} (${band.nationality}) - active for ${new Date().getFullYear() - band.formed} years, ${band.genre}: First album: ${band.albums[0].name} (released ${band.albums[0].released})`;

// Don't edit the code below here

let para1 = document.createElement('p');
para1.textContent = bandInfo;
section.appendChild(para1);
    

Task 3

const cat = {
  name : 'Bertie',
  breed : 'Cymric',
  color : 'white',
  greeting: function() {
    console.log(`Hello, said ${this.name} the ${this.breed}`);
  }
}

const cat2 = {
  name : 'Test',
  breed : 'Test2',
  color : 'Test3',
  greeting: function() {
    console.log(`Hello, said ${this.name} the ${this.breed}`);
  }
}
    
cat.greeting();
cat2.greeting();


Task 4

function Cat(name, breed, color) {
  this.name = name;
  this.breed = breed;
  this.color = color;

  this.greeting = function() {
    console.log(`Hello, said ${ this.name } the ${ this.breed }.`);
  }
}

const cat = new Cat('Bertie', 'Cymric', 'white');
const cat2 = new Cat('Elfie', 'Aphrodite Giant', 'ginger');

cat.greeting();
cat2.greeting();
