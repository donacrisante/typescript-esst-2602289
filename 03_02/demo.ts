export function Demo() {
  let myString: string = "Hallo";
  let myNumber: number = 123;
  let myBoolean: boolean = true;

  let myUndefined: string;
  myUndefined = "test";
  // myUndefined = true;
  // myUndefined = 2;

  let myNull: boolean = null;
  myNull = false;
}

// explizite Typen lassen sich mit ":" eingeben. 
// Comment résoudre problème exemple 3:
// a) on définit le type sans donner de valeur: let myNull: boolean;
// b) permettre plusieurs types en même temps: let myNull: boolean | null = null;
// c) changer la configuration dans tsconfig qui permet d'attribuer null à tous les types. Dans ce cas, mettre dans les compilerOptions:
// "compilerOptions": {
// "strictNullChecks": false",
// }

