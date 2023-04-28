const secondHand = document.querySelector("#secondHand");
const minuteHand = document.querySelector("#minuteHand");
const hourHand = document.querySelector("#hourHand");

function getTime() {
  const d = new Date();
  const seconds = d.getSeconds();
  const minutes = d.getMinutes();
  const hours = d.getHours();
  const timeInterval = 6;

  secondHand.style.transform = "rotate(" + (seconds * timeInterval) + "deg)";
  minuteHand.style.transform =
    "rotate(" + (minutes * timeInterval + seconds / 10) + "deg)";
  hourHand.style.transform = "rotate(" + (hours * 30 + minutes / 2) + "deg)";
}
setInterval(getTime, 1000);
