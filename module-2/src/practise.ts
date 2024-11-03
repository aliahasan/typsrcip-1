function displayUserInfo(
  name: string,
  age: number,
  role?: "admin" | "user" | "guest"
): void {
  // Display user info with a default role if none is provided
  console.log(`Name: ${name}`);
  console.log(`Age: ${age}`);
  console.log(`Role: ${role ?? "guest"}`);
}

// Example usage
displayUserInfo("Alice", 25, "admin"); // Name: Alice, Age: 25, Role: admin
displayUserInfo("Bob", 30); // Name: Bob, Age: 30, Role: guest (default role)

type User = {
  name: string;
  age: number;
  role?: "admin" | "user" | "guest";
};

const user1 = {
  name: "Alice",
  age: 25,
  role: "admin",
};
const displayUser = (param: object): void => {
  const data = param;
};
const res = displayUser(user1);
