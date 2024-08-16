let counter = 1;
const totalSlides = 4;

function nextSlide() {
    counter++;
    if(counter > totalSlides) {
        counter = 1;
    }
    document.getElementById('radio' + counter).checked = true;
}

function prevSlide() {
    counter--;
    if(counter < 1) {
        counter = totalSlides;
    }
    document.getElementById('radio' + counter).checked = true;
}

setInterval(() => {
    nextSlide();
}, 5000); // Change slide every 5 seconds
