let weather = {
    "apiKey": "aea65baff77dbb17ce9f0dc6ca67546a",
    fetchWeather: function (city) {
        fetch(
                "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + this.apiKey
            )
            .then((response) => response.json())
            .then((data) => this.displayWeather(data));
    },
    displayWeather: function (data) {
        const {
            name
        } = data;
        const {
            icon,
            description
        } = data.weather[0];
        const {
            temp,
            humidity
        } = data.main;
        const {
            speed
        } = data.wind;
        document.querySelector(".city").innerText = "Weather in " + name;
        document.querySelector(".icon").src = "https://openweathermap.org/img/wn/" + icon + ".png";
        document.querySelector(".description").innerText = description;
        document.querySelector(".temp").innerText = temp + "°C";
        document.querySelector(".humidity").innerText = "Humidity : " + humidity + "%";
        document.querySelector(".wind").innerText = "Wind speed : " + speed + "km/h";
        document.querySelector(".weather").classList.remove("loading");
        //document.body.style.backgroundImage = "url('https://source.unsplash.com/1600x900/?" + city + "')";
    },
    search: function () {
        this.fetchWeather(document.querySelector(".search-bar").value);
    }
};

document.querySelector(".search button").addEventListener("click", function () {
    weather.search();
});

document.querySelector(".search-bar").addEventListener("keyup", function (event) {
    if (event.key == "Enter") {
        weather.search();
    }
});

weather.fetchWeather("Bengaluru");


/*{"coord":{"lon":-104.9847,"lat":39.7392},"weather":[{"id":801,"main":"Clouds","description":"few clouds","icon":"02n"}],"base":"stations","main":{"temp":270.86,"feels_like":267.35,"temp_min":266.68,"temp_max":275.88,"pressure":1026,"humidity":65,"sea_level":1026,"grnd_level":843},"visibility":10000,"wind":{"speed":2.56,"deg":213,"gust":2.44},"clouds":{"all":19},"dt":1642946409,"sys":{"type":2,"id":2011931,"country":"US","sunrise":1642947295,"sunset":1642982903},"timezone":-25200,"id":5419384,"name":"Denver","cod":200}*/