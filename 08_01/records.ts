export function Demo() {
  type Product = {
    productName: string;
    price: number;
    details: Record<string, string | number>
  };

  const p: Product = {
    productName: 'Schaukel',
    price: 200,
    details: {
      color: 'blue',
      height: 100,
    }
  }
}

// Wenn wir beliebige Properties erlauben wollen, also zB statt string in details, ein Unterobjekt mit mehreren key-value-Paaren, mit beliebig vielen Details, dann benutzen wir den Record Type und geben an, wie die Keys und die Values aussehen sollen (string, number, etc). Man trennt mit einem Komma. Man benutzt bei der value die Pipe, um zu erlauben entweder string (zB "100cm") oder number (100).
