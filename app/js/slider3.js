const images3 = document.querySelectorAll('.slider3 .slider-line3 .slider__block3');
const sliderLine3 = document.querySelector('.slider3 .slider-line3');
let count3 = 0;
let width3;

function init() {
    console.log('resize');
    width3 = document.querySelector('.slider3').offsetWidth;
    sliderLine3.style.width = width3 * images3.length + 'px';
    images3.forEach(item3 => {
        item3.style.width = 400 + 'px';
        item3.style.height = 'auto';
    });
    rollSlider3();
}

init();
window.addEventListener('resize', init);

document.querySelector('.slider-next3').addEventListener('click', function () {
    count3++;
    if (count3 >= images3.length) {
        count3 = 0;
    }
    rollSlider3();
});

document.querySelector('.slider-prev3').addEventListener('click', function () {
    count3--;
    if (count3 < 0) {
        count3 = images3.length - 1;
    }
    rollSlider3();
});

function rollSlider3() {
    sliderLine3.style.transform = 'translate(-' + count3 * 250 + 'px)';

}

