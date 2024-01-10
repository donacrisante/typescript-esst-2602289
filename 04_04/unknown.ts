export function Demo() {
  let foobar: any = { author: "David Lorenz" };
  let foobar_unknown: unknown = { author: "David Lorenz" };

  let myString: string;
  myString = foobar;
  myString = foobar_unknown; // funktioniert nicht

    // any = schnittmenge mit allen typen (Chamäleon). Fasst alle Typen zusammen.
    // unknown = keine Schnittmenge mit Typen. Kann zwar alle Werte enthalten, überschneidet sich aber mit keinem einzigen Typ, außer mit sich selbst, also dem Typ unknown. Kann keiner Variable zugewiesen werden, die einen anderen Typ als unknown hat.
    // Am besten beides gar nicht verwenden. Aber wenn dann, sollte man unknown verwenden, wenn man nicht weiß, welchen Wert etwas hat, zB weil man etwas vom Server lädt und nicht genau weiß, was da zurückkommt. 
}
