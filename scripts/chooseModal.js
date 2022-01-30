import { showModal, closeModal } from "./form.js"

const chooseModalArea = document.querySelector('.chooseModal')
const endActionButton = document.querySelector('[data-button-end-action]')
const repeatActionButton = document.querySelector('[data-button-repeat-action]')

export const showChooseModalArea =()=>chooseModalArea.classList.remove('hidden')
const closeChooseModalArea = () => chooseModalArea.classList.add('hidden')

endActionButton.addEventListener('click', (e)=>{
    closeChooseModalArea()
    closeModal()
})

repeatActionButton.addEventListener('click', (e)=>{
    closeChooseModalArea()
    showModal()
})