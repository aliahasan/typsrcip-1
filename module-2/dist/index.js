"use strict";
// type assertions
let anything;
anything = "Next Level Web development";
anything.includes("Next");
const kgToGm = (value) => {
    if (typeof value === "string") {
        const convertedValue = parseFloat(value) * 1000;
        return convertedValue;
    }
    if (typeof value === "number") {
        return value * 1000;
    }
};
const result1 = kgToGm(100);
const result2 = kgToGm("1000");
