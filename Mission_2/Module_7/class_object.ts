// OOB ---- class >>>>>>> object

// class People {
//     name: string;
//     email: string;
//     isAdmin: boolean;
//     constructor(name:string, email: string, isAdmin: boolean){
//         this.name = name,
//         this.email = email,
//         this.isAdmin = isAdmin
//     }
//     user(){
//         console.log(`${this.name} is an ${this.isAdmin ? "Admin" : 'normal user.'}`)
//     }
// }

// Parameter properties

class People {
  constructor(
    public name: string,
    public email: string,
    public isAdmin: boolean
  ) {}
  user() {
    console.log(
      `${this.name} is an ${this.isAdmin ? "Admin" : "normal user."}`
    );
  }
}

const people = new People("Alamin", "alamin@gmail.com", true);
people.user();
