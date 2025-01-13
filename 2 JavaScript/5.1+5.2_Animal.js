/********** Aufgabe 5.1 **********/ //funktionale JS-Welt: hat keine Klassen, sondern nur Funktionen
//  ,-> statt class eine function; =Pendant zu class                                        ,-> sorgt dafür, dass this auf ein leeres Objekt initialisiert wird vom Typ der umgebenden Funktion -> bekommt neues Animal, wo genau diese Eigenschaften gesetzt sind 
//  |,-> statt contructor() schreibt man direkt function Animal                             |
function Animal(name, size) {   //Konstruktorfunktion (=da, es this verwendet --> kann mit new genutzt werden: returned ein neues Objekt) als Basis für Erzeugen von Objekten/für jeden Prototypen
    this.name = name;   //Diese Eigenschaften hängt man den Prototypen an / diese Eigenschaften werden beim Konstruktoraufruf dynamisch hinzugefügt
    this.size = size;         //this.x fügt erzeugten Objekt die Eigenschaft x hinzu
    Animal.instanceCount++;   //fügt Funktion/Objekt Animal selbst etwas/Variable hinzu
    //    '-> Funktion (=Funktionsobjekt)/Objekt direkt etwas zuweisen (=static Attribute/Methoden in Java); =pseudo static
}
//Alles, was static ist, wird der Funktion zugewiesen:
//,-> es gibt kein static, deshalb muss instanceCount der Funktion selbst zuweisen --> damit gehört es der Funktion und kann als globaler Animal, Dog & Cat übergreifender Zähler genutzt werden
Animal.instanceCount = 0;       //kann von außen (nicht in Definition der Klasse/Funktion) immer etwas an Funktion ergänzen = Dynamik von JS (mit delete kann man wieder etwas entfernen)
//Alles, was eine Funktion im Inneren (=Instanzmethode) ist, wird dem Prototypen (=Vorlage für die Erzeugung neuer Animalobjekte) angehängt:
//          ,-> Kette, wie Linked List: hat Ursprungsobjekt --> wenn man neues Objekt/kopie über Object.create()/new erzeugt, dann hat es Verweise auf seinen Prototyp -> Eigenschaften scheinen durch, solange es man nicht überschreibt (Wenn man Überschreibung zurücknimmt: Attribute & Methoden des Ursprungsobjekts scheinen wieder durch)
Animal.prototype.getName = function() {
    return this.name;
}
Animal.getCount = function() { return Animal.instanceCount; }   //hat rausgelöscht; getCount() = statische Funktion, wie getName()
   // '-> soll static sein --> getCount direkt an Animal (nicht an Prototyp (=Vorlage für die konkreten Objekte)) hängen

function Dog(name, size, breed) {
    //Weitere Alternative zu call()
        //              ,-> wenn man Variable innerhalb einer Funktion definiert, dann wird diese auto. an this der Funktion gebunden
        // ,-> = Hilfsvariable: base verweist auf Animal-Funktion --> kann Variable base mit () aufrufen
    this.base = Animal;    //1. Trick: Variable, die auf Konstruktorfunktion/Basiskonstruktor Animal (=Vorgängerobjekt/Prototyp) verweist --> braucht kein call()
    //                                                         '-> wird hier aufgerufen
    //     ,-> Animal-Funktion über Variable aufrufen; Trick: immer wenn man Variable hat, die auf eine andere Funktion verweist, dann wird auto. das this, der umgebenden Funktion (hier Dog) in dem die Variable definiert ist, mitgegeben beim Aufruf => Zuweisung findet auf Basis des Dog-this statt
    this.base(name, size);  //sobald man Verweis auf Funktion in Variable speichert, wird auto. wenn man die Variable & damit die Funktion aufruft das this der umgebenden Funktion (=Dog) eingesetzt
    //     '-> von Superklasse den Basiskonstruktor aufrufen
    //oder:         ,-> mit Dog-this wird Konstruktorfunktion von Animal aufgerufen   ~ super()-Aufruf in Java
    //Animal.call(this, name, size);
    //              '-> this in Basisklasse durch eigenes Dog-this austauschen & danach die weiteren Variablen zur Initialisierung reingeben
    this.breed = breed;
    //nicht:
    //this.spreak = function() {...}  //Funktionen immer am Prototyp anhängen!! sonst wird alles im Inneren der Funktion neu definiert & kopiert
    //  '-> Name der Methode nicht im inneren mit this.speak registrieren aus Effizienzgründen, sondern Methode der Prototypeinschaft zuweisen: Dog.prototype.speak = function() {...}
}
//Dog erbt von Animal - Vererbungsbeziehung herstellen / statt extends muss man schreiben:
                  //  ,-> dadurch funktioniert auch: instanceOf()
                  //  ,-> in Java: extends
