var key = '6843ce9c306c263f9b4534c69341093d';
var selectedCities = [];
var cityInputEl = document.getElementById("city");
var submitButton = document.getElementById("btn");
var currentCity = document.getElementById("current-city");
var currentTemperature = document.getElementById("current-temperature");
var currentHumidity = document.getElementById("current-humidity");
var currentUVI = document.getElementById("current-UVI");


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

$(".btn").on("click", function (event) {
    var innerText = event.target.parentElement.childNodes[3].innerText
    var eventId = event.target.parentElement.childNodes[3].id
    localStorage.setItem(eventId, JSON.stringify(innerText));
  });

submitButton.addEventListener("click", searchForm);