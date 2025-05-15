// interfaces describes object(s) shape that implement certain properties and methods that deal with the interface (e.g. things that deal with authentication as described by "Authenticatable")
interface Authenticatable {
  // DONT have actual implementation of an object or class or values in the interface
  // only defines/describes the shape of the object interface
  email: string;
  password: string;

  login(): void;
  logout(): void;
}

// HOW TO USE AN INTERFACE BELOW
let user: Authenticatable;

user = {
  email: "test@example.com",
  password: "abc1",
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
