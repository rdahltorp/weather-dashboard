//City Search Submissions
var citySearchBtn = document.querySelector("#seachBtn")
var userSearch = document.getElementById('citySearch')

function getData() {
    //Current URL fetches info on set city. Need to update to pull from searched city
    var requestUrl = 'https://api.openweathermap.org/data/2.5/forecast?lat=39.7392&lon=104.9903&appid=ad8f1f0503e0381c15618312183fcbd8';
  
    fetch(requestUrl)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        console.log(data)
      })
      //Code to place current city info
      .then(function currentCityInfo(data) {
        var cityName = document.querySelector(".currentCity")
        cityName.innerHTML = data.city.name.value //code not working here not sure why

        var cityTemp = document.querySelector(".currentCityTemp")


        var cityWind = document.querySelector(".currentCityWind")
        
        
        var cityHum = document.querySelector(".currentCityHum")
        

      })
  }

//Code for seach button
citySearchBtn.addEventListener("click", getData)