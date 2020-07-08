function menuScript(func) {
  if (func === "openMenu") {
    const menuBackground = document.querySelector("#servicesMenu");
    menuBackground.classList.add("activated");
    menuBackground.classList.remove("closed");
  }
  if (func === "closeMenu") {
    const menuBackground = document.querySelector("#servicesMenu");
    menuBackground.classList.remove("activated");
    menuBackground.classList.add("closed");
  }
}

export default menuScript;
