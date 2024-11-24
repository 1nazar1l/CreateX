function createHousesSlider(sliderSelector, leftButtonSelector, rightButtonSelector) {
    const slider = document.querySelector(sliderSelector);
    const slides = Array.from(slider.querySelectorAll('.slide'));
    const leftButton = document.querySelector(leftButtonSelector);
    const rightButton = document.querySelector(rightButtonSelector);

    let currentIndex = 0; // Индекс текущего слайда

    function displaySlides() {
        slider.innerHTML = ''; // Очищаем слайдер
        let slidesToShow;
        
        if (window.innerWidth < 992) {
            slidesToShow = slides.slice(currentIndex, currentIndex + 1); // 1 слайд
        } else if (window.innerWidth < 1200) {
            slidesToShow = slides.slice(currentIndex, currentIndex + 2); // 2 слайда
        } else {
            slidesToShow = slides.slice(currentIndex, currentIndex + 3); // 3 слайда
        }

        slidesToShow.forEach(slide => slider.appendChild(slide)); // Добавляем слайды обратно
    }

    function shiftSlides(direction) {
        if (window.innerWidth < 992) {
            currentIndex = (direction === 'right') ? (currentIndex + 1) % slides.length : (currentIndex - 1 + slides.length) % slides.length;
        } else if (window.innerWidth < 1200) {
            currentIndex = (direction === 'right') ? (currentIndex + 2) % slides.length : (currentIndex - 2 + slides.length) % slides.length;
        } else {
            currentIndex = (direction === 'right') ? (currentIndex + 3) % slides.length : (currentIndex - 3 + slides.length) % slides.length;
        }

        displaySlides(); // Обновляем отображение слайдов
    }

    rightButton.addEventListener('click', () => shiftSlides('right'));
    leftButton.addEventListener('click', () => shiftSlides('left'));

    // Инициализация отображения слайдов
    displaySlides();
}

function createClientsSlider(sliderSelector, leftButtonSelector, rightButtonSelector) {
    const slider = document.querySelector(sliderSelector);
    const slides = Array.from(slider.querySelectorAll('.slide'));
    const leftButton = document.querySelector(leftButtonSelector);
    const rightButton = document.querySelector(rightButtonSelector);
    console.log(slides)
    let currentIndex = 0; // Индекс текущего слайда

    function displaySlides() {
        slider.innerHTML = ''; // Очищаем слайдер
        let slidesToShow;      
        slidesToShow = slides.slice(currentIndex, currentIndex + 1); // 1 слайд
        slidesToShow.forEach(slide => slider.appendChild(slide)); // Добавляем слайды обратно
    }

    function shiftSlides(direction) {
        currentIndex = (direction === 'right') ? (currentIndex + 1) % slides.length : (currentIndex - 1 + slides.length) % slides.length;

        displaySlides(); // Обновляем отображение слайдов
    }

    rightButton.addEventListener('click', () => shiftSlides('right'));
    leftButton.addEventListener('click', () => shiftSlides('left'));

    // Инициализация отображения слайдов
    displaySlides();
}

// Использование функции для создания нескольких слайдеров
createHousesSlider('#houses_slider', '#houses_slider_left', '#houses_slider_right');
createClientsSlider('#clients_slider', '#clients_slider_left', '#clients_slider_right');