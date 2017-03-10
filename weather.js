//http://ip-api.com/json
//weather api key: &appid=e2db5b0453a25a492e87ad8b03046a7c

$(document).ready(function(){
  getLocation();
  function getLocation(){
    $.getJSON('http://ip-api.com/json', function(loc){
       var city = loc.city;
       var region = loc.region;
       var country = loc.countryCode;
       var lat = loc.lat;
       var lon = loc.lon;
       var zip = loc.zip;
       $(".location").append(city + ', ' + region + ' in ' + country);
      getWeather(lat, lon);
     
      function getWeather(lat, lon){
        var url = 'http://api.openweathermap.org/data/2.5/weather?'+'lat='+lat+'&lon='+lon+'&units=imperial&appid=e2db5b0453a25a492e87ad8b03046a7c';
        function weather(w){
          console.log(w);
          var description = w.weather[0].description;
          var icon = w.weather[0].icon;
          $('.icon').html('');
          $('.icon').append("<img src=http://openweathermap.org/img/w/"+icon+".png>");
          $('.icon').append(Math.round(w.main.temp) + ' F');
        }
      $.getJSON(url, weather, 'jsonp');
      } 
    },'jsonp');
    
  }//end getLocation
});//end document.ready