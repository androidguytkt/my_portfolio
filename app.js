let slideIndex=1;
let left ="w";
let right = "d";
let i=slideIndex;
let slides=document.getElementsByClassName("image-sliderfade");
let slide=document.getElementsByClassName("image-slider");
slideDisplay();
checkKeyPressed(left);


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
      slide[i].style.display = "none";
	  slides[i].style.animation = "enter 1s ease-in";
      slide[i].style.animation = "enter 1s ease-in";

	}
  
	// Show the current slide based on slideIndex
	slides[slideIndex - 1].style.display = "flex";
    slide[slideIndex - 1].style.display = "flex";
	slides[slideIndex - 1].style.animation = "enter 1s ease-in";
      slide[slideIndex - 1].style.animation = "enter 1s ease-in";
  }