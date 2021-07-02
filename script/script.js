
new Splide('#splide', {
    type: 'fade',
    rewind: true,
    autoplay: true,
    interval: 4000,
    pauseOnHover: true,
    pagination: false,
}).mount();

new Splide('#popular-projects', {
    perPage: 4,
    rewind: true,
    pagination: false,

}).mount();

document.querySelector('.splide__arrows').classList.add('container');
html = `<div class="slide_num">
        1 / 5
        </div>`;
document.querySelector('.splide__arrows').insertAdjacentHTML('beforeend', html);
const slides = document.querySelectorAll('.splide_top');
const sliderBtns = document.querySelectorAll('.splide__arrow');

for (let i = 0; i < sliderBtns.length; i++) {
    sliderBtns[i].addEventListener('click', () => {
        setTimeout(() => {
            for (let index = 0; index < slides.length; index++) {
                if (slides[index].classList.contains('is-active')) {
                    document.querySelector('.slide_num').innerHTML = `${index + 1} / 5`;
                }

            }
        }, 100);

    })
}

document.querySelectorAll('.nav-item')[0].addEventListener('click', () => {
    document.querySelectorAll('.nav-item')[0].classList.toggle('opened');
    if (document.querySelectorAll('.nav-item')[0].classList.contains('opened')) {
        document.querySelector('.header_hidden').style = `max-height: 1000px;`;
    }
    else {
        document.querySelector('.header_hidden').style = `max-height: 0;`;
    }
})
document.querySelector('.search_btn').addEventListener('click', (e) => {
    e.preventDefault();
    document.querySelector('.input_search').removeAttribute('hidden');
    document.querySelector('.remove_search').style.display = 'inline';
})
document.querySelector('.remove_search').addEventListener('click', () => {
    document.querySelector('.input_search').setAttribute('hidden', '');
    document.querySelector('.remove_search').style.display = 'none';

})