import * as Product from "./Product";

declare module "./Product" {
  export function getUrl(): string;
}

export function Demo() {
  const apiUrl = Product.PRODUCT_URL;
  Product.getUrl();
}

// TS-Modules sind eigentlich JS-Modules. 
// Wenn wir "declare module" benutzen auf einem bestehenden Modul, was wir importieren, dann können wir die Typen dieses Moduls erweitern. Wenn man zB eine Library importiert (zB für Geokarten) und dann wiederum andere Module importiert, die nichts anderes machen, als das Originalmodul zu manipulieren, dann weiß TS nicht, welche Typen bzw. welche Erweiterungen jetzt dazukamen. In diesem Fall kann es sinnvoll sein, "declare module" zu benutzen, um zu sagen: "Ich weiß, dass du nicht weißt, dass diese Typen, diese Funktion oder diese Variable vorhanden ist und importiert werden kann, aber ich kann dir sagen, dass es funktioniert."  
