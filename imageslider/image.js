/*let slideIndex = 0;
showSlides(); // call showslide method

function showSlides() {
	let i;

	// get the array of divs' with classname image-sliderfade
	let slides = document.getElementsByClassName("image-sliderfade");

	// get the array of divs' with classname dot
	let dots = document.getElementsByClassName("dot");

	for (i = 0; i < 4; i++) {
		// initially set the display to
		// none for every image.
		slides[i].style.display = "none";
	}

	// increase by 1, Global variable
	slideIndex++;

	// check for boundary
	if (slideIndex > slides.length) {
		slideIndex = 1;
	}

	for (i = 0; i < dots.length; i++) {
		dots[i].className = dots[i].className.replace(" active", "");
	}

	slides[slideIndex - 1].style.display = "block";
	dots[slideIndex - 1].className += " active";

	// Change image every 2 seconds
	setTimeout(showSlides, 200);
}
*/

let slideIndex=1;
let i=slideIndex;
let slides=document.getElementsByClassName("image-sliderfade");
slideDisplay();


function moveLeft() {
	slideIndex = slideIndex === 1 ? 4 : slideIndex - 1; // Wrap around
	console.log(slideIndex);
	slideDisplay(); // Update the displayed slide
  }
  function moveRight() {
	slideIndex = slideIndex === 4 ? 1 : slideIndex + 1; // Wrap around
	console.log(slideIndex);
	slideDisplay(); // Update the displayed slide
  }
  

function slideDisplay() {
	// Hide all slides initially
	for (let i = 0; i < slides.length; i++) {
	  slides[i].style.display = "none";
	}
  
	// Show the current slide based on slideIndex
	slides[slideIndex - 1].style.display = "block";
  }
  