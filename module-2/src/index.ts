// type assertions
let anything: any;
anything = "Next Level Web development";
(anything as string).includes("Next");

// const kgToGm = (value: string | number) => {
//   if (typeof value === "number") {
//     const parsedValue = value * 100;
//     return parsedValue;
//   } else typeof value === "string";
//   const parsedValue = parseInt(value) * 1000;
//   return parsedValue;
// };
// const result = kgToGm("10");
// const result2 = kgToGm(10);
// console.log({ result, result2 });
