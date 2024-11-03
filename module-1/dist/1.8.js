"use strict";
var _a, _b;
{
    // destructuring
    const user = {
        id: 545,
        name: {
            firstName: "John",
            middleName: "kabir",
            lastName: "ali",
        },
        contactNo: "0154554545",
        address: "Bangladesh",
    };
    const { contactNo, name: { middleName }, } = user;
    //   array destructuring
    const myFriends = ["John", "ali", "kabir", "baby"];
    const [bestFriend] = myFriends;
    console.log(bestFriend);
    const user1 = {
        name: "John Doe",
        email: "john.doe@example.com",
        age: 30,
        address: {
            city: "New York",
        },
    };
    console.log((_b = (_a = user1 === null || user1 === void 0 ? void 0 : user1.address) === null || _a === void 0 ? void 0 : _a.street) !== null && _b !== void 0 ? _b : "Not available");
    const greetUser = (user) => `Hello ${user.name}, your email is ${user.email}`;
    console.log(greetUser(user1));
}
//
