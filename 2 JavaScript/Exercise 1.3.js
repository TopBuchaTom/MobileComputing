Task 1

// Add your code here

const quoteStart = "Don't judge each day by the harvest you reap ";
const quoteEnd = " but by the seeds that you plant";
const finalQuote = quoteStart + quoteEnd;

// Don't edit the code below here!

section.innerHTML = ' ';
const para1 = document.createElement('p');
para1.textContent = finalQuote;

section.appendChild(para1);
    

Task 2

const quote = 'I do not like green eggs and ham. I do not like them, Sam-I-Am.';
const substring = 'green eggs and ham';

// Add your code here
const quoteLength = quote.length;
const index = quote.indexOf(substring);
const revisedQuote = quote.substring(0, index + substring.length + 1);

// Don't edit the code below here!

section.innerHTML = ' ';
const para1 = document.createElement('p');
para1.textContent = `The quote is ${ quoteLength } characters long.`;
const para2 = document.createElement('p');
para2.textContent = revisedQuote;

section.appendChild(para1);
section.appendChild(para2);
    

Task 3

const quote = 'I dO nOT lIke gREen eGgS anD HAM';

// Add your code here
const fixedQuote = quote.charAt(0) + quote.substring(1).toLowerCase().replace("green eggs and ham", "test");
const finalQuote = fixedQuote + ".";

// Don't edit the code below here!

section.innerHTML = ' ';
const para1 = document.createElement('p');
para1.textContent = fixedQuote;
const para2 = document.createElement('p');
para2.textContent = finalQuote;

section.appendChild(para1);
section.appendChild(para2);
    

Task 4

const theorem = 'Pythagorean theorem';

const a = 5;
const b = 8;

const myString = `Using ${theorem}, we can work out that that if the two shortest sides of a right-angled triangle have lengths of ${a} and ${b}, the length of the hypotenuse is ${Math.sqrt(a*a + b*b)}.`;

// Don't edit the code below here!

section.innerHTML = ' ';
const para1 = document.createElement('p');
para1.textContent = myString;

section.appendChild(para1);
