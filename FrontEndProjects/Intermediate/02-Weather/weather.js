//var x = document.getElementById('idtag);
/* loader here */
function getLocation(){
  if (navigator.geolocation){
    navigator.geolocation.getCurrentPosition(showPosition);
  }
  else{
    //x.innerHTML="not supported";
  }
}
function showPosition(position){
  console.log(position);
} 
getLocation()



//function displayWeather(){
  //}

function setBackground(bground){
  document.getElementById('bGround').style.backgroundImage = "url('/FrontEndProjects/Intermediate/02-Weather/images/" + bground + ".jpg')";
} 
setBackground('sunny1280')