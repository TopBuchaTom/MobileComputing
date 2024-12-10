//                          ,-> Wert interessiert uns nicht, nur der Index i wird für die Berechnung verwendet                                                                    
Array.from({ length: 10 }, (_, i) => (i + 1) * (i + 1)); // [1, 4, 9, 16, 25, 36, 49, 64, 81, 100]
//            '-> Array der Länge 10              '-> nicht bei 0 starten, deshalb i+1
//            '-> hier kann man iterierbares Objekt (=Array hat length-Eigenschaft) angeben
//            '-> für jedes Element im Array soll nachfolgendes gemacht werden (~Map)
//            '-> Array ist uninitialisiert: 10 Elemente ohne Wert/sind undefined

/* Ausführen:
- direkt im Browser (Entwicklertools - Console)
- mit StackBlitz: https://stackblitz.com/edit/js-zn7i75?file=index.js
*/