export function Challenge() {
  let foo: MyType = "Hello!";
  foo = false;
  foo = ["test", 100];
}

// Meine Lösung:
// type MyType = string | false | (string | number)[];
// let foo: MyType = "Hello!";
// foo = false;
// foo = ["test", 100];
