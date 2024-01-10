export function Demo() {
  enum MyEnumErrorCode {
    ERR_1 = 5,
    ERR_199,
    ERR_9000,
  }

  type MyErrorCode = "ERR_1" | "ERR_199" | "ERR_9000";
  const error: MyErrorCode = "ERR_9000";

  const error2: MyEnumErrorCode = MyEnumErrorCode.ERR_199;
  // MyEnumErrorCode.ERR_1 = 3;
  console.log(MyEnumErrorCode);
}

Demo();

// enums = keine Strings. Verhalten sich wie konstant definierten Objekte. Um den Wert eines enus zuzuweisen, verwendet man die Objekt-Schreibweise. Also:
// const error2: MyEnumErrorCode = My EnumErrorCode.ERR_199. 
// Es unterscheidet sich sehr von Zeile 8, denn normale Types werden nicht in JS umgewandelt, enums jedoch schon. 
// Enums verhalten sich wie Arrays. Erste Werte = 0.
// Enums können auch fixe Werte vordefinieren. Zb der erste Wert kann einen String sein ("hallo"). Es ist dann ein String-Enum. Die nächsten müssen die Werte "hallo2", "hallo3", etc. haben. Mann kann auch 5 als ersten Wert haben und nicht unbedingt 0. Dann fängt die Aufzählung von 5 an. 
// Ein enum wirkt als wäre es ein gewöhnliches Objekt, aber es ist nicht so. Man kann enums nicht einfach manipulieren, Zb sagen MyEnumErrorCode.ERR_1 = 3 (also einen neuen Wert zuweisen). Das geht nicht. Enums sind unveränderlich. 
