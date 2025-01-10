// Beispieldaten für Übung / Code mit Personen als Ausgangslage
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
const persons1 = [person1, person2, person3];   //Personen in Array packen
const persons2 = [person1].concat(person2, person3);
const persons3 = new Array(person1, person2, person3);
const persons4 = Array.of(person1, person2, person3);
const persons5 = new Array(); // persons5 = [];

/********** Aufgabe 3.4 **********/
// Erstellen Sie ein Array mit denjenigen Personen, die älter als 20 sind
// (mit mindestens 3 verschiedenen Ansätzen - beginnend bei Iteration) und
// geben Sie die Ergebnisse jeweils über eine generische Funktion aus
//old school / so hätte man früher programmiert / alter Ansatz (kein .filter, ... -> mit Schleife über alle Personen laufen & abprüfen, ob aktuelle Person die Bedingung erfüllt -> falls ja, dann in Container speichern, wo wir Endergebnisse ablegen):
let result = [];
for (let person of persons3)
  if (person.age > 20)
      result.push(person);
printPersons("Personen über 20 mit for-Schleife", result);

//so programmiert man heute:
//        ,-> von allen Personen, die Personen filtern, die die Bedingung erfüllt, dass deren Alter größer 20 ist
//        |         ,-> filter: filtert nicht raus, sondern rein; = reinfiltern -> das, was die Bedingung erfüllt, landet im Ziel / Personen deren Alter größer 20 ist, landen im Ziel
result = persons3.filter(person => person.age > 20);    //Normal verwendet man filter(), da es einfach ist
                        // '-> für jede Person im Array nachfolgenden Ausdruck (nur, wenn es true returned, dann landet es im ZielArray) ausführen
printPersons("Personen über 20 mit filter-Methode", result);

//falls wir gleichzeitig ohnehin mappen müssen, weil wir Daten üebrsetzen/transformieren wollen, dann kann man gleichzeitig im Rahmen von map mitfiltern / damit kann man gleichzeitig filtern <-- nur machen, wenn man ohnehin schon mappt; .filter = leichtere, empfolende Ansatz
//result = []; persons3.map(x => { if (x.age > 20) result.push(x) });
result = persons3.map(x => (x.age > 20) ? x : undefined); //Wenn Alter von Person größer 20 ist, dann wird das Ursprungselement zurückgegeben --> Person landet im Zielarray
                            // |             // '-> auf undefined mappen, dann landet Element nicht im Zielarray / wenn man undefined zurückgibt, dann wird für Quellelement im Quellarray nichts im Zielarray abgelegt
                            // '-> wenn Bedingung erfüllt, dann landet Elmenent im Zielarray
//in Java mit map filtern:
//funktioniert nicht, da es in Java kein undefined gibt, es gibt nur null und null kann ein gültiger Wert sein auf den man abbilden will
//--> muss wirklich filtern
printPersons("Personen über 20 mit map-Methode", result);

/********** Aufgabe 3.5 **********/
function printPersons(header, persons) {
  console.log(header);
  for (let person of persons)
      console.log(person.lastName);
}

// Bestimmen Sie das Durchschnittsalter der Personen (iterativ und funktional) auf 2 Nachkommastellen gerundet
let durchschnitt1 = 0;
for (let person of persons3)
  durchschnitt1 += person.age / persons3.length; 
