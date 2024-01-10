interface IBasePerson {
  name: string;
}

interface IPerson extends IBasePerson {
  sayHello: () => void;
}

interface IAge {
  age: number;
}

class Person implements IPerson, IAge {
  constructor(
    public name: string,
    public age: number,
    private id: string
  ) {}

  sayHello() {
    console.log("Hello!");
  }
}

export function Demo() {
  const person = new Person("Fred", 34, "ABCDEF");
}

// Konvention: I + Klassennamen, zB IPerson. I = Interface. 
// implements = damit die Klasse die Struktur des Interfaces einhält. 
// interface kann weder private noch protected Property enthalten, weil sie von außen nicht verfügbar sind. Es ist im Interface nicht möglich, Sichtbarkeit zu definieren. 