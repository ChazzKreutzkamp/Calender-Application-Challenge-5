var text = [];
var initialize = function() {
    var currentDayEl = document.querySelector("#currentDay");
    var date = moment().format("dddd, MMMM Do YYYY, h:mm:ss a");
    currentDayEl.textContent = date;
    var timeNow = moment().format("H");
    timeNow = parseInt(timeNow);
    timedBackground(timeNow);
}

var timedBackground = function(timeNow) {  
    for (var i = 9; i<=17; i++) {
        var comparitorId = "#" + i + "-hundred";
        if(timeNow === i) {
            $(comparitorId).addClass("present");
        }
        else if (timeNow > i) {
            $(comparitorId).addClass("past");
        }
        else if (timeNow < i) {
            $(comparitorId).addClass("future");
        }
    }
}

setInterval(function(){
    var currentDayEl = document.querySelector("#currentDay");
    var date = moment().format("dddd, MMMM Do YYYY, h:mm:ss a");
    currentDayEl.textContent = date;
    var timeNow = moment().format("H");
    timeNow = parseInt(timeNow);
    timedBackground(timeNow);
  },(1000*60)*30);

  initialize();