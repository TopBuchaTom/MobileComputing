// Beispieldaten für Übung
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
const persons1 = [person1, person2, person3];
const persons2 = [person1].concat(person2, person3);
const persons3 = new Array(person1, person2, person3);
const persons4 = Array.of(person1, person2, person3);
const persons5 = new Array(); // persons5 = [];

/********** Aufgabe 3.1a **********/
// Extrahieren Sie das mittige Element des Arrays und speichern sie es in ein neues Array
console.log("Slice in Aktion zum Extrahieren:");
let personSlice = persons1.slice(1,2); // Wichtig: Original-Array wird nicht verändert, 2. Parameter ist Endposition
for (let person of personSlice)
  console.log(person.lastName);

/********** Aufgabe 3.1b **********/
// Ersetzen Sie das mittige Element des Arrays durch einen neuen Wert
console.log("Splice in Aktion zum Ersetzen:");
personSplice = persons1.splice(1, 1, { lastName: "Diggle" }); // Wichtig: Original-Array wird verändert, 2. Parameter ist Länge, kein Endindex, Rückgabewert ist Array mit entfernten Elementen
for (let person of personSplice) // entferntes Element
  console.log(person.lastName + " wurde gelöscht");

/********** Aufgabe 3.2 **********/
// Entfernen Sie das erste Element aus dem Array ohne ein neues einzufügen
console.log("Splice in Aktion zum Löschen:");
personSplice = persons2.splice(0, 1); // Wichtig: Original-Array wird verändert, 2. Parameter ist Länge, kein Endindex, Rückgabewert ist Array mit entfernten Elementen
for (let person of persons2) // Aktuelles Array
  console.log(person.lastName + " verbleibt in Array");

/********** Aufgabe 3.3 **********/
// Fügen Sie eine neue Person in das Array mittig ein ohne etwas zu löschen
console.log("Splice in Aktion zum Einfügen:");
personSplice = persons2.splice(1, 0, { lastName: "Queen" }); // Wichtig: Original-Array wird verändert, 2. Parameter ist Länge, kein Endindex, Rückgabewert ist Array mit entfernten Elementen
for (let person of persons2) // Aktuelles Array
  console.log(person.lastName);