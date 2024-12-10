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
  const persons1 = [person1, person2, person3];   //Personen in Array packen
  const persons2 = [person1].concat(person2, person3);
  const persons3 = new Array(person1, person2, person3);
  const persons4 = Array.of(person1, person2, person3);
  const persons5 = new Array(); // persons5 = [];
  
  /********** Aufgabe 3.4 **********/
  // Erstellen Sie ein Array mit denjenigen Personen, die älter als 20 sind
  // (mit mindestens 3 verschiedenen Ansätzen - beginnend bei Iteration) und
  // geben Sie die Ergebnisse jeweils über eine generische Funktion aus
  let result = [];
  for (let person of persons3)
    if (person.age > 20)
        result.push(person);
  printPersons("Personen über 20 mit for-Schleife", result);
  
  result = persons3.filter(person => person.age > 20);    //Normal verwendet man filter(), da es einfach ist
                          // '-> für jede Person im Array nachfolgenden Ausdruck (nur, wenn es true returned, dann landet es im ZielArray) ausführen
  printPersons("Personen über 20 mit filter-Methode", result);
  
  result = persons3.map(x => (x.age > 20) ? x : undefined);
                              // |             // '-> auf undefined mappen, dann landet Element nicht im Zielarray
                              // '-> wenn Bedingung erfüllt, dann landet Elmenent im Zielarray
  printPersons("Personen über 20 mit map-Methode", result);
  
  function printPersons(header, persons) {
    console.log(header);
    for (let person of persons)
        console.log(person.lastName);
  }
  
  /********** Aufgabe 3.5 **********/
  // Bestimmen Sie das Durchschnittsalter der Personen (iterativ und funktional) auf 2 Nachkommastellen gerundet
  let durchschnitt1 = 0;
  for (let person of persons3)
    durchschnitt1 += person.age / persons3.length; 
  durchschnitt1 = durchschnitt1.toFixed(2);
  console.log(durchschnitt1);
  let durchschnitt2 = (persons3.reduce((sum, current) => (sum.age || sum) + current.age) / persons3.length).toFixed(2);
                                                                // '-> ohne Initialwert; spart sich eine Iteration
                                                        //  ,-> alles aufaddieren (beim 0. Element im Array steht 0 => sum=0)
                                                        //  ,-> entält vorheriges Berechnungsergebnis
                                                        //  |      , -> enthält Alter der nächsten Person => läuft so durch und summiert alle Alterswerte auf
                                                        //  |      |           ,-> = Intialwert 0 (ohne das: JS spart sich eine Iteration/im 1. Durchlauf gilt sum=person[0] & current=person[1].age --> funktioniert nicht für Objekte (für einfache Zahlen schon))     
                                                        //  |      |           |    ,-> Anzahl der Personen  ,-> 2 Nachkommastellen                                 //     '-> müsste hier nur für 1. Durchlauf .age sagen, aber nicht für die nächsten Durchläufe <-- müsste prüfen, ob es sum.age gibt = Lösung darüber
  // let durchschnitt2 = (persons3.reduce((sum, current) => sum + current.age, 0) / persons3.length).toFixed(2);  //=einfache Variante
                                                                            // '-> 2. Parameter nach Arraw-Function, sonst fängt er gleich mit den ersten 2 Elementen an, was ein Objekt ist
                                                                            // '-> wenn man 0 nicht verwendet, dann muss man sum.age oder mit sum arbeiten
  console.log(durchschnitt2);
  
  /********** Aufgabe 4.2 **********/
  // Erzeugen Sie ein neues Array, welches Personen mit folgender Struktur fasst (iterativ und funktional)
  // Pseudocode: [{name = "Max Mustermann", birthday = ..., addresses = 3}]
  let result1 = [];
  for (let x of persons3)
    result1.push({
        name: x.firstName + " " + x.lastName,
        birthday: new Date().getFullYear() - x.age,
        addresses: x.addresses.length
    });
  console.dir(result1);
  
  const flatPersons = persons3.map(x => ({  //<-- direkt neben => eine {, um Objekt direkt ad hoc anzugeben; ( vor {, da sonst JS meint es wäre Lambda-Ausdruck und man Fehler bekommt 
                                // '-> für jede Person x im Ursprungsarray soll im Zielarray ein Objekt mit folgenden Aufbau landen:
    // ,-> name, der sich aus firstName & lastName zusammensetzt
    name : x.firstName + " " + x.lastName,
    //      '-> wenn man in JS in Objektliteral eine Variable angibt, dann wird diese automtisch expandiert als Variablenwert
    birthday : new Date().getFullYear() - x.age,
              //         '-> damit ist es flexibler (kann auch 2023 schreiben)
              //         '-> = aktuelles Jahr
    addresses : x.addresses.length
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