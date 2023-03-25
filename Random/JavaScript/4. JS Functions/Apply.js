const person = {
    fullName: function(city, country) {
      return this.firstName + " " + this.lastName + " " + city + " " + country;
    }
  }
  const person1 = {
    firstName:"John",
    lastName: "Doe"
  }
  const person2 = {
    firstName:"Mary",
    lastName: "Doe"
  }
  
  // This will return "John Doe":
  console.log(person.fullName.apply(person1,['Dhaka', 'Bangladesh']));



  console.log(Math.max.apply(null, [1,2,3])); // Will also return 3
  console.log(Math.max.apply("", [1,2,3])); // Will also return 3
  console.log(Math.max.apply(0, [1,2,3])); // Will also return 3