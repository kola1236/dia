const images2 = document.querySelectorAll('.slider2 .slider-line2 .slider__block2');
const sliderLine2 = document.querySelector('.slider2 .slider-line2');
let count2 = 0;
let width2;

function init() {
    console.log('resize');
    width2 = document.querySelector('.slider2').offsetWidth;
    sliderLine2.style.width = width2 * images2.length + 'px';
    images2.forEach(item2 => {
        item2.style.width = width2 + 'px';
        item2.style.height = 'auto';
    });
    rollSlider2();
}

init();
window.addEventListener('resize', init);

document.querySelector('.slider-next2').addEventListener('click', function () {
    count2++;
    if (count2 >= images2.length) {
        count2 = 0;
    }
    rollSlider2();
});

document.querySelector('.slider-prev2').addEventListener('click', function () {
    count2--;
    if (count2 < 0) {
        count2 = images2.length - 1;
    }
    rollSlider2();
});

function rollSlider2() {
    sliderLine2.style.transform = 'translate(-' + count2 * width2 + 'px)';

}

