import { showChooseModalArea } from "./chooseModal.js"
import { showModal } from "./form.js"

const getPackButton = document.querySelector("[data-get-button]")
const inputCode = document.querySelector("[data-input-code]")
const inputPhone = document.querySelector("[data-input-phone]")

getPackButton.addEventListener('click',(e)=>{
    showModal()
    if((inputCode.value.length === 4) && (inputPhone.value.length === 13)){
            inputCode.value = ''
            inputPhone.value = ''
       
            showChooseModalArea()   
    }
})


inputCode.addEventListener('blur', (e)=>{
    checkInputCode()
})

function checkInputCode(){
    const inputCodeValue = inputCode.value;

    if(inputCodeValue.length < 4) {
		setErrorFor(inputCode, 'Code muśi meć 4 cyfry');
	} else {
		setSuccessFor(inputCode);
	}
}

inputPhone.addEventListener('blur', (e)=>{
    checkInputPhone()
})

const checkInputPhone = ()=>{
    const inputPhoneValue = inputPhone.value; 
    if(inputPhoneValue.length < 13){
        setErrorFor(inputPhone, 'Numer muśi meć 9 cyfr');
    }
    else {
		setSuccessFor(inputPhone);
	}
}

function setErrorFor(input, message ) {
	const formControl = input.parentElement;
	const small = formControl.querySelector('small');
	formControl.className = 'container-label error';
	small.innerText = message;
}

function setSuccessFor(input) {
	const formControl = input.parentElement;
	formControl.className = 'container-label success';
}