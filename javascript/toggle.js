function toggle() {
  let image = document.getElementById("checkmark");
  let background = document.querySelector("background")
  image.classList.toggle("hide");
  background.classList.toggle("grey-background-index");
  background.classList.toggle("grey-background-index-checked");
  event.stopPropagation();
  return;
}
