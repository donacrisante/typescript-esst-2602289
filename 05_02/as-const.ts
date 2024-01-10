function getNameAndFavoriteNumber() {
  return ["David", 900] as const; // (string | number)[] => [string, number]
}

export function Demo() {
  let name: string;
  let favoriteNumber: number;

  const nameAndFavoriteNumber = getNameAndFavoriteNumber();
  name = nameAndFavoriteNumber[0];
  favoriteNumber = nameAndFavoriteNumber[1];
}


// as const = erlaubt, etwas als Konstante zu behandeln, obwohl es keine Konstante ist.
// Damit TS den Typ mit den exakten Positionen ableitet, kann man TS dazu zwingen, es wie eine Konstante zu behandeln. Mit "as const".