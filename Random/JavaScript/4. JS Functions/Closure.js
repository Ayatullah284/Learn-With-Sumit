function tamporary(){
    let counter = 0;
    return function(){
        counter += 1;
    }
}

const add = tamporary();

// console.dir(add);
add();
// console.dir(add);
add();
add();
// console.dir(add);

// advance 

var num1 = 2;

var sum = function(){
    var num2 = 5;
    return function(){
        return num2 + num1;
    }
}

// console.dir(sum());

var n1 = 1;
var n2 = 2;
var sum = function(){
    return n1 + n2;
};
// console.log(sum());
// console.dir(sum);

n1 = 6;
n2 = 7;
// console.log(sum());
// console.dir(sum); 



function stopWatch(){
    var startTime = Date.now();
    return function(){
        console.log(Date.now() - startTime);
    }
}

var timer = stopWatch();


for(var i=0; i<100000000; i++){
    var a = Math.random() * 1000000;
}

/* 
timer();
timer();
timer();
timer();
timer();
timer();
timer();
timer();
timer();
timer();
timer();
console.dir(timer); 
*/


/* function async(){
    var a = 20;

    setTimeout(() =>{
        console.log(a);
    }, 3000);
}

console.log('Baized-1')
async()
console.log('Baized-2 ') */



/*
 var a;
function async(){
    a = 20;
    var myFunc = () => {
        console.log(a);
    }
    setTimeout(myFunc, 3000);
    console.dir(myFunc);
    
}

async()

a = 30; 
*/





/* 
function apiFunction(url){
    fetch(url).then((res) => {
        console.log(url);
    });
}

apiFunction('https://jsonplaceholder.typicode.com/todos/1'); 
*/



/* for(let i=0; i<3; i++){
    setTimeout(() => {
        console.log(i);
    }, 3000);
}
for(var i=0; i<3; i++){
    setTimeout(() => {
        console.log(i);
    }, 3000);
} 
console.log('Ayatullah')
*/

for(var i=0; i<3; i++){
    const myFun = ()=>{
        console.log(i);
    }
    console.log(i); 
    console.dir(myFun);
    setTimeout(myFun, 3000);
}



