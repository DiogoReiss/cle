function menuScript(func) {
  if (func === "openMenu") {
    const menuOrders = document.querySelector("#servicesMenuOrder");
    menuOrders.classList.add("activated");
    menuOrders.classList.remove("closed");
  }
  if (func === "closeMenu") {
    const menuBackgroundOrders = document.querySelector("#servicesMenuOrder");
    menuBackgroundOrders.classList.remove("activated");
    menuBackgroundOrders.classList.add("closed");
  }
}

export default menuScript;
