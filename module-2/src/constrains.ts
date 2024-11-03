{
  // generic constraints with keyof operator
  type Vehicle = {
    bike: string;
    car: string;
    ship: string;
  };

  type Owner = "bike" | "car" | "ship"; //manually
  type Owner2 = keyof Vehicle;

  const person1: Owner2 = "bike";
  //   console.log(person1);

  const user = {
    name: "John",
    age: 20,
    address: "KG",
  };

  const car = {
    brand: "Toyota",
    model: "Camry",
    year: 2020,
  };

  const getPropertyValue = <X, Y extends keyof X>(obj: X, key: Y) => {
    return obj[key];
  };
  const result = getPropertyValue(car, "model");
  console.log(result);

  //
}
