// inheritance class define

class Person {
  name: string; // common
  age: number; // common
  address: string; // common
  constructor(name: string, age: number, address: string) {
    (this.name = name), // common
      (this.age = age), // common
      (this.address = address); // common
  }
}

class Student extends Person {
  rollno: number; // own property
  constructor(name: string, age: number, address: string, rollno: number) {
    super(name, age, address);
    this.rollno = rollno; // own property
  }
  getSleepHours(sleepOfHours: number) {
    console.log(`${this.name} ${sleepOfHours} hours ghumay`);
  }
}

class Teacher extends Person {
  takeClass(takeclassHours: number) {
    console.log(`${this.name} ${takeclassHours} hours class ney`);
  }
}

const student = new Student('Alamin', 24, 'Mirpur',2)
const teacher = new Teacher('Soikot', 30, 'Uttara')
student.getSleepHours(3)
teacher.takeClass(4)
