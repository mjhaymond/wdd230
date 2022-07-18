// Current Weather for Summary
const apiURL = "https://api.openweathermap.org/data/2.5/weather?id=5607916&units=imperial&APPID=511d657ffd28851acb7688ddca57d746";
   
fetch(apiURL)
.then((response) => response.json())
.then((data) => {
  //console.log(data);

  let description = data.weather[0].description;
  document.getElementById('currently').innerHTML = description.charAt(0).toUpperCase() + description.slice(1);
  document.getElementById('temperature').innerHTML = Math.round(data.main.temp);
  document.getElementById('humidity').innerHTML = Math.round(data.wind.speed);
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
