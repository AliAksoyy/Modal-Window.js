
// DOM ELEMENTS
const modal = document.querySelector('.modal');
const overlay = document.querySelector("overlay")
const btnCloseModal = document.querySelector(".close-modal")
const btnsOpenModal = document.querySelectorAll(".show-modal")


btnsOpenModal.forEach((i) => {
    i.addEventListener("click", function() {
        modal.classList.remove("hidden")
        overlay.classList.remove("hidden")
    })
})

btnCloseModal.addEventListener("click", function() {
    modal.className = "hidden"
    overlay.classList.add("hidden")
})
