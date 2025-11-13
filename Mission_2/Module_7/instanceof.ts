class Person2 {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
  doSleep(numOfHours: number) {
    console.log(`Person ${numOfHours} hours ghumay`);
  }
}

class Student1 extends Person2 {
  constructor(name: string) {
    super(name);
  }
  doStudy(numOfHours: number) {
    console.log(`${this.name} ${numOfHours} hours boi pore`);
  }
}
class Teacher1 extends Person2 {
  constructor(name: string) {
    super(name);
  }
  takeclass(numOfHours: number) {
    console.log(`${this.name} ${numOfHours} class nen`);
  }
}

const student1 = new Student1("alamin");
const teacher1 = new Teacher1("Bulib");

const isStudent = (user: Person2) => {
  return user instanceof Student1;
};
const isTeacher = (user: Person2) => {
  return user instanceof Teacher1;
};

const getUserInfo = (user: Person2) => {
  if (isStudent(user)) {
    user.doStudy(3);
  } else if (isTeacher(user)) {
    user.takeclass(3);
  } else {
    user.doSleep(12);
  }
};
getUserInfo(teacher1)