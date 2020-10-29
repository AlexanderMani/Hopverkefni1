function toggle() {
  let image = document.getElementById("checkmark");
  image.classList.toggle("hide");
  event.stopPropagation();
  return;
}
