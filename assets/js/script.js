console.log('hello this is the script correctly linked');
apiKey = '79ae4c44176953beec1155138bc60d35'
var cityName = '';
var latitude = '';
var longitude = '';
//var requestUrl = "api.openweathermap.org/data/2.5/weather?q=" + cityName + "&appid=79ae4c44176953beec1155138bc60d35";

// redirectUrl = 

//RUNS THE WHOLE SHABANG
function getCityWeather() {
    var url = 'https://api.openweathermap.org/data/2.5/weather?q=' + cityName + '&appid=' + apiKey
    
    //FETCHING THE WEATHER BASED OFF CITY NAME
    fetch(url)
    .then(function (response) {
        console.log("hello this is the getCityWeather function");
            console.log(response);
                return response.json();
            })
            .then(function (data) {
                console.log("hello this is the data function");
                //cityName = "austin";
                console.log(data);
                
                console.log(data.name);
                latitude = data.coord.lat;
                longitude = data.coord.lon;
                console.log("the latitude is " + latitude, "the longitude is " + longitude);
                
                $('#date').text(moment().format('dddd, MM/DD/YYYY'))
                //add the date for the next five days?  using moment or weather API?
                //save the cityName to local storage 
                localStorage.setItem("cityName", data.name)
                //pass the coordinates to other url call for Lat and lon??
            });
        };

       
function cityListPopulate () {
    cityName = $('#autocomplete-input').val().trim();
    console.log('hello this is the cityListPopulate function');
    console.log("the city name is " + cityName);
    var cityListButtons = $('<button>');
    $('#cityTitleCard').text(cityName);
    cityListButtons.addClass('title')
    cityListButtons.text(cityName);
    $("ul").append(cityListButtons);
   // $("#autocomplete-input").val("");
}

$('#city-form').submit(function (event) {
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