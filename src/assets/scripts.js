function clickHandler() {
  console.log("Anyone clicked");
  document.querySelector("#aboutButton").classList.add("clicked");

  document.querySelector("#orderButton").classList.add("activated");
  document.querySelector("#rentalButton").classList.add("activated");
  document.querySelector("#transferButton").classList.add("activated");

  setTimeout(function () {
    document.querySelector("#aboutButton").classList.remove("clicked");
    document.querySelector("#orderButton").classList.remove("activated");
    document.querySelector("#rentalButton").classList.remove("activated");
    document.querySelector("#transferButton").classList.remove("activated");
  }, 5000);
}
export default clickHandler;
