class Car {
    constructor(name) {
      this.name = name;
    }
    static hello() {
      return "Hello!!";
    }
  }
  
  const myCar = new Car("Ford");
  
  // You can call 'hello()' on the Car Class:
  document.getElementById("demo").innerHTML = Car.hello();