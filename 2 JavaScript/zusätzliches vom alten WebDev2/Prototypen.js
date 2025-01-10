const p = { name: "Alex", age: 21 };

function output(p) {
    console.log(`${p.name} (${p.age}) hat Matrikelnummer ${p.matrikelnummer}`);
}

const s = Object.create(p);
s.matrikelnummer = 1234;
output(s); // Alex ...

s.name = "Chris";
output(s); // Chris ...

delete s.name;
output(s); // Alex ...

delete p.name;
output(s); // undefined

p.name = "test";
output(s); // test ...

const p2 = Object.getPrototypeOf(s); // p
const obj = Object.getPrototypeOf(Object.getPrototypeOf(s)); // Object


function Person(name, age) {
    this.name = name; this.age = age;
}
Person.prototype.city = "Hof";

const p3 = Object.create(Person.prototype);
console.log(p3.name); // undefined, da nur Kopie von Objekt ohne Konstruktoraufruf
console.log(p3.city); // Hof, da auf prototype definiert

Person.call(p3, "Alex", 21);
console.log(p3.name); // Alex
console.log(p3.city); // Hof, da auf prototype definiert

const p4 = new Person("Alex", 21);
console.log(p4.name); // Alex
console.log(p4.city); // Hof

function Student(name, age, matrikelnummer) {
    Person.call(this, name, age);
    this.matrikelnummer = matrikelnummer;
}
Student.prototype = Object.create(Person.prototype);
Student.prototype.studycourse = "MC";

const s2 = Object.create(Student.prototype);
console.log(s2.name); // undefined, da nur Kopie von Objekt ohne Konstruktoraufruf
console.log(s2.matrikelnummer); // undefined
console.log(s2.city); // Hof, von prototype des prototype
console.log(s2.studycourse); // MC, von prototype

Student.call(s2, "Alex", 21, 1234);
console.log(s2.name); // Alex
console.log(s2.matrikelnummer); // 1234
console.log(s2.studycourse); // MC