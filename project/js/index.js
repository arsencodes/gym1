const calculateBtn = document.getElementById("calculate-btn")
const heightInput = document.getElementById("height-id");
const weightInput = document.getElementById("weight-id");
const resultsInput = document.getElementById("results-input");
const resetBtn = document.getElementById("reset-btn");
const emailBtn = document.querySelector(".hvr-shutter-in-horizontal m-0");



calculateBtn.addEventListener("click", function() {
  resultsInput.value = Math.round(weightInput.value/(heightInput.value*heightInput.value) || "")
})


resetBtn.addEventListener("click", function () {
  heightInput.value = "";
  weightInput.value = "";

});

emailBtn.addEventListener("click", function () {
  resultsInput.value = Math.round(
    weightInput.value / (heightInput.value * heightInput.value) || ""
  );
});


$(document).ready(function () {
  // perform some jQuery when page is loaded

  $("h1").hover(
    function () {
      // when user is hovering the h1
      $(this).addClass("animated infinite pulse");
      // we add pulse animation and to infinite
    },
    function () {
      // when user no longer hover on the h1
      $(this).removeClass("animated infinite pulse");
      // we remove the pulse
    }
  );
});


