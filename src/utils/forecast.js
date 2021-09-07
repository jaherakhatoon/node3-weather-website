const request = require("request");

const forecast = (latitude, longitude, callback) => {
  const url =
    "http://api.weatherstack.com/current?access_key=0aed906fa7c1f59246137e12ebcecbd7&query=" +
    latitude +
    "," +
    longitude;
  request({ url, json: true }, (error, { body }) => {
    if (error) {
      callback("Unable to connect", undefined);
    } else if (body.error) {
      callback("Unable to find location", undefined);
    } else {
      callback(
        undefined,
        body.current.weather_descriptions[0] +
          " It is currently " +
          body.current.temperature +
          " degrees out.It feels like " +
          body.current.feelslike +
          " degrees out.Humidity is " +
          body.current.humidity +
          ".There is a " +
          body.current.precip +
          "% chance of rain"
      );
    }
  });
};

module.exports = forecast;
