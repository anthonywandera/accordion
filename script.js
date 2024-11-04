"use strict";

const items = document.querySelectorAll(".item");
const icons = document.querySelectorAll(".icon");
const accordion = document.querySelector(".accordion");

// open item on click
function openItem(e) {
  if (
    !e.target.classList.contains("icon") &&
    !e.target.classList.contains("text")
  )
    return;

  items.forEach((item) => {
    if (item === e.target.closest(".item")) return;
    item.classList.remove("open");
  });

  e.target.closest(".item").classList.toggle("open");
}

// event handler
accordion.addEventListener("click", openItem);
