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