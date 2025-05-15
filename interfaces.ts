// interfaces describes object(s) shape that implement certain properties and methods that deal with the interface (e.g. things that deal with authentication as described by "Authenticatable")

/* why use interface when you could use 'type' keyword???
 * personal preference if all you want to do is define an object shape
 * one difference between type and interfaces - interfaces have declaration merging
 * merging is useful if you are working with interfaces that come from another file or some library (where you want to extend something you don't directly control)
 *
 * A lesser known but nonetheless interesting feature of TypeScript interfaces is that you can also use them to define function types.
 * For example, you might want to define the type of a sum function that takes two numbers as input and returns their sum.
 * You could write this code:
 *  type SumFn = (a: number, b: number) => number; // function type
 *  let sum: SumFn; // making sure sum can only store values of that function type
 *  sum = (a, b) => a + b; // assigning a value that adheres to that function type
 *
 * Alternatively, you can also define the SumFn type via an interface:
 *  interface SumFn {
 *    (a: number, b: number): number;
 *  }
 *
 * It's up to you which alternative you prefer.
 * Typically, you'll encounter the first version (type SumFn) more often but it's worth knowing about the alternative, too
 */
interface Authenticatable {
  // DONT have actual implementation of an object or class or values in the interface
  // only defines/describes the shape of the object interface
  email: string;
  password: string;

  login(): void;
  logout(): void;
}

// merging is useful because
interface Authenticatable {
  role: string;
}

// HOW TO USE AN INTERFACE BELOW
let user: Authenticatable;

user = {
  email: "test@example.com",
  password: "abc1",
  role: "admin",
  login() {
    // reach out to database
    // check credentials
    // create a session
  },
  logout() {
    // clear the session
    // etc...
  },
};

// IMPLEMENTING INTERFACES BELOW

// to force use of certain property and method names with 'implements' keyword
// 'implement' keyword forces a class to implement the structure of the interface you are implementing
// can implement multiple interfaces by separating with commas
class AuthenticatableUser implements Authenticatable {
  constructor(public email: string, public password: string) {}

  login() {
    // ...
  }

  logout() {
    // ...
  }
}
