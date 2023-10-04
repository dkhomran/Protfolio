"use strict";

// element toggle function
const elementToggleFunc = function (elem) {
  elem.classList.toggle("active");
};

// sidebar variables
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

// sidebar toggle functionality for mobile
sidebarBtn.addEventListener("click", function () {
  elementToggleFunc(sidebar);
});

// page navigation variables
const navigationLinks = document.querySelectorAll("[data-nav-link]");

// add event to all nav link

// add event to all nav link
for (let i = 0; i < navigationLinks.length; i++) {
  navigationLinks[i].addEventListener("click", function () {
    navigationLinks[i].classList.add("active");
    window.scrollTo(0, 0);
  });
}

/*********
 * *
 ***************/

// Title animation (page about)
let titles = document.querySelectorAll("[title-animated-about]");

setInterval(() => {
  titles.forEach((el) => {
    if (el.classList.contains("isHiddenTitle")) {
      el.classList.remove("isHiddenTitle");
      el.classList.add("isVisibleTitle");
    } else {
      el.classList.remove("isVisibleTitle");
      el.classList.add("isHiddenTitle");
    }
  });
}, 1000);

/*********
 * skills progress bar
 ***************/

window.addEventListener("scroll", function () {
  const progressBars = document.querySelectorAll(".skill-progress-fill");
  const totalHeight =
    document.documentElement.scrollHeight - window.innerHeight;

  progressBars.forEach(function (progressBar) {
    const progressValue = progressBar.dataset.progress;
    const progress = (window.pageYOffset / totalHeight) * progressValue;
    progressBar.style.width = progress + "%";
  });
});
