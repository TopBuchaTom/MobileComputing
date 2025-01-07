Task 1

const myArray = ['tomatoes', 'chick peas', 'onions', 'rice', 'black beans'];
const list = document.createElement('ul');

// Add your code here
for (const a of myArray) {
  const el = document.createElement("li");
  el.innerText = a;
  list.appendChild(el);
}

// Don't edit the code below here!

const section = document.querySelector('section');
section.appendChild(list);


Task 2

const name = 'Mustafa';
const para = document.createElement('p');

const phonebook = [
  { name : 'Chris', number : '1549' },
  { name : 'Li Kang', number : '9634' },
  { name : 'Anne', number : '9065' },
  { name : 'Francesca', number : '3001' },
  { name : 'Mustafa', number : '6888' },
  { name : 'Tina', number : '4312' },
  { name : 'Bert', number : '7780' },
  { name : 'Jada', number : '2282' },
]

// Add your code here
for (let i=0; i<phonebook.length; i++) {
  const phonebookEntry = phonebook[i];
  
  if (phonebookEntry.name == name)
  para.innerHTML += `
    <li>${phonebookEntry.name} - ${phonebookEntry.number}</li>
  `;
}
para.innerHTML = `<ul>${para.innerHTML}</ul>`;

// Don't edit the code below here!
const section = document.querySelector('section');
section.appendChild(para);


Task 3:

let i = 500;
const para = document.createElement('p');

function isPrime(num) {
  for(let i = 2; i < num; i++) {
    if(num % i === 0) {
      return false;
    }
  }

  return true;
}


// Add your code here
for (let i=500; i >= 2; i--)
  if (isPrime(i))
    para.textContent += `, ${i}`

  para.textContent = para.textContent.substring(2);

// Don't edit the code below here!
const section = document.querySelector('section');
section.appendChild(para);
