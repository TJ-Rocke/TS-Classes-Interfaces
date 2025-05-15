// class User {
//   name: string;
//   age: number;

//   constructor(name: string, age: number) {
//     this.name = name;
//     this.age = age;
//   }
// }

// a shortcut to making classes without fields, add 'public' keyword in front of constructor parameters. Using 'public' keyword will automatically create fields with the parameter name to the class
class Usser {
  // public is default so the 'public' keyword isnt necessary (can make code easier to read and understand tho)
  public readonly hobbies: string[] = []; // public/private marked properties affects how properties are accessed in/outside of the class. Readonly can be read and it can be accessed but it can't be re-assigned with an equal sign (can push to arrays tho)

  constructor(public name: string, private age: number) {}

  greet() {
    console.log("My age: " + this.age);
  }
}

const anthony = new Usser("Anthony", 23);
console.log(anthony.hobbies);
// console.log(anthony.age) // uncomment and read error message (cannot access a private property called 'age')
