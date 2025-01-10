function Smartphone(producer) {
  function generateModel(model) {   //innere Funktion returned ein Objekt
      const result = {};
      result.producer = producer;
      result.model = model;
      return result;
  }

  return generateModel;   //äußere Funktion returned eine innere Funktion
}

//oder - mit verschachtelten Arrow-Functions - kompakter:
function Smartphone2(producer) {  //äußere Funktion returned innere Funktion
  return model => ({ producer, model });
        // |   |      '-> braucht kein producer:producer, da Name der Variablen mit Propertynamen übereinstimmt
        // |   '-> Arrow-Functions
        // '-> = anonyme innere Function, das Objekt mit Eigenschaften procedur & model returned
}

//oder - noch kürzer:
const Smartphone3 = producer => model => ({ producer, model });   //sehr kompakter/übersichtlicher Code
        // |                                  '-> Variable wird aufgelöst zu: Variablenname:Wert  =  producer:producer
        // '-> = Funktion Smartphone3, der man producer als Parameter übergibt & die neue Funktion mit dem Parameter model returned
        //                            wenn man Funktion mit Parameter model aufruft, dann bekommt man Objekt zurück <-'
//oder:
//const Smartphone31 = producer => model => ({ producer:producer, model:model });

//oder - Lösung von Student:
function	Smartphone0(producer) {   //Function, die anonyme Function returned
  return function(model) {          //so würde man es in PHP machen
    return {
      producer: producer,
      model: model
    }
  }
}