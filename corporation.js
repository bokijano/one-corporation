let devModal = document.getElementById("devModal");
let uniqModal = document.getElementById("uniqueModal");
let respModal = document.getElementById("responsiveModal");
let sModal = document.getElementById("seoModal");

function developmentModal() {
    devModal.style.display = "block";
}
function devClose() {
  devModal.style.display = "none";
}

function uniqueModal() {
  uniqModal.style.display = "block";
}
function uniqueClose() {
  uniqModal.style.display = "none";
}

function responsiveModal() {
    respModal.style.display = "block";
}
function respClose() {
    respModal.style.display = "none";
}

function seoModal() {
    sModal.style.display = "block";
}
function seoClose() {
    sModal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == devModal) {
    devModal.style.display = "none";
  } else if (event.target == uniqModal) {
    uniqModal.style.display = "none";
  } else if (event.target == respModal) {
    respModal.style.display = "none";
  } else if (event.target == sModal) {
    sModal.style.display = "none";
  }
};
