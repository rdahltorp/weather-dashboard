//Global vars
var citySearchBtn = document.querySelector("#searchBtn");
var userSearch = document.getElementById('citySearch');
var pastSearch = [];
var search = "";

//Hides empty weather elements
function hideElements() {
    document.getElementById("fiveDay").hidden = true
    document.getElementById("cityOverview").hidden = true
}
hideElements()


//Function to call APIs and place data in corrisponding HTML
function getData() {
    //Adds back in weather elements when city has been searched
    document.getElementById("fiveDay").hidden = false
    document.getElementById("cityOverview").hidden = false
    
    if(userSearch.value) {
        search = userSearch.value;
    }

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
    var fiveDayURL = "https://api.openweathermap.org/data/2.5/forecast?lat=" + info.coord.lat + "&lon=" + info.coord.lon + "&units=imperial&appid=ad8f1f0503e0381c15618312183fcbd8";
    
    fetch(fiveDayURL)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        console.log(data);
      

        //Code below inserts pulled data for current info
        //Sets city name and date
        var cityNameAndDate = document.querySelector(".currentCity");
        var date = moment(info.dt, "X").format("YYYY-MM-DD");
        cityNameAndDate.innerHTML = info.name + " (" + date + ")"; 
        
        //Sets icon
        var currentIconCode = info.weather[0].icon;
        var currentIconURL = "http://openweathermap.org/img/w/" + currentIconCode + ".png";
        $('#wicon').attr('src', currentIconURL);

        //Sets current temp
        var cityTemp = document.querySelector(".currentCityTemp");        
        cityTemp.innerHTML = "Temp: " + info.main.temp + "??F";

        //Sets wind
        var cityWind = document.querySelector(".currentCityWind");
        cityWind.innerHTML = "Wind: " + info.wind.speed + "mph";
        
        //Sets humidity
        var cityHum = document.querySelector(".currentCityHum");
        cityHum.innerHTML = "Humidity: " + info.main.humidity + "%";
        

        //Code below inserts data into the 5 Day forecast cards

        //Day 1 Card
        var dayOneDate = document.querySelector(".dayOneTitle");
        dayOneDate.innerHTML = data.list[2].dt_txt.substring(0, 10);
        
        var dayOneIconCode = data.list[2].weather[0].icon;
        var dayOneIconURL = "http://openweathermap.org/img/w/" + dayOneIconCode + ".png";
        $('#dOneIcon').attr('src', dayOneIconURL);

        var dayOneTemp = document.querySelector(".dayOneTemp");        
        dayOneTemp.innerHTML = "Temp: " + data.list[2].main.temp + "??F";

        var dayOneWind = document.querySelector(".dayOneWind");
        dayOneWind.innerHTML = "Wind: " + data.list[2].wind.speed + "mph";
        
        var dayOneHum = document.querySelector(".dayOneHum");
        dayOneHum.innerHTML = "Humidity: " + data.list[2].main.humidity + "%";

        //Day 2 Card
        var dayTwoDate = document.querySelector(".dayTwoTitle");
        dayTwoDate.innerHTML = data.list[10].dt_txt.substring(0, 10); 
        
        var dayTwoIconCode = data.list[10].weather[0].icon;
        var dayTwoIconURL = "http://openweathermap.org/img/w/" + dayTwoIconCode + ".png";
        $('#dTwoIcon').attr('src', dayTwoIconURL);


        var dayTwoTemp = document.querySelector(".dayTwoTemp");        
        dayTwoTemp.innerHTML = "Temp: " + data.list[10].main.temp + "??F";

        var dayTwoWind = document.querySelector(".dayTwoWind");
        dayTwoWind.innerHTML = "Wind: " + data.list[10].wind.speed + "mph";
        
        var dayTwoHum = document.querySelector(".dayTwoHum");
        dayTwoHum.innerHTML = "Humidity: " + data.list[10].main.humidity + "%";

        //Day 3 Card
        var dayThreeDate = document.querySelector(".dayThreeTitle");
        dayThreeDate.innerHTML = data.list[18].dt_txt.substring(0, 10); 
        
        var dayThreeIconCode = data.list[18].weather[0].icon;
        var dayThreeIconURL = "http://openweathermap.org/img/w/" + dayThreeIconCode + ".png";
        $('#dThreeIcon').attr('src', dayThreeIconURL);

        var dayThreeTemp = document.querySelector(".dayThreeTemp");        
        dayThreeTemp.innerHTML = "Temp: " + data.list[18].main.temp + "??F";

        var dayThreeWind = document.querySelector(".dayThreeWind");
        dayThreeWind.innerHTML = "Wind: " + data.list[18].wind.speed + "mph";
        
        var dayThreeHum = document.querySelector(".dayThreeHum");
        dayThreeHum.innerHTML = "Humidity: " + data.list[18].main.humidity + "%";

        //Day 4 Card
        var dayFourDate = document.querySelector(".dayFourTitle");
        dayFourDate.innerHTML = data.list[26].dt_txt.substring(0, 10); 
        
        var dayFourIconCode = data.list[26].weather[0].icon;
        var dayFourIconURL = "http://openweathermap.org/img/w/" + dayFourIconCode + ".png";
        $('#dFourIcon').attr('src', dayFourIconURL);

        var dayFourTemp = document.querySelector(".dayFourTemp");        
        dayFourTemp.innerHTML = "Temp: " + data.list[26].main.temp + "??F";

        var dayFourWind = document.querySelector(".dayFourWind");
        dayFourWind.innerHTML = "Wind: " + data.list[26].wind.speed + "mph";
        
        var dayFourHum = document.querySelector(".dayFourHum");
        dayFourHum.innerHTML = "Humidity: " + data.list[26].main.humidity + "%";

        //Day 5 Card
        var dayFiveDate = document.querySelector(".dayFiveTitle");
        dayFiveDate.innerHTML = data.list[34].dt_txt.substring(0, 10); 
        
        var dayFiveIconCode = data.list[34].weather[0].icon;
        var dayFiveIconURL = "http://openweathermap.org/img/w/" + dayFiveIconCode + ".png";
        $('#dFiveIcon').attr('src', dayFiveIconURL);

        var dayFiveTemp = document.querySelector(".dayFiveTemp");        
        dayFiveTemp.innerHTML = "Temp: " + data.list[34].main.temp + "??F";

        var dayFiveWind = document.querySelector(".dayFiveWind");
        dayFiveWind.innerHTML = "Wind: " + data.list[34].wind.speed + "mph";
        
        var dayFiveHum = document.querySelector(".dayFiveHum");
        dayFiveHum.innerHTML = "Humidity: " + data.list[34].main.humidity + "%";


      })

      //Saves seaches to local storage
      .then (function saveSearch() {
        if (userSearch.value){
            pastSearch.push(userSearch.value);
            console.log(pastSearch);
            localStorage.setItem("prevSearch", JSON.stringify(pastSearch));
        }
      })
      
      //Clears search field after logging to local storage
      .then (function () {
        document.getElementById("citySearch").value = ""
      });
    });

  };

//Code for seach button
citySearchBtn.addEventListener("click", getData)

//Fuction to call localstorage and append previous searches
function init() {
    var saved = JSON.parse(localStorage.getItem("prevSearch"));
    console.log(saved);
    for(var i = 0; i < saved.length; i++) {
        let searchHistoryBtn = document.createElement("button");
        searchHistoryBtn.value = saved[i];
        searchHistoryBtn.classList.add("prevCity");
        searchHistoryBtn.textContent = saved[i];
        $('.pastCities').append(searchHistoryBtn)

        //Adds event listener to search previous cities
        searchHistoryBtn.addEventListener("click", function (event) {
            var btn = event.target;
            var searchCity = btn.getAttribute('value')
            console.log(searchCity);
            search = searchCity;
            console.log(search);
            getData();
        });
    }
};
init();

