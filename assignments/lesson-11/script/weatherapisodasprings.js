var weather;
function setup() {
    createCanvas(400,200);
    loadJSON('http://api.openweathermap.org/data/2.5/weather?lat=42.65&lon=-111.60&APPID=d0a1ebff35c6b7723ac2ba9b09b35044', gotData);
}

function gotData(data) {
    //println(data);
    weather = data;
}

funciton draw() {
    background(0);
    if (weather) {
        ellipse(100,100, weather.main.temp, weather.main.temp);
        ellipse(300,100, weather.main.description, weather.main.description);
    }
}

let weatherRequest = new XMLHttpRequest();
let apiURLsting = 'http://api.openweathermap.org/data/2.5/weather?lat=42.65&lon=-111.60&APPID=d0a1ebff35c6b7723ac2ba9b09b35044';
weatherRequest.open('GET', apiURLstring, true);
weatherRequest.send();

weatherRequest.onload =  function () {
let weatherData = JSON.parse(weatherRequest.responseText);
console.log(weatherData);} 
    
document.getElementById('current-temp')innerHTML = weatherData.main.temp;
    
let icon = "https://openweathermap.org/img/w/" + weatherData.weather[0].icon + ".png";
let desc = weatherData.weather[0].description;

document.getElementById('current-temp').setAttribute('src', icon);
document.getElementById('current-temp').setAttribute('alt', desc);
}