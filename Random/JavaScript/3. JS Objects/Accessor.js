// Getter and Setter 
// const person = {
//     fname: "John",
//     lname: "Doe",
//     language: "en",
//     get fullName(){
//         return this.fname + " " + this.lname;
//     }
// }
// console.log(person);
// console.log(person.fullName)


// const person = {
//     fname: "John",
//     lname: "Doe",
//     language: "",
//     set lang(vasa){
//         return this.language = vasa;
//     }
// }
// console.log(person)
// person.lang = "english";
// console.log(person);



const person = {
    fname: "John",
    lname: "Doe",
    language: "en",

}
Object.defineProperty(person, "fullName", {
    get: function(){
        return (this.fname + " " + this.lname).toUpperCase();
    }
})
console.log(person);
console.log(person.fullName)