/* function myDisplay(some){
 document.getElementById("demo").innerHTML = some;    
}

function add(nam1, nam2){
    return nam1 + nam2;
}
const result = add(5, 10);
myDisplay(result) */





/* function display(some){
    console.log(some);    
}
   
function add(nam1, nam2, callback){
    let sum = nam1 + nam2;
    if(callback){
        callback(sum)
    }
    return sum;

}
const result = add(5, 10, display);
console.log(result); */



  //   best way  
function calculator (nam1, nam2, callback){
    let sum = nam1 + nam2;
    if(callback){
        callback(sum)
    }
    return sum;

}
calculator(5, 10, function(some){
    console.log(some);    
});


