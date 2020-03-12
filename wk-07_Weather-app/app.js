//weather app project for CSY1018
//Select elements using DOM events .querySelector
const iconElement = document.querySelector(".weather-icon");
const tempElement = document.querySelector(".temperature-value p");
const descElement = document.querySelector(".temperature-description p");
const locationElement = document.querySelector(".location p");
const notoficationElement = document.querySelector(".notification");

//App data - object
const weather = {};
weather.temperature = {
      unit: "celsius"
}
//Const variable for temp conversion
const KELVIN = 273;

//API key from OpenWeather.org
const key = "82005d27a116c2880c8f0fcb866998a0";

//geolocation checking first / make sure to turn off ad blocker if instaled
if('geolocation' in navigator){
      navigator.geolocation.getCurrentPosition(setPosition, showError);
      } else {
            notificationElement.style.display = "block";
            notificationElement.innerHTML = "<p>Browser doesn't Support Geolocation</p>";
      }
// This will set the user's position where ever you are in
function setPosition(position) {
      let latitude = position.coords.latitude;
      let longitude = position.coords.longitude;

      getWeather(latitude, longitude);
}

// Show error if problem with the service / notice the template variable below...
function showError(error){
      notificationElement.style.display = "block";
      notificationElement.innerHTML = `<p> ${error.message} </p>`;
}


//grab data from provider API / we are bringing in json API data to our app using fetch below
function getWeather(latitude, longitude){
      let api = `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${key}`;
//below is an object - just the first bit dealing with data

fetch(api)
      .then(function(response){
            let data = response.json();
            return data;
      })      
      .then(function(data){
            weather.temperature.value = Math.floor(data.main.temp - KELVIN);
            weather.description = data.weather[0].description;
            weather.iconId = data.weather[0].icon;
            weather.city = data.name;
            weather.country = data.sys.country;
      })
      .then(function() {
            displayWeather();
      })
}

//This function will show the data in the UI with the icons
function displayWeather(){
      iconElement.innerHTML = `<img src="icons/${weather.iconId}.png"/>`;
      tempElement.innerHTML = `${weather.temperature.value}°<span>C</span>`;
      descElement.innerHTML = weather.description;
      locationElement.innerHTML = `${weather.city}, ${weather.country}`;
}

//C to F conversion / this is because the API is in Kelvin not Celsius or Fahrenheit
function celsiusToFahrenheit(temperature){
      return(temperature * 9/5) + 32;
}

//This will trigger the onClick event function to switch from C to F
tempElement.addEventListener("click", function(){
      if (weather.temperature.value === undefined) return;

      if(weather.temperature.unit === "celsius"){
            let fahrenheit = celsiusToFahrenheit(weather.temperature.value);
            fahrenheit = Math.floor(fahrenheit);

            tempElement.innerHTML = `${fahrenheit}°<span>F</span>`;
            weather.temperature.unit = "fahrenheit";
      }

      else {
            tempElement.innerHTML = `${weather.temperature.value}°<span>C</span>`;
            weather.temperature.unit = "celsius";
      }
})
