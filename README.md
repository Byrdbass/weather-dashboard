# Weather-Dashboard
This weather app was made using a CSS library called Materialize, and used the API from openweather.org and script from Moment.js.  This Weather app had several functions that I used many console logs to test it's functionality.  

## What to remember about this project
- Need the API key
- Repeat cities should not append to the list
- limit city list to 10
- make sure to read API docs
- make sure to use the query parameters that are colored orange in Docs

## New concepts I learned
- When pulling the date of for the Weather displayed for the current day.  I was able to find the Unix time format given to me by OpenWeather.org and used the formatting method from Moment.js.
- In order to keep the city list from repeating, I learned to use the indexOf feature to keep track of an Array that was empty.  If the array was empty than I was able to keep the city list from repeating when clicked or typed in.  Once city lists were populated and saved in the local storage, I was able to populate the list from local storage without repeat cities.  I learned how to use the `.push` method in order to populate these cities to the array saved in local storage. 
- In the past project of the code quiz, I was not able to incorporate the local storage in the correct way, and learned how to correctly `.stringify` the JSON information and `.parse` in this project when setting and getting from local storage.
- I discovered when using `appendChild` in javascript with images, I had to populate the `src` of the image from a web url.  This was different from the other commands in javascript where I simply used `.textContent` method.
- The API referencing seemed pretty strait-forward at first, but I discovered the forecast for the next few days had to come from a different API call. I used the longitude and latitude from the original API call and pass those variables to the new OneCallAPI which grabbed the forecast of the city searched.  When displaying the temperature of the weather API call we had to check the API documentation on how to display Fahrenheit instead of Kelvin.  This was simple and all I needed was to specify Imperial units to be called in the API fetch of the URL.

## icon problems
after successfully getting the icon to display, i ran into a problem of appending the current icon for weather.  On one particular commit on 4:57 1/12 I had the icons repeatedly get added to the current card for weather.  I assumed this must of been for appending the image to the card each time the button was clicked.  I was able to fix this error.

## Links
[GitHub Repository for the Weather Dashboard](https://github.com/Byrdbass/weather-dashboard)
[GitHub deployment of web app]()
