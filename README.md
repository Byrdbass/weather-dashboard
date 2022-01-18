# Weather-Dashboard
This weather app was made using a CSS library called Materialize, and used the API from openweather.org and script from Moment.js.  This Weather app had several functions that I used many console logs to test it's functionality.  

## What to remember about this project
-Need the API key
-Repeat cities should not append to the list
-limit city list to 10
-make sure to read API docs
-make sure to use the query parameters that are colored orange in Docs

## New concepts I learned
- When pulling the date of for the Weather displayed for the current day.  I was able to find the Unix time format given to me by OpenWeather.org and used the formatting method from Moment.js.
- When trying to limit the amount
- talk about indexOf feature
- talk about push feature
- talk about appending classes with images
- talk about referencing the api correctly

## icon problems
after succesfully getting the icon to display, i ran into a problem of appending the current icon for weather.  On one particular commit on 4:57 1/12 I had the icons repeateadly get added to the current card for weather.  I assumed this must of been for appending the image to the card each time the button was clicked.

## list of Cities
I used the method `indexOf` to keep cities from being repeated in the list of current searches.