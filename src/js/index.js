const hoverContainer = document.getElementById('hover-container')
const hoverImage = document.getElementById('hover-imagen')

hoverContainer.addEventListener('mouseenter', () => {
	hoverImage.style.display = 'block'
	hoverImage.style.opacity = '1'
})

hoverContainer.addEventListener('mouseleave', () => {
	hoverImage.style.opacity = '0'
	setTimeout(() => {
		hoverImage.style.display = 'none'
	}, 300)
})

hoverContainer.addEventListener('mousemove', (event) => {
	const x = event.clientX + 250
	const y = event.clientY + -320

	hoverImage.style.left = `${x}px`
	hoverImage.style.top = `${y}px`
})
