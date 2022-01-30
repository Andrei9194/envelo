import { setErrorFor, setSuccessFor } from "./checkInput.js";

export const inputPhone = document.querySelector("[data-input-phone]")

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
