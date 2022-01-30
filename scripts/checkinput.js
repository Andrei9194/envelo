export function setErrorFor(input, message ) {
	const formControl = input.parentElement;
	const small = formControl.querySelector('small');
	formControl.className = 'container-label error';
	small.innerText = message;
}

export function setSuccessFor(input) {
	const formControl = input.parentElement;
	formControl.className = 'container-label success';
}