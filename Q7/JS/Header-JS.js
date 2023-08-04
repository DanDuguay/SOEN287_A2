let timeDisplay = document.getElementById("timeDisplay");

function displayTime()
{
    timeDisplay.innerHTML = new Date().toLocaleString();
}

setInterval(displayTime, 1000);