const primaryNav = document.querySelector(".nav");
const menuItems = document.querySelectorAll(".nav__list-item");
const menuBtn = document.querySelector(".menu-button");

menuBtn.addEventListener("click", () => {
  let isExpanded = menuBtn.getAttribute("aria-expanded");
  if (isExpanded == "false") {
    menuBtn.setAttribute("aria-expanded", "true");
    document.body.classList.add("appear");
  } else {
    menuBtn.setAttribute("aria-expanded", "false");
    document.body.classList.remove("appear");
  }
});

menuItems.forEach((item) =>
  item.addEventListener("click", () => document.body.classList.remove("appear"))
);
