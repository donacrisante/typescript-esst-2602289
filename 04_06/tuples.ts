export function Demo() {
  type StringOrNumberArray = (string | number)[];
  const myArray1: StringOrNumberArray = ["foo", 2, "bar"];

  const xyTuple: [number, number, string] = [100, 140, "ich bin ein string"];
}

// Wenn man nur so schreibt: 
// const xyTuple: number[] = [100, 140, 200] kann man beliebig viele Werte hinzufügen. Aber wenn man eine exakte Anzahl an Werte haben will, dann muss man die Schreibweise des Typs anpassen: zB [number, number, string]. Man kann es beliebig kombinieren.