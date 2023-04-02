let floaterEl = document.getElementById("floater");
let shareBtn = document.getElementById("share-btn");
let shareBtnIcon = document.getElementById("share-btn-icon");

shareBtn.addEventListener("click", showPopUp);

function showPopUp() {
  floaterEl.classList.toggle("popUp-active");
  shareBtn.classList.toggle("active");
  shareBtnIcon.classList.toggle("icon-active");
}
