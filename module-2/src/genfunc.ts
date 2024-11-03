{
  //

  const createArray = (param: string): string[] => {
    return [param];
  };
  const res1 = createArray("ban");
  //   console.log(res1);

  interface User {
    name: string;
    age: number;
  }
  const user1: User = {
    name: "John",
    age: 30,
  };
  const createArrayWithGeneric = <T>(param: T): T[] => {
    return [param];
  };
  const res3 = createArrayWithGeneric<User>(user1);
  //   console.log(res3);

  //   create tuple with generic parameters
  const tupleWithGenericFunc = <T, Q>(param1: T, param2: Q): [T, Q] => {
    return [param1, param2];
  };

  const res4 = tupleWithGenericFunc<string, User>("admin", user1);
  //   console.log(res4);

  const addCourseToStudent = <T>(student: T) => {
    const course = "Next level web development course";
    return {
      ...student,
      course,
    };
  };

  interface Student {
    name: string;
    id: number;
    email: string;
  }
  const student1: Student = {
    name: "Alice",
    id: 554,
    email: "alice@gmail.com",
  };
  const res5 = addCourseToStudent<Student>(student1);
  console.log(res5);

  //
}
