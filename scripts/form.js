const containerForm = document.querySelector('.modal')

export const showModal =()=> containerForm.classList.remove("hidden")
export const closeModal =()=> containerForm.classList.add("hidden")