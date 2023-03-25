function Person(fname, lname, age){
    this.fname = fname;
    this.lname = lname;
    this.age = age;
    this.fullName = function(){
        return this.fname + " " + this.lname
    }
}

const Arif = new Person("Arif", "Miya", 26);
const Mridul = new Person("Mridul", "Miya", 25);
const Hagu = new Person("Hagu", "Miya", 23);

console.log(Arif);
console.log(Mridul);
console.log(Hagu);

Arif.country = "Bangladesh";
console.log(Arif);
console.log(Mridul);





