let userName = prompt("Adınızı girin.");
document.getElementById("myName").innerHTML = userName;

let timeDisplay = document.getElementById("myClock");
let currentTimeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;

function refreshTime() {
  let dateString = new Date().toLocaleString("en-US", {timeZone: currentTimeZone });
  let formattedString = dateString.replace(", ", " - ");
  timeDisplay.innerHTML = formattedString;
}

setInterval(refreshTime, 1000);