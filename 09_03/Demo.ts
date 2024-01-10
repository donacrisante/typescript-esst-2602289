// https://www.typescriptlang.org/docs/handbook/namespaces-and-modules.html

// import { ColorVars } from './colors';
import * as ColorVars from "./colors";

console.log(
  `Der Name von ${ColorVars.color} ist ${ColorVars.name}`
);

// namespaces waren ursprünglich gedacht zur Strukturierung des Codes.
// namespaces werden in JS zu Objekten. 
// Man soll Modules bevorzugen und namespaces eher nicht verwenden. 