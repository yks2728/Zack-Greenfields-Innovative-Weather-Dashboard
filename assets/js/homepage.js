var key = '6843ce9c306c263f9b4534c69341093d';
var selectedCities = [];
var cityInputEl = document.getElementById("city");
var submitButton = document.getElementById("btn");
var currentCity = document.getElementById("current-city");
var currentTemperature = document.getElementById("current-temperature");
var currentHumidity = document.getElementById("current-humidity");
var currentUVI = document.getElementById("current-UVI");
var dailyTemperature = document.getElementById("daily-temperature");
var dailyWind = document.getElementById("daily-wind");
var dailyHumidity = document.getElementById("daily-humidity");
var dayTwoTemperature = document.getElementById("day-two-temperature");
var dayTwoWind = document.getElementById("day-two-wind");
var dayTwoHumidity = document.getElementById("day-two-humidity");
var dayThreeTemperature = document.getElementById("day-three-temperature");
var dayThreeWind = document.getElementById("day-three-wind");
var dayThreeHumidity = document.getElementById("day-three-humidity");
var dayFourTemperature = document.getElementById("day-four-temperature");
var dayFourWind = document.getElementById("day-four-wind");
var dayFourHumidity = document.getElementById("day-four-humidity");
var dayFiveTemperature = document.getElementById("day-five-temperature");
var dayFiveWind = document.getElementById("day-five-wind");
var dayFiveHumidity = document.getElementById("day-five-humidity");


function getUserRepos(city) {
    console.log("getUserRepos");
    fetch("https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=6843ce9c306c263f9b4534c69341093d&units=imperial")
        .then(response=> response.json())
        .then(data=> {
            console.log(data);
            currentCity.textContent = data.name
            currentTemperature.textContent = data.main.temp
            currentHumidity.textContent = data.main.humidity
        });
    fetch("https://api.openweathermap.org/data/2.5/onecall?lat=40.71&lon=-74.00&exclude=minutely,hourly,alerts&appid=6843ce9c306c263f9b4534c69341093d&units=imperial")
        .then(response=> response.json())
        .then(data=> {
            console.log(data);
            currentUVI.textContent = data.current.uvi
            dailyTemperature.textContent = data.daily[0].temp.day
            dailyWind.textContent = data.daily[0].wind_speed
            dailyHumidity.textContent = data.daily[0].humidity
            dayTwoTemperature.textContent = data.daily[1].temp.day
            dayTwoWind.textContent = data.daily[1].wind_speed
            dayTwoHumidity.textContent = data.daily[1].humidity
            dayThreeTemperature.textContent = data.daily[2].temp.day
            dayThreeWind.textContent = data.daily[2].wind_speed
            dayThreeHumidity.textContent = data.daily[2].humidity
            dayFourTemperature.textContent = data.daily[3].temp.day
            dayFourWind.textContent = data.daily[3].wind_speed
            dayFourHumidity.textContent = data.daily[3].humidity
            dayFiveTemperature.textContent = data.daily[4].temp.day
            dayFiveWind.textContent = data.daily[4].wind_speed
            dayFiveHumidity.textContent = data.daily[4].humidity
        });
}

function searchForm (event) {
    event.preventDefault();

    var inputSearch = cityInputEl.value.trim();
        console.log(inputSearch);
        getUserRepos(inputSearch)
}

submitButton.addEventListener("click", searchForm);



// somehow define latitude and longitude so I don't need to input it manually
// be able to fill up all the daily categories
// local storage