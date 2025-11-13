// type of function

// 1. arow funciton , 2. normal funtion

function add(num1: number, num2: number) {
  return num1 + num2;
}

// it's not allow because parameter 2 type "number" but define value is sting
//! add(2, "2");
add(2, 5);

const addArow = (num1: number, num2: number): number => num1 + num2;
addArow(1, 2);

// object => function > method

const pooruser = {
  name: "al amin",
  balance: 0,
  addBalance(value: number): number {
    return this.balance + value;
  },
};

pooruser.addBalance(100);

const arr: number[] = [1, 2, 3];

const sqrArray = arr.map((elem: number): number => elem * elem);
