//Beispieldaten für Übung
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
const persons1 = [person1, person2, person3];
const persons2 = [person1].concat(person2, person3);
const persons3 = new Array(person1, person2, person3);


//von mir:
module.exports = { person1, person2, person3, persons1, persons2, persons3 };