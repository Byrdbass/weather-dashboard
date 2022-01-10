console.log("hello");
apiKey = '79ae4c44176953beec1155138bc60d35'
var cityName = "Austin"
$(#autocomplete-input)
//var requestUrl = "api.openweathermap.org/data/2.5/weather?q=" + cityName + "&appid=79ae4c44176953beec1155138bc60d35";
var url = "https://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&appid=" + apiKey
// redirectUrl = 

function getApi() {
    fetch(url)
        .then(function (response) {
            console.log(response)

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
            //     //for loop??
            // 
            })
        }
        getApi()

$('#searchBtn').click(function() {
    fetch(url)
    
})
//insert city options here
// var searchOptions =

//SEARCH FEATURE TO PUT LIST OF CITIES INTO
// document.addEventListener('DOMContentLoaded', function() {
//     var searchInput = document.querySelectorAll('.autocomplete');
//     var cityAutoComplete = M.Autocomplete.init(searchInput, searchOptions);
// });