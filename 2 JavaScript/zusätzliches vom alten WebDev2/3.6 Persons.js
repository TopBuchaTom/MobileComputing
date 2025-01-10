//3 person - Objekte:
const person1 = {
  firstName: "Max", lastName: "Mustermann", age: 19,
  addresses: [
      { description: "Primary Address", street: "Teststreet 1", town: "Hof", postalCode: 95028 },
      { description: "Secondary Address", street: "Teststreet 2", town: "Hof", postalCode: 95028 }
   ]
};
const person2 = {
  firstName: "Chris", lastName: "May", age: 21,
  addresses: [
      { description: "Primary Address", street: "Teststreet 19", town: "Hof", postalCode: 95030 },
      { description: "Secondary Address", street: "Teststreet 20", town: "Hof", postalCode: 95028 },
      { description: "Secret Address", street: "Secretstreet 1", town: "Bayreuth", postalCode: 95444 }
   ]
};
const person3 = {
  firstName: "Steve", lastName: "Clover", age: 25,
  addresses: [
      { description: "Primary Address", street: "Teststreet 19", town: "Hof", postalCode: 95030 },
      { description: "Secondary Address", street: "Teststreet 20", town: "Hof", postalCode: 95028 },
      { description: "Secret Address", street: "Secretstreet 1", town: "Bayreuth", postalCode: 95444 }
   ]
};

// Erzeugen Sie ein Array aller Personen auf mindestens 5 verschiedene Arten
const persons1 = [person1, person2, person3];
const persons2 = [person1].concat(person2, person3);
const persons3 = new Array(person1, person2, person3);
const persons4 = Array.of(person1, person2, person3);
const persons5 = new Array(); // persons5 = [];
persons5[0] = person1;
persons5[1] = person2;
persons5[2] = person3;

console.dir(persons1);
console.dir(persons2);
console.dir(persons3);
console.dir(persons4);
console.dir(persons5);

console.log("Klassische for-Schleife");
for (let i=0; i<persons1.length; i++)
  console.log(persons1[i].lastName);

console.log("for-Schleife mit Iterationselementvariable");
for (let i=0, person; person = persons1[i]; i++)
  console.log(person.lastName);

console.log("for-of-Schleife");
for (let person of persons1)
  console.log(person.lastName);

console.log("forEach-Schleife (nicht empfohlen, da nur für Arrays)");
persons1.forEach(x => console.log(x.lastName));

function foreach(arr, fkt) {
  for (let el of arr)
      fkt(el);
}

foreach(persons1, x => console.log(x.lastName));