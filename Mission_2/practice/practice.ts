class Animal {
  constructor(
    public name: string,
    public species: string,
    public sound: string
  ) {}
  makeSound() {
    console.log(`The ${this.name} make sound ${this.sound}`);
  }
}

const cat = new Animal("Cat", "cat", "mew mew");
console.log(cat.name);
