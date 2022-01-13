console.log('hello this is the script correctly linked');
apiKey = '79ae4c44176953beec1155138bc60d35'
var cityName = '';
var latitude = '';
var longitude = '';
var recentSearches = [];
//var requestUrl = "api.openweathermap.org/data/2.5/weather?q=" + cityName + "&appid=79ae4c44176953beec1155138bc60d35";

// redirectUrl = 


function getCityWeather() {
    var url = 'https://api.openweathermap.org/data/2.5/weather?q=' + cityName + '&units=imperial&appid=' + apiKey
    
    //FETCHING THE WEATHER BASED OFF CITY NAME
    fetch(url)
    .then(function (response) {
        console.log("hello this is the getCityWeather function");
            console.log(response);
                return response.json();
            })
            .then(function (data) {
                console.log("hello this is the data function");
                console.log("this is current weather", data);

                var iconData = data.weather[0].icon;
                //var iconImg = $('<img>');
                $('#iconImg').addClass("card.small left")
                $('#iconImg').attr('src', 'https://openweathermap.org/img/wn/' + iconData + '@4x.png')
                //$('#icon').append(iconImg)

                var temp = data.main.temp
                $('#temp').text(temp + " degrees")
                var windSpeed = data.wind.speed
                $('#windSpeed').text(windSpeed + " is the Wind Speed")
                console.log(data.name);
                latitude = data.coord.lat;
                longitude = data.coord.lon;
                console.log("the latitude is " + latitude, "the longitude is " + longitude);
                getForecastUvi(latitude, longitude);
                $('#date').text(moment().format('dddd, MM/DD/YYYY'))
                //add the date for the next five days?  using moment or weather API?
                //save the cityName to local storage 
                localStorage.setItem("cityName", data.name)
                //pass the coordinates to other url call for Lat and lon??
            });
        };
function getForecastUvi (lat,lon) {
    var urlOneCall = 'https://api.openweathermap.org/data/2.5/onecall?lat=' + lat + '&lon=' + lon + '&exclude=minutely,hourly,alerts&units=imperial&appid=' + apiKey

    fetch(urlOneCall)
        .then(function (response) {
            return response.json(); 
        })
        .then(function (data) {
            console.log("this is the oneCall Api ", data)
            var uvi = data.current.uvi
            $('#uvi').text(uvi + " UVI index")
            
            for (i=1; i<5; i++) {
                console.log("this is the forecast ", data.daily[i])
                var formatDate = moment.unix(data.daily[i].dt).format('dddd, MM/DD/YYYY')
                $('#date' + i).text(formatDate);
                var iconImgForecast = data.daily[i].weather[0].icon
                $('#iconImg' + i).attr('src', 'https://openweathermap.org/img/wn/' + iconImgForecast + '@2x.png')
                var tempForecast = data.daily[i].temp.day;
                $('#temp' +i).text(tempForecast + ' degrees');
                var humidityForecast = data.daily[i].humidity
                $('#humidity' + i).text(humidityForecast + "% humidity")
                var windSpeedForecast = data.daily[i].wind_speed;
                $('#windSpeed' + i).text(windSpeedForecast + " Wind Speed")
                var uviForecast = data.daily[i].uvi;
                $('#uvi' + i).text(uviForecast + " UVI index");
            //var forecast = [];
            }
        })
}

       
function cityListPopulate () {
    cityName = $('#autocomplete-input').val().trim();
    console.log('hello this is the cityListPopulate function');
    console.log("the city name is " + cityName);
    var listItem = $('<li>')
    var cityListButtons = $('<button>');
    $('#cityTitleCard').text(cityName);
    if (recentSearches.indexOf(cityName) === -1) {
    cityListButtons.addClass('title btn-large')
    cityListButtons.text(cityName);
    listItem.append(cityListButtons);
    $("#buttonList").append(listItem);
    recentSearches.push(cityName);
    }
    
   // $("#autocomplete-input").val("");
}

//loads the whole page
$('#city-form').submit(function (event) {
    $('#currentWeatherCard').removeClass('hide');
    $('.forecastCard').removeClass('hide');
    event.preventDefault();
    console.log('hello this is the submit button function');
    cityListPopulate();
    getCityWeather();
})

        // $('#searchBtn').click(function() {
        //     
        //     $('#autocomplete-input').html(cityName);
        //     console.log(cityName);
        // })
    //citySearch();

// $('#searchBtn').click(function() {
//     fetch(url)
// })
//insert city options here
// var searchOptions =

//SEARCH FEATURE TO PUT LIST OF CITIES INTO
// document.addEventListener('DOMContentLoaded', function() {
//     var searchInput = document.querySelectorAll('.autocomplete');
//     var cityAutoComplete = M.Autocomplete.init(searchInput, searchOptions);
// });