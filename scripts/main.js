import { showChooseModalArea } from "./chooseModal.js"
import { showModal } from "./form.js"
import { inputCode } from "./inputCode.js"
import {inputPhone} from './inputPhone.js'

const getPackButton = document.querySelector("[data-get-button]")

getPackButton.addEventListener('click',(e)=>{
    showModal()
    if((inputCode.value.length === 4) && (inputPhone.value.length === 13)){
            inputCode.value = ''
            inputPhone.value = ''
       
            showChooseModalArea()   
    }
})