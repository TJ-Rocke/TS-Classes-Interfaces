class User {
  private _firstName: string = "";
  private _lastName: string = "";
  // constructor(private firstName: string, private lastName: string) {}

  set firstName(name: string) {
    if (name.trim() === "") {
      throw new Error("Invalid name");
    }
    this._firstName = name;
  }

  set lastName(name: string) {
    if (name.trim() === "") {
      throw new Error("Invalid name");
    }
    this._lastName = name;
  }

  get fullName() {
    // because 'get' keyword exists, it automatically will access and return the function as a property (e.g. tony.fullName = )
    return this._firstName + " " + this._lastName;
  }

  static eid = "USER"; // static property can be accesses on the class itself (e.g. User.eid, e.g. User.greet)

  static greet() {
    console.log("Hello World");
  }
}

console.log(User.eid);
User.greet();

const tony = new User();
tony.firstName = "Tony"; // firstName and lastName can be accessed and set because the setter isn't set to private
tony.lastName = "Gambino";
console.log(tony.fullName);
