const getPackButton = document.querySelector("[data-get-button]")
const chooseModalArea = document.querySelector('.chooseModal')
const endActionButton = document.querySelector('[data-button-end-action]')
const repeatActionButton = document.querySelector('[data-button-repeat-action]')
const containerForm = document.querySelector('.modal')
const inputCode = document.querySelector("[data-input-code]")
const inputPhone = document.querySelector("[data-input-phone]")


const showModal =()=> containerForm.classList.remove("hidden")
const closeModal =()=> containerForm.classList.add("hidden")

getPackButton.addEventListener('click',(e)=>{
    showModal()
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

