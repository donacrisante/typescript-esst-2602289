class Person {
  constructor(
    public name: string,
    protected age: number,
    private id: string
  ) {}

  // Wenn man so auf die Properties zugreifen wollen: 
  // console.log(person.name, person.age, person.id), beschwert sich TS bei age und id, obwohl die beiden in der Klasse sind, weil age und id unter protected und private stehen. Es ist also nicht erlaubt von außen darauf zuzugreifen. Man muss einen Umweg bauen, denn es ist wohl erlaubt von der Klasse aus zuzugreifen.
  // Pour ce faire, on emploie une get-Method:
  // getPersonAge() {
  //  return this.age;
  // }
  // getPersonId() {
  //  return this.id;
  // }
  // et on fait: console.log(person.name, person.getPersonAge(), person.getPersonId()
  // Ensuite, si on essaie d'insérer ces méthodes dans l'extension de classe, on voit que ca ne marche pas pour id, car private ne peut pas être transmis dans les extensions de classes. 

  getPersonId() {
    return this.id;
  }
}

class ExtendedPerson extends Person {
  getPersonAge() {
    return this.age;
  }
  // protected Property einer Klasse kann auch an die abgeleitete Klasse weitergegeben werden. 
}

export function Demo() {
  const person = new ExtendedPerson("Ted", 30, "UD/OFGHY");

  console.log(
    person.name,
    person.getPersonAge(),
    person.getPersonId()
  );
}
