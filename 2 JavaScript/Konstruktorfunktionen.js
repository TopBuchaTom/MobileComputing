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