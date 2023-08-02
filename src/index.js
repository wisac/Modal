"use strict";

const showModalBtns = document.querySelectorAll(".open-modal");
const closeModalBtn = document.querySelector(".close-modal");
const overlay = document.querySelector(".overlay");
const hidden = document.querySelector(".hidden");
const modal = document.querySelector(".modal");

//displaying each modal by making each 'not hidden' when they're clicked
for (let btn of showModalBtns) {
    btn.addEventListener("click", function () {
        modal.classList.remove("hidden");
        overlay.classList.remove("hidden");
    });
}

// A function to addding classes to hide element
const closeModal = () => {
    modal.classList.add("hidden");
    overlay.classList.add("hidden");
};

// when close button or overlay is clicked on
closeModalBtn.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

//listen and handle keydown event on the entire document
document.addEventListener("keydown", function (event) {
    if (event.key === "Escape" && !modal.classList.contains("hidden")) {
        closeModal();
    }
});
