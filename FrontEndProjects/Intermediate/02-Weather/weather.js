function getLocation(){
  if (navigator.geolocation){
    navigator.geolocation.getCurrentPosition(logPosition); 
  } //else print cannot access position under loader
}
getLocation(); 

//make lat and long globals and call a function that enters them in url, make a separate on click function that stores form info as global and calls the same function for the url. make the url function call mainWeather
function logPosition(position){
  var initWeatherUrl = 'https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22(' + position.coords.latitude + ',%20' + position.coords.longitude + ')%22)&format=json';
  var initWeather = new XMLHttpRequest();
  initWeather.open('GET', initWeatherUrl, true);
  //console.log(position); //learn how to read timestamp provided in position

  initWeather.onload = function(){
    if(this.status = 200){
      window.info = JSON.parse(this.responseText);
      mainWeather();
    } //add "else" return error for 404 and/or 403
  }
  initWeather.send();  
} 

document.getElementById('subLoc').addEventListener('click', newWeather);
function newWeather(){
  let newLoc = document.getElementById('enterInfo').value;
  //newLoc.split(' ').replace(/[^a-z+]/g, '')
  var newWeatherUrl = 'https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22(' + newLoc + ')%22)&format=json';
  var newWeather = new XMLHttpRequest();
  newWeather.open('GET', newWeatherUrl, true);
  //console.log(position); //learn how to read timestamp provided in position

  newWeather.onload = function(){
    if(this.status = 200){
      //try changing info to just 'let info' instead of window
      window.info = JSON.parse(this.responseText);
      mainWeather();
    } //add "else" return error for 404 and/or 403
  }
  newWeather.send();
}

//must change time function to account for the time when looking up different cities and how this will affect whether it is day or night, do this with date as well
function mainWeather(){
  let cond = info.query.results.channel.item.condition;
  var d = new Date();
  let dt = info.query.results.channel.lastBuildDate;
  console.log(dt);
  let cTime = dt.substring(17, 22);
  if(cTime[0] == 0){
    cTime = cTime.slice(1, cTime.length);
  }
  let amPm = dt.substring(23, 25).toLowerCase();
  document.getElementById('locTime').innerHTML = cTime+' '+amPm;
  cTime = Number(cTime.replace(/:/g, ''));
  if(amPm == 'pm'){
    cTime += 1200;
  }
  
  function isNight(){
    let sunLoc = info.query.results.channel.astronomy;
    let sunrise = Number(sunLoc.sunrise.replace(/[^0-9+]/g, ''));
    let sunset = Number(sunLoc.sunset.replace(/[^0-9+]/g, ''));
    if(sunLoc.sunrise[sunLoc.sunrise.length - 2] == 'a' && sunLoc.sunset[sunLoc.sunset.length -2] == 'p'){
      sunset += 1200;
      if(sunset-cTime > 0 && cTime - sunrise > 0){
        window.dayNight = 'day';
        setImgIcon();
      } else {
        window.dayNight = 'night';
        setImgIcon();
      }
    } //else do something for places where day/night is 24 hours
  }
  isNight(); 

  console.log(dayNight);
  //test in future for making call to json file with codes
  //maybe in future test putting image/icon in separate function and calling that function
  //double check if all codes are used
  function setImgIcon(){

    let selectCond = {
      'day': [
        [[26, 27, 28, 29, 30, 44], 'cloudy1280', 'cloudy'],
        [[25, 31, 32, 33, 34, 36], 'clear1280', 'sunny'],
        [[1, 2, 5, 6, 7, 8, 9, 10, 11, 12, 35, 40], 'rainy1280', 'drizzle'],
        [[19, 20, 21, 22, ], 'foggy1280', 'cloudy'],
        [[13, 14, 15, 16, 17, 18, 41, 42, 43, 46], 'snowy1280', 'snowy'],
        [[3, 37, 38, 39, 45, 47], 'thunder1280', 'thunder']
      ],
      'night': [
        [[26, 27, 28, 29, 30, 44], 'cloudyNight1280', 'cloudyNight'],
        [[25, 31, 32, 33, 34, 36], 'clearNight1280', 'clearNight'],
        [[1, 2, 5, 6, 7, 8, 9, 10, 11, 12, 35, 40], 'rainyNight1280', 'drizzleNight'],
        [[19, 20, 21, 22, ], 'foggyNight1280', 'cloudyNight'],
        [[13, 14, 15, 16, 17, 18, 41, 42, 43, 46], 'snowyNight1280', 'snowNight'],
        [[3, 37, 38, 39, 45, 47], 'thunder1280', 'thunderNight']
      ]
    }
    //make solution for if 3200-not available

    function chooseImg(timeOfDay, imgTag){
      for(var i in selectCond[timeOfDay]){
        for(var j in selectCond[timeOfDay][i][0]){
          if(selectCond[timeOfDay][i][0][j] == imgTag){
            document.getElementById('bGround').style.backgroundImage = "url('/FrontEndProjects/Intermediate/02-Weather/images/" + selectCond[timeOfDay][i][1] + ".jpg')";
            document.getElementById('icon').src = '/FrontEndProjects/Intermediate/02-Weather/icons/' + selectCond[timeOfDay][i][2] + '.jpg';
          }
        }
      }
    }
    chooseImg(dayNight, cond.code);
    console.log(dayNight);
  } 

  let cDay = dt.substring(5, 7);
  if(cDay[0] == 0){
    cDay = cDay[1];
  }
  document.getElementById('enterDate').innerHTML = dt.substring(0, 3) + '. ' + dt.substring(8, 12) + ' ' + cDay + ', ' + dt.substring(12, 16);

  document.getElementById('temperature').innerHTML = cond.temp + '&deg;F';
  document.getElementById('tempType').addEventListener('click', celsFahr);
  //let toggleTemp = document.getElementById('tempType').innerHTML;
  //^^try to fix/make it work with toggleTemp -- when doing this try to use <input> with type, value onclick
  function celsFahr(){
    if(document.getElementById('tempType').value == 'on'){
      document.getElementById('temperature').innerHTML = Math.round((cond.temp-32)*(5/9)) + '&deg;C';
      document.getElementById('tempType').innerHTML = '&deg;F';
      document.getElementById('tempType').value = 'off';
      } else {
      document.getElementById('temperature').innerHTML = cond.temp + '&deg;F';
      document.getElementById('tempType').innerHTML = '&deg;C';
      document.getElementById('tempType').value = 'on';
      }
  }

  document.getElementById('wDescription').innerHTML = cond.text;

  let loc = info.query.results.channel.location;
  //make if statements for if in US, use city,state,country  - else use city, country
  function isUS(){
    if(loc.country == 'United States'){
      document.getElementById('currentCity').innerHTML = loc.city + ', ';
      document.getElementById('currentState').innerHTML = loc.region + ' ';
      document.getElementById('currentCountry').innerHTML = loc.country;
    } else {
      document.getElementById('currentCity').innerHTML = loc.city + ', ';
      document.getElementById('currentState').innerHTML = '';
      document.getElementById('currentCountry').innerHTML = loc.country;
    }
  }
  isUS();
  //getwImage();
  console.log(info);
  console.log(cond.text);
}