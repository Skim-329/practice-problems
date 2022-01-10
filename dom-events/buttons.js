function handleClick(event) {
  console.log("button clicked");
  console.log(event);
  console.log(event.target);
}

var el = document.querySelector(".click-button");

el.addEventListener("click", handleClick);

function handleMouseover(event) {
  console.log("button hovered");
  console.log(event);
  console.log(event.target);
}

var ele = document.querySelector(".hover-button");
ele.addEventListener("mouseover", handleMouseover);

function handleDoubleClick(event) {
  console.log("button double-clicked");
  console.log(event);
  console.log(event.target);
}

var elem = document.querySelector(".double-click-button");
elem.addEventListener("dblclick", handleDoubleClick);
