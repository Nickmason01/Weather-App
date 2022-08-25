var apiKey = "b0f2ba24b4056628245477ece42c3207";
var button = document.getElementById("btn");
var search = document.getElementById("cityName");
var results =document.getElementById("results")
var searchArea = function(event){
 event.preventDefault();   
    var citySearch =search.value.trim();
    console.log(citySearch);
    if(citySearch){
        cityName(citySearch);
    }else{
        alert("Please input a city name!");
    }

    
}

function cityName(citySearch){
    var requestUrl = "https://api.openweathermap.org/data/2.5/forecast?q=" + citySearch  + '&units=imperial' +"&appid=b0f2ba24b4056628245477ece42c3207";

    fetch(requestUrl)
    .then(function(response) {
        return response.json();
    })

    .then(function (data) {
        console.log(data);
    })

    results.innerHTML = "";
    var citName = document.createElement("h2");
    citName.textContent = data.city.name
    results.append(citName);

   
}






// function getApi(getLatlon){
//     var requestUrl = "https://api.openweathermap.org/data/2.5/onecall?lat={lat}&lon={lon}&exclude=hourly,minutely&appid={API key}"
 
//     fetch(requestUrl)
//     .then(function (response) {
//        return response.JSON();
//     })

//     .then (function (data){
//         console.log(data)
//     });

//     var lat = data.coord.lat;
//     var lon =data.coord.lon

    

   

button.addEventListener("click", searchArea);

