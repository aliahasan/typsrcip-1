type User = {
  id: number;
  userId: string;
  userInfo: {
    name: string;
    age: number;
    isAdmin: boolean;
  };
};
const user1: User = {
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
let consumer: [number, string] = [1, "john"];
consumer.push(num);
console.log(consumer);
