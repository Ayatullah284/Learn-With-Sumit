const paymentSuccess = true;
const marks = 90;

function enroll(callback){

    console.log('Course enrollment is in progress');

    const promise = new Promise(function(resolve, reject){
        setTimeout(function(){
            if(paymentSuccess){
                resolve()
            } else{
                reject('Payment failed');
            }
        }, 2000); 

    });

    return promise;

}

function progress(callback){

    console.log('Course on progress...');

    const promise = new Promise(function(resolve, reject){
            setTimeout(function(){
            if(marks >= 80){
                resolve()
            } else {
                reject('Your marks is not enough');
            }
        }, 3000);    
    });

    return promise;

}

function getCertificate(){

    console.log('Preparing your certificate !!!');
    const promise = new Promise(function(resolve){
        setTimeout(function(){
            resolve('Congrats !! You got the certificate');
        }, 1000);          
    });
    return promise;
}



enroll()
    .then(progress)
    .then(getCertificate)
    .then(function(value){
        console.log(value);
    })
    .catch(function(err){
        console.log(err);
    })