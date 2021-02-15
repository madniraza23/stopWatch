var seconds = 0
var mintues = 0
var hours = 0

displaySeconds = 0
displayMinutes = 0
displayHours = 0

var interval;
var status = "stopped"
function stopWatch() {
    seconds ++
    if (seconds / 60 === 1) {
        seconds = 0
        mintues++
    
        if (mintues / 60 === 1) {
            mintues = 0
            hours ++
        }
        
    }
    displayHours = hours < 10 ? "0" + hours.toString() : displayHours = hours;
    displayMinutes = mintues < 10 ? "0" + mintues.toString() : displayMinutes = mintues;
    displaySeconds = seconds < 10 ? "0" + seconds.toString() : displaySeconds = seconds;
    document.getElementById("display").innerHTML = displayHours + " : " + displayMinutes + " : " + displaySeconds
}

function startStop() {
    if (status == "stopped"){
interval = setInterval (stopWatch, 1000)
document.getElementById("startStop").innerHTML = "Stop"
status = "started"

} else {
    clearInterval(interval)
    document.getElementById("startStop").innerHTML = "Start"
    status = "stopped"
}
}

function reset() {
    clearInterval(interval)
    seconds = 0;
    mintues = 0;
    hours = 0;
    document.getElementById("display").innerHTML = "00 : 00 : 00"
    document.getElementById("startStop").innerHTML = "Start"
}