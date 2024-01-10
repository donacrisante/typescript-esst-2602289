export function Demo() {
  type PossibleTypes = "CAR" | "BUS";
  // type VehicleId = `ID_${PossibleTypes}_${number}`;

  type VehicleTypeGeneric<
    VehicleType extends PossibleTypes
  > = `ID_${VehicleType}_${number}`;

  // le extends est là pour indiquer à TS quel type doit avoir VehicleType. En l'occurrence string.
  // extends PossibleTypes = permet uniquement d'avoir CAR ou BUS. Pas possible de mettre un autre string. 

  type VehicleBusId = VehicleTypeGeneric<"BUS">;
  type VehicleCarId = VehicleTypeGeneric<"CAR">;

  const busId: VehicleBusId = "ID_BUS_5";
  const carId: VehicleCarId = "ID_CAR_01";
}