Dog.prototype = Object.create(Animal.prototype);    //2. Vererbungsbeziehung festlegen / Vererbungshierarchie aufsetzen / Prototyp-Chain/-Kette aufsetzen / pseudo Vererbung umsetzen --> bekommt alle Eigenschaften & Methoden die Animal.prototype angehängt wurden (unabhängig vom Konstruktoraufruf)
// '-> konkretes Objekt/Subklasse    '-> Basisobjekt/Vorgängerobjekt/Basisklasse
// '-> Vorlagenobjekt für die Erzeugung neuer Hunde zeigt auf das Vorlagenobjekt für die Erzeugung neuer Animals => dadurch scheinen alle Sachen, die ich auf Animal definiert habe, durch und sind auch auf Dog-this verfügbar (kann auch Standarditerationsverhalten vererben)
// '-> Vorgängerobjekt vom Dog (Dog.prototype) ist (=) eine neu erzeugt Kopie (Object.create) vom Animal Vorgägerobjekt (Animal.prototype) --> Alle Eigenschaften oder Methoden, die man bei Animal definiert, stehen auch bei Dog zur Verfügung, da Dog ein Animal ist
//Funktion am Prototyp anhängen: --> Funktion wird nur 1x definiert & man bekommt Verweis (Prototyp = Linked List/Verweis auf Ursprungselement) -> nur Referenz wird kopiert
//Funkktionsname.prototype.methodenname = function() {...}
//Weitere Eigenschaften bei Dog ergänzen:
Dog.prototype.speak = function() {  //zusätzliche Methode dem Prototypen anhängen; = dynamischer Verweis
    console.log(this.getName() + " sagt Wuff!");
                    // '-> bekommen wir von Animal, da Prototyp-Chain aufgesetzt: Dog.prototype = Object.create(Animal.prototype); 
} // Aufruf der Basisklassenfkt. statt der von der Basisklasse geerbten: this.base.prototype.speak("Wuff!"); }

function Cat(name, size, color) {
    //Konstruktoraufruf:
    //ruft Funktion Animal auf: nicht via Animal(), sondern mit call() --> Zuweisung erfolgt nicht auf Animal-this, sondern auf Cat-this => damit wird neues Cat-Objekt initialisiert
    //       ,-> = deutlich mächtiger, aber für diesen Use-Case deckungsgleich
          // ,-> 1. ruft Basisobjektkonstruktor/Basiskonstruktor auf; statt in Java: super() = call() in JS
    Animal.call(this, name, size);  //Cat initialisieren
              // '-> cat-this; ruft function Animal auf, aber erstezt das this von Animal durch das eigene cat-this --> gibt this der Cat nach oben, sodass Zuweisung auf Basis der Cat erfolgt 
    this.color = color;   //color als konkrete Eigenschaft ergänzen
}
Cat.prototype = Object.create(Animal.prototype);
Cat.prototype.speak = function() { console.log(this.getName() + " sagt Miau!"); }
                                                  // '-> scheint vom Animal durch / Pointer zeigt darauf, wenn man es nicht überschriebt

