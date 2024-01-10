interface Person {
  name: string;
}

type Age = {
  age: number;
};

export function Demo() {
  const foobar: number | string = "hallo";
  let unionObject: Age | Person = {
    name: "Pete",
    age: 123,
  // Achtung: Hier wird zwar name und age definiert, aber nur ein Typ (Age oder Person) wird betrachtet! unionObject hat nicht beide Eigenschaften im Typ. Es ist entweder oder. 
  };
  // interfaces können sowohl für Klassen als auch für Objects als Typ verwndet werden (hier Person). 

  let intersectionObject: Age & Person = {
    age: 123,
    name: "Pete",
  };

  // intersection-Typ benutzt man, wenn man beide Typen gleichzeitig miteinander verbinden will.

  console.log(intersectionObject.age);
  console.log(intersectionObject.name);

  if ("age" in unionObject) {
    console.log(unionObject.age);
  }

  if ("name" in unionObject) {
    console.log(unionObject.name);
  }

  // Hier fragt man, ob die Property age und name im Objekt vorhanden sind. Und dann kann man ohne Problem darauf zugreifen, weil TS erkennt, was unionObject für einen Typ ist (Age oder Person). 
}
