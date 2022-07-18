// Current Weather for Summary
const apiURL = "https://api.openweathermap.org/data/2.5/weather?id=5607916&units=imperial&APPID=511d657ffd28851acb7688ddca57d746";

//const apiURL = "https://api.openweathermap.org/data/2.5/weather?zip=84045,us&appid=511d657ffd28851acb7688ddca57d746";

//const url = "https://api.openweathermap.org/data/3.0/onecall?lat=40.3916&lon=-111.8508&exclude=minutely,hourly&units=imperial&appid=511d657ffd28851acb7688ddca57d746"
  
  
fetch(apiURL)
.then((response) => response.json())
.then((town) => {
  //console.log(town);
  let description = town.weather[0].description;
  document.getElementById('currently').innerHTML = description.charAt(0).toUpperCase() + description.slice(1);
  document.getElementById('temperature').innerHTML = Math.round(town.main.temp);
  document.getElementById('humidity').innerHTML = Math.round(town.wind.speed);
});



// 3 day forecast

const apiURL_forecast = "https://api.openweathermap.org/data/2.5/forecast?id=5607916&units=imperial&APPID=511d657ffd28851acb7688ddca57d746"

fetch(apiURL_forecast)
  .then(response => response.json())
  .then((jsObject) => {
      console.log(jsObject);
      const forecastData = jsObject.list.filter((element)=>element.dt_txt.includes('18:00:00'));

console.log(forecastData);

const weekdays = ['Sun', 'Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat'];

  let day = 0;
forecastData.forEach(forecast => {
  let x = new Date(forecast.dt_txt);
  document.getElementById('temp'+(day+1)).textContent = Math.round(forecast.main.temp) + ' °F';
  document.getElementById('img'+(day+1)).src = "https://openweathermap.org/img/w/" + forecast.weather[0].icon + ".png";
  document.getElementById('img'+(day+1)).alt = forecast.weather[0].description
  document.getElementById('day'+(day+1)).textContent = weekdays[x.getDay()];
  day++;	  
});
});


/************ WEATHER ALERTS **********/
const severeWeather = document.querySelector(".weatherAlert");

function getAlerts(data) {
    const warning = document.createElement("div");
    const event = document.createElement("p");
    const tags = document.createElement("p");
    const description = document.createElement("p");

    event.textContent = `${data.alerts.event}Event:`;
    tags.textContent = `${data.alerts.tags}End:`;
    description.textContent = `${data.alerts.description}Descriptions:`;
    
    warning.appendChild(event);
    warning.appendChild(tags);
    warning.appendChild(description);
    severeWeather.appendChild(warning);  
}

getAlerts()

const close = document.querySelector("#close");
close.addEventListener('click', () => {
    severeWeather.style.display = 'none';
});
