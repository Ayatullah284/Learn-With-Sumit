const car = {
    name: 'Fiat',
    model: 500,
    weight: '800kg',
    color: 'white',
    start: function(){
        this.drive();
        console.log('car has started');
       },
    drive: function(){
        console.log('car has driving');
       }
}; 
console.log(car.name);
console.log(['color']);
car.start();

let x = 5; // number
let y = new Number(5); // object 