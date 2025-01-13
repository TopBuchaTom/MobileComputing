//von mir:
const { persons3 } = require('./BeispieldatenFürÜbung');


/********** Aufgabe 4.1a **********/
// Geben Sie zurück, ob jede Person mindestens eine Primäradresse hat         Sätze kann man 1:1 in Code übersetzen
//                                            ,-> gibt nur dann true zurück, wenn die angegebene Bedingung (jede Person mind. 1 PrimaryAdress) für alle Elemente im Array persons3 true ist
const everyoneHasPrimaryAddress = persons3.every(
  //  '-> jede Person = person3.every                                        ,-> == um Vergleich zu realisieren; nur einmal =, dann macht man eine Zuweisung
x => x.addresses.some(y => y.description == "Primary Address"));  //für jede Person x gilt (persons3.every(x => ...), dass mind. 1 Adresse ( x.addresses.some) eine PrimaryAdress ist
//| |             '-> mind. eine Adresse = addresses.some; some gibt true zurück, wenn die angegebene Bedinugung (mind. 1 Adresse bei der die Beschreibung "Primary Address" ist) für mind. 1 Element im Array zutrifft
//| '-> hier muss man immer Arrow-Function angeben, die true oder false returned
//'-> x=eine Person / für jede Person muss gelten, dass mind. 1 Adresse eine "Primary Address" ist
// Geben Sie zurück, ob jede Person mindestens eine Secret Address hat
const everyoneHasSecretAddress = persons3.every(
  x => x.addresses.some(y => y.description == "Secret Address"));

/********** Aufgabe 4.1b **********/
// Geben Sie zurück, ob mindestens eine Person mindestens eine Secret Address hat
const someoneHasSecretAddress = persons3.some(
 // '-> bei mind. 1 Person muss ...
x => x.addresses.some(y => y.description == "Secret Address"));
// '-> ... mind. 1 Adresse eine "Secret Address" sein
console.log({everyoneHasPrimaryAddress, everyoneHasSecretAddress, someoneHasSecretAddress});
// Ausgabe:
// {
//   everyoneHasPrimaryAddress: true,
//   everyoneHasSecretAddress: false,
//   someoneHasSecretAddress: true
// }


//some & every ist nur verfügbar bei mehreren Datensätzen/Arrays
//--> sucht sich dann diejenigen raus, die die Bedingung erfüllen

//Kann Suchkriterium in Variable const angeben


//andere Lösung von Student:
function isSecretAddressInArray(personArray) {
  return personArray.some(person => person.addresses.some(address => address.description == "Secret Address"));
}
console.log(isSecretAddressInArray(persons3)) 