/********** Aufgabe 5.1 **********/                                                      // ,-> sorgt dafür, dass this auf ein leeres Objekt initialisiert wird vom Typ der umgebenden Funktion -> bekommt neues Animal, wo genau diese Eigenschaften gesetzt sind 
function Animal(name, size) {   //Konstruktorfunktion (=da, es this verwendet --> kann mit new genutzt werden: returned ein neues Objekt) als Basis für Erzeugen von Objekten/für jeden Prototypen
    this.name = name;   //Diese Eigenschaften hängt man den Prototypen an / diese Eigenschaften werden beim Konstruktoraufruf dynamisch hinzugefügt
    this.size = size;         //this.x fügt erzeugten Objekt die Eigenschaft x hinzu
    Animal.instanceCount++;   //fügt Funktion/Objekt Animal selbst etwas/Variable hinzu
    //    '-> Funktion (=Funktionsobjekt)/Objekt direkt etwas zuweisen (=static Attribute/Methoden in Java); =pseudo static
}
Animal.instanceCount = 0;       //kann von außen (nicht in Definition der Klasse/Funktion) immer etwas an Funktion ergänzen = Dynamik von JS (mit delete kann man wieder etwas entfernen)
        // ,-> Kette, wie Linked List: hat Ursprungsobjekt --> wenn man neues Objekt/kopie über Object.create()/new erzeugt, dann hat es Verweise auf seinen Prototyp -> Eigenschaften scheinen durch, solange es man nicht überschreibt (Wenn man Überschreibung zurücknimmt: Attribute & Methoden des Ursprungsobjekts scheinen wieder durch)
Animal.prototype.getName = function() {
    return this.name;
}
Animal.getCount = function() { return Animal.instanceCount; }   //hat rausgelöscht
   // '-> soll static sein --> getCount direkt an Animal (nicht an Prototyp (=Vorlage für die konkreten Objekte)) hängen

function Dog(name, size, breed) {
        //              ,-> wenn man Variable innerhalb einer Funktion definiert, dann wird diese auto. an this der Funktion gebunden
        // ,-> = Hilfsvariable: base verweist auf Animal
    this.base = Animal;    //1. Trick: Variable, die auf Konstruktorfunktion/Basiskonstruktor Animal (=Vorgängerobjekt/Prototyp) verweist --> braucht kein call()
    this.base(name, size); //                            '-> wird hier aufgerufen
    //oder:         ,-> mit Dog-this wird Konstruktorfunktion von Animal aufgerufen   ~ super()-Aufruf in Java
    //Animal.call(this, name, size);
    this.breed = breed;
    //nicht:
    //this.spreak = function() {...}  //Funktionen immer am Prototyp anhängen!! sonst wird alles im Inneren der Funktion neu definiert & kopiert
}
                  //  ,-> dadurch funktioniert auch: instanceOf()
                  //  ,-> in Java: extends
Dog.prototype = Object.create(Animal.prototype);    //2. Vererbungsbeziehung festlegen / Vererbungshierarchie aufsetzen / Prototyp-Chain/-Kette aufsetzen / pseudo Vererbung umsetzen --> bekommt alle Eigenschaften & Methoden die Animal.prototype angehängt wurden (unabhängig vom Konstruktoraufruf)
// '-> konkretes Objekt/Subklasse    '-> Basisobjekt/Vorgängerobjekt/Basisklasse
//Funktion am Prototyp anhängen: --> Funktion wird nur 1x definiert & man bekommt Verweis (Prototyp = Linked List/Verweis auf Ursprungselement) -> nur Referenz wird kopiert
//Funkktionsname.prototype.methodenname = function() {...}
Dog.prototype.speak = function() {  //zusätzliche Methode dem Prototypen anhängen; = dynamischer Verweis
    console.log(this.getName() + " sagt Wuff!");
                    // '-> bekommen wir von Animal, da Prototyp-Chain aufgesetzt: Dog.prototype = Object.create(Animal.prototype); 
} // Aufruf der Basisklassenfkt. statt der von der Basisklasse geerbten: this.base.prototype.speak("Wuff!"); }

function Cat(name, size, color) {
          // ,-> 1. ruft Basisobjektkonstruktor/Basiskonstruktor auf; in Java: super()
    Animal.call(this, name, size);  //Cat initialisieren
              // '-> cat-this
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



/********** Aufgabe 5.2 **********/
class Animal {  //Klasse Animal als Überklasse für Dog & Cat --> Dog & Cat erben von Animal
  constructor(name, size) {
      this.name = name; this.size = size;
      Animal.instanceCount++;
  }

  getName() { return this.name; }

  static instanceCount = 0;
}

class Dog extends Animal {      //Klasse definieren & Vererbungshierarchie aufsetzen; extends wird in Prototype-Chain/Prototypenkette umgesetzt
  constructor(name, size, breed) {  //breed = Rasse
      super(name, size);        //super() statt call()
      this.breed = breed;
  }

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
}

/*alte Version:var*/let animal = new Animal("Tier", 5);
console.log(animal.getName());
animal = new Dog("Benno", 10, "Bulldogge");
animal.speak(); // Benno sagt Wuff!
a