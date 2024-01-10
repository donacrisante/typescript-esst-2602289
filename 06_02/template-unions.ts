export function Demo() {
  type VehicleType = "CAR" | "BUS" | "TRUCK";
  type VehicleId = `T_${VehicleType}_${number}`;  
  let serialNumberCar: VehicleId = "T_CAR_599";
  let serialNumberTruck: VehicleId = "T_TRUCK_2399";
  let serialNumberBus: VehicleId = "T_BUS_35";
}

// Vorher:
// export function Demo() {
//  type VehicleId = `T_${"CAR" | "BUS" | "TRUCK"}_${number}`;  
//  let serialNumberCar: VehicleId = "T_CAR_599";
//  let serialNumberTruck: VehicleId = "T_TRUCK_2399";
//  let serialNumberBus: VehicleId = "T_BUS_35";

// => Backticks und $ sind die Template Literal Schreibweisen. 

// Danach (damit es lesbarer wird):
//  type VehicleType = "CAR" | "BUS" | "TRUCK";
//  type VehicleId = `T_${VehicleType}_${number}`;  
//  let serialNumberCar: VehicleId = "T_CAR_599";
//  let serialNumberTruck: VehicleId = "T_TRUCK_2399";
//  let serialNumberBus: VehicleId = "T_BUS_35";
//}
