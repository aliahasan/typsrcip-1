// references type data || object references

const user: {
  readonly company: "Programming Hero"; // type ----> literal types
  firstName: string;
  middleName?: string;
  lastName: string;
  isMarried: boolean;
} = {
  firstName: "Ali",
  middleName: "Ahasan",
  lastName: "Nabin",
  isMarried: false,
  company: "Programming Hero",
};

const func = (frnd: string, ...rest: string[]) => {
  console.log(rest);
};
func("nabin", "nn", "rokib");
