console.log("hello");
var cityName = ""
requestUrl = "api.openweathermap.org/data/2.5/weather?q=" + cityName + "&appid=79ae4c44176953beec1155138bc60d35";
redirectUrl = 

fetch(requestUrl)
    .then(function (response) {
        if (response.status <= 400)
        {
            location.replace(redirectUrl)
        } else {
            console.log("hello");
            return response.json();
        }
    });