getForecast({context, entities}) {
  return new Promise(function(resolve, reject) {
    var location = firstEntityValue(entities, "location")
    if (location) {
      context.forecast = 'sunny in ' + location; // we should call a weather API here
      delete context.missingLocation;
    } else {
      context.missingLocation = true;
      delete context.forecast;
    }
    return resolve(context);
  });
},