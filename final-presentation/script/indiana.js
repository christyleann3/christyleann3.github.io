const appKey = "d0a1ebff35c6b7723ac2ba9b09b35044";

let forecast = document.getElementById("forecast");
let temperature = document.getElementById("temp");
let humidity = document.getElementById("humidity-div");

function theResponse(response) {
    let jsonObject = JSON.parse(response);
    cityName.innerHTML = jsonObject.name;
    forecast.src = "http://openweathermap.org/img/w/" + jsonObject.weather[0].icon + ".png";
    temperature.innerHTML = parseInt(jsonObject.main.temp - 273) + "o";
    humidity.innerHTML = jsonObject.main.humidity + "%";
}

function httpRequestAsync(url, callback)
{
    console.log("hello");
    var httpRequest = new XMLHttpRequest();
    httpRequest.onreadystatechange = () => {
        if (httpRequest.readyState == 4 && httpRequest.status == 200)
        callback(httpRequest.responseText);
    }
    httpRequest.open("GET", url, true); //true for asynchronous
    httpRequest.send();
}

//end of weather data