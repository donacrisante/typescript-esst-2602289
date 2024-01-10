export function Demo() {
  const errorFunction = () => {
    console.error("Error!");
    throw new Error("Unknown error");
  };

  // Die Funktion terminiert an dieser Stelle plötzlich. Hat also ein fatales Ende. Die Funktion hat noch weniger als keinen Rückgabewert, denn kein Rückgabewert bedeutet, dass bei einer Zuweisung zu einer Variablen die Variable auf undefined steht.   

  const result = errorFunction();

  // Wenn wir der Funktion eine Variable zuweisen wollen, dann hat result den Typ "never". Die Applikation könnte an dieser Stelle abbrechen. Es wird also nie passieren, dass result einen Wert enthält, nicht mal undefined. Daher never. 
}
