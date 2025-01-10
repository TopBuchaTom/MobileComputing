/********** Aufgabe 4.1a **********/
// Geben Sie zurück, ob jede Person mindestens eine Primäradresse hat
const everyoneHasPrimaryAddress = persons3.every(
  //  '-> jede Person = person3.every
x => x.addresses.some(y => y.description == "Primary Address"));
//| |             '-> mind. eine Adresse = addresses.some
//| '-> hier muss man immer Arrow-Function angeben
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