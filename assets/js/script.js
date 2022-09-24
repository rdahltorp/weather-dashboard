//What needs to happen next: 
//2) Add icon for each day section
//3) set up my recall of local storage + style the stored items. 
//4) make it pretty

//City Search Submissions
var citySearchBtn = document.querySelector("#seachBtn");
var userSearch = document.getElementById('citySearch');
var pastSearch = []
var search = ""


function getData() {
    console.log(userSearch.value);
    
    if(userSearch.value) {
        search = userSearch.value
    } //Add else here that activates should a click happen. 

    //Current weather data pull
    var requestUrl = "https://api.openweathermap.org/data/2.5/weather?q=" + search + "&units=imperial&appid=ad8f1f0503e0381c15618312183fcbd8";

    fetch(requestUrl)
      .then(function (response) {
        return response.json();
      })
      .then(function (info) {
        console.log(info);
        console.log(info.dt);
    
    //5 day forecast data pull
    var fiveDayURL = "https://api.openweathermap.org/data/2.5/forecast?lat=" + info.coord.lat + "&lon=" + info.coord.lon + "&units=imperial&appid=ad8f1f0503e0381c15618312183fcbd8"
    //console.log(fiveDayURL)
    //var fiveDayURL = "https://api.openweathermap.org/data/2.5/onecall?lat=" + data.city.coord.lat + "&lon=" + data.city.coord.lon + "&appid=ad8f1f0503e0381c15618312183fcbd8"


    fetch(fiveDayURL)
      .then(function (response) {
        return response.json()
      })
      .then(function (data) {
        console.log(data)
      

        //Code below inserts pulled data for current info
        //Sets city name and date
        var cityNameAndDate = document.querySelector(".currentCity");
        var date = moment(info.dt, "X").format("YYYY-MM-DD")
        cityNameAndDate.innerHTML = info.name + " (" + date + ")"; 
        
        //Sets icon
        var currentIconCode = info.weather[0].icon
        var currentIconURL = "http://openweathermap.org/img/w/" + currentIconCode + ".png"
        $('#wicon').attr('src', currentIconURL);

        //Sets current temp
        var cityTemp = document.querySelector(".currentCityTemp");        
        cityTemp.innerHTML = "Temp: " + info.main.temp + "°F";

        //Sets wind
        var cityWind = document.querySelector(".currentCityWind");
        cityWind.innerHTML = "Wind: " + info.wind.speed + "mph";
        
        //Sets humidity
        var cityHum = document.querySelector(".currentCityHum");
        cityHum.innerHTML = "Humidity: " + info.main.humidity + "%";
        

        //Code below inserts data into the 5 Day forecast cards

        //Day 1 Card
        var dayOneDate = document.querySelector(".dayOneTitle");
        dayOneDate.innerHTML = data.list[4].dt_txt.substring(0, 10); //Need to change to a more legible date via moment.
        
        var dayOneIcon = document.querySelector(".dayOneIcon");
        dayOneIcon.innerHTML = data.list[4].weather[0].icon; //Need to figure out how to add the icon set.
        
        var dayOneTemp = document.querySelector(".dayOneTemp");        
        dayOneTemp.innerHTML = "Temp: " + data.list[4].main.temp + "°F";

        var dayOneWind = document.querySelector(".dayOneWind");
        dayOneWind.innerHTML = "Wind: " + data.list[4].wind.speed + "mph";
        
        var dayOneHum = document.querySelector(".dayOneHum");
        dayOneHum.innerHTML = "Humidity: " + data.list[4].main.humidity + "%";

        //Day 2 Card
        var dayTwoDate = document.querySelector(".dayTwoTitle");
        dayTwoDate.innerHTML = data.list[12].dt_txt.substring(0, 10) //Need to change to a more legible date via moment.
        
        var dayTwoIcon = document.querySelector(".dayTwoIcon");
        dayTwoIcon.innerHTML = data.list[12].weather[0].icon //Need to figure out how to add the icon set.
        
        var dayTwoTemp = document.querySelector(".dayTwoTemp");        
        dayTwoTemp.innerHTML = "Temp: " + data.list[12].main.temp + "°F";

        var dayTwoWind = document.querySelector(".dayTwoWind");
        dayTwoWind.innerHTML = "Wind: " + data.list[12].wind.speed + "mph";
        
        var dayTwoHum = document.querySelector(".dayTwoHum");
        dayTwoHum.innerHTML = "Humidity: " + data.list[12].main.humidity + "%";

        //Day 3 Card
        var dayThreeDate = document.querySelector(".dayThreeTitle");
        dayThreeDate.innerHTML = data.list[20].dt_txt.substring(0, 10); //Need to change to a more legible date via moment.
        
        var dayThreeIcon = document.querySelector(".dayThreeIcon");
        dayThreeIcon.innerHTML = data.list[20].weather[0].icon; //Need to figure out how to add the icon set.
        
        var dayThreeTemp = document.querySelector(".dayThreeTemp");        
        dayThreeTemp.innerHTML = "Temp: " + data.list[20].main.temp + "°F";

        var dayThreeWind = document.querySelector(".dayThreeWind");
        dayThreeWind.innerHTML = "Wind: " + data.list[20].wind.speed + "mph";
        
        var dayThreeHum = document.querySelector(".dayThreeHum");
        dayThreeHum.innerHTML = "Humidity: " + data.list[20].main.humidity + "%";

        //Day 4 Card
        var dayFourDate = document.querySelector(".dayFourTitle");
        dayFourDate.innerHTML = data.list[28].dt_txt.substring(0, 10); //Need to change to a more legible date via moment.
        
        var dayFourIcon = document.querySelector(".dayFourIcon");
        dayFourIcon.innerHTML = data.list[28].weather[0].icon; //Need to figure out how to add the icon set.
        
        var dayFourTemp = document.querySelector(".dayFourTemp");        
        dayFourTemp.innerHTML = "Temp: " + data.list[28].main.temp + "°F";

        var dayFourWind = document.querySelector(".dayFourWind");
        dayFourWind.innerHTML = "Wind: " + data.list[28].wind.speed + "mph";
        
        var dayFourHum = document.querySelector(".dayFourHum");
        dayFourHum.innerHTML = "Humidity: " + data.list[28].main.humidity + "%";

        //Day 5 Card
        var dayFiveDate = document.querySelector(".dayFiveTitle");
        dayFiveDate.innerHTML = data.list[36].dt_txt.substring(0, 10); //Need to change to a more legible date via moment.
        
        var dayFiveIcon = document.querySelector(".dayFiveIcon");
        dayFiveIcon.innerHTML = data.list[36].weather[0].icon; //Need to figure out how to add the icon set.
        
        var dayFiveTemp = document.querySelector(".dayFiveTemp");        
        dayFiveTemp.innerHTML = "Temp: " + data.list[36].main.temp + "°F";

        var dayFiveWind = document.querySelector(".dayFiveWind");
        dayFiveWind.innerHTML = "Wind: " + data.list[36].wind.speed + "mph";
        
        var dayFiveHum = document.querySelector(".dayFiveHum");
        dayFiveHum.innerHTML = "Humidity: " + data.list[36].main.humidity + "%";


      })

      .then (function saveSearch() {
        pastSearch.push(userSearch.value)
        console.log(pastSearch);
        localStorage.setItem("prevSearch", JSON.stringify(pastSearch))
      })
    })

  }

//Code for seach button
citySearchBtn.addEventListener("click", getData)

function init() {
    var saved = JSON.parse(localStorage.getItem("prevSearch"))
    console.log(saved)
    for(var i = 0; i < saved.length; i++) {

    }
}

init()