/*alte Version: var*/let animal = new Animal("Tier", 5);
console.log(animal.getName());
animal = new Dog("Benno", 10, "Bulldogge");
animal.speak(); // Benno sagt Wuff!
animal = new Cat("Minki", 15, "Siamkatze");
animal.speak(); // Minki sagt Miau!
console.log(Animal.instanceCount); // 3



/********** Aufgabe 5.2 **********/ //Klassenbasierter Ansatz: kann hier alles nutzen, was wir von Java oder anderen Sprachen kennen; ="normaler Code"; so funktioniert normale Vererbung vom Grundkonzept, die man in allen Programmiersprachen hat
class Animal {  //Klasse Animal als Überklasse für Dog & Cat --> Dog & Cat erben von Animal
  constructor(name, size) { //hat Konstruktor, um neue Animals/Objekte zu erzeugen
      this.name = name; this.size = size;
      Animal.instanceCount++;
  }

  getName() { return this.name; }

  static instanceCount = 0; //statische Variable wird jedes Mal um eins erhöht/mitzählt, wenn ein neues Animal erzeugt wird, weil der der Konstruktor aufgerufen wird
}

//          ,-> dadurch erben wir alles, was in Animal definiert ist (bekommt auch getName()) --> alle Methode bei Animal stehen auch bei der Klasse Dog auto. zur Verfügung (kann aber auch eigene Methoden ergänzen)
class Dog extends Animal {      //Klasse definieren & Vererbungshierarchie aufsetzen; extends wird in Prototype-Chain/Prototypenkette umgesetzt
//          '-> dadurch erbt man alles, was in Animal definiert ist --> bekommt auch getName()
  constructor(name, size, breed) {  //=Konstruktor; breed = Rasse
      super(name, size);        //super() statt call() <-- beim funktionsbasierten Ansatz
      // '-> Konstruktor von Oberklasse Animal aufrufen/super führt Super-Konstruktor (=Konstruktor von dem man erbt = Konstruktor von Animal) aus --> dadurch finden die Initialisierungen von Animal
      this.breed = breed;
  }

//super. erlaubt angegebene Methode aufzurufen
//super() ruft Konstruktor von Oberklasse auf
//oder:                 super.getName() <-- über super getName()-Methode von oben aufrufen
  speak() { console.log(this.getName() + " sagt Wuff!"); }
                      // '-> immer this verwenden!(, wenn man sich auf die Instanz bezieht); in Java: darf this weglassen 
}

            //nach extends:
            //     ,-> in Java: muss feste Klasse sein 
            //     ,-> in JS: kann Funktion (=dynamisch), Plathalter, ... sein
class Cat extends Animal {
  constructor(name, size, color) {
      super(name, size);
      this.color = color;
  }

  speak() { console.log(this.getName() + " sagt Miau!"); }
//                              '-> erbt man von Animal, weil wir über das extends die Vererbungsbeziehung aufgebaut haben
}

//Dieser Code ist identisch/Die Art & Nutzung ist die gleiche, da class im Hintergrund in functions ersetzt werden:
/*alte Version:var*/let animal = new Animal("Tier", 5);
//                                '-> bei new wird immer der dazugehörige Konstruktor (hier von Dog) aufgerufen, der über super den Konstruktor von Animal aufruft, sodass der Zähler/Counter instanceCount  um 1 hochgezählt wird --> kann am Schluss ausgeben, wie viele Animals/Objekte erzeugt wurden
console.log(animal.getName());
animal = new Dog("Benno", 10, "Bulldogge");
animal.speak(); // Benno sagt Wuff!
animal = new Cat("Minki", 15, "Siamkatze");
animal.speak(); // Minki sagt Miau!     speak()-Methode von Klasse Cat wird aufgerufen
console.log(Animal.instanceCount); // 3


//Sollte von der einen Welt in die andere Welt übersetzen können
//Kommt in Klausur dran!!!