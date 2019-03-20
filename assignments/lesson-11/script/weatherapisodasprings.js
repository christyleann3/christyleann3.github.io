let weatherRequest = new XMLHttpRequest();
let apiURLsting = 'https://api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&APPID=d0a1ebff35c6b7723ac2ba9b09b35044';
weatherRequest.open('GET', apiURLstring, true);
weatherRequest.send();

weatherRequest.onload =  function () {
    let weatherData = JSON.parse(weatherRequest.responseText);
    console.log(weatherData); 
    
    document.getElementById('current-temp')innerHTML = weatherData.main.temp;
    
    let icon = "https://openweathermap.org/img/w/" + weatherData.weather[0].icon + ".png";
    let desc = weatherData.weather[0].description;

    document.getElementById('current-temp').setAttribute('src', icon);
    document.getElementById('current-temp').setAttribute('alt', desc);
}