// type guard
type Alpaneumeric = string | number;

const add = (num1: Alpaneumeric, num2: Alpaneumeric) => {
  if (typeof num1 === "number" && typeof num2 === "number") {
    return num1 + num2;
  } else {
    return num1.toString() + num2.toString();
  }
};

// console.log(add(2, '2'));

type AdminUser = {
  name: string;
  role: "Admin";
};
type NormalUser = {
  name: string;
};

const user = (user: AdminUser | NormalUser) => {
  if ("role" in user) {
    console.log("This is Admin");
  } else {
    console.log("this is normal user");
  }
};
user({ name: "alamin", role:'Admin' });
