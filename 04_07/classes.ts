class Person {
  static field = "Hey!";

  //vorher: 
  // constructor(name) {
  // this.name = name;
  // }

  // dann:
  // name: string;
  // constructor(name: string){
  // this.name = name;
  // }
  // => num weiß TS, dass es in dieser Klasse eine Property name gibt und diese Property vom Typ string ist. Das ist aber die Kurzschreibweise von: public name: string. "Public" steht dabei für die Sichtbarkeit dieser Property. 

  constructor(public name: string) {}
}
// Zeile 16 fasst Zeilen 10 bis 12 zusammen. Jetzt weiß TS, dass der Parameter auch eine Property in der Klasse sein soll. 

export function Demo() {
  const person = new Person("Ted");
  console.log(person.name); // output
}

Demo();
