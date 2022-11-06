const text = document.querySelector('.text')
const btnSizeUp = document.querySelector('.size-up')
const btnSizeDown = document.querySelector('.size-down')
const btnChgColor = document.querySelector('.color')

function textSizeUp() {
	let textProperties = window.getComputedStyle(text)
	let fontSizePx = textProperties.getPropertyValue('font-size')
	let fontSizeVal = parseInt(fontSizePx)
	text.style.fontSize = fontSizeVal + 2 + 'px'
	console.log(fontSizeVal)
}

function textSizeDown() {
	let textProperties = window.getComputedStyle(text)
	let fontSizePx = textProperties.getPropertyValue('font-size')
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
