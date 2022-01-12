var $bulb = document.querySelector(".lightbulb");
var $container = document.querySelector(".container");

$bulb.addEventListener("click", function (event) {
  if ($bulb.className === "lightbulb") {
    $bulb.className = "lightbulb on";
    $container.className = "container on";
  } else {
    $bulb.className = "lightbulb";
    $container.className = "container";
  }
});
