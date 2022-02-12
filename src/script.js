// html elements
const input_location = document.getElementById("city-input");
const display = document.getElementById("weather-display");
const display_cityName = document.getElementById("city-name");
const display_temp = document.getElementById("temp");
const display_feelsLike = document.getElementById("feels-like");
const display_humidity = document.getElementById("humidity");
const display_windSpeed = document.getElementById("wind-speed");

function setDisplay(data) {
    display_cityName.textContent = data.name;
    display_temp.textContent = Math.round(data.main.temp - 273.15);
    display_feelsLike.textContent = Math.round(data.main.feels_like - 273.15);
    display_humidity.textContent = data.main.humidity;
    display_windSpeed.textContent = data.wind.speed;
    display.style.display = "block";
}

async function getWeatherData(city) {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=91cdb9e880f4cdbcf090e22cfcbde978`, {mode: 'cors'});
    response.json()
    .then(function(res) {
        setDisplay(res);
    })
    .catch(function(error) {
        alert('Location Not Found!');
    })
}

myForm.addEventListener("submit", (e) => {
    e.preventDefault();
    let location_input = input_location.value;
    getWeatherData(location_input);
})

