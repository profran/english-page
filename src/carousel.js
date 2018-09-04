var slides = document.querySelectorAll('#slides .slide');

var currentSlide = 0;

var slideInterval = setInterval(nextSlide, 2000);

//v1

function nextSlide() {

	slides[currentSlide].className = 'slide';

	currentSlide = (currentSlide+1)%slides.length;

	slides[currentSlide].className = 'slide showing';

}

//v2

function goToSlide(n) {

	slides[currentSlide].className = 'slide';

	currentSlide = (n+slides.length)%slides.length;

	slides[currentSlide].className = 'slide showing';

}

var playing = true;

var pauseButton = document.getElementById('pause');


function pauseSlideshow() {

	pauseButton.innerHTML = 'Play';

	playing = false;

	clearInterval(slideInterval);

}
