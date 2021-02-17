let hamburger = document.querySelector('.navbar-top');
let sidebar = document.querySelector('.side-bar');
let backdrop = document.querySelector('.backdrop');

hamburger.addEventListener('click',function () {
	// body...
	sidebar.classList.toggle('show');
	backdrop.classList.toggle('show');
});
