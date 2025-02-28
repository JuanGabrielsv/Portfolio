$(function () {
	let contador = 0

	// Verificar si la cookie ya está guardada en sessionStorage
	if (sessionStorage.getItem('cookie')) {
		$('#bloqueCookie').hide() // Si la cookie ya fue aceptada, ocultar el bloque
	} else {
		$('#bloqueCookie').fadeIn(1000) // Mostrar el bloque con fadeIn si no fue aceptado
	}

	// Manejo del clic en el botón
	$('#botonAceptar').on('mousedown', function () {
		contador++
		$('main').addClass('temblor')
		$('header').addClass('temblor')
	})

	// Cuando se suelta el botón (mouseup)
	$('#botonAceptar').on('mouseup', function () {
		$('main').removeClass('temblor')
		$('header').removeClass('temblor')

		// Si el contador llega a 10, ocultar el bloque de cookies
		if (contador == 10) {
			$('#bloqueCookie').fadeOut(1000, function () {
				// Una vez que el fadeOut ha terminado, guardar en sessionStorage
				sessionStorage.setItem('cookie', true)
			})
		}
	})

	// Cuando el ratón sale del área del botón (mouseleave)
	$('#botonAceptar').on('mouseleave', function () {
		$('main').removeClass('temblor')
		$('header').removeClass('temblor')

		// Si el contador llega a 10, ocultar el bloque de cookies
		if (contador == 10) {
			$('#bloqueCookie').fadeOut(1000, function () {
				// Una vez que el fadeOut ha terminado, guardar en sessionStorage
				sessionStorage.setItem('cookie', true)
			})
		}
	})
})
