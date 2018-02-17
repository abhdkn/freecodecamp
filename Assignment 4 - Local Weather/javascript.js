var cTemp = 0, fTemp = 0;
function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function (position) {
            lon = position.coords.longitude;
            lat = position.coords.latitude;
            var url = "https://fcc-weather-api.glitch.me/api/current?lat=" + lat + "&lon=" + lon;
            //alert(url);
            $.ajaxSetup({ cache: false });
            $.getJSON(url, function (response) {
                console.log("json:", response);
                cTemp = response.main.temp + " °C";
                fTemp = (response.main.temp * 1.8) + 32;
                fTemp = (Math.round(fTemp * 100) / 100) + " °F";
                $(".description").html("<html>" +
                    response.weather[0].description +
                    "<img src=" +
                    response.weather[0].icon +
                    "> in </html>");
                $(".cityName").text(response.name);
                $(".farTemp").text(fTemp);
                $(".someText").html("<html> with temperature of</html>");
            });
            //alert(lat);
        }
        )
    }

}

function toggleTemp() {
    $(".farTemp").text($(".farTemp").text() == cTemp ? fTemp : cTemp);
}
