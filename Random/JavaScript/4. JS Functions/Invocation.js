function myFunction(a, b) {
    return a * b;
  }
  window.myFunction(10, 2);    // Will also return 20


  const myObject = {
    firstName:"John",
    lastName: "Doe",
    fullName: function () {
      return this.firstName + " " + this.lastName;
    }
  }
  myObject.fullName();         // Will return "John Doe"