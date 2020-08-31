var text = [];

var initialize = function() {
    var currentDayEl = document.querySelector("#currentDay");
    var date = moment().format("dddd, MMMM Do YYYY, h:mm:ss a");
    currentDayEl.textContent = date;
    var timeNow = moment().format("H");
    timeNow = parseInt(timeNow);
    timedBackground(timeNow);
    savedStuffInitialize();
}

var savedStuffInitialize = function() {
    text = JSON.parse(localStorage.getItem("textList"));
    if(!text) {
        text = [];
        return;
    }
    for (var i = 0; i < text.length; i++){
        var savedtext = text[i].textInput;
        var savedEl = text[i].savedElement;
        $(savedEl).text(savedtext);
        console.log(i);
    }
}

$(".saveBtn").on("click", function() {
    var clickedBtn = $(this).attr("id");
    var inputId = "#" + clickedBtn + "-hundred";
    var toBeSavedText = $(inputId).val().trim();
    var toBeSavedObject = {
        textInput: toBeSavedText,
        savedElement: inputId
    };
    for (var i = 0; i < text.length; i++){
        if (text[i].savedElement === inputId){
            text[i] = toBeSavedObject;
            localStorage.setItem("textList", JSON.stringify(text));
            return;
        }
    }
    text.push(toBeSavedObject);
    localStorage.setItem("textList", JSON.stringify(text));
});

var timedBackground = function(timeNow) {  
    console.log(timeNow);
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
    var timeNow = moment().format("H");
    timeNow = parseInt(timeNow);
    timedBackground(timeNow);
  }, (1000*60));

setInterval(function() {
    var currentDayEl = document.querySelector("#currentDay");
    var date = moment().format("dddd, MMMM Do YYYY, h:mm:ss a");
    currentDayEl.textContent = date;
},1000);

  initialize();