function menuToggle() {
	const hamburger = document.getElementById('hamburger');
	const nav = document.querySelector('.main-nav');
	const dropdowns = document.querySelectorAll('.dropdown');

	if (nav.className === 'main-nav') {
		nav.className += ' responsive';
		hamburger.src = '../images/icon-close.svg';
	} else {
		nav.className = 'main-nav';
		hamburger.src = '../images/icon-hamburger.svg';
		dropdowns.forEach((dropdown) => dropdown.classList.remove('visible'));
	}
}

function dropdownToggle()
	