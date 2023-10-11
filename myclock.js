//defining the basic constants
//the date first
let day = document.getElementById("day");
let month = document.getElementById("month");
let year = document.getElementById("year");

//defining the time variables
let hour = document.getElementById('hrs');
let mins = document.getElementById('min');
let secs = document.getElementById('sec');

//seting the current date

let currentDate = new Date();

console.log(currentDate);

//modifying the inner html for date
day.innerHTML = (currentDate.getDay()<10?"0":"") + currentDate.getDay();
month.innerHTML = (currentDate.getMonth()<10?"0":"") + currentDate.getMonth();
year.innerHTML = currentDate.getFullYear();

//time inner html

hour.innerHTML = (currentDate.getHours()<10?"0":"") + currentDate.getHours();
mins.innerHTML = (currentDate.getMinutes()<10?"0":"") + currentDate.getMinutes();
secs.innerHTML = (currentDate.getSeconds()<10?"0":"") + currentDate.getSeconds();

setInterval(() =>{

    //time inner html
    let currentDate = new Date();
    
    console.log(currentDate);
    
    //modifying the inner html for date
    day.innerHTML = (currentDate.getDay()<10?"0":"") + currentDate.getDay();
    month.innerHTML = (currentDate.getMonth()<10?"0":"") + currentDate.getMonth();
    year.innerHTML = currentDate.getFullYear();
    
    //time inner html
    
    hour.innerHTML = (currentDate.getHours()<10?"0":"") + currentDate.getHours();
    mins.innerHTML = (currentDate.getMinutes()<10?"0":"") + currentDate.getMinutes();
    secs.innerHTML = (currentDate.getSeconds()<10?"0":"") + currentDate.getSeconds();
},1000);