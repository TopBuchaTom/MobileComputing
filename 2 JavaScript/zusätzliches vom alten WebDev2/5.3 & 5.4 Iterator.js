/********** Aufgabe 5.3 **********/
// Variante 1: Reverse-Iterator manuell implementieren - ohne Generatoren/yield
                       // ,-> Iteratormethode überschreiben
// String.prototype[Symbol.iterator] = function() {   //=grausam
//     return {
//       next: function() {
//         if (this.index > 0)
//           return {   //Objekt mit jeweiligen aktuellen Wert, über den man gerade iteriert, & der Info, ob am Ende der Iteration/es noch einen Wert gibt (solange Index größer 0) wird zurückgegeben
//             value: this.base.charAt(--this.index),
//             done: false
//           };
        
//           return { done: true };
//       },
//       base : this,
//       index : this.length  //Code muss tracken/verfolgen, wo gerade index ist
//     };
//   };     //=Java-Style
            //nachfolgende Lösungen mit JS: = kurz & prägnant; braucht nur einen Bruchteil am Code einer Java-Umsetzung

/********** Aufgabe 5.4 **********/
// Variante 2: Reverse-Iterator über Generator implementieren - einfache Variante mit yield
                    // ,-> Standarditerator vom String-Prototyp überschreiben
String.prototype[Symbol.iterator] = function*() {
  let index = this.length;
// '-> vorher stand hier var
  while (index > 0)
      yield this.charAt(--index); //Länge immer -1 & Charakter dazu returnen
}     //1. Iteration: letzte Charakter im String wird geyieldet 
      //2. Iteration: vorletztes Zeichen wird returned

// Variante 3: Reverse-Iterator über Generator implementieren - yield* nutzen
                                            // ,-> star-function, damit man yield verwenden kann
// String.prototype[Symbol.iterator] = function*() {
//  yield* this.split("").reverse();
      // |       '-> einzelnen Characters umdrehen
      // |       '-> String in einzelne Charakters splitten --> bekommt Array
      // '-> von Collection/Char-Array einzeln die Elemente zurückgeben
      // '-> = Abkürzung für: yield arr[0], yield arr[1], yield arr[2], ...
// }

// Variante 4
// const inversIterator = function*(s) {
//    yield* s.split("").reverse();
// }