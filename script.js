
// DOM ELEMENTS
const modal = document.querySelector('.modal');
const overlay = document.querySelector(".overlay")
const btnCloseModal = document.querySelector(".close-modal")
const btnsOpenModal = document.querySelectorAll(".show-modal")


const openModal = () => {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
}

const closeModal = () => {
   modal.className = 'hidden';
   overlay.classList.add('hidden');
}

btnsOpenModal.forEach((i) => {
    i.addEventListener("click", openModal)
})

btnCloseModal.addEventListener("click", closeModal)

overlay.addEventListener("click", closeModal)