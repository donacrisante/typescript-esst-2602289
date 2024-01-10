export function Demo() {
  type VoidingFunction = () => void;
  type NumberFunction = (paramA: number, paramB: string) => number;

  // Typ void: Man gibt in der Console etwas aus, aber keinen Rückgabewert zurück.

  const myFunction: VoidingFunction = () => {
    console.log("myFunction called!");
  };

  const myFunction2: NumberFunction = () => {
    console.log("myFunction called!");
    return 123;
  };

  myFunction2(10, "test");
  myFunction();
}

// Wenn wir wollen, dass die Funktion eine Zahl entgegennimmt, aber einen String zurückgibt, schreibt man so:
// const otherFunc = (zahl: number): string => {
// return "string";
// };

