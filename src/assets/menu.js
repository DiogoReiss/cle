function menuScript(func) {
  if (func === "openMenu") {
    const menu = document.querySelector("#servicesMenuContact");
    menu.classList.add("activated");
    menu.classList.remove("closed");
  }
  if (func === "closeMenu") {
    const menuBackground = document.querySelector("#servicesMenuContact");
    menuBackground.classList.remove("activated");
    menuBackground.classList.add("closed");
  }
}

export default menuScript;
