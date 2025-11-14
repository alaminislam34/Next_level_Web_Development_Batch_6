// The 2nd Piller of OOP >>>>>>>>>>> Polymorphism

class Person {
  getSleep() {
    console.log(`I am a normal user. I sleep 8 hours per day`);
  }
}

class Student extends Person {
  getSleep() {
    console.log(`I am a Student. I sleep 7 hours a day`);
  }
}
class NextLevelStudent extends Person {
  getSleep() {
    console.log(`I am a Next level studnet. I sleep 6 hours a day`);
  }
}

const person = new Person();
const student = new Student();
const nextLevelStudent = new NextLevelStudent();

const getPersonInfo = (user: Person) => {
  return user.getSleep();
};

getPersonInfo(person)
getPersonInfo(student)
getPersonInfo(nextLevelStudent)
