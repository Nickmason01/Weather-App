var apiKey = "b0f2ba24b4056628245477ece42c3207";
var button = document.getElementById("btn");
var search = document.getElementById("cityName");
var card1Results =document.getElementById("card1");
var card2Results = document.getElementById("card2");
var card3Results = document.getElementById("card3");
var card4Results = document.getElementById("card4");
var card5Results = document.getElementById("card5");
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
        //for(i=0; i<4; i+8) {
            card1Results.innerHTML = "";
            var icon = document.createElement("img");
            var citName = document.createElement("h2");
           // var date = document.createElement("h3")
            var temp = document.createElement("p");
            var weather = document.createElement("p");
            var humidity = document.createElement("p");
            var windSpeed = document.createElement("p");
            var iconImg = data.list[2].weather[0].icon;
            icon.setAttribute('src', `http://openweathermap.org/img/wn/${iconImg}.png`);
            icon.setAttribute('class', 'card-img-top');
            citName.textContent = data.city.name;
            //date.textContent = (data.list[0].dt_txt);
            temp.textContent = data.list[0].main.temp + "🌡️ ";
            weather.textContent = data.list[0].weather[0].description + "☁";
            humidity.textContent = data.list[0].main.humidity;
            windSpeed.textContent = data.list[0].wind.speed + "🌬";
            card1Results.append(icon);
            card1Results.append(citName);
            //card1Results.append(data);
            card1Results.append(temp);
            card1Results.append(weather);
            card1Results.append(humidity);
            card1Results.append(windSpeed);
       // }

            card2Results.innerHTML = "";
            var icon = document.createElement("img");
            var citName = document.createElement("h2");
            var temp = document.createElement("p");
            var weather = document.createElement("p");
            var humidity = document.createElement("p");
            var windSpeed = document.createElement("p");
            var iconImg = data.list[10].weather[0].icon;
            icon.setAttribute('src', `http://openweathermap.org/img/wn/${iconImg}.png`);
            icon.setAttribute('class', 'card-img-top');
            citName.textContent = data.city.name;
            temp.textContent = data.list[8].main.temp + "🌡️ ";
            weather.textContent = data.list[8].weather[0].description + "☁";
            humidity.textContent = data.list[8].main.humidity;
            windSpeed.textContent = data.list[8].wind.speed + "🌬";
            card2Results.append(icon);
            card2Results.append(citName);
            card2Results.append(temp);
            card2Results.append(weather);
            card2Results.append(humidity);
            card2Results.append(windSpeed);


            card3Results.innerHTML = "";
            var icon = document.createElement("img");
            var citName = document.createElement("h2");
            var temp = document.createElement("p");
            var weather = document.createElement("p");
            var humidity = document.createElement("p");
            var windSpeed = document.createElement("p");
            var iconImg = data.list[18].weather[0].icon;
            icon.setAttribute('src', `http://openweathermap.org/img/wn/${iconImg}.png`);
            icon.setAttribute('class', 'card-img-top');
            citName.textContent = data.city.name;
            temp.textContent = data.list[16].main.temp + "🌡️ ";
            weather.textContent = data.list[16].weather[0].description + "☁";
            humidity.textContent = data.list[16].main.humidity;
            windSpeed.textContent = data.list[16].wind.speed + "🌬";
            card3Results.append(icon);
            card3Results.append(citName);
            card3Results.append(temp);
            card3Results.append(weather);
            card3Results.append(humidity);
            card3Results.append(windSpeed);


            card4Results.innerHTML = "";
            var icon = document.createElement("img");
            var citName = document.createElement("h2");
            var temp = document.createElement("p");
            var weather = document.createElement("p");
            var humidity = document.createElement("p");
            var windSpeed = document.createElement("p");
            var iconImg = data.list[26].weather[0].icon;
            icon.setAttribute('src', `http://openweathermap.org/img/wn/${iconImg}.png`);
            icon.setAttribute('class', 'card-img-top');
            citName.textContent = data.city.name;
            temp.textContent = data.list[24].main.temp + "🌡️ ";
            weather.textContent = data.list[24].weather[0].description + "☁";
            humidity.textContent = data.list[24].main.humidity;
            windSpeed.textContent = data.list[24].wind.speed + "🌬";
            card4Results.append(icon);
            card4Results.append(citName);
            card4Results.append(temp);
            card4Results.append(weather);
            card4Results.append(humidity);
            card4Results.append(windSpeed);

            card5Results.innerHTML = "";
            var icon = document.createElement("img");
            var citName = document.createElement("h2");
            var temp = document.createElement("p");
            var weather = document.createElement("p");
            var humidity = document.createElement("p");
            var windSpeed = document.createElement("p");
            var iconImg = data.list[34].weather[0].icon;
            icon.setAttribute('src', `http://openweathermap.org/img/wn/${iconImg}.png`);
            icon.setAttribute('class', 'card-img-top');
            citName.textContent = data.city.name;
            temp.textContent = data.list[32].main.temp + "🌡️ ";
            weather.textContent = data.list[32].weather[0].description + "☁";
            humidity.textContent = data.list[32].main.humidity;
            windSpeed.textContent = data.list[32].wind.speed + "🌬";
            card5Results.append(icon);
            card5Results.append(citName);
            card5Results.append(temp);
            card5Results.append(weather);
            card5Results.append(humidity);
            card5Results.append(windSpeed);


       
    })
    


    

   
}


    

   

button.addEventListener("click", searchArea);

