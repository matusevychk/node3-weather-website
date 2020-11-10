const request = require("request");

const forecast = (latitude, longitude, callback) => {
  const url = "http://api.weatherstack.com/current?access_key=4af6cfbdfa04d3b2a510a2a1e0feeed2&query=" + latitude + "," + longitude + "&units=f";

  request({url, json: true}, (error, {body}) => {
    if (error) {
      callback("Unable to connect to location services!", undefined);
    } else if (body.error) {
      callback("Unable to search location. Try another search", undefined);
    } else { 
      callback(undefined, "It is currently " + body.current.temperature + " degress out. It feels like " + body.current.feelslike + " degress out. Humidity approximate is " + body.current.humidity);
    }
  })
}

module.exports = forecast;