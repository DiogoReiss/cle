function menuScript(func) {
  if (func === "openMenu") {
    const menuRental = document.querySelector("#servicesMenuRental");
    menuRental.classList.add("activated");
    menuRental.classList.remove("closed");
  }
  if (func === "closeMenu") {
    const menuBackgroundRental = document.querySelector("#servicesMenuRental");
    menuBackgroundRental.classList.add("activated");
    menuBackgroundRental.classList.remove("closed");
  }
}

export default menuScript;
