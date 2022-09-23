//City Search Submissions
var citySearchBtn = document.querySelector("#seachBtn");
var userSearch = document.getElementById('citySearch');

function getData() {
    console.log(userSearch.value);
    
    //Current URL fetches info on set city. Need to update to pull from searched city
    var requestUrl = "https://api.openweathermap.org/data/2.5/forecast?q=" + userSearch.value + "&units=imperial&appid=ad8f1f0503e0381c15618312183fcbd8";
  
    fetch(requestUrl)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        console.log(data);
        

        //Code below inserts pulled data for current info
        var cityNameAndDate = document.querySelector(".currentCity");
        cityNameAndDate.innerHTML = data.city.name + " (" + data.list[1].dt_txt + ")"; 

        var currentIconCode = data.list[0].weather[0].icon
        var currentIconURL = "http://openweathermap.org/img/w/" + currentIconCode + ".png"
        $('#wicon').attr('src', currentIconURL);
        
        //var currentIcon = document.querySelector(".currentDayIcon")
        //currentIcon.innerHTML = data.list[0].weather[0].icon //Need to figure out how to add the icon set.

        
        var cityTemp = document.querySelector(".currentCityTemp");        
        cityTemp.innerHTML = "Temp: " + data.list[0].main.temp + "°F";

        var cityWind = document.querySelector(".currentCityWind");
        cityWind.innerHTML = "Wind: " + data.list[0].wind.speed + "mph";
        
        
        var cityHum = document.querySelector(".currentCityHum");
        cityHum.innerHTML = "Humidity: " + data.list[0].main.humidity + "%";
        
        //Code below inserts data into the 5 Day forecast cards

        //Day 1 Card
        var dayOneDate = document.querySelector(".dayOneTitle");
        dayOneDate.innerHTML = data.list[1].dt_txt; //Need to change to a more legible date via moment.
        
        var dayOneIcon = document.querySelector(".dayOneIcon");
        dayOneIcon.innerHTML = data.list[1].weather[0].icon; //Need to figure out how to add the icon set.
        
        var dayOneTemp = document.querySelector(".dayOneTemp");        
        dayOneTemp.innerHTML = "Temp: " + data.list[1].main.temp + "°F";

        var dayOneWind = document.querySelector(".dayOneWind");
        dayOneWind.innerHTML = "Wind: " + data.list[1].wind.speed + "mph";
        
        var dayOneHum = document.querySelector(".dayOneHum");
        dayOneHum.innerHTML = "Humidity: " + data.list[1].main.humidity + "%";

        //Day 2 Card
        var dayTwoDate = document.querySelector(".dayTwoTitle");
        dayTwoDate.innerHTML = data.list[2].dt_txt //Need to change to a more legible date via moment.
        
        var dayTwoIcon = document.querySelector(".dayTwoIcon");
        dayTwoIcon.innerHTML = data.list[2].weather[0].icon //Need to figure out how to add the icon set.
        
        var dayTwoTemp = document.querySelector(".dayTwoTemp");        
        dayTwoTemp.innerHTML = "Temp: " + data.list[2].main.temp + "°F";

        var dayTwoWind = document.querySelector(".dayTwoWind");
        dayTwoWind.innerHTML = "Wind: " + data.list[2].wind.speed + "mph";
        
        var dayTwoHum = document.querySelector(".dayTwoHum");
        dayTwoHum.innerHTML = "Humidity: " + data.list[2].main.humidity + "%";

        //Day 3 Card
        var dayThreeDate = document.querySelector(".dayThreeTitle");
        dayThreeDate.innerHTML = data.list[3].dt_txt; //Need to change to a more legible date via moment.
        
        var dayThreeIcon = document.querySelector(".dayThreeIcon");
        dayThreeIcon.innerHTML = data.list[3].weather[0].icon; //Need to figure out how to add the icon set.
        
        var dayThreeTemp = document.querySelector(".dayThreeTemp");        
        dayThreeTemp.innerHTML = "Temp: " + data.list[3].main.temp + "°F";

        var dayThreeWind = document.querySelector(".dayThreeWind");
        dayThreeWind.innerHTML = "Wind: " + data.list[3].wind.speed + "mph";
        
        var dayThreeHum = document.querySelector(".dayThreeHum");
        dayThreeHum.innerHTML = "Humidity: " + data.list[3].main.humidity + "%";

        //Day 4 Card
        var dayFourDate = document.querySelector(".dayFourTitle");
        dayFourDate.innerHTML = data.list[4].dt_txt; //Need to change to a more legible date via moment.
        
        var dayFourIcon = document.querySelector(".dayFourIcon");
        dayFourIcon.innerHTML = data.list[4].weather[0].icon; //Need to figure out how to add the icon set.
        
        var dayFourTemp = document.querySelector(".dayFourTemp");        
        dayFourTemp.innerHTML = "Temp: " + data.list[4].main.temp + "°F";

        var dayFourWind = document.querySelector(".dayFourWind");
        dayFourWind.innerHTML = "Wind: " + data.list[4].wind.speed + "mph";
        
        var dayFourHum = document.querySelector(".dayFourHum");
        dayFourHum.innerHTML = "Humidity: " + data.list[4].main.humidity + "%";

        //Day 5 Card
        var dayFiveDate = document.querySelector(".dayFiveTitle");
        dayFiveDate.innerHTML = data.list[5].dt_txt; //Need to change to a more legible date via moment.
        
        var dayFiveIcon = document.querySelector(".dayFiveIcon");
        dayFiveIcon.innerHTML = data.list[5].weather[0].icon; //Need to figure out how to add the icon set.
        
        var dayFiveTemp = document.querySelector(".dayFiveTemp");        
        dayFiveTemp.innerHTML = "Temp: " + data.list[5].main.temp + "°F";

        var dayFiveWind = document.querySelector(".dayFiveWind");
        dayFiveWind.innerHTML = "Wind: " + data.list[5].wind.speed + "mph";
        
        var dayFiveHum = document.querySelector(".dayFiveHum");
        dayFiveHum.innerHTML = "Humidity: " + data.list[5].main.humidity + "%";


      })
      //Code to place current city info
          //What I dont understand below: 
          //I am ising "data" in my function like above, but it is saying things are not defined, like "city". Why does it work above and not here? 
      /*.then(function currentCityInfo(data) {
        var cityName = document.querySelector(".currentCity")
        cityName.text = data.city.name //code not working here not sure why
      })*/
  }

//Code for seach button
citySearchBtn.addEventListener("click", getData)