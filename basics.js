"use strict";
// class User {
//   name: string;
//   age: number;
//   constructor(name: string, age: number) {
//     this.name = name;
//     this.age = age;
//   }
// }
// a shortcut to making classes without fields, add 'public' keyword in front of constructor parameters. Using 'public' keyword will automatically create fields with the parameter name to the class
class User {
    name;
    age;
    // public is default so the 'public' keyword isnt necessary (can make code easier to read and understand tho)
    hobbies = []; // public/private marked properties affects how properties are accessed in/outside of the class
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    greet() {
        console.log("My age: " + this.age);
    }
}
const anthony = new User("Anthony", 23);
console.log(anthony.hobbies);
// console.log(anthony.age) // uncomment and read error message (cannot access a private property called 'age')
