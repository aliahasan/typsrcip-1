{
  // generic interface

  interface Developer<T, X = null> {
    name: string;
    computer: {
      brand: string;
      model: string;
      year: number;
    };
    smartWatch: T;
    bike?: X;
  }

  interface SmartWatch {
    brand: string;
    model: string;
    year: number;
  }

  const developer: Developer<SmartWatch> = {
    name: "John Doe",
    computer: {
      brand: "Apple",
      model: "MacBook Pro",
      year: 2020,
    },
    smartWatch: {
      brand: "Apple",
      model: "Watch Series 5",
      year: 2020,
    },
  };
  const developer2: Developer<SmartWatch> = {
    name: "John Doe",
    computer: {
      brand: "Apple",
      model: "MacBook Pro",
      year: 2020,
    },
    smartWatch: {
      brand: "Apple",
      model: "Watch Series 5",
      year: 2020,
    },
  };
  console.log(developer2);
  //
}