durchschnitt1 = durchschnitt1.toFixed(2);
console.log(durchschnitt1);
//Ohne Startwert: = schwierig in der Umsetzung
//                                     ,-> sum enthält zunächst das erste Element --> sum = 1. Person
//                                     |    ,-> enthält die zweite Person
//                                     |    |                           ,-> sum.age + current.age => Alter wird berechnet
//                                     |    |                           |    '=> im nächsten Durchlauf ist in sum keine Person mehr, sondern das zuletzt Zurückgegebene
//                                     |    |                           |         -> Code würde nicht mehr funktionieren, da es sum.age nicht auf einen einfachen Number-Wert gibt
//                                     |    |                           |           => deshalb (sum.age || sum); sum.age gibt es beim ersten Durchlauf bei der 1. Person und wenn es nicht sum.age gibt, dann sum verwenden (könnte auch Elvis verwenden)
//                                     |    |                           |             => damit werden alle Alterswerte aufsummiert
let durchschnitt2 = (persons3.reduce((sum, current) => (sum.age || sum) + current.age) / persons3.length).toFixed(2);
                                                              // '-> ohne Initialwert; spart sich eine Iteration/Durchlauf, indem man gleich mit ersten Element startet als Wert für sum -> Nachteil: in sum steckt gleich komplette Person und kein Alterswert
//Mit Startwert: = seine Empfehlung
                                                      //  ,-> alles aufaddieren (beim 0. Element im Array steht 0 => sum=0)
                                                      //  ,-> entält vorheriges Berechnungsergebnis
                                                      //  |   ,-> 1. Schleifendurchlauf: 0 + "Alter der 1. Person"; im nächten Durchlauf: "das zuvor zurückgegebene Alter" +  "Alter der 2. Person" => so summieren wir alle Alterswerte auf
                                                      //  |   |  , -> enthält Alter der ersten/nächsten Person => läuft so durch und summiert alle Alterswerte auf
                                                      //  |   |  |           ,-> = Intialwert 0 = 1. Wert von sum / 0 ist der initiale Wert, der der Variable sum zugewiesen wird, wenn es das erste mal läuft / beim ersten Durchlauf des Arrays hat sum den Wert 0 (current hat den Wert des 0./1. Elements)(ohne das: JS spart sich eine Iteration/im 1. Durchlauf gilt sum=person[0] & current=person[1].age --> funktioniert nicht für Objekte (für einfache Zahlen schon))     
                                                      //  |   |  |           |    ,-> Anzahl der Personen  ,-> 2 Nachkommastellen                                                                                                                                                                                                     //     '-> müsste hier nur für 1. Durchlauf .age sagen, aber nicht für die nächsten Durchläufe <-- müsste prüfen, ob es sum.age gibt = Lösung darüber
// let durchschnitt2 = (persons3.reduce((sum, current) => sum + current.age, 0) / persons3.length).toFixed(2);  //=einfache Variante
                                                                          // |  |                       '-> auf 2 Nachkommastellen runden 
                                                                          // |  '-> Gesamtalter durch Anzahl der Alterswerte/Personen dividieren
                                                                          // '-> 2. Parameter nach Arraw-Function, sonst fängt er gleich mit den ersten 2 Elementen an, was ein Objekt ist
                                                                          // '-> wenn man 0 nicht verwendet, dann muss man sum.age oder mit sum arbeiten
//'-> Wenn es nur Zahlen sind, dann ist der Datentyp von sum & "von dem was berechnet wird" eine Zahl
//'-> Wenn in sum eine Person/Object steht, dann würde es nicht funktionieren, da man bei der Berechnung sum.age statt sum schreiben
//                                                                                                          '-> funktioniert beim 1. Durchlauf
//                                                                                                              Aber: beim 2. Durchlauf wäre sum das zuletzt zurückgegebene != Person
//                                                                                                                                                                          = Number (Alterswert) => sum.age würde nicht mehr funktionieren => Lösung - ohne initialwert: (sum.age || sum)      = Workaround / einfach mit Initialwert nutzen
//                                                                                                                                                                                                                                                                             '-> wenn es sum.age gibt, dann nimm diesen Wert, ansonsten sum
//Wenn man Produkt bilden will, dann 1 als Initialwert verwenden
//Wenn man Addition macht, dann 1 als Initialwert verwenden
console.log(durchschnitt2);

