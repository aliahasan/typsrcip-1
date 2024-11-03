{
  // normal function

  function add(num1: number, num2: number = 2): number {
    return num1 + num2;
  }

  console.log(add(5));

  // arrow function

  const subtract = (num1: number, num2: number): number => num1 - num2;
  console.log(subtract(5, 5));
  // object method
  const poorUser = {
    name: "John Doe",
    balance: 0,
    addBalance(balance: number): number {
      return this.balance + balance;
    },
  };

  // console.log(poorUser.addBalance(100));
  const arr: number[] = [1, 3, 9];

  const newArr: number[] = arr.map((elm: number): number => elm * 2);
}
