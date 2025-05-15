class User {
  protected _firstName: string = ""; // using 'protected' keyword does give extending classes access
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

// Inheritance

// extends keyword to define a base class the 'Employee' class can build up on. It inherits all the properties of User class and can add new properties of its own
class Employee extends User {
  constructor(public jobTitle: string) {
    super(); // super must be called anytime a class inherits from another class. it ensures the constructor of the base class is getting called as well. if base class has parameters, they have to be passed into the super constructor as well
    // super.firstName = "Al Capone"; possible within the Employee class
  }
  // can add other methods and properties
  work() {
    // ...
    this._firstName;
  }
}

// meant to only act as base class that other classes should inherit from. not able to instantiate abstract classes
abstract class UIElement {
  constructor(public identifier: string) {}

  clone(targetLocation: string) {
    // logic to duplicate the UI element
  }
}

// let uiElement = new UIElement(); <= creates error because abstract classes are meant to only act as base class that other classes should inherit from. not able to instantiate abstract classes

class SideDrawerElement extends UIElement {
  constructor(public identifier: string, public position: "left" | "right") {
    super(identifier);
  }

  // ...
}
