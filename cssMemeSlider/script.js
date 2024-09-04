const slides = document.querySelectorAll('.mem-image');
const controls = document.querySelectorAll('.control');
const captions = document.querySelectorAll('.caption');

let currentSlide = 0;

controls.forEach((control, index) => {
    control.addEventListener('click', () => {
        if (index === currentSlide) return;

        // Определение направления анимации
        const direction = index > currentSlide ? 'slideOutLeft' : 'slideInRight';

        // Смена активного контрола
        document.querySelector('.control.active').classList.remove('active');
        control.classList.add('active');

        // Смена слайда
        const oldMeme = document.querySelector('.mem-image.active');
        oldMeme.classList.remove('active');
        oldMeme.style.animationName = direction;
        console.log(oldMeme.style.animationName = direction);
        oldMeme.classList.add('noactive');
        slides[index].classList.add('active');
        slides[index].classList.remove('noactive');

        //Смена текста
        const oldHeader = document.querySelector('.caption.active');
        oldHeader.classList.remove('active');
        oldHeader.style.animationName = direction;
        oldHeader.classList.add('noactive');
        captions[index].classList.add('active');
        captions[index].classList.remove('noactive');

        currentSlide = index;
    });
});

