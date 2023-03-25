// Create a Map
const fruits = new Map([
    ["apples", 500],
    ["bananas", 300],
    ["oranges", 200]
  ]);
  
  document.getElementById("map").innerHTML = fruits.get("apples");