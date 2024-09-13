const slides = document.querySelectorAll('.mem-image');
const controls = document.querySelectorAll('.control-container');
const captions = document.querySelectorAll('.caption');

let currentSlide = 0;

controls.forEach((control, index) => {
    control.addEventListener('click', () => {
        if (index === currentSlide) return;

        // Определение направления анимации
        const oldSlideDirection = index > currentSlide ? 'slideOutLeft' : 'slideOutRight';
        const newSlideDirection = index > currentSlide ? 'slideIn' : 'slideInRight';

        // Смена активного контрола
        const oldControl = document.querySelector('.control-container.activate');
        oldControl.classList.remove('activate');
        oldControl.firstElementChild.classList.remove('activate');
        control.classList.add('activate');  
        control.firstElementChild.classList.add('activate');

        // Смена слайда
        const oldMeme = document.querySelector('.mem-image.active');
        oldMeme.classList.remove('active');
        oldMeme.style.animationName = oldSlideDirection;
        oldMeme.classList.add('noactive');
        slides[index].classList.add('active');
        slides[index].style.animationName = newSlideDirection;
        slides[index].classList.remove('noactive');

        //Смена текста
        const oldHeader = document.querySelector('.caption.active');
        oldHeader.classList.remove('active');
        oldHeader.style.animationName = oldSlideDirection;
        oldHeader.classList.add('noactive');
        captions[index].classList.add('active');
        captions[index].style.animationName = newSlideDirection;
        captions[index].classList.remove('noactive');

        currentSlide = index;
    });
});