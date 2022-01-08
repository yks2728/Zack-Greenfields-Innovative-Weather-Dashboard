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


function getUserRepos(city) {
    console.log("getUserRepos");
    fetch("https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=6843ce9c306c263f9b4534c69341093d&units=imperial")
        .then(response=> response.json())
        .then(data=> {
            console.log(data);
            currentCity.textContent = data.name
            currentTemperature.textContent = data.main.temp
            currentHumidity.textContent = data.main.humidity
        })
}

    function getUserRepos() {
        console.log("getUserRepos");
        fetch("https://api.openweathermap.org/data/2.5/onecall?lat=40.71&lon=-74.00&exclude=minutely,hourly,alerts&appid=6843ce9c306c263f9b4534c69341093d&units=imperial")
            .then(response=> response.json())
            .then(data=> {
                console.log(data);
                currentUVI.textContent = data.current.uvi
                dailyTemperature.textContent = data.daily[0].temp.day
                dailyWind.textContent = data.daily[0].wind_speed
                dailyHumidity = data.daily[0].humidity
            })
    }


function searchForm (event) {
    event.preventDefault();

    var inputSearch = cityInputEl.value.trim();
        console.log(inputSearch);
        getUserRepos(inputSearch)
}

submitButton.addEventListener("click", searchForm);