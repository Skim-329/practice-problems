var buttonClicked = 0;
var hot = document.querySelector(".hot-button");
var click = document.querySelector(".click-count");

hot.addEventListener("click", function (event) {
  buttonClicked++;
  click.textContent = "Clicks: " + buttonClicked;
  var temp;
  if (buttonClicked < 4) {
    temp = "cold";
  } else if (buttonClicked < 7) {
    temp = "cool";
  } else if (buttonClicked < 10) {
    temp = "tepid";
  } else if (buttonClicked < 13) {
    temp = "warm";
  } else if (buttonClicked < 16) {
    temp = "hot";
  } else {
    temp = "nuclear";
  }
  hot.className = "hot-button " + temp;
});
