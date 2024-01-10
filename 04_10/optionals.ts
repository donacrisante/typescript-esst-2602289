type Restaurant = {
  name: string;
  location: string;
  priceRange: "low" | "normal" | "high";
  comment?: string;
};

// Das ? macht die Property optional. 

export function Demo() {
  const thaiRestaurant: Restaurant = {
    name: "Thai Mo",
    location: "Pluto",
    priceRange: "normal",
    comment: "Lecker!",
  };

  const germanRestaurant: Partial<Restaurant> = {
    comment: "hallo!",
  };

  // Mit Partial sind alle Properties vom Typ optional. Man kann sie also alle löschen oder nur einige davon haben. ABER: Man darf nicht etwas hinzufügen, was im Typ nicht enthalten ist, zB foo: "bar".  
}
