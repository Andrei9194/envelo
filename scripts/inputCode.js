export const inputCode = document.querySelector("[data-input-code]")


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