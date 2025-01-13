/********** Aufgabe 5.5 **********/
const arr = [1, 2, "Hallo", 3, 4, true, "ok"];
const [zahl1, , string1, ...restlicheWerte] = arr;
      // |   '-> 2. Element auslassen   '-> bekommt restlichen Werte/restliche Werte zusammen in einer Variable sammeln
      // '-> bekommt 1. Element: 1
console.log(zahl1, string1, restlicheWerte);

/********** Aufgabe 5.6 **********/
let name1 = "Alex";
//const name1 = "";   //kann nicht const definieren, die den gleichen Namen, wie eine Variable hat
let name2 = "Chris";
[name1, name2] = [name2, name1];    //Werte vertauschen
//oder:
//[name2, name1] = [name1, name2];
console.log({name1}, {name2});

/********** Aufgabe 5.7 **********/
const book = {
    isbn: "34504350305",
    author: {
        name: "Max Mustermann",
        address: { street: "Teststreet 1", town: "Hof" }
    }
    //titel ist hier im Objekt nicht gesetzt
}
//Einzeiler:
//      ,-> neue Variablen hier definieren & den Gesamtausdruck dem book zuweisen => book wird zerlegt gemäß dem jeweiligen Namen in die zugehörige Variable
//      ,-> isbn wird aus dem, was ich zueweise (book) rausgezogen
//      |           ,-> weißt title einen Defaultwert zu; exisitiert nicht im book --> title bekommt Defaultwert
const {isbn, title = "Unbekannter Titel",
                // '-> Defaultwert, falls im Objekt nichts angegeben
          //    [...] immer, wenn man Array erzeugt/zerlegt
          //,-> {...} immer, wenn man Objekt erzeugt/zerlegt
          //,-> Syntax ist immer analog zum Datentyp
    author: { address: { street: primaryStreet, town } }} = book;   //author will man als Alias in Summe, aber den Alias selbst zerlegt man wieder in die address: Die Adress selbst zerlegt man auch wieder & holt sich da die Street unter dem Alias primaryStreet, den man nicht weiter zerlegt, & holt sich auch town ohne Alias
    // |                       |                 '-> town will man direkt als town extrahieren
    // |                       '-> : primaryStreet, da man für street den Aliasname "primaryStreet" haben will
    // '-> Pfadausdrücke/rein navigieren zu Eigenschaften street; zuerst in author reinwandern & dann in address reinwandern, dann findet er street & town = Extraktionslogik
//funktioniert auch mit modernem Java, aber ist nicht schön
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
const arr3 = [...arr1, 3, ...arr2, 6];  //arr3 ist ein neu verpacktes Array, wo man die Werte von arr1 auspackt, dann die 3 ergänzt, dann die Elemente von arr2 auspacken & die 6 ergänzen
//          '-> auch über concat() umsetzbar: 
const arr4 = arr1.concat(3, arr2, 6);
console.log(arr3); // [ 1, 2, 3, 4, 5, 6 ]
console.log(arr4); // [ 1, 2, 3, 4, 5, 6 ]
//Lösung von Student:
const arr5 = [arr1, arr2, 3, 6].sort(); //ist auch zulässig, wenn er keine weiteren Einschränkungen/keine klare Aufgabenstellung macht
//                                '-> sortiert das vorliegende Array
//                                    '-> es gibt vers. Möglichkeiten; kann sort()-Verhalten anpassen: kann angeben nach was wir gerne sortieren möchten

/********** Aufgabe 5.10 **********/
const person = { name: "Max Mustermann", age: 21 };
const extendedPerson1 = { person };
const extendedPerson2 = { ...person };
console.log({person})       //von mir erstellt
console.log({...person})    //von mir erstellt