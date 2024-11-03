{
  type User = {
    name: string;
    age: number;
  };

  type UserWithRole1 = User & { role: string };
  const user2: UserWithRole1 = {
    name: "Jane Smith",
    age: 25,
    role: "Manager",
  };

  type RollNumber = number;

  interface User2 {
    name: string;
    age: number;
  }

  interface UserWithRole2 extends User2 {
    role: string;
  }
  const user1: UserWithRole2 = {
    name: "John Doe",
    age: 30,
    role: "Admin",
  };

  console.log(user1);

  // array declare with interface

  interface Roll<T, S> {
    [index: number]: T | S;
  }
  const rollArray: Roll<string, number> = [
    "roll",
    "name",
    "age",
    "role",
    20,
    41,
  ];

  type Add = (num1: number, num2: number) => number;

  const add: Add = (num1, num2) => num1 + num2;
  add(5, 4);

  //   function with interface

  interface Add2 {
    (num1: number, num2: number): number;
  }
  const add2: Add2 = (num1, num2) => num1 + num2;
  add(5, 4);
  //
}
