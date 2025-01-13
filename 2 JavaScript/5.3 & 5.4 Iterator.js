/********** Aufgabe 5.3 **********/ //grausame/umständliche Syntax/Umsetzung, ähnlich zu oldschool-Java:
// Variante 1: Reverse-Iterator manuell implementieren - ohne Generatoren/yield
//        ,-> bei jedem Ansatz/jeder Lösung den Standarditerator vom String-Prototypen ersetzen, damit jedes String-Objekt diese neu definierte Sortierreihenfolge benutzt
//        ,-> von jedem String = vom Prototypen/von der Vorlage für beliebige String-Objekte den Standarditerator/Symbol.iterator ersetzen durch eine eigene Funktion
//        |               ,-> Iteratormethode überschreiben
String.prototype[Symbol.iterator] = function() {   //=grausam/umständlich; normale Funktion schreiben
   return { //muss Objekt zurückgeben, dass next()-Funktion, die immer zurückgeben muss, ob wir schon am Ende sind (done) & ob es noch Werte gibt (value), hat
      next: function() {
         if (this.index > 0)
            return {   //Objekt mit jeweiligen aktuellen Wert, über den man gerade iteriert, & der Info, ob am Ende der Iteration/es noch einen Wert gibt (solange Index größer 0) wird zurückgegeben
               value: this.base.charAt(--this.index), //Wenn es noch Werte gibt, dann muss man den Wert passend zur jeweiligen Iteration returnen
               //       '-> this verweist auf den String/das jeweiligen Objekt -> der Reihe nach von hinten nach vorne durchgehen & die einzelnen Characters ausgeben
               done: false
            };
         return { done: true };
      },
      base : this,   //damit ich das this/den String im inneren von dieser next()-Funktion noch zugreifbar habe, speichere ich mir das this als Hilfsvariable base ab --> ist flexibler
      index : this.length  //Code muss tracken/verfolgen, wo gerade index ist; Länge von String auch abspeichern, damit man weiß, wie lange man durchlaufen kann bevor ich dann done true ausgebe
   };
};     //=Java-Style
            //nachfolgende Lösungen mit JS: = kurz & prägnant; braucht nur einen Bruchteil am Code einer Java-Umsetzung
//=oldschool Umsetzung, wo man alles manuell schreiben muss

/********** Aufgabe 5.4 **********/ //Star-Function = deutlich einfacher
// Variante 2: Reverse-Iterator über Generator implementieren - einfache Variante mit yield
                    // ,-> Standarditerator vom String-Prototyp überschreiben
String.prototype[Symbol.iterator] = function*() {  //überschreibt hier Standarditerator
   let index = this.length;   //da man rückwärts durchlaufen will, startet man am Ende/letzten Element des Strings; Länge ist immer eins mehr als die Elemente im Array --> deshalb --index & > 0
//  '-> vorher stand hier var
   while (index > 0) //läuft solange durch wie index > 0
      yield this.charAt(--index); //Länge immer -1 & Charakter dazu returnen/jeweilige Element zurückgeben
      //'-> immer, wenn wir yielden, dann wird eine Iteration abgeschlossen/einmal etwas returned
      //                                              '-> bei der nächsten Iteration macht man da weiter, wo man vorher rausgeflogen ist & dann wird nächstes yield ausgeführt
      //oder:
      //yield this[--index];  //?????????????????????????????
}     //1. Iteration: letzte Charakter im String wird geyieldet 
      //2. Iteration: vorletztes Zeichen wird returned
//Zeichen vertauscht:
String.prototype[Symbol.iterator] = function*() {
   let index = this.length;
   while (index >= 0)
      yield this.charAt(index--);
} 

// Variante 3: Reverse-Iterator über Generator implementieren - yield* nutzen //noch lürzerer Code
                                            // ,-> star-function, damit man yield verwenden kann
// String.prototype[Symbol.iterator] = function*() {
//  yield* this.split("").reverse();   //String in seine einzelne Zeichen splitten --> hat Array & Array mit .reverse() umdrehen. Dann mit yield* alle einzelnen Elemente vom umgedrehten Array yielden
      // |       '-> einzelnen Characters umdrehen
      // |       '-> String in einzelne Charakters splitten --> bekommt Array
      // '-> von Collection/Char-Array einzeln die Elemente zurückgeben
      // '-> = Abkürzung für: yield arr[0], yield arr[1], yield arr[2], ...
      // '-> yield* ArrayName    //yield* yielded alle Elemente von ArrayName der Reihe nach
// }

// Variante 4
// const inversIterator = function*(s) {
//    yield* s.split("").reverse();
// }

/* Kommentar von Student (so kann man es auch machen):
function* Generator() {
   yield* ["Das", "ist", "ein", "Test"];
}
const x = Generator()
while(word = x.next().value) {...}  //oder for-of-Schleife nutzten = einfacher */

//von mir:
//for-of-Schleife nutzt immer den Symbol.Iterator, deshalb haben wir ihn überschrieben
// '-> sucht im Objekt/Array nach einer Funktion namens Symbol.Iterator
// '-> wird in while-Schleife umgewandelt
// --> kann dann mit Function oder Star-Function implementieren, was man will/bestimmt, was das nächste zurückgegebene ist/für die jeweilige Iteration zu returnen ist:
//     - kann komplett etwas beliebiges zurückgeben
//     - kann den Buchstaben doppelt zurückgeben

//Der Code darüber muss vor diesem stehen (Standarditerator muss vorher überschrieben werden, damit er dann in der Schleife steht):
let result = "";
for (const c of "hello")
   result+=c;
console.log(result); // olle

//Standarditerator wieder in den Initialzustand zurücksetzen
const originalIterator = String.prototype[Symbol.iterator]; //Vorherigen Iterator abspeichern & ...
//dann Iterator überschreiben & dann
String.prototype[Symbol.iterator] = originalIterator; //... diesen dann wieder zuweisen


//In Java gibt es interne & externe Iteratoren
//                |         '-> diesen mit dem Containerdatentyp Array aufrufen & mit for-each darüber iterieren
//                '-> so wie wir es bisher gemacht haben