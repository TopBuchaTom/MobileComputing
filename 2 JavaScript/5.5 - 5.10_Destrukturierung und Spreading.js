const arr = [1, 2, "Hallo", 3, 4, true, "ok"];
const [zahl1, , string1, ...restlicheWerte] = arr;
console.log(zahl1, string1, restlicheWerte);

let name1 = "Alex";
let name2 = "Chris";
[name1, name2] = [name2, name1];
console.log({name1}, {name2});

const book = {
    isbn: "34504350305",
    author: {
        name: "Max Mustermann",
        address: { street: "Teststreet 1", town: "Hof" }
    }
}
const {isbn, title = "Unbekannter Titel",
    author: { address: { street: primaryStreet, town } }} = book;
console.log(isbn, title, primaryStreet, town);

const books = [
    { isbn: "34504350305", author: {
        name: "Max Mustermann",
        address: { street: "Teststreet 1", town: "Hof" }}},
    { isbn: "123453535", author: {
        name: "Chris Mustermann",
        address: { street: "Teststreet 2", town: "Hof" }}
    },
    { isbn: "345353453458" }
];

for (let {author: { name: authorName = "Unbekannt" } = {}} of books)
    console.log(authorName);

const arr1 = [1, 2];
const arr2 = [4, 5];
const arr3 = [...arr1, 3, ...arr2, 6];
const arr4 = arr1.concat(3, arr2, 6);
console.log(arr3); // [ 1, 2, 3, 4, 5, 6 ]
console.log(arr4); // [ 1, 2, 3, 4, 5, 6 ]

const person = { name: "Max Mustermann", age: 21 };
const extendedPerson1 = { person };
const extendedPerson2 = { ...person };