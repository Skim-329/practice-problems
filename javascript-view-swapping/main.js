var $container = document.querySelector(".tab-container");
var $tabs = document.querySelectorAll(".tab");
var $views = document.querySelectorAll(".view");

$container.addEventListener("click", function (event) {
  if (event.target.matches(".tab")) {
    for (var i = 0; i < $tabs.length; i++) {
      if ($tabs[i] === event.target) {
        $tabs[i].className = "tab active";
      } else {
        $tabs[i].className = "tab";
      }
    }
    var attribute = event.target.getAttribute("data-view");
    for (var x = 0; x < $views.length; x++) {
      if ($views[x].getAttribute("data-view") === attribute) {
        $views[x].className = "view";
      } else {
        $views[x].className = "view hidden";
      }
    }
  }
});
