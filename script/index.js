// Show the navBar on phone or small devices
let navBar = document.querySelector("#navId");
let navList = document.querySelector(".navList");
let menuIcon = document.querySelector(".menu");
menuIcon.addEventListener("click", function () {
  navBar.classList.toggle("collapsible--expanded");
});

// Hide and display the placeholde on input
let input = document.querySelectorAll(".form-input");

input.forEach((value) => {
  // console.log(value);
  // Remove the placeholder text
  value.addEventListener("focus", function () {
    value.setAttribute("data-text", value.getAttribute("placeholder"));
    value.setAttribute("placeholder", "");
  });
  // Add the placeholder text
  value.addEventListener("blur", function () {
    value.setAttribute("placeholder", value.getAttribute("data-text"));
    value.setAttribute("date-text", "");
  });
});