/********** Aufgabe 4.2 **********/
// Erzeugen Sie ein neues Array, welches Personen mit folgender Struktur fasst (iterativ und funktional)
// Pseudocode: [{name = "Max Mustermann", birthday = ..., addresses = 3}]
let result1 = [];
for (let x of persons3)
  result1.push({
      name: x.firstName + " " + x.lastName,
      birthday: new Date().getFullYear() - x.age, //damit es nicht immer wieder neu berechnet werden muss, kann man es auch auslagern
      addresses: x.addresses.length
  });
console.dir(result1);

//damit kann man mit Einzeiler bestehende Daten transformieren in eine andere Form (potenziell mit wenigeren Informationen)
//                              ,-> für jede Person im 
//                              |    ,-> um {...} für das Objekt (...) herum machen, da wenn man nur {...} nach => macht, bedeutet das für JS, dass ein Block von Code mit mehreren Anweisungen kommt, das mit return endet
//                              |    |   Wir wollen aber neues Objekt erzeugen --> über (...) macht man deutlich, dass das was kommt als ein Ausdruck/Wert zu interpretieren ist & nicht als Block von Code
//                              |    |                                                    '-> damit sagt man JS, dass das darin als Ausdruck/Ergebnis/Wert des Objekts zu Interpretieren ist --> es ist klar, dass die {...} danach ein Objekt einleiten
//                              |    |,-> innerhalb von {...} Übersetzung vornehmen; neues Objekt mir {...} definieren
const flatPersons = persons3.ma(x => ({  //<-- direkt neben => eine {, um Objekt direkt ad hoc anzugeben; ( vor {, da sonst JS meint es wäre Lambda-Ausdruck und man Fehler bekommt 
                              // '-> für jede Person x (p oder person wäre besser) im Ursprungsarray soll im Zielarray ein Objekt mit folgenden Aufbau landen:
  // ,-> name, der sich aus firstName & lastName zusammensetzt
  name : x.firstName + " " + x.lastName,  //neues Objekt erhält Eigenschaft name, der berechnet wird, indem wir vom Ursprungsobjekt den Vornamen + " " + Nachnamen kombinieren  <-- geht schöner mit `...` = Back Ticks; name stezt sich zusammen aus: Vorname, Leerzeichen & Nachname
  //      '-> wenn man in JS in Objektliteral eine Variable angibt, dann wird diese automtisch expandiert als Variablenwert
  birthday : new Date().getFullYear() - x.age,  //Geburtstag wird berechnet durch aktuelle Jahreszahl - Alter
            //         '-> damit ist es flexibler (kann auch 2023 schreiben)
            //         '-> = aktuelles Jahr
  addresses : x.addresses.length  //Länge der bisherigen Andressen der personen-Objekte
}));
console.dir(flatPersons);

//oder - Lösung von Studenten:
const personAlternativ = person.map(person => { //=Lambda-Ausdruck, der mehrzeilig ist
  const name = `${person.firstName} ${person.lastName}`;
            // '-> String-Interpolation/Variablenerweiterung: Platzhalter wird durch Wert ersetzt
  const birthday = new Date().getFullYear() - person.age;
  const address = person.address.length;
  return { name: name, birthday, address: address}; //gibt hier Objekt zurück
          // '-> name: kann man weglassen, da Variable name automatisch zu Variablename:Variablenwert expandiert wird
          //oder:
//return { name, birthday, address};
})
console.log(personAlternativ);

//oder - Lösung von Student:
let personX = [];
function obj(person) {  //Funktion, die person entgegennimmt & dann konstruiert man neues Objekt; hat es wiederverwendbar ausgelagert als Funktion, die man dann bei map() angibt
  return {name : person.firstName + " " + person.lastName,  //packt hier Objekt aus
          birthday : new Date().getFullYear() - person.age,
          address : person.address.length,
         }  //Wenn man öfer so etwas braucht, dann Funktion schreiben
}           //Wenn man es nur an einer Stelle im Code benötigt, dann ist es der etabilierte Ansatz, dass man es ad hoc über eine Arrow-Function macht, wie die obige Lösung; meist braucht man es nur 1x -> meist wird Arraw-Funktion-Methode genutzt
console.log(person.map(obj))