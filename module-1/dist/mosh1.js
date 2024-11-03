"use strict";
const user1 = {
    id: 1,
    userId: "user123",
    userInfo: {
        name: "John Doe",
        age: 30,
        isAdmin: false,
    },
};
const { name: userName } = user1.userInfo;
// console.log(userName);
const num = 2;
let consumer = [1, "john"];
consumer.push(num);
console.log(consumer);
