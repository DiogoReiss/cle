const services = document.querySelector("#aboutButton");
const order = document.querySelector("#orderButton");
const rental = document.querySelector("#rentalButton");
const transfer = document.querySelector("#transferButton");
var button = function () {
  services.addEventListener("click", () => {
    console.log("Anyone clicked");
    services.classList.add("clicked");

    order.classList.add("activated");
    rental.classList.add("activated");
    transfer.classList.add("activated");

    setTimeout(function () {
      services.classList.remove("clicked");
      order.classList.remove("activated");
      rental.classList.remove("activated");
      transfer.classList.remove("activated");
    }, 5000);
  });
};

module.exports = button;
