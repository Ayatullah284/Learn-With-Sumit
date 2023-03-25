const display = document.getElementById('display');

function getData(){
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(res => res.text())
    .then(data => {
        display.innerText =data; 
    });
}


 