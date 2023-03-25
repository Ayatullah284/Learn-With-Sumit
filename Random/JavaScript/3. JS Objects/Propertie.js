const person = {
      fname: ' John',
      lname: ' Doe',

};

person.country = ' Bangladesh ';
person.age = 20;
// console.log(person)
// console.log(person.age);
// console.log(person['age']);
// let a = 'age';
// console.log(person[a]);

let txt = '';
for (let x in person){

    txt += person[x];   
}
// console.log(txt);
delete person.age;
// console.log(person);



const myObj = {
    name: "John",
    age: 30,
    cars:[
        {name:"Foid", models:["Fiesta", "Focus", "Mustang"]},
        {name:"BMW", models:["320", "x3", "x5"]},
        {name:"Fiat", models:["500", "Panda"]},
    ]
}

for(let i in myObj.cars){
    for(let j in myObj.cars[i].models){
        // console.log(myObj.cars[i].models[j])
    }
}


var a = new String("Hello");
// console.dir(a); 
