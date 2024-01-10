export function Demo() {
  function calculate(price: number, vat: number) {
    return price * vat;
  }

  type ResultOfCalculate = ReturnType<typeof calculate>;
  type ParametersOfCalculate = Parameters<typeof calculate>;

  const mwst: ParametersOfCalculate[1] = 1.19; // on indique l'index, car le type indique deux paramètres sous forme de liste (Array). On met [1], car on veut avoir juste le vat. 
  const myPrice: ResultOfCalculate = calculate(100, mwst);
}

// ReturnType = gibt den Typ einer Funktion zurück.
// Parameters = gibt den Typ eines Parameters zurück.
