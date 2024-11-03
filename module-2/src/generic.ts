{
  //
  type GenericArray<T> = Array<T>;

  //   const rollNumbers: number[] = [1, 2, 3, 4, 5, 6, 7];
  const rollNumbers: GenericArray<number> = [1, 2, 3, 4, 5, 6, 7];

  //   const mentors: string[] = ["a", "b", "c", "d"];
  const mentors: GenericArray<string> = ["a", "b", "c", "d"];

  //   const boolArray: boolean[] = [true, false, true];
  const boolArray: GenericArray<boolean> = [true, false, true];

  type User = {
    name: string;
    age: number;
    role: boolean;
  };

  const userArray: GenericArray<User> = [
    {
      name: "John Doe",
      age: 30,
      role: true,
    },
    {
      name: "Max",
      age: 28,
      role: false,
    },
    {
      name: "Alice",
      age: 32,
      role: true,
    },
  ];
  //   console.log(userArray);

  type GenericTuple<X, Y> = [X, Y];
  const human: GenericTuple<string, string> = ["John Doe", "Max"];
  const [man1, man2] = human;
  //   console.log({ man1, man2 });

  type UserTuple = {
    name: string;
    age: number;
    role: boolean;
  };
  const userTuple: GenericTuple<number, UserTuple> = [
    20,
    { name: "john", age: 32, role: true },
  ];
  console.log(userTuple);
  //
}
