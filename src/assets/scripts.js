function clickHandler() {
  console.log("Anyone clicked");
  document.querySelector("#aboutButton").classList.add("clicked");

  document.querySelector("#orderButton").classList.add("activated");
  document.querySelector("#rentalButton").classList.add("activated");
  document.querySelector("#transferButton").classList.add("activated");
}
export default clickHandler;
