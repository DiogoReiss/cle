function menuScript(func) {
  if (func === "openMenu") {
    const menuTransfer = document.querySelector("#servicesMenuTransfer");
    menuTransfer.classList.add("activated");
    menuTransfer.classList.remove("closed");
  }
  if (func === "closeMenu") {
    const menuBackgroundTransfer = document.querySelector("#servicesMenuTransfer");
    menuBackgroundTransfer.classList.remove("activated");
    menuBackgroundTransfer.classList.add("closed");
  }
}

export default menuScript;
