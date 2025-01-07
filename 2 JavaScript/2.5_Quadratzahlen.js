//                          ,-> Wert interessiert uns nicht, nur der Index i wird für die Berechnung verwendet
//                          |      ,-> = Funktion, die für jedes Element im zu befüllenden Array aufgerufen wird; mit Index als Parameter den jeweiligen Wert am entspr. Index berechnen können
Array.from({ length: 10 }, (_, i) => (i + 1) * (i + 1)); // [1, 4, 9, 16, 25, 36, 49, 64, 81, 100]
//            '-> Array der Länge 10              '-> nicht bei 0 starten, deshalb i+1
//            '-> hier kann man iterierbares Objekt (=Array hat length-Eigenschaft) angeben
//            '-> für jedes Element im Array soll nachfolgendes gemacht werden (~Map)
//            '-> Array ist uninitialisiert: 10 Elemente ohne Wert/sind undefined
//            '-> = Größe des neuen Arrays


//Array.from() kann auf Basis einer Formel eine Initialisierung vorzunehmen



//Walter Kern - Kommentar:
Array.from({ length: 10 }, (_, i) => i); // [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
// oder/Alternative:
Array.from(Array(10).keys()); // [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
//            |       '-> ... nur die Indizes  => verpacken in neues Array
//            '-> neues Array der Größe 10, aber davon ...


/* Ausführen:
- direkt im Browser (Entwicklertools - Console)
- mit StackBlitz: https://stackblitz.com/edit/js-zn7i75?file=index.js
*/