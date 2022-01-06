var key = '6843ce9c306c263f9b4534c69341093d';
var selectedCities = [];
var cityInputEl = document.getElementById("city");
var submitButton = document.getElementById("btn");
var currentCity = document.getElementById("current-city");
var currentTemperature = document.getElementById("current-temperature");
var currentHumidity = document.getElementById("current-humidity");
var currentUVI = document.getElementById("current-UVI");
var dailyTemperature = document.getElementById("Daily-Temeprature");
var dailyWind = document.getElementById("Daily-Wind");
var dailyHumidity = document.getElementById("Daily-Humidity");

function getUserRepos(city) {
    console.log("getUserRepos");
    fetch("https://api.openweathermap.org/data/2.5/onecall?lat=41.85&lon=-87.65&exclude=alert" + city + "&appid=6843ce9c306c263f9b4534c69341093d&units=imperial")
        .then(response=> response.json())
        .then(data=> {
            console.log(data);
            currentCity.textContent = data.timezone
            currentTemperature.textContent = data.current.temp
            currentHumidity.textContent = data.current.humidity
            currentUVI.textContent = data.current.uvi
        })
}

function searchForm (event) {
    event.preventDefault();

    var inputSearch = cityInputEl.value.trim();
        console.log(inputSearch);
        getUserRepos(inputSearch)
}


submitButton.addEventListener("click", searchForm);