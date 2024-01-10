import type { Hello, MyObject } from "./types";

export function Demo() {
  const s: Hello = "hallo";
  const o: MyObject = {
    foo: "text",
  };
}

// Der Unterschied zwischen "import" und "import type" ist, dass wir mit dem normalen import auch gewöhnliche Imports, wie Functions und Werte importieren können, während wir mit "import type" nur exportierten Types importieren können. 

// Man braucht in der Regel "import type" nicht, aber:
// Man benutzt meistens Frameworks in den Applikationen, die nicht nur den TS Compiler verwenden, sondern ein komplettes Paket von Bundler mit Webpack, Babel, usw. Diese laufen meistens durch die Imports durch und schauen, was überhaupt importiert wird, damit sie wegwerfen können, was überhaupt nicht importiert wird. Also was nicht verwendet wird, wird nicht importiert. 
// Konkret in diesem Bsp: Wenn man nur "import" schreibt, kommt der verwendete Bundler an der import Stelle und guckt, was importiert wird. Er geht dann zu types.ts und sieht den export. Dann geht er zu hello-type.ts und object-type.ts und sieht "import type". Da JS damit nichts anfangen kann, weil "import type" nur in TS verwendet wird, wird es fehlschlagen. Deswegen soll man in diesem Fall, in der Demo.ts, ein "import type" verwenden.