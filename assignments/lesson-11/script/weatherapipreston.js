var weather;
function setup() {
    createCanvas(400,200);
    loadJSON('http://api.openweathermap.org/data/2.5/weather?lat=42.1&lon=-111.88&APPID=d0a1ebff35c6b7723ac2ba9b09b35044', gotData);
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

