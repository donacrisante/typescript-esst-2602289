export function Demo() {
  type Product<Details = Record<string, string | number>> = {
    name: string;
    details: Details;
  };
  // Nach dem Details hat man Defaults angegeben (= Records<...>), die verwendet werden können, wenn nichts anderes angegeben wurde. 

  type FoodProduct = Product<{
    weight: number;
    origin: string;
  }>;
  // Hier fordern wir die entsprechenden Details ein.

  const f: FoodProduct = {
    name: "Banana",
    details: {
      weight: 200,
      origin: "Columbia",
    },
  };

  const p: Product = {
    name: "Babyphone",
    details: {
      id: "EFCDF1324",
      weight: 500,
    },
  };
  // Der Product hat keine weiteren Angaben und nutzt hier den Record. 
}
