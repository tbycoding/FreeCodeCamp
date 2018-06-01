/*var weatherPic = document.getElementById('bGround').style.backgroundImage = "url('/FrontEndProjects/Intermediate/02-Weather/images/" + bground + ".jpg')"; */

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


function mainWeather(){
  let cond = info.query.results.channel.item.condition;
  var d = new Date();
  //let time = d.hour + d.day
  var cTime = d.getHours()*100 + d.getMinutes();
  
  function isNight(){
    let sunLoc = info.query.results.channel.astronomy;
    let sunrise = Number(sunLoc.sunrise.replace(/[^0-9+]/g, ''));
    let sunset = Number(sunLoc.sunset.replace(/[^0-9+]/g, ''));
    if(sunLoc.sunrise[sunLoc.sunrise.length - 2] == 'a' && sunLoc.sunset[sunLoc.sunset.length -2] == 'p'){
      sunset = sunset + 1100;
      if(sunset-cTime > 0 && cTime - sunrise > 0){
        window.dayNight = 'day';
        
        setImgIcon();
      } else {
        window.dayNight = 'night';
        setImgIcon();
      }
    } //else do something for places where day/night is 24 hours
    
    //if(sunrise < )
    
  }
  isNight(); 
  console.log(dayNight);
  //bGround - maybe put in own function and call at bottom of mainWeather 
  function setImgIcon(){
    let setImg;
    let setIcon;
    let cloudy = [26, 27, 28, 29, 30, 44,];
    let sunny = [31, 32, 33, 34, 36];
    function chooseImg(){
      if (dayNight == 'day'){
        //maybe switch here instead
        for(var i in cloudy){
          if(cloudy[i] == cond.code){
            setImg = 'cloudy1280';
          }
        }
        for(var i in sunny){
          if(sunny[i] == cond.code){
            setImg = 'sunny1280';
          }
        }
      }
      document.getElementById('bGround').style.backgroundImage = "url('/FrontEndProjects/Intermediate/02-Weather/images/" + setImg + ".jpg')";
    }
    chooseImg();
    console.log(dayNight);
    function chooseIcon(){
      if (dayNight == 'day'){
        for(var i in cloudy){
          if(cloudy[i] == cond.code){
            setIcon = 'cloudy';
          }
        }
        for(var i in sunny){
          if(sunny[i] == cond.code){
            setIcon = 'sunny';
          } 
        } 
      }
      document.getElementById('icon').src = '/FrontEndProjects/Intermediate/02-Weather/icons/' + setIcon + '.jpg';
    }
    chooseIcon();
  } 

  
  var week = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  var month = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  document.getElementById('enterDate').innerHTML = week[d.getDay()] + '. ' + month[d.getMonth()] + ' ' + d.getDate() + ', ' + d.getFullYear();

  //icon - maybe put in own function and call at bottom of mainWeather

  

  document.getElementById('temperature').innerHTML = cond.temp + '&deg;F';
  document.getElementById('tempType').addEventListener('click', celsFahr);
  //let toggleTemp = document.getElementById('tempType').innerHTML;
  //^^try to fix/make it work with toggleTemp and change button to be "F/C&deg;" -- when doing this try to use <input> with type, value onclick
  function celsFahr(){
    if(document.getElementById('tempType').innerHTML == 'Cels'){
      document.getElementById('temperature').innerHTML = Math.round((cond.temp-32)*(5/9)) + '&deg;C';
      document.getElementById('tempType').innerHTML = 'Fahr';
      console.log(document.getElementById('tempType').innerHTML);
      } else {
      document.getElementById('temperature').innerHTML = cond.temp + '&deg;F';
      document.getElementById('tempType').innerHTML = 'Cels';
      }
  }

  document.getElementById('wDescription').innerHTML = cond.text;

  let loc = info.query.results.channel.location;
  //make if statements for if in US, use city,state,country  - else use city, country
  document.getElementById('currentCity').innerHTML = loc.city + ', ';
  document.getElementById('currentState').innerHTML = loc.region + ' ';
  document.getElementById('currentCountry').innerHTML = loc.country;

  //getwImage();
  console.log(info);
  console.log(cond.text);
}

//document.getElementById('getWeather').addEventListener('click', getCode);

/*function getCode(){
  var weatherCode = new XMLHttpRequest();
  weatherCode.open('GET', '/FrontEndProjects/Intermediate/02-Weather/codes.json', true);
  weatherCode.onload = function(){
    if(this.status == 200){
      window.wCode = JSON.parse(this.responseText);
      console.log(wCode);
    }
  } 
  weatherCode.send();
}
getCode(); */


/*function setBackground(bground){
  document.getElementById('bGround').style.backgroundImage = "url('/FrontEndProjects/Intermediate/02-Weather/images/" + 'cloudy1280' + ".jpg')";
} 
setBackground() */
