function menuScript(func) {
  if (func === "openMenu") {
    const menuContact = document.querySelector("#servicesMenuContact");
    menuContact.classList.add("activated");
    menuContact.classList.remove("closed");
  }
  if (func === "closeMenu") {
    const menuBackground = document.querySelector("#servicesMenuContact");
    menuBackground.classList.remove("activated");
    menuBackground.classList.add("closed");
  }
}

export default menuScript;
