const display = document.getElementById('display');

async function getData(){
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await res.text();
    display.innerText = data;

}


