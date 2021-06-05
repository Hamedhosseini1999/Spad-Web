// Jquery Part for show herbs Box
$(function () {
  // Click on herb box
  $(".herb-box div").on("click", function () {
    // get attr
    let ItemId = $(this).attr("data-itemId");

    $(".herbs ").removeClass("active");
    $("#" + ItemId).addClass("active");
    $("#data-herbs").addClass("active");
  });
});

// Varibles
const nav = document.getElementById("nav");
const openBars = document.getElementById("open");
const body = document.querySelector("body");
const herbsBox = document.querySelector("#data-herbs .container .item");

// Event Listeners
openBars.addEventListener("click", () => {
  nav.classList.toggle("display");
  body.classList.toggle("display");
});

// show herbs
// herbsBox.addEventListener("click", function (e) {
//   const itemId = herbsBox.dataset.itemid;
//   const herb = document.querySelector("#" + itemId);
//   herb.classList.toggle("active");
// });
