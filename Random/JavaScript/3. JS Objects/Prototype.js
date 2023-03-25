// function Person(fname, lname, age){
//     this.fname = fname;
//     this.lname = lname;
//     this.age = age;
//     this.fullName = function(){
//         return this.fname + " " + this.lname
//     }
// }

// const Arif = new Person("Arif", "Miya", 26);
// const Mridul = new Person("Mridul", "Miya", 25);
// const Hagu = new Person("Hagu", "Miya", 23);

// console.log(Arif);
// console.log(Mridul);
// console.log(Hagu);

// Arif.country = "Bangladesh";
// console.log(Arif);
// console.log(Mridul);

// Person.prototype.country = "Bangladesh";
// console.log(Person)
// console.log(Person.prototype.country)
// console.dir(Person)

// console.log(Arif.country )


// advence prototype 
// youtube link = https://www.youtube.com/watch?v=Z45VQuHO_VA

/* let person = {};

person.name = "Jasim";
person.age = 30;

person.eat = function(){
    console.log(`Person is eating`);
}
person.sleep = function(){
    console.log(`Person is sleeping`);
} */




/* function Person(name, age){
    let person = Object.create(Person.prototype);
    person.name = name;
    person.age = age;

    return person;
};
Person.prototype = {
    
    eat(){
        console.log(`Person is eating`);
    },
    sleep(){
        console.log(`Person is sleeping`);
    },
    play(){
        console.log(`Person is playing`);
    }
}


const sakib = Person("Sakib", 35);
const tamim = Person("Tamim", 35);
// console.log(tamim);
// tamim.eat(); */










/* function PersonwithNew(name, age){
    // let this = Object.create(PersonwithNew.prototype);
    this.name = name;
    this.age = age;
    // return this;
};
PersonwithNew.prototype = {
    eat(){
        console.log(`Person is eating`);
    },
    sleep(){
        console.log(`Person is sleeping`);
    },
    play(){
        console.log(`Person is playing`);
    }
}

const sakib2 = new PersonwithNew("Sakib", 35);
const tamim2 = new PersonwithNew("Tamim", 35);
console.log(sakib2)
sakib2.play(); */




/* const captain = {
    name: 'Mashrafi',
    age: 30,
    country: "Bangladesh"
};

const player = Object.create(captain);
console.log(player); */

/* 
function test(){}
console.log(test.prototype)
console.dir(test.prototype) */







// ======================= 
// prototype to class 
// ========================== 


class Men {
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    eat(){
        console.log(`Person is eating`);
    }
    sleep(){
        console.log(`Person is sleeping`);
    }
    play(){
        console.log(`Person is playing`);
    }

};

const Samim = new Men("Samim", 25);
const Alif = new Men("Mridul",35);

console.log(Samim);
Samim.eat();


// ============= 
// Optional 
// ============ 
// let person = [];

let person = new Array();

person.push("Sakib", "Tamim");
console.log(person);

console.dir(Array.prototype.push);