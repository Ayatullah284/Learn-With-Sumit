const person = {
    name: 'Sumit',
    age: 35,
    getName: function(){
        return 'Sumit';
    }
};
person.name = "Bangladesh";

let number = 3;
number = 4;

const person2 = person;
person.age = 50;
console.log(person2);