const person = {
    name: "John ",
    age: 30,
    city: " New York",
    today: new Date(),
    Number: function (){
        return 'Ayatullah';
    }

}
// console.log(person)
// const display = document.getElementById('Display')
// display.innerHTML = person.name + " is "+ person.age + ' years' + " old";



// let text = '';
// for(let i in person){
//     text += person[i];
// };
// document.getElementById('Display').innerHTML= text;



// const personArray = (Object.values(person)); 

// for(i of personArray){
//     console.log(i);
// }



const myString = JSON.stringify(person.today);
const myString2 = JSON.stringify(person.Number.toString());
// console.log(myString);
document.getElementById('Display').innerHTML = myString;
document.getElementById('Display2').innerHTML = myString2;
