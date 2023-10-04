/*********
 *  about text typing ..
 ***************/

// set up text to print, each item in array is new line
let descriptionText = document.querySelector("#getDescription");
var aText = new Array();
aText.push(descriptionText.innerHTML);

var iSpeed = 20; // time delay of print out
var iIndex = 0; // start printing array at this posision
var iArrLength = aText[0].length; // the length of the text array

var iScrollAt = 20; // start scrolling up at this many lines

var iTextPos = 0; // initialise text position
var sContents = ""; // initialise contents variable
var iRow; // initialise current row

function typewriter() {
  sContents = " ";
  iRow = Math.max(0, iIndex - iScrollAt);
  var destination = document.getElementById("typedtext");

  while (iRow < iIndex) {
    sContents += aText[iRow++] + "<br />";
  }
  destination.innerHTML =
    sContents + aText[iIndex].substring(0, iTextPos) + "_";
  if (iTextPos++ == iArrLength) {
    iTextPos = 0;
    iIndex++;
    if (iIndex != aText.length) {
      iArrLength = aText[iIndex].length;
      setTimeout("typewriter()", 500);
    }
  } else {
    setTimeout("typewriter()", iSpeed);
  }
}

typewriter();

/*********
 *  popup certificate
 ***************/
let images = document.querySelectorAll(".certificate-item img");
images.forEach((el) => {
  el.addEventListener("click", (eo) => {
    document.querySelector(".popup-image").classList.add("show");
    document.querySelector(".popup-image img").src = el.getAttribute("src");
  });
});

document.querySelector(".popup-image").addEventListener("click", (eo) => {
  if (eo.target != document.querySelector(".popup-image img")) {
    document.querySelector(".popup-image").classList.remove("show");
  }
});
