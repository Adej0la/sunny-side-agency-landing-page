const primaryNav = document.querySelector(".nav");
const menuItems = document.querySelectorAll(".nav__list-item");
const menuBtn = document.querySelector(".menu-button");

menuBtn.addEventListener("click", () => {
  let isExpanded = menuBtn.getAttribute("aria-expanded");
  if (isExpanded == "false") {
    document.body.classList.add("appear");
    menuBtn.setAttribute("aria-expanded", "true");
  } else {
    document.body.classList.remove("appear");
    menuBtn.setAttribute("aria-expanded", "false");
  }
});

menuItems.forEach((item) =>
  item.addEventListener("click", () => {
    document.body.classList.remove("appear");
    menuBtn.setAttribute("aria-expanded", "false");
  })
);

// Add a function that disappears menu when any other part of the window/body or the escape button is clicked
