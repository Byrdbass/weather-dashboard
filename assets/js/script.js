console.log('hello');
apiKey = '79ae4c44176953beec1155138bc60d35'
var cityName = 'austin';
var latitude = '';
var longitude = '';
//var requestUrl = "api.openweathermap.org/data/2.5/weather?q=" + cityName + "&appid=79ae4c44176953beec1155138bc60d35";

// redirectUrl = 

//RUNS THE WHOLE SHABANG
    function getCityWeather() {
        var url = 'https://api.openweathermap.org/data/2.5/weather?q=' + cityName + '&appid=' + apiKey
        
        fetch(url)    
        .then(function (response) {
                console.log(response)
                $('#searchBtn').click(function() {
                    cityName = $('#autocomplete-input').val().trim();
                    $('#autocomplete-input').html(cityName);
                    console.log(cityName);

                })
                // if (response.status <= 400)
                // {
                //     location.replace(redirectUrl)
                // } else {
                //     console.log("hello");
                    return response.json();
                })
                .then(function (data) {
                    console.log("hello");
                    console.log(data)
                    latitude = data.coord.lat;
                    longitude = data.coord.lon;
                    console.log(latitude + longitude)
                //     //for loop??
                // 
                })
            }
    getCityWeather()


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