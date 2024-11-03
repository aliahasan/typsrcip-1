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

  const {
    contactNo,
    name: { middleName },
  } = user;

  //   array destructuring
  const myFriends: string[] = ["John", "ali", "kabir", "baby"];
  const [bestFriend] = myFriends;
  console.log(bestFriend);

  type User = {
    name: string;
    email: string;
    age: number;
    address: {
      street?: string;
      city: string;
    };
  };

  const user1: User = {
    name: "John Doe",
    email: "john.doe@example.com",
    age: 30,
    address: {
      city: "New York",
    },
  };

  console.log(user1?.address?.street ?? "Not available");

  type Func = (user: User) => string;
  const greetUser: Func = (user) =>
    `Hello ${user.name}, your email is ${user.email}`;

  console.log(greetUser(user1));
}

//
