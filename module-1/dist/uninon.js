"use strict";
function kgToLbs(weight) {
    // narrowing
    if (typeof weight === "number") {
        return weight * 2.20462;
    }
    else
        return parseInt(weight);
}
console.log(kgToLbs(10));
kgToLbs("10kg");
