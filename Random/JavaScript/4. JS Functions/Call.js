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
  console.log(person.fullName.call(person1, 'Dhaka', 'Bangladesh'));