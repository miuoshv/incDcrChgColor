const text = document.querySelector('.text')
const btnSizeUp = document.querySelector('.size-up')
const btnSizeDown = document.querySelector('.size-down')
const btnChgColor = document.querySelector('.color')

function textSizeUp() {
	// pobiera wszystkie css values dla text
	const textProperties = window.getComputedStyle(text)
	// pobiera wartość font-size z text
	const fontSizePx = textProperties.getPropertyValue('font-size')
	//zmienia strina w int
	let fontSizeVal = parseInt(fontSizePx)
	//przypisuje nową wartość do fontsize
	text.style.fontSize = fontSizeVal + 2 + 'px'
	console.log(fontSizeVal)
}

function textSizeDown() {
	const textProperties = window.getComputedStyle(text)
	const fontSizePx = textProperties.getPropertyValue('font-size')
	let fontSizeVal = parseInt(fontSizePx)
	text.style.fontSize = fontSizeVal - 2 + 'px'
	console.log(fontSizeVal)
}

function changeColor() {
	let randomColor = Math.floor(Math.random() * 16777215).toString(16)
	text.style.color = '#' + randomColor
}

btnSizeUp.addEventListener('click', textSizeUp)
btnSizeDown.addEventListener('click', textSizeDown)
btnChgColor.addEventListener('click', changeColor)
