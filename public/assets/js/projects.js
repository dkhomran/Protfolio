// custom select variables
const select = document.querySelector("[data-select]");
const selectItems = document.querySelectorAll("[data-select-item]");
const selectValue = document.querySelector("[data-selecct-value]");
const filterBtn = document.querySelectorAll("[data-filter-btn]");

select.addEventListener("click", function () {
  elementToggleFunc(this);
});

// add event in all select items
for (let i = 0; i < selectItems.length; i++) {
  selectItems[i].addEventListener("click", function () {
    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText.toLowerCase();
    elementToggleFunc(select);
    filterFunc(selectedValue);
  });
}

// filter variables
const filterItems = document.querySelectorAll("[data-filter-item]");

const filterFunc = function (selectedValue) {
  for (let i = 0; i < filterItems.length; i++) {
    if (selectedValue === "all") {
      filterItems[i].classList.add("active");
    } else if (
      selectedValue === filterItems[i].dataset.category.toLowerCase()
    ) {
      filterItems[i].classList.add("active");
    } else {
      filterItems[i].classList.remove("active");
    }
  }
};

// add event in all filter button items for large screen
let lastClickedBtn = filterBtn[0];

for (let i = 0; i < filterBtn.length; i++) {
  filterBtn[i].addEventListener("click", function () {
    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText.toLowerCase();
    filterFunc(selectedValue);

    lastClickedBtn.classList.remove("active");
    this.classList.add("active");
    lastClickedBtn = this;
  });
}

/* -----------
 --  popup projects
-------------*/
let projects = document.querySelectorAll("[data-project-btn]");
let popup = document.querySelector(".overlay-project-popup");
let frontTechContainer = document.querySelector("#frontTech");
let backTechContainer = document.querySelector("#backTech");

let closeProject = document.querySelector(".close-project");
projects.forEach((project) => {
  project.addEventListener("click", (eo) => {
    document.querySelector(".popup-project-content h2").innerHTML =
      project.dataset.title;
    document.querySelector(".popup-project-content p").innerHTML =
      project.dataset.description;
    document.querySelector(".project-details-img img").src =
      project.dataset.file;
    document.querySelector(".live-demo a").href = project.dataset.link;

    // show front technologies used
    try {
      frontData = JSON.parse(project.dataset.front);
    } catch (error) {
      console.error("Error parsing hobbies data:", error);
      // Handle the error accordingly
    }
    const values = Object.values(frontData);
    let frontlistItems = values.map(function (value) {
      return `<li><a>${value}</a></li>`;
    });
    frontTechContainer.innerHTML =
      `<li class="menu">
    Front end Technologies
  </li>` + frontlistItems.join("");

    // show back technologies used
    try {
      backData = JSON.parse(project.dataset.back);
    } catch (error) {
      console.error("Error parsing hobbies data:", error);
      // Handle the error accordingly
    }

    const backvalues = Object.values(backData);
    let backlistItems = backvalues.map(function (value) {
      return `<li><a>${value}</a></li>`;
    });
    backTechContainer.innerHTML =
      `<li class="menu">
    Back end Technologies
  </li>` + backlistItems.join("");
    popup.classList.add("show");
  });
});

// close popup and close tech animation
popup.addEventListener("click", (eo) => {
  if (eo.target == closeProject) {
    popup.classList.remove("show");
    if (backTechContainer.classList.contains("expanded")) {
      backTechContainer.classList.remove("expanded");
    }
    if (frontTechContainer.classList.contains("expanded")) {
      frontTechContainer.classList.remove("expanded");
    }
    backTechContainer.innerHTML = `<li class="menu">
      Back end Technologies
    </li>`;
    frontTechContainer.innerHTML = `<li class="menu">
      Front end Technologies
    </li>`;
  }
});

/*------
- For small ecran remove popup
----------- */

projects.forEach((project) => {
  if (window.innerWidth < 796) {
    project.href = project.dataset.link;
  } else {
    project.removeAttribute("href");
  }
});

/* -----------
---- animation technologies used for project
 --------------*/
$(document).ready(function () {
  function radialMenu() {
    $(".radial-nav").on("click", function (evt) {
      evt.stopPropagation();
      $(".nav, .item").removeClass("active");
      $(this).toggleClass("expanded");
      $(this).find("li").removeClass("selected");
    });

    $(".radial-nav li")
      .not(".menu")
      .click(function (evt) {
        evt.stopPropagation();
        $(this).addClass("selected");
        $(".menu").addClass("active");
        $(".radial-nav").removeClass("expanded");
        getContent(this);
      });

    function getContent(elem) {
      $("#" + $(elem).attr("data-content")).addClass("active");
    }
  }
  radialMenu();
});
