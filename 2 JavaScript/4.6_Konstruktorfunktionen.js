/********** Aufgabe 4.6 **********/
function Person(name, age, address) {
  if (this instanceof Person) {
      this.name = name;
      this.age = age;
      this.address = address;
  }
  else
      return new Person(name, age, address);
  
}
function Address(street, town, pc) {
  this.street = street; this.town = town; this.pc = pc;
}


//Altes WebDev2 - von mir:
/********** Aufgabe 4.6 **********/
function Address(description, town, postalcode) {
  this.description = description;
  this.town = town;
  this.postalcode = postalcode;
}

function Person(firstName, age, address) {
  this.firstName = firstName;
  this.age = age;
  this.address = address;
}


// Jetzt können Sie eine neue Person mit einer Adresse erstellen
const person = new Person("Max", 21, new Address("Teststreet 1", "Hof", 95028));

console.log(person);



/********** Aufgabe 4.7 **********/
function Person(firstName, age, {description,town,postalcode}) {
  this.firstName = firstName;
  this.age = age;
  this.address = {
    description: description,
    town: town,
    postalcode: postalcode
  }
};
let person2 = new Person("Max", 21, {description: "Home", town: "Hof", postalcode: 95028});
console.log(person2)



/********** Aufgabe 4.8 **********/
let person3 = Object.create(Person.prototype);
Person.call(person3,"Max3", 21, new Address("Teststreet 1", "Hof", 95028));
console.log(person3)