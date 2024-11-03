"use strict";
// references type data || object references
const user = {
    firstName: "Ali",
    middleName: "Ahasan",
    lastName: "Nabin",
    isMarried: false,
    company: "Programming Hero",
};
const func = (frnd, ...rest) => {
    console.log(rest);
};
func("nabin", "nn", "rokib");
