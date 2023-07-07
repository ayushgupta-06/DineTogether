let menuBar = document.querySelector("#menu-bar");
let navBar = document.querySelector("nav");
menuBar.onclick = () => {
  menuBar.classList.toggle("fa-times");
  navBar.classList.toggle("active");
};
let searchIcon = document.querySelector("#search-icon");
let searchForm = document.querySelector("#search-form");
let closeIcon = document.querySelector("#close");
searchIcon.onclick = () => {
  searchForm.classList.toggle("active");
};
closeIcon.onclick = () => {
  searchForm.classList.remove("active");
};
function loader() {
  document.querySelector(".loader-container").classList.add("fade-out");
}
function fadeOut() {
  setInterval(loader, 4000);
}
window.onload = fadeOut;
