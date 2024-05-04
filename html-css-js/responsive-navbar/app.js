
const toggleBtn = document.querySelector(".toggle_btn");
const toogleBtnIcon = document.querySelector(".toggle_btn i");
const dropdownMenu = document.querySelector(".dropdown_menu");

toggleBtn.addEventListener("click", () => {
    dropdownMenu.classList.toggle("open");
    toogleBtnIcon.classList = dropdownMenu.classList.contains("open") ? "fa-solid fa-xmark" : "fa-solid fa-bars";
});