var click = 0;
function menuScript() {
  const menuBackground = document.querySelector("#servicesMenu");

  menuBackground.classList.add("activated");
  click += 1;
  if (click === 2) {
    menuBackground.classList.remove("activated");
    click = 0;
  }
}

export default menuScript;
