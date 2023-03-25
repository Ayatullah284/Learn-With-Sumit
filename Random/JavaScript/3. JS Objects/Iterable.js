/* const numbers = [1, 2, 3, 4];

for(let i = 0; i < numbers.length; i++){
    console.log(numbers[i]);
}
for(n of numbers){
    console.log(n);
} */



const numbers = {
    one: 1,
    two: 2,
    three: 3
}

const num = [1, 2, 3];

/* for(let i = 0; i < numbers.length; i++){
    console.log(numbers[i]);
}
for(n of numbers){
    console.log(n);
} */

/* for(n in numbers){
    console.log(n);
} */
console.dir(numbers)
const numIterator = num[Symbol.iterator]();

console.log(numIterator.next());
console.log(numIterator.next());
console.log(numIterator.next());
console.log(numIterator.next()); 


const myNumber = {}; 

// make it iterable 
myNumber[Symbol.iterator] = function(){
    let n = 0;
    let done = false;
    return {
        next(){
            n += 20;
            if(n === 200){done = true}
            return {
                value: n,
                done: done
            }
        }
    }
}
for(let num of myNumber){
    console.log(num);
}







// ============== 
// advance 
// ============= 

