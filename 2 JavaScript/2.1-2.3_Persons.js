/********** Aufgabe 2.1 **********/
// Erzeugen Sie mehrere (mind. 3) Personen-Objekte per Literal mit den Eigenschaften
// firstName, lastName, age, addresses, wobei addresses ein Array mit
// Objekten vom Typ Address (Eigenschaften description, location, town, postcode) ist
//3 person - Objekte:
const person1 = { //jede Person hat {...}, da es ein Objekt ist
  firstName: "Max", lastName: "Mustermann", age: 19,  //Eigenschaften über ; getrennt; = Schlüssel-Wert-Paare
           //,-> addresses ist ein Array
  addresses: [   //,-> kein =; = ist eine Wertzuweisung
      { description: "Primary Address", street: "Teststreet 1", town: "Hof", postalCode: 95028 }, //eine Adresse selbst wiederum ist ein Objekt, da es aus meheren Eigenschaften/Schlüssel-Wert-Paaren besteht --> {...} drum herum
    //'-> braucht {...} für ein Objekt, wenn man einzelne Adressen angeben will
      { description: "Secondary Address", street: "Teststreet 2", town: "Hof", postalCode: 95028 }
   ]//,       Kommentar von Kern
   //addresses2 : ["Primary Address", "Teststreet 1", "Hof", 95028]
   //             '-> wenn man hier nur [...] schreibt, dann dürfen hier nur Werte auftauchen
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

/********** Aufgabe 2.2 **********/
// Erzeugen Sie ein Array aller Personen auf mindestens 5 verschiedene Arten
const persons1 = [person1, person2, person3]; //Personen zusammenpacken in Array [...]
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

/********** Aufgabe 2.3 **********/
//Gegenüberstellung, wie man den Nachnamen einer jeden Person ausgeben kann:
console.log("Klassische for-Schleife"); //Klassische for-Zählschleife
for (let i=0; i<persons1.length; i++) //so hat man früher programmiert; sollte man heutezutage nicht mehr machen, da es fehlerträchtig (geht eins zu weit hoch; <=; muss immer über [...] zugreifen = umständlich) ist
  console.log(persons1[i].lastName);
//                     '-> Index von jedem Element über das, was wir drüber laufen
//                     '-> über Index Objekt holen & dann den Wert ausgeben

//bessere Lösung:
console.log("for-Schleife mit Iterationselementvariable");
for (let i=0, person; person = persons1[i]; i++)
//              '-> zusätzlich zur Interationsvariable i gibt es eine
//                  = Elementiterationsvariable person: verweist immer auf das aktuelle Element -> kann immer schön über person auf die einzelne Person zugreifen ohne [...]
  console.log(person.lastName); // = guter Ansatz, der robust funktioniert & sehr sehr schnell 

//Alternative & heutzutage empfohlene Variante:
//= einfache Variante, aber nicht ganz so schnell wie "for-Schleife mit Iterationselementvariable"
console.log("for-of-Schleife"); //verwenden wir in der Praxis
for (let person of persons1)  //über jedes Element im Array iterieren
  console.log(person.lastName);

console.log("forEach-Schleife (nicht empfohlen, da nur für Arrays)");
persons1.forEach(x => console.log(x.lastName));
//        |        '-> Code, der für jedes Element ausgeführt werden soll
//        '-> es gibt nicht nur die forEach-Schleife/Schlüsselwort, sondern auch die Funktion forEach auf jeden Array, das man aufrufen kann

//          ,-> Groß- & Kleinschreibung berücksichtigen
function foreach(arr, fkt) {    //Funktion vorher definieren & dann kommt unten der Aufruf der Funktion
  for (let el of arr)
      fkt(el);
}

//                         Lambda-Ausdruck:
foreach(persons1, x => console.log(x.lastName));

/*Hat er gelöscht:
console.log("for-in-Schleife (nicht empfohlen!)");
for (let index in persons1)
  console.log(persons1 [index].lastName);

console.log("while-Schleife");
let person, index = 0;
while (person = persons1[index++])
  console.log(person.lastName);

console.log("do-while-Schleife");
index = 0;
do
  if (person = persons1[index++])
    console.log(person.lastName);
while (person);

console.log("do-while-Schleife mit break");
index = 0;
do
{
  if (!(person = persons1[index++]))
    break;
  //???
}*/










//Walter Kern - Kommentar:
//Array von Personen ausgeben
//            ,-> Array
console.dir(persons1)  //Struktur sollte mit konkreten Aufbau ausgegenem werden: im Browser kann man das Element ausklappen; in VS Code sieht man es mit den jeweiligen Details
                       // '-> addresses wird nicht weiter aufgeschlüsselt, da es Objekte sind; wenn man es aber auch noch ausgeben will,
                       //     dann:
//oder/Alternativ:
console.log(JSON.stringify(persons1))  //sieht auf der Console den Aufbau des Personen-Arrays

//arr.flat():
//- löst verschachtelte Arrays auf
//- addresses = normales schlankes Array
//            =! darin stecken keine anderen Arrays, sondern Objekte --> arr.flat() hier nicht verwenden



//Frage von Student:
//Warum funktioniert:
//                                  ,-> Variable wird immer auf den aktuellen Wert vom Array zugewiesen bis outOfBounds, dann ist i=undefined -> undefined evaluiert, bricht ab
for(let i=0, pers; pers = persons1[i]; i++){
  console.log(pers.lastName);//    '-> läuft über Array durch & noch drüber, aber sobald man drüber ist, bekommt man undefined -> undefined wird im boolschen Kontext als false interpretiert -> Schleife terminiert 

}
//Aber nicht
//                                   ,-> weißt lastName der entspre. Variablen zu; scheitert, da wenn alle Array-Elemente durchschritten worden sind persons1[i]= undefined -> kann darauf nicht mehr mit .lastName zugreifen -> führt zu Fehler, wenn wir es nicht absichern
for(let i=0, pers; pers = persons1[i].lastName; i++){
  console.log(pers);//               '-> auf undefined sollte man nicht zugreifen; Lösung: ?. verwenden, damit nix passieren kann
}