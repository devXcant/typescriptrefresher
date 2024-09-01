"use strict";
var Weatherinfo;
(function (Weatherinfo) {
    Weatherinfo[Weatherinfo["Sunny"] = 0] = "Sunny";
    Weatherinfo[Weatherinfo["Rainy"] = 1] = "Rainy";
    Weatherinfo[Weatherinfo["Snowy"] = 2] = "Snowy";
    Weatherinfo[Weatherinfo["Dry"] = 3] = "Dry";
})(Weatherinfo || (Weatherinfo = {}));
const currentWeather = Weatherinfo.Snowy;
console.log(currentWeather);
