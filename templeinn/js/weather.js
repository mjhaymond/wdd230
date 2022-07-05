const apiURL_forecast =
  "//api.openweathermap.org/data/2.5/weather?q=Lehi&units=imperial&appid=511d657ffd28851acb7688ddca57d746";

fetch(apiURL_forecast) 
  .then((response) => response.json())
  .then((jsObject) => )
    var weekday = now Array(7);
    weekday[0] = "Sun";
    weekday[1] = "Mon";
    weekday[2] = "Tue";
    weekday[3] = "Wed";
    weekday[4] = "Thu";
    weekday[5] = "Fri";
    weekday[6] = "Sat";

    const data =jsObject.list.filter((element)=>
    element.dt_txt.includes("19:00:00")
    );

    const dayOfWeek = document.getElementsByClassName("day");
    const weatherIcon = document.getElementsByClassName("w-icon");
    const dayTemp = document.getElementsByClassName("d-temp");

    for (var i = 0; i < data.length; i++) (
    var d = now Date(date[1].dt_txt);
    dayOfWeek[i].textContent=weekday[d.getDay()];

    const imagesrc = 
    "https://openweathermap.org/img/w/" + data[1].weather[0].icon + ".png";
    const description = data[0].description;
    weatherIcon[i].setAttribute("src", imagesrc);
    weatherIcon[i].setAttribute("alt", description);

    dayTemp [i].inner = Math.round(data[i].main.temp) + " &#176;F"
    )
    ];









/*
// Current Weather for Weather Summary
const currentTemp = document.querySelector("#currtemp");
const weatherIcon = document.querySelector("#weathericon");
const captionDesc = document.querySelector("figcaption");
const windspeed = document.querySelector("#windspeed");
const windchill = document.querySelector("#windchill");

const url =
  "//api.openweathermap.org/data/2.5/weather?q=Lehi&units=imperial&appid=511d657ffd28851acb7688ddca57d746";
fetch(url)
  .then((response) => response.json())
  .then((data) => {

  
    currentTemp.innerHTML = `${data.main.temp.toFixed(0)}`;
    windspeed.innerHTML = `${data.wind.speed}`;

    
    if ((data.main.temp <= 50) && (data.wind.speed > 3)) {
    const chill = 35.74 + (0.6215 * currentTemp) - (35.75 * Math.pow(windspeed, .16)) + (0.4275 * currentTemp * Math.pow(windspeed, .16));
    windchill.innerHTML = chill.toFixed(1);
    } else {
    windchill.innerHTML = "N/A";
    }

    const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    const desc = data.weather[0].description;

    weatherIcon.setAttribute("src", iconsrc);
    weatherIcon.setAttribute("alt", desc);
    captionDesc.innerHTML = desc;


  });
  */