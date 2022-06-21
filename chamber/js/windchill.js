const currentTemp = document.querySelector("#currtemp");
const weatherIcon = document.querySelector("#weathericon");
const captionDesc = document.querySelector("figcaption");

const url =
  "//api.openweathermap.org/data/2.5/weather?q=Lehi&units=imperial&appid=41f047a75e03e2230bb3b7afc89cc6fd";
fetch(url)
  .then((response) => response.json())
  .then((data) => {
    //console.log(data);//

    const windspeed = document.querySelector("#windspeed");

    currentTemp.innerHTML = `${data.main.temp.toFixed(0)}`;
    windspeed.innerHTML = `${data.wind.speed}`;

    const windchill = document.querySelector("#windchill");
    if ((currentTemp <= 50) && (windspeed > 3)) {
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


//const temp = parseFloat(document.querySelector(".current-temp").innerHTML);
//const wind = parseFloat(document.querySelector(".wind-speed").innerHTML);
//const windchill = document.querySelector(".windchill");



//if ((temp <= 50) && (wind > 3)) {
//  const wc = 35.74 + (0.6215 * temp) - (35.775 * Math.pow(wind, 0.16)) + (0.4275 * temp * Math.pow(wind, 0.16));
//  windchill.innerHTML = wc.toFixed(1) + "°F";
//} else {
//  windchill.innerHTML = "N/A"
//}


