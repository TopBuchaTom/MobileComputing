/********** Aufgabe 5.5 **********/
const arr = [1, 2, "Hallo", 3, 4, true, "ok"];
const [zahl1, , string1, ...restlicheWerte] = arr;
      // |   '-> 2. Element auslassen   '-> bekommt restlichen Werte
      // '-> bekommt 1. Element: 1
console.log(zahl1, string1, restlicheWerte);

/********** Aufgabe 5.6 **********/
let name1 = "Alex";
let name2 = "Chris";
[name1, name2] = [name2, name1];    //Werte vertauschen
console.log({name1}, {name2});

/********** Aufgabe 5.7 **********/
const book = {
    isbn: "34504350305",
    author: {
        name: "Max Mustermann",
        address: { street: "Teststreet 1", town: "Hof" }
    }
}
const {isbn, title = "Unbekannter Titel",
                // '-> Defaultwert, falls im Objekt nichts angegeben
          //    [...] immer, wenn man Array erzeugt/zerlegt
          //,-> {...} immer, wenn man Objekt erzeugt/zerlegt
          //,-> Syntax ist immer analog zum Datentyp
    author: { address: { street: primaryStreet, town } }} = book;
    // |                       |                 '-> town will man direkt als town extrahieren
    // |                       '-> : primaryStreet, da man street als Aliasname haben will
    // '-> Pfadausdrücke/rein navigieren zu Eigenschaften street
console.log(isbn, title, primaryStreet, town);

/********** Aufgabe 5.8 **********/
const books = [
    { isbn: "34504350305", author: {
        name: "Max Mustermann",
        address: { street: "Teststreet 1", town: "Hof" }}},
    { isbn: "123453535", author: {
        name: "Chris Mustermann",
        address: { street: "Teststreet 2", town: "Hof" }}
    },
    { isbn: "345353453458" }
];

for (let {author: { name: authorName = "Unbekannt" } = {}} of books)
    console.log(authorName);

/********** Aufgabe 5.9 **********/
const arr1 = [1, 2];
const arr2 = [4, 5];
const arr3 = [...arr1, 3, ...arr2, 6];
const arr4 = arr1.concat(3, arr2, 6);
console.log(arr3); // [ 1, 2, 3, 4, 5, 6 ]
console.log(arr4); // [ 1, 2, 3, 4, 5, 6 ]

/********** Aufgabe 5.10 **********/
const person = { name: "Max Mustermann", age: 21 };
const extendedPerson1 = { person };
const extendedPerson2 = { ...person };
console.log({person})       //von mir erstellt
console.log({...person})    //von mir erstellt