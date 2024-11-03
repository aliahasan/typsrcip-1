"use strict";
{
    // normal function
    function add(num1, num2 = 2) {
        return num1 + num2;
    }
    console.log(add(5));
    // arrow function
    const subtract = (num1, num2) => num1 - num2;
    console.log(subtract(5, 5));
    // object method
    const poorUser = {
        name: "John Doe",
        balance: 0,
        addBalance(balance) {
            return this.balance + balance;
        },
    };
    // console.log(poorUser.addBalance(100));
    const arr = [1, 3, 9];
    const newArr = arr.map((elm) => elm * 2);
}
