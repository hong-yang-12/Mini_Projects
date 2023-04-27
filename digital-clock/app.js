function displayTime() {
  const d = new Date();
  let hrs = d.getHours();
  let mins = d.getMinutes();
  let secs = d.getSeconds();
  const session = document.querySelector("#session");

  if (hrs >= 12) session.innerHTML = "PM";
  else session.innerHTML = "AM";

  if(hrs > 12) {
    hrs = hrs - 12;
  }

  document.querySelector("#hours").innerHTML = hrs;
  document.querySelector("#minutes").innerHTML = mins;
  document.querySelector("#seconds").innerHTML = secs;
}
setInterval(displayTime, 1000);
