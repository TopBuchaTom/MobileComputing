// Geben Sie zurück, ob jede Person mindestens eine Primäradresse hat
const everyoneHasPrimaryAddress = persons3.every(
  x => x.addresses.some(y => y.description == "Primary Address"));
// Geben Sie zurück, ob jede Person mindestens eine Secret Address hat
const everyoneHasSecretAddress = persons3.every(
  x => x.addresses.some(y => y.description == "Secret Address"));
// Geben Sie zurück, ob mindestens eine Person mindestens eine Secret Address hat
const someoneHasSecretAddress = persons3.some(
  x => x.addresses.some(y => y.description == "Secret Address"));
console.log({everyoneHasPrimaryAddress, everyoneHasSecretAddress, someoneHasSecretAddress});
