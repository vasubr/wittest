getForecast({context, entities}) {
  return new Promise(function(resolve, reject) {
    var location = firstEntityValue(entities, "location")
    if (location) {
      context.forecast = 'sunny in ' + location; // we should call a weather API here
      //api key for open weather api - api.openweathermap.org/data/2.5/weather?q={city name}&APPID=d4fe7bbbb723c3cd52e9d9d614aa819e - d4fe7bbbb723c3cd52e9d9d614aa819e
      //api.openweathermap.org/data/2.5/forecast/city?id=524901&APPID=d4fe7bbbb723c3cd52e9d9d614aa819e
      delete context.missingLocation;
    } else {
      context.missingLocation = true;
      delete context.forecast;
    }
    return resolve(context);
  });
},
