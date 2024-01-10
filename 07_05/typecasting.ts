type Person = { name: string };
type Animal = { name: string; animal: string };

export function Demo() {
  let personOrAnimal: Person | Animal = {
    name: "Lagertha",
    animal: "dog",
  };

  const getPersonOrAnimal: () => Person | Animal = () => {
    return {
      name: "Lagertha",
      animal: "dog",
    };
  };

  let personOrAnimal2 = getPersonOrAnimal() as Animal;

  console.log(personOrAnimal2.name, personOrAnimal2.animal);
}

// Wenn wir an einer bestimmten Stelle exakt wissen, dass es kein anderer Wert als bspw. Animal sein kann, dann können wir schreiben, die Value, also der Funktionsaufruf, der uns die Value zurückliefert in diesem Fall und dann "as Animal". 
// Wenn man nicht zu 100% sicher ist, was der Wert ist, dann lieber type guarding als type casting verwenden.  
