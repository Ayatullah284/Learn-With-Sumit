class Car{
    constructor(name, year){
       this.name = name;
       this.year = year; 
    }

    run(speed){
        console.log(this.name + ' is running ' + speed );
    }
}

const bmw = new Car('BMW', 1999)
bmw.run('150 km p/hr');