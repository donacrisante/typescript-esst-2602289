interface MyFunctionType {}

export function Challenge() {
  const myFunction: MyFunctionType = (
    requiredNumber,
    optionalString
  ) => {
    console.log(requiredNumber, optionalString);
  };

  myFunction(100);
  myFunction(100, "Foo!");
}

// Meine Lösung:
// interface MyFunctionType {
//  (requiredNumber: number, optionalString?: string): void;
// }

// => Lösung korrekt! () für die Parameter, und dann ":", weil interfaces erwarten als Syntax immer diese "Key: Value" Struktur.

