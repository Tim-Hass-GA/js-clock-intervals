
var now = new Date();
var minute = now.getMinutes();
var hour = now.getHours();
var seconds = 0;

var oneSecondInterval = setInterval(function(){
  changeHand("second", seconds);
  seconds++;
}, 1000);

//
var oneMinuteInterval = setInterval(function(){
  changeHand("minute", ( minute + ( seconds / 60) ) / 60 * 360);
}, 1000);

//
var oneHourInterval = setInterval(function(){
  changeHand("hour", (hour + ( minute / 60 ) + (seconds / 3600)) / 12 * 360);
}, 1000);

//
function changeHand(myElement, degrees){
  var el = document.getElementById(myElement);
  el.style.transform = "rotate(" + degrees + "deg)";
}
